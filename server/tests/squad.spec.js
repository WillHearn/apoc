/* eslint-disable */

import mocha from 'mocha';
import app from '../server';
import chai from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import Squad from '../models/squad';

const expect = chai.expect;

function connectDB(done) {
  if (mongoose.connection.name !== 'apoc-test') {
    return done();
  }

  mongoose.connect((process.env.MONGO_URL || 'mongodb://localhost:27017/apoc-test'), function (err) {
    if (err) return done(err);
    done();
  });
}

function dropDB(done) {
  if (mongoose.connection.name !== 'apoc-test') {
    return done();
  }

  mongoose.connection.db.dropDatabase(function (err) {
    mongoose.connection.close(done);
  });
}

describe('GET /api/squads', function () {

  beforeEach('connect and add two squads entries', function (done) {

    connectDB(function () {
      var squad1 = new Squad({name: 'Alpha'});
      var squad2 = new Squad({name: 'Bravo'});

      Squad.create([squad1, squad2], function (err, saved) {
        done();
      });
    });
  });

  afterEach(function (done) {
    dropDB(done);
  });

  it('Should correctly give number of Squads', function (done) {

    request(app)
      .get('/api/squads')
      .set('Accept', 'application/json')
      .end(function (err, res) {
        Squad.find().exec(function (err, squads) {
          expect(squads.length).to.equal(res.body.squads.length);
          expect(squads.length).to.equal(2);
          done();
        });
      });
  });
});

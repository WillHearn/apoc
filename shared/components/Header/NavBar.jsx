var React = require('react');
var ReactDOM = require('react-dom');

var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var NavDropdown = require('react-bootstrap/lib/NavDropdown');
var MenuItem = require('react-bootstrap/lib/MenuItem');

var NavBar = React.createClass({
  render: function() {
    return (
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Apoc</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Squads</NavItem>
              <NavItem eventKey={2} href="#">Team Members</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
});

module.exports = NavBar;

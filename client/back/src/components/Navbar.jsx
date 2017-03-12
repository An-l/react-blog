import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { dropdown } from '../utils/bootstrap/dropdown';

class NavbarC extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar light>
            <NavbarBrand href="/">Admin</NavbarBrand>
            <Nav className="nav pull-right" navbar>
                <NavItem>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}  size="sm">
                    <DropdownToggle caret onClick={this.toggle} color='primary'>
                      An-l
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>log in</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>log out</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavbarC;
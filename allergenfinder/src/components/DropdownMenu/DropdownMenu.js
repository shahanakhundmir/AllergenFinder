import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import "./DropdownMenu.css";

function DropdownMenu() {
    return (
        <DropdownButton id="dropdown-basic-button" title="Select Restaurant">
        <Dropdown.Item href="#/action-1">Restaurant1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Restaurant2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Restaurant3</Dropdown.Item>
      </DropdownButton>
      
      )
}

export default DropdownMenu;
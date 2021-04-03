import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownMenu() {
    return (
    <section> 
        <div>
            <DropdownButton id="dropdown-basic-button" title="Select Restaurant">
                <Dropdown.Item >Restaurant 1</Dropdown.Item>
                <Dropdown.Item >Restaurant 2</Dropdown.Item>
                 <Dropdown.Item >Restaurant 3</Dropdown.Item>
            </DropdownButton>
        </div>
        
    </section>)
}

export default DropdownMenu;
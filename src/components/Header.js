import { useState } from 'react';
import {Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, 
        UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,} from 'reactstrap';
import { NavLink } from 'react-router-dom';
//import UserLoginForm from '../features/user/UserLoginForm';

const Header = ()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <Navbar dark id='header' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>                
                <h1 className='mt-1'>HA's REACT Journey</h1>
            </NavbarBrand>
            <NavbarToggler onClick={()=>setMenuOpen(!menuOpen)} />
            <Collapse navbar isOpen={menuOpen}>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>Home</NavLink>
                    </NavItem>                   
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret href='/games'>Games</DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem disabled href='/games'>Interactive Elements</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href='/games/simplebuttons'>SimpleButtons</DropdownItem>
                                <DropdownItem href='/games/dicerollers'>DiceRollers</DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>                       
                    <NavItem>
                        <NavLink className='nav-link' to='/apps'>Apps</NavLink>
                    </NavItem>                
                </Nav>
                
            </Collapse>
        </Navbar>
    );
};

export default Header;

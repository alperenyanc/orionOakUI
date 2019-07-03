import React, { Component } from 'react'
import { Navbar, Form, Button, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import * as mockData from '../../dataCategory.json'

export default class NavbarCustom extends Component {
    render() {
        const categoryList = mockData.categoryList;
        return (

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">orion</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    { categoryList.map((item, index) =>
                         <Nav.Link href={`/category/${item.categoryId}`}>{item.categoryName}</Nav.Link>
                    ) }
                       
                    </Nav>
                    <Nav>
                        <Nav.Link href="/cart"><i className="fa fa-shopping-cart"></i>Cart</Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>



            // <Navbar bg="primary" variant="dark">
            //     <Navbar.Brand href="#home">Orion</Navbar.Brand>
            //     <Nav className="mr-auto">

            //         { categoryList.map((item, index) =>
            //             <Nav.Link href="#home">{item.categoryName}</Nav.Link>
            //         ) }

            //     </Nav>
            //     <Form inline>
            //         <FormControl type="text" value={this.props.value} onChange={this.props.onChange} placeholder="Search" className="mr-sm-2" />
            //         <Button variant="outline-light">Search</Button>
            //     </Form>
            // </Navbar>

        )
    }
}

import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
import './style.css'

export default class ProductCard extends Component {
    render() {
        return (
            // <Card className="col-md-4" bg="dark" text="white" style={{ width: '18rem' }}>
            //     <Card.Img variant="top" src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" style={{width:"250px",height:"250px"}} />
            //     <Card.Body>
            //         <Card.Title href="/test">{this.props.title}</Card.Title>
            //         <Card.Text> {this.props.text} </Card.Text>
            //         <Button variant="light">Add to Card</Button>
            //     </Card.Body>
            // </Card>
            <div className="col-md-3">
        		<div className="menu-entry">
                        <img className="img" src={this.props.imgUrl}></img>
    					<div className="text text-center pt-4">
    						<h3><a href="/">{this.props.title}</a></h3>
    						<p>{this.props.text}</p>
    						<p className="price"><span>${this.props.price}</span></p>
    						<p><a href="/" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
    					</div>
    				</div>
        	</div>
        )
    }
}

import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import './RestaurantPreview.css'
import {Button} from 'react-bootstrap'

const RestaurantPreview = (props) => {
  // console.log(props);

  // inject a random placeholder image from the Lorem Picsum API
  // the mockaroo API we're using doesn't include this
  // ultimately, this data would come from the API
  const imgSrc = `https://picsum.photos/100?id=${props.details.id}` // tack on this animal's id to the query

  return (
    <Container className="box">
        <div className="imageBox">
          <Image className="image" src={imgSrc} rounded/>
        </div>
        <div className="word">
          <Row>
            <Col xs={5}>
              
            <Link to={`/retaurant/${props.details.id}`}>
              <h3 className="name">{props.details.name}</h3> 
            </Link>
            </Col>
            <Col>
            <Button className="button">Collect</Button>
            </Col>
          </Row>
          <p className="ingredients">{props.details.city}, {props.details.state}
          </p>
          <p className="ingredients">{props.details.dishnum} dishes in total
          </p>
        </div>
    </Container>
  )
}

// make this function available to be imported into another module
export default RestaurantPreview
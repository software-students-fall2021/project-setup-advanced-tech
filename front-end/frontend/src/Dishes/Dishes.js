import React from 'react'
import { Container } from 'react-bootstrap'
import { Jumbotron } from 'reactstrap';
import {Image} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import './Dishes.css'
import {Button} from 'react-bootstrap'
//import {Grid} from 'react-bootstrap'

const Dishes = (props) => {
  // console.log(props);

  // inject a random placeholder image from the Lorem Picsum API
  // the mockaroo API we're using doesn't include this
  // ultimately, this data would come from the API
  const imgSrc = `https://picsum.photos/100?id=${props.details.id}` // tack on this animal's id to the query

  return (
    <>
      <div className="box">
        <div className="imageBox">
          <Image className="image" src={imgSrc} rounded/>
        </div>
        <div className="word">
          <Row>
            <Col xs={5}>
              <h3 className="name">{props.details.name}</h3>
            </Col>
            <Col>
            <Button className="button">{props.details.collection}Collect</Button>
            </Col>
          </Row>
          <p className="ingredients">ingredients: {props.details.ingredients}
          </p>
        </div>
      </div>
    </>
  )
}

// make this function available to be imported into another module
export default Dishes
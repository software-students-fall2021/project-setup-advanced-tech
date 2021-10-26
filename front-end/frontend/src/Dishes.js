import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Jumbotron } from 'reactstrap';
import {Image} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import './Dishes.css'
import {Button} from 'react-bootstrap'

const Dishes = (props) => {
  // console.log(props);

  // inject a random placeholder image from the Lorem Picsum API
  // the mockaroo API we're using doesn't include this
  // ultimately, this data would come from the API
  const imgSrc = `https://picsum.photos/100?id=${props.details.id}` // tack on this animal's id to the query

  return (
    /*<article className="Dishes">
      <img alt={props.details.title} src={imgSrc} />
      <h2>{props.details.title}</h2>
    </article>*/
    <Container className="restaurant">
    <Jumbotron className="box">
      <Col className="image" xs={3} md={3}>
        <Image src={imgSrc} thumbnail/>
      </Col>
      <Col className="word" xs={3} md={3}>
        <Row>
          <Col xs={5}>
            <h3>{props.details.name}</h3>
          </Col>
          <Col>
          <Button><span>{props.details.collection}</span><span>Collect</span></Button>
          </Col>
        </Row>
        <Row>
          <p>{props.details.description}</p>
        </Row>
      </Col>
    </Jumbotron>
    </Container>
  )
}

// make this function available to be imported into another module
export default Dishes
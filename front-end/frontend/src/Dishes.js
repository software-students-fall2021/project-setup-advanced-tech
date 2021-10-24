import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {Jumbotron} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import './Dishes.css'

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
    </Jumbotron>
    </Container>
  )
}

// make this function available to be imported into another module
export default Dishes
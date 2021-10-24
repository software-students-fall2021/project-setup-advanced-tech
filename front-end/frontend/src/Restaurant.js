import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import {Jumbotron} from 'react-bootstrap'
// import logo from './logo.svg';
// import './AnimalsList.css'
// import AnimalPreview from './AnimalPreview'


const Restaurant = (props) => {
  // start a state varaible with a blank array
  const [data, setData] = useState([])

  // the following side-effect will be called once upon initial render
  useEffect(() => {
    // fetch some mock data about animals for sale
    console.log('fetching 10 random animals...')
    axios('https://my.api.mockaroo.com/restaurant.json?key=a77dd4e0')
      .then((response) => {
        // extract the data from the server response
        setData(response.data)
      })
      .catch((err) => {
        // Mockaroo, which we're using for our Mock API, only allows 200 requests per day on the free plan
        console.log(`Sorry, buster.  No more requests allowed today!`)
        console.error(err) // the server returned an error... probably too many requests... until we pay!

        // make some backup fake data
        const backupData = [
          {
            id: 1,
            name: 'AAAA',
            collection: 5,
            city: 'aaaa',
            state: '11111',
            start: '10:35 PM',
            end: '10:37 PM',
            address:
              '555555',
            image1: 'asd',
            image2: 'ads',
            image3: 'dasd',
            dishnum: 20,
          },
          {
            id: 1,
            name: 'AAAA',
            collection: 5,
            city: 'aaaa',
            state: '11111',
            start: '10:35 PM',
            end: '10:37 PM',
            address:
              '555555',
            image1: 'asd',
            image2: 'ads',
            image3: 'dasd',
            dishnum: 20,
          },
        ]

        setData(backupData)
      })
  }, [props.id]) // only run it once!

  return (
    <Container className="restaurant">
    <Button>Back</Button>
    <Jumbotron></Jumbotron>
    </Container>
    /*<div className="AnimalsList">
      <h1>Animals For Sale</h1>
      <section className="main-content">
        <img
          alt="animals for sale"
          src="https://picsum.photos/200?page=animals"
        />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant
          winter purslane fennel azuki bean earthnut pea sierra leone bologi
          leek soko chicory celtuce parsley jícama salsify.
        </p>
      </section>
      <section className="animals">
        {data.map((item) => (
          <AnimalPreview key={item.id} details={item} />
        ))}
      </section>
    </div>
    <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Jumbotron>*/
  )
}

export default AnimalsList
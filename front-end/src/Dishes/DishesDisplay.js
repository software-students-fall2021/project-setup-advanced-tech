import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import logo from './logo.svg';
import './DishesDisplay.css'
import Dishes from './Dishes'

const DishesDisplay = (props) => {
  // start a state varaible with a blank array
  const [data, setData] = useState([])

  // the following side-effect will be called once upon initial render
  useEffect(() => {
    // fetch some mock data about animals for sale
    console.log('fetching 10 random dishes...')
    axios(`https://my.api.mockaroo.com/dishes.json?key=a77dd4e0`)
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
            "id":1,
            "name":"Ahmed",
            "ingredients":"peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, ",
            "collections":78,
            "image":"http://dummyimage.com/190x100.png/ff4444/ffffff"
          },
          {
            "id":2,
            "name":"Mallorie",
            "ingredients":"peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, ",
            "collections":84,
            "image":"http://dummyimage.com/173x100.png/ff4444/ffffff"},
            {
              "id":1,
              "name":"Ahmed",
              "ingredients":"peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, ",
              "collections":78,
              "image":"http://dummyimage.com/190x100.png/ff4444/ffffff"
            },
            {
              "id":2,
              "name":"Mallorie",
              "ingredients":"peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, peanuts, ",
              "collections":84,
              "image":"http://dummyimage.com/173x100.png/ff4444/ffffff"},
        ]

        setData(backupData)
      })
  }, [props.id])
  console.log(data)
  return (
    <div className="DishesDisplay">
      <section class="dishes">
        {data.map((item) => (
          <Dishes className="box" key={item.id} details={item} />
        ))}
      </section>
    </div>
  )
}

export default DishesDisplay

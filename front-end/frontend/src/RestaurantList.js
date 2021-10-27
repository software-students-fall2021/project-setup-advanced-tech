import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import logo from './logo.svg';
import './RestaurantList.css'
import RestaurantPreview from './RestaurantPreview'

const RestaurantList = (props) => {
  // start a state varaible with a blank array
  const [data, setData] = useState([])

  // the following side-effect will be called once upon initial render
  /*useEffect(() => {
    // fetch some mock data about animals for sale
    //console.log('fetching 10 random animals...')
    axios('https://my.api.mockaroo.com/restaurant.json?key=a77dd4e0')
      .then((response) => {
        // extract the data from the server response
        //console.log(data)
        setData(response.data)
      })
      .catch((err) => {
        // Mockaroo, which we're using for our Mock API, only allows 200 requests per day on the free plan
        console.log(`Sorry, buster.  No more requests allowed today!`)
        //console.error(err) // the server returned an error... probably too many requests... until we pay!

        // make some backup fake data
        const backupData = [
          {
            "id":1,
            "name":"Leexo",
            "collection":51,
            "city":"Camden",
            "state":"New Jersey",
            "start":"1:44 AM",
            "end":"11:02 AM",
            "address":"095 Mockingbird Plaza",
            "telephone":"856-666-7448",
            "image1":"https://constantcontact.com/diam/in/magna/bibendum/imperdiet/nullam.xml?ante=tincidunt&vivamus=nulla&tortor=mollis&duis=molestie&mattis=lorem&egestas=quisque&metus=ut&aenean=erat&fermentum=curabitur&donec=gravida&ut=nisi&mauris=at&eget=nibh&massa=in&tempor=hac&convallis=habitasse&nulla=platea&neque=dictumst&libero=aliquam&convallis=augue&eget=quam&eleifend=sollicitudin&luctus=vitae&ultricies=consectetuer&eu=eget&nibh=rutrum&quisque=at&id=lorem&justo=integer&sit=tincidunt&amet=ante&sapien=vel&dignissim=ipsum&vestibulum=praesent&vestibulum=blandit&ante=lacinia&ipsum=erat&primis=vestibulum&in=sed&faucibus=magna&orci=at&luctus=nunc&et=commodo&ultrices=placerat&posuere=praesent&cubilia=blandit&curae=nam&nulla=nulla&dapibus=integer&dolor=pede&vel=justo&est=lacinia&donec=eget&odio=tincidunt&justo=eget&sollicitudin=tempus&ut=vel&suscipit=pede&a=morbi&feugiat=porttitor&et=lorem&eros=id&vestibulum=ligula&ac=suspendisse&est=ornare&lacinia=consequat&nisi=lectus&venenatis=in&tristique=est&fusce=risus&congue=auctor&diam=sed&id=tristique&ornare=in&imperdiet=tempus&sapien=sit&urna=amet&pretium=sem&nisl=fusce&ut=consequat&volutpat=nulla&sapien=nisl&arcu=nunc&sed=nisl&augue=duis&aliquam=bibendum",
            "image2":"https://desdev.cn/tempus/vivamus/in.html?posuere=cras&metus=mi&vitae=pede&ipsum=malesuada&aliquam=in&non=imperdiet&mauris=et&morbi=commodo&non=vulputate&lectus=justo&aliquam=in&sit=blandit&amet=ultrices&diam=enim&in=lorem&magna=ipsum&bibendum=dolor&imperdiet=sit&nullam=amet&orci=consectetuer&pede=adipiscing&venenatis=elit&non=proin&sodales=interdum&sed=mauris&tincidunt=non&eu=ligula&felis=pellentesque&fusce=ultrices&posuere=phasellus&felis=id&sed=sapien&lacus=in&morbi=sapien&sem=iaculis&mauris=congue&laoreet=vivamus&ut=metus&rhoncus=arcu&aliquet=adipiscing&pulvinar=molestie&sed=hendrerit&nisl=at&nunc=vulputate&rhoncus=vitae&dui=nisl&vel=aenean&sem=lectus&sed=pellentesque&sagittis=eget&nam=nunc&congue=donec&risus=quis&semper=orci&porta=eget&volutpat=orci&quam=vehicula&pede=condimentum&lobortis=curabitur&ligula=in&sit=libero&amet=ut&eleifend=massa&pede=volutpat&libero=convallis&quis=morbi",
            "image3":"https://example.com/quis/orci/nullam.jsp?ultrices=quam&enim=pharetra&lorem=magna&ipsum=ac&dolor=consequat&sit=metus&amet=sapien&consectetuer=ut&adipiscing=nunc&elit=vestibulum&proin=ante&interdum=ipsum&mauris=primis&non=in&ligula=faucibus&pellentesque=orci&ultrices=luctus&phasellus=et&id=ultrices&sapien=posuere&in=cubilia&sapien=curae&iaculis=mauris&congue=viverra&vivamus=diam",
            "dishnum":89
          },
        ]

        setData(backupData)
      })
  }, []) // only run it once!
  /*props.order, props.state, props.city*/
  const backupData = [
    {
      "id":1,
      "name":"Leexo",
      "collection":51,
      "city":"Camden",
      "state":"New Jersey",
      "start":"1:44 AM",
      "end":"11:02 AM",
      "address":"095 Mockingbird Plaza",
      "telephone":"856-666-7448",
      "image1":"https://constantcontact.com/diam/in/magna/bibendum/imperdiet/nullam.xml?ante=tincidunt&vivamus=nulla&tortor=mollis&duis=molestie&mattis=lorem&egestas=quisque&metus=ut&aenean=erat&fermentum=curabitur&donec=gravida&ut=nisi&mauris=at&eget=nibh&massa=in&tempor=hac&convallis=habitasse&nulla=platea&neque=dictumst&libero=aliquam&convallis=augue&eget=quam&eleifend=sollicitudin&luctus=vitae&ultricies=consectetuer&eu=eget&nibh=rutrum&quisque=at&id=lorem&justo=integer&sit=tincidunt&amet=ante&sapien=vel&dignissim=ipsum&vestibulum=praesent&vestibulum=blandit&ante=lacinia&ipsum=erat&primis=vestibulum&in=sed&faucibus=magna&orci=at&luctus=nunc&et=commodo&ultrices=placerat&posuere=praesent&cubilia=blandit&curae=nam&nulla=nulla&dapibus=integer&dolor=pede&vel=justo&est=lacinia&donec=eget&odio=tincidunt&justo=eget&sollicitudin=tempus&ut=vel&suscipit=pede&a=morbi&feugiat=porttitor&et=lorem&eros=id&vestibulum=ligula&ac=suspendisse&est=ornare&lacinia=consequat&nisi=lectus&venenatis=in&tristique=est&fusce=risus&congue=auctor&diam=sed&id=tristique&ornare=in&imperdiet=tempus&sapien=sit&urna=amet&pretium=sem&nisl=fusce&ut=consequat&volutpat=nulla&sapien=nisl&arcu=nunc&sed=nisl&augue=duis&aliquam=bibendum",
      "image2":"https://desdev.cn/tempus/vivamus/in.html?posuere=cras&metus=mi&vitae=pede&ipsum=malesuada&aliquam=in&non=imperdiet&mauris=et&morbi=commodo&non=vulputate&lectus=justo&aliquam=in&sit=blandit&amet=ultrices&diam=enim&in=lorem&magna=ipsum&bibendum=dolor&imperdiet=sit&nullam=amet&orci=consectetuer&pede=adipiscing&venenatis=elit&non=proin&sodales=interdum&sed=mauris&tincidunt=non&eu=ligula&felis=pellentesque&fusce=ultrices&posuere=phasellus&felis=id&sed=sapien&lacus=in&morbi=sapien&sem=iaculis&mauris=congue&laoreet=vivamus&ut=metus&rhoncus=arcu&aliquet=adipiscing&pulvinar=molestie&sed=hendrerit&nisl=at&nunc=vulputate&rhoncus=vitae&dui=nisl&vel=aenean&sem=lectus&sed=pellentesque&sagittis=eget&nam=nunc&congue=donec&risus=quis&semper=orci&porta=eget&volutpat=orci&quam=vehicula&pede=condimentum&lobortis=curabitur&ligula=in&sit=libero&amet=ut&eleifend=massa&pede=volutpat&libero=convallis&quis=morbi",
      "image3":"https://example.com/quis/orci/nullam.jsp?ultrices=quam&enim=pharetra&lorem=magna&ipsum=ac&dolor=consequat&sit=metus&amet=sapien&consectetuer=ut&adipiscing=nunc&elit=vestibulum&proin=ante&interdum=ipsum&mauris=primis&non=in&ligula=faucibus&pellentesque=orci&ultrices=luctus&phasellus=et&id=ultrices&sapien=posuere&in=cubilia&sapien=curae&iaculis=mauris&congue=viverra&vivamus=diam",
      "dishnum":89
    },
  ]
  useEffect(()=>{
    setData(backupData)
  },[])
  console.log(data)
  return (
    <div className="RestauratnList">
      <section className="restaurants">
        {data.map((item) => (
          <RestaurantPreview key={item.id} details={item} />
        ))}
      </section>
    </div>
  )
}

export default RestaurantList
import React, { useState, useEffect } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
// import logo from './logo.svg';
import './Search.css'
import RestaurantList from './RestaurantList'
import { Container } from 'react-bootstrap'
import { Jumbotron } from 'reactstrap';
import {Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'

const Search = (props) => {

  return (
    <Container className="search">
      <Jumbotron className="search">
        <form>
          <label>
            <input type="text" name="name" />
          </label>
            <input type="submit" value="Submit" />
          </form>
      </Jumbotron>
      <Jumbotron className="filter">
        <Col>
          <DropdownButton className="state" title="state">
            <Dropdown.Item href="#/action-1">NY</Dropdown.Item>
            <Dropdown.Item href="#/action-2">NJ</Dropdown.Item>
            <Dropdown.Item href="#/action-3">CA</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          <DropdownButton className="city" title="city">
            <Dropdown.Item href="#/action-1">New York</Dropdown.Item>
            <Dropdown.Item href="#/action-2">SFO</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Boston</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          <DropdownButton className="sort" title="sort">
            <Dropdown.Item href="#/action-1">Sort by Collection</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Sort by A-Z</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col>
          <Button>Apply Filter</Button>
        </Col>
      </Jumbotron>
      <RestaurantList order="1" state="NY" city="New York"></RestaurantList>
    </Container>
  )
}

// make this function available to be imported into another module
export default Search
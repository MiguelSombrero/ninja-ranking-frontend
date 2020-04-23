import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NinjaBanner from './NinjaBanner'

const About = () =>
  <>
    <NinjaBanner
      text='Ninja Ranking app'
    />
    <Row>
      <Col className='text-center form'>
        <p>
          Ninja Ranking is a web application for keeping track of
          <a href='https://en.wikipedia.org/wiki/American_Ninja_Warrior'> Ninja Warrior</a> tournaments.
        </p>

        <p>
          You can create Ninja Warrior tournament, add players and obstacles to it,
          and compete with each other. This app keeps track of players performances
          and shows some data etc.
        </p>
      </Col>
    </Row>
  </>

export default About
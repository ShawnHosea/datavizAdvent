import React, { Component } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero';
import CardList from '../components/CardList';
import DripEmail from '../components/DripEmail'


export default class index extends Component {
  render() {
    return (
      <Layout>
        <Hero/>
        <DripEmail/>
        <CardList/>
      </Layout>
    )
  }
}

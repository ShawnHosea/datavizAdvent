import React, { Component } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero';
import CardList from '../components/CardList';
import DripEmail from '../components/DripEmail'
import Header from '../components/Header';
import Footer from '../components/Footer';


export default class index extends Component {
  render() {
    return (
      <Layout>
        <Header/>
        <Hero/>
        <DripEmail/>
        <CardList/>
        <Footer/>
      </Layout>
    )
  }
}

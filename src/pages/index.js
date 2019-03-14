import React, { Fragment } from 'react'

import DefaultLayout from '../components/layout'

import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Teams from '../components/teams'
import SomeContent from '../components/somecontent'
import Persons from '../components/persons'
import Location from '../components/location'
import Sponsors from '../components/sponsors'

export default () => {
  return (
    <DefaultLayout>
      <Hero />
      <Teams />
      <SomeContent />
      <Persons />
      <Location />
      <Sponsors />
    </DefaultLayout>
  )
}

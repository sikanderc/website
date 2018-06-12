import React from 'react'
import { PageTitle, Page } from '../components'
import { Intro, Brief, GetStarted } from '../components/Nest'

const Nest = () => (
  <Page path="/nest">
    <PageTitle
      title="Nest"
      subtitle="A grants program to support the development of the ecosystem"
    />
    <Intro />
    <Brief />
    <GetStarted />
  </Page>
)

export default Nest

import React from 'react'
import styled, { css } from 'styled-components'
import { IllustratedSection, Section } from '@aragon/web'
import { Text, themeDark, breakpoint } from '@aragon/ui'
import OverlapBackground from '../../OverlapBackground/OverlapBackground'

import nest from './assets/nest.png'

const { Illustration, Subtitle, Emphasis, Content } = IllustratedSection
const medium = css => breakpoint('medium', css)

const Main = styled(Section)`
margin: 0 auto;
text-align: center;
h1 {
  padding: 30px 0 0;
  font-size: 15px;
  text-transform: uppercase;
  color: ${themeDark.accent};
}
h2 {
  margin: 20px 0;
  color: ${themeDark.textPrimary};
  font-size: 26px;
}
${medium(css`
  max-width: none;
  h1 {
    padding-bottom: 40px;
    font-size: 18px;
  }
`)};
  img {
    max-width: 100%
  }
`

const Intro = () => (
  <OverlapBackground>
    <Main>
      <h1>Aragon Nest is brought to you by your friends at Aragon and <a href="https://twitter.com/placeholdervc" target="_blank" rel="noopener noreferrer">Placeholder</a>.</h1>
      <img src={nest} alt="" />
      <h2>Attracting talent to research and build the necessary tooling for developing solutions around Aragon and Ethereum.</h2>
    </Main>
  </OverlapBackground>
)

export default Intro

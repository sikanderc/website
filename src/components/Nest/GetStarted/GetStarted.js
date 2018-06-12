import React from 'react'
import styled from 'styled-components'
import { breakpoint, Button, theme } from '@aragon/ui'
import { Section, IllustratedSection } from '@aragon/web'

import { SectionTitle, Anchor } from '../../'

const {Emphasis} = IllustratedSection
const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const Main = styled(Section)`
  padding: 50px 15px;
  background: #fcfcff;
  .title {
    margin-top: 10px;
    margin-bottom: 25px;
    font-size: 25px;
    color: ${theme.textPrimary};
    text-align: center;
    padding: 0 10%;
  }
  img {
    max-width: calc(100% - 30px);
  }
  p {
    font-size: 17px;
    margin-bottom: 1em;
    color: ${theme.textSecondary};
  }
  .cta {
    text-align: center;
    margin-top: 50px;
  }
  .steps {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 50px 0;
  }

  ${medium(`
    padding-top: 120px;
    padding-bottom: 120px;
    .title {
      margin: 0 10%;
    }
    p {
      font-size: 18px;
    }
    .columns {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      margin: 50px 0;
    }
    .image img {
      max-width: 75%;
    }
    .cta {
      margin-top: 50px;
    }
    .cta a {
      margin: 0 0.5rem;
    }
  `)};

  ${large(`
    .title {
      font-size: 37px;
    }
  `)};
`

const GetStarted = () => (
  <Main>
    <div>
      <SectionTitle title="Getting started" />
      <h1 className="title">So, you've come up with an idea...</h1>
      <h1 className="title">Easy as 1-2-3</h1>
      <div className="steps">
        <div>
          <h2>Step 1</h2>
          <p>Make sure the <a href="https://github.com/aragon/nest/issues">proposals for grants page</a> doesn’t have an existing proposal for something similar to your idea or project. If there is a proposal close to your idea or project, join the discussion of that proposal to see if your idea or project could be integrated into the existing one, or if you should create a new proposal.</p>
        </div>
        <div>
          <h2>Step 2</h2>
          <p>If nothing similar exists, create <a href="https://github.com/aragon/nest/issues/new">a new proposal</a> at the <a href="https://github.com/aragon/nest/">Nest Repository</a>. Fill it out in detail following the <a href="https://wiki.aragon.one/nest/guides/guide_for_submitting_a_proposal_for_grants/" rel="nofollow">guide for proposal submission</a> and <strong>discuss</strong> if we should consider it for a grant.</p>
        </div>
        <div>
          <h2>Step 3</h2>
          <p>After steps 1 and 2, if you feel ready to apply for a grant then see the <a href="https://wiki.aragon.one/nest/guides/guide_for_submitting_a_request_for_funding/" rel="nofollow">guide for submitting a new request for funding</a> and follow these steps:</p>
          <div><ol compact><p>
            <li>Fork the <a href="https://github.com/aragon/nest">Aragon Nest GitHub Repository</a>.</li>
            <li>Create a new directory with <strong>your project’s name</strong> inside the <code>grants/</code> folder.</li>
            <li>Inside that, create two files, <a href="https://wiki.aragon.one/nest/templates/team/" rel="nofollow"><code>team.md</code></a> and <a href="https://wiki.aragon.one/nest/templates/roadmap/" rel="nofollow"><code>roadmap.md</code></a>, where you present <strong>your team</strong> and <strong>suggested roadmap</strong></li>
            <li><strong>Create a pull request</strong> to merge your submission into the Nest Repository. In that pull request, be sure to fill in <strong>all the relevant information</strong> described in the <a href="https://wiki.aragon.one/nest/guides/guide_for_submitting_a_request_for_funding/" rel="nofollow">guide for submitting a new request for funding</a>.</li>
            <li>Engage the community and discuss! The community, <a href="https://aragon.one" rel="nofollow">Aragon</a> and <a href="https://twitter.com/placeholdervc" rel="nofollow">Placeholder</a> will review the submissions and get back to you.</li>
          </p></ol></div>
        </div>
      </div>
      <Emphasis>
        <p>Proposals should abstractly describe problems or products, not their implementations.</p>
      </Emphasis>
      <div className="cta">
        <Anchor
          mode="strong"
          href="https://github.com/aragon/nest"
          target="_blank"
        >
          Check out Proposals
        </Anchor>
        <Anchor
          mode="strong"
          href="https://github.com/aragon/nest/pulls"
          target="_blank"
        >
          Current Requests for Funding
        </Anchor>
        <Anchor
          mode="outline"
          href="https://wiki.aragon.one/nest/guides/guide_for_submitting_a_request_for_funding/"
          target="_blank"
        >
          Proposal Submission Details
        </Anchor>
        <Anchor
          mode="strong"
          href="https://aragon.chat/channel/nest"
          target="_blank"
        >
          Join the Discussion
        </Anchor>
      </div>
    </div>
  </Main>
)

export default GetStarted

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TwitchEmbed from "../components/TwitchEmbed"
import TwitterEmbed from "../components/TwitterEmbed"
import DiscordFeed from "../components/DiscordFeed"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <TwitchEmbed
        mountNode="jake-schurr-stream"
        width={854}
        height={480}
        channel="jacobschurr"
      />
      <DiscordFeed />
      <TwitterEmbed />
    </Layout>
  </>
)

export default IndexPage

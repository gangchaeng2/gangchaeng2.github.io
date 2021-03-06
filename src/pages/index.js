import React from 'react'

import Seo from 'components/Seo'
import Layout from 'components/Layout'
import Home from 'containers/Home'

const IndexPage = () => {
  return (
    <Layout>
      <Seo keywords={[`blog`, `bigshine`]} />
      <Home />
    </Layout>
  )
}

export default IndexPage

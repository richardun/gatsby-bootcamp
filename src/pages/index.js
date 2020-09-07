import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <div>
        <h1>Hello!</h1>
        <p>
          need a developer? <a href="/contact">Contact Us</a>
        </p>
      </div>
    </Layout>
  )
}

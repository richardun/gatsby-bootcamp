import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Us</h1>
      <p>475 Brannan St.#300. San Francisco, CA 94107</p>
      <p>
        Social Media{' '}
        <a href="https://twitter.com/richardun">Richard On Twitter</a>
      </p>
    </Layout>
  )
}

export default ContactPage

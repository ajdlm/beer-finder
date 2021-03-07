import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
//import Nav from '../components/nav'

const Checkout = () => (
  <div>
    <Head>
      <title>Checkout</title>
    </Head>

    {/*<Nav />*/}

    <h1>Checkout</h1>
    <p>Please click the button below to complete your order</p>
   <Link href="/order-confirmation/123-yourorder-456">
      <a>Complete order</a>
   </Link>
  </div>
)

export default Checkout
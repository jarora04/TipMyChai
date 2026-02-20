import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from 'next/navigation';
import connectDB from '@/db/connectDB';
import User from '@/models/User';




const Username = async({ params }) => {
  // if the username is not present in the datbase then show 404 page

  const checkUser = async () => {
    await connectDB()
    let u = await User.findOne({ username: params.username })
    if (!u) {
      return notFound()
    }
  }

  await checkUser()

  // if the username is present then show the payment page
  return (<>
    <PaymentPage username={params.username} />
  </>
  )
}


export default Username

export async function generateMetadata({params}){
  return {
    title: `Support ${params.username} - Get Me A Tea`
  }
}
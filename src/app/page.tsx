"use client"
import React from 'react'
import Home from './home'
import Provider from './provider'

const Page = () => {
  return (
    <div>
      <Provider>
      <Home/>
      </Provider>
    </div>
  )
}

export default Page
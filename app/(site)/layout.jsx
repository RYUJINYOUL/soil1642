import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const layout = ({ children }) => {
  return (
    <div className="w-screen h-full">
    <Header>
      {children}
    </Header>
      {/* <Footer /> */}
    </div>
  )
}

export default layout

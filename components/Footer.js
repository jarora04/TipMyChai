import React from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-gray-900 flex  text-white px-4 h-16 items-center justify-center'>
       <p className='text-center'>Copyright &copy; {currentYear} Get Tea-All rights Reserved</p>
    </footer>
  )
}

export default Footer
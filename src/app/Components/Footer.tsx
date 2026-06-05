import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-24 border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-8 text-center'>
        <p className='text-sm text-white/40'> From datasets to decisions.</p>
        <p className='text-sm text-white/40'>© {new Date().getFullYear()} Sarthak Shukla. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
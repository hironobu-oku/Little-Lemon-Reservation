import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Banner from './Banner'
import BookingPage from './BookingPage'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
    </main>
  )
}

export default Main

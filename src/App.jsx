import React from 'react'
import Navbar from './components/Navbar/Navbar'
import CenterImage from './components/CenterImage/CenterImage.jsx'
const App = () => {
  return (
    <div>
      <div className='h-[700px] relative bg-black '>
          <Navbar/>
          <CenterImage />
      </div>
    </div>
  )
}

export default App
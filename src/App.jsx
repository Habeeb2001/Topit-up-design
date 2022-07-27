import { useState } from 'react'

import MainBody from './Components/Main-body/MainBody'
import SideBar from './Components/SideBar/SideBar'

function App() {
  

  return (
    <div className="App">
      {/* the side bar */}
      <SideBar/>
      <MainBody/>
    </div>
  )
}

export default App

import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import 

function App() {
 

  return (
    <div className="App bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

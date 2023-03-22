import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Chat from "./components/Chat"

function App() {
 

  return (
    <div className="App h-full w-full m-0 p">
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

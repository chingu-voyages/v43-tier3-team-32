import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Chat from "./components/Chat"

function App() {
 

  return (
    <div className="App h-screen w-full m-0 p-0">
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

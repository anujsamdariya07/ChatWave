import React from "react"
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Join from "./components/Join/Join"
import Chat from './components/Chat/Chat'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Outlet/>}>
        <Route path='' element={<Join/>}/>
        <Route path='chat' element={<Chat/>}/>
      </Route>
    )
  )
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

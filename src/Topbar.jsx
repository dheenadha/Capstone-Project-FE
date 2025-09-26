import React from 'react'
import Header from './components/Header'
import { Outlet } from "react-router-dom"


export default function Topbar() {
  return (
   <>
    <div >
        <Header/>
        <div>
          <div>
            <Outlet/>
          </div>
        </div>
      </div></>
  )
}

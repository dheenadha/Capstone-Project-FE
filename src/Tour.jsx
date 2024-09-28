import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

import { ItemCard } from './components/ItemCard'
import { ItemData } from './utils/constants'
import "bootstrap/dist/css/bootstrap.min.css";

function Tour() {
  const [itemList,setItemList] = useState(ItemData)
    console.log(itemList)
  const [cartVal,setCartVal] = useState(0)

  return (
    <>
      <Navbar cartVal={cartVal}/>
      <div className="container d-flex flex-wrap justify-content-between m-5 " style={{gap:"5%"}}>{itemList.map((e)=><ItemCard el={e} cartVal={cartVal} setcartVal={setCartVal} /> )}</div>

    </>
  )
}

export default Tour

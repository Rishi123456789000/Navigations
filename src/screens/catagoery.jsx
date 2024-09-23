
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Categoery = () => {
  return (
    <div>
      <h2>welcome to Category</h2>
      <Link to={"electronics"}>electronics</Link>
      <Link to={"jewelery"}>jewelery</Link>
      <Outlet/>
    </div>
  )
}

export default Categoery

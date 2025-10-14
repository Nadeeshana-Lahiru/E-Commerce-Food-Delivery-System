import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {

  //create state variable name is category, setter function name is setcategory
  const [category,setCategory] = useState("All");

  return (
    <div>
        {/* mount the Header component */}
        <Header />
        {/* pass the category state and setter function to ExploreMenu component */}
        <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {
  return (
    <div>
        {/* mount the Header component */}
        <Header />
        <ExploreMenu />
    </div>
  )
}

export default Home
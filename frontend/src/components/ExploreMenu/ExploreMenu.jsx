import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

// pass the category and setCategory function
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Chose from a diverse menu featuring a delectable array of dished crafted with the fitnest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate dining experience, one delicious mean at a time.</p>
        <div className="explore-menu-list">
            {/* using menu_list inside assets display menu data menu_name , menu_image */}
            {/* use menu_list to map using item object and index */}
            {menu_list.map((item,index)=>{
                return (
                    //pass the setCategory function. check previous state is same as the item menu name, if not same, set the state menu name
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        {/* item is object , menu_image is property */}
                        {/* check the categoty is equal to item menu name, if equal state is active */}
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
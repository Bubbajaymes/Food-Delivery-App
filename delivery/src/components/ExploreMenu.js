import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets'

export default function ExploreMenu({category, setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-text'>Satisfy your cravings with just a few taps. From breakfast to late-night snacks, enjoy the convenience of having your favorite meals delivered directly to you.</p>
        <div className='menu-list'>
            {
                menu_list.map((item,index) => {
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name ? 'All' : item.menu_name)} key={index} className='menu-list-item'>
                            <img className={category===item.menu_name ? 'active' : ''} src={item.menu_image} alt='' />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
    </div>
  )
}

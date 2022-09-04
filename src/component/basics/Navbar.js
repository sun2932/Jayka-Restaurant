import React from 'react'

const Navbar = ({filterItem , menuList}) => {
  return (
    <>
    <div className='rest'><h1><u>:- Jayka Restaurant-:</u></h1></div>
    <nav className='navbar'>
          <div className='btn-grp'>
            {
                menuList.map((curElem)=>{
                    return <button className='btn-grp_item'onClick={()=>filterItem(curElem)}>{curElem}</button>
                })
            }
          </div>
        </nav>
    </>
  )
}

export default Navbar

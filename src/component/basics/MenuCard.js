import React from 'react'


const MenuCard = ({menuData}) => {
    console.log(menuData);
  return (
    <>
    
    <section className='main-card--cointainer'>
    {menuData.map((curElem)=>{
        return(
            
            <div className='card-container' key={curElem.id}>
            <div className='card'>
                <div className='card-body'>
                    <span className='card-number card-circle subtle'>{curElem.id}</span>
                    <span className='card-author subtle' style={{color:'red'}}>{curElem.category}</span>
                    <h2>{curElem.name}</h2>
                    <span className='card-deccription subtle'>
                        {curElem.description}
                    </span>
                    <div className='card-read'>Read</div>
                </div>
                <div className='price'>Only at.{curElem.price}</div>
                    <img src={curElem.image} alt="images" className='card-media'></img>
                   
                    <span className='card-tag  subtle'>Order Now</span>
            </div>
            
        </div>
        )
    })}
    </section>  
    </>
  )
}

export default MenuCard

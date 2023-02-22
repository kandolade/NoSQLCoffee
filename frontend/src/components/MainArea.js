import React, { useState } from 'react'
import '../styles/mainarea.css'
import Header from './Header'
import Product from './products/Product'
import { useSelector } from 'react-redux'
const MainArea = () => {
    const user = useSelector(state=>state.user)
    const [category,setCategory]=useState('coffee')
    
    return (
        <div className='mainarea'>
            <Header/>
            <div className="banner">
                <div className="img">
                </div>

                <div className="text">
                <h2>Hello, {user?.user?.name}</h2>
                <p>Get Free delivery on <span>3000₸</span> or with the help of a final 90  </p>
                <button>Order Now!</button>
                <img className='full circle' src="https://libira-coffee.co.il/wp-content/uploads/2022/07/kisspng-ipoh-white-coffee-cafe-frutti-di-bosco-coffee-bean-a-coffee-beans-5a7e551e64b813-1-850x863-1-e1658150821275.png" alt="" />
                <img className='small circle' src="https://libira-coffee.co.il/wp-content/uploads/2022/07/kisspng-ipoh-white-coffee-cafe-frutti-di-bosco-coffee-bean-a-coffee-beans-5a7e551e64b813-1-850x863-1-e1658150821275.png" alt="" />
                <img className='smaller circle' src="https://libira-coffee.co.il/wp-content/uploads/2022/07/kisspng-ipoh-white-coffee-cafe-frutti-di-bosco-coffee-bean-a-coffee-beans-5a7e551e64b813-1-850x863-1-e1658150821275.png" alt="" />
                <img className='half circle' src="https://libira-coffee.co.il/wp-content/uploads/2022/07/kisspng-ipoh-white-coffee-cafe-frutti-di-bosco-coffee-bean-a-coffee-beans-5a7e551e64b813-1-850x863-1-e1658150821275.png" alt="" />
                </div>
               
            </div>

         <div className='category-area'>
             <h3>Menu</h3>
            <div className="category">
              <div className={`cat-icon ${category==='coffee'&&'active'} `} onClick={()=>setCategory('coffee')}>
                  <div className="img">

                  <img src="https://cdn-icons-png.flaticon.com/512/3398/3398569.png" alt="coffee" />
                  </div>
                  <div className="text">
                   Coffee
                  </div>
                  
              </div>

              <div className={`cat-icon  ${category==='Sandwich'&&'active'} `} onClick={()=>setCategory('Sandwich')}>
                  <div className="img">

                  <img src="https://cdn-icons-png.flaticon.com/512/3259/3259274.png" alt="pizza" />
                  </div>
                  <div className="text">
                  Sandwich
                  </div>
                  
              </div>

              <div className={`cat-icon  ${category==='Snaks'&&'active'} `} onClick={()=>setCategory('Snaks')}>
                  <div className="img">

                  <img src="https://cdn-icons-png.flaticon.com/512/9764/9764062.png" alt="pizza" />
                  </div>
                  <div className="text">
                   Snak
                  </div>
                  
              </div>
              <div className={`cat-icon  ${category==='Drink'&&'active'} `} onClick={()=>setCategory('Drink')}>
                  <div className="img">

                  <img src="https://cdn-icons-png.flaticon.com/512/9788/9788322.png" alt="pizza" />
                  </div>
                  <div className="text">
                   Drink
                  </div>
                  
              </div>
            </div>
            <div className="all-list">
             <Product category={category}/>
            </div>
         </div>
         

        </div>
    )
}

export default MainArea

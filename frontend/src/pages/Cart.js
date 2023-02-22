import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/cart.css'
import SideBar from '../components/SideBar'
import CartItemCard from '../components/CartItemCard'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Aiboly from "../assests/Aboly.png"
const Cart = () => {
    const cartItems = useSelector(state=>state.cart.cartItems)
    const cartPrice=cartItems.reduce((total,itm)=>total+itm?.price*itm?.qty,0)
    const deleviryPrice = (cartPrice>3000||cartPrice===0)?0:500
    const discount = 0;
    const totalPrice= (cartPrice+deleviryPrice)-discount;
    const auth = useSelector(state=>state.user.user)
    const navigate = useNavigate()
    const checkoutHandler =()=>{
        if(auth){
            navigate(`/shipping`)
        }
        else{
            navigate('/signin?redirect=shipping')
        }
    }
    return (
        <>
        <SideBar/>
        <div className='cart-screen'>
            <h1>MY CART</h1>
            {
                cartItems?.length>0?(
                  <div className='cart-area'>
                      <div className="all-items">
                       {cartItems.map((item)=>(
                           <CartItemCard key={item.product} item={item}/>
                       ))}
                      </div>
                      <div className="checkout-area">
                      <div className="billing">
                        <h4>PRICE DETAILS</h4>
                        <div className="details">
                            <div className="item">
                                <p>Price</p>
                                <p><span>₸</span>{cartPrice}</p>
                            </div>

                            <div className="item">
                                <p>Delivery Charges</p>
                                <p>{deleviryPrice===0?<span className='free'>Бесплатно</span>:<span>₸{deleviryPrice}</span>}</p>
                            </div>
                        </div>
                        <div className="total">
                            <h3>Total</h3>
                            <h3><span>₸</span>{totalPrice}</h3>
                        </div>
                      </div>
                      <button onClick={checkoutHandler} disabled={totalPrice===0?true:false}>PROCEED TO CHECKOUT</button>
                      </div>
                  </div>
                ):(
                    <>
                    <img src={Aiboly} alt="" />
                    <h2>Yo, there’s one guy who needs coffee</h2>
                    <p>Put it in the basket so he doesn’t feel sad</p>
                    <Link to="/"><button>Main</button></Link>
                    </>
                )
            }
       
        </div>
        </>
    )
}

export default Cart

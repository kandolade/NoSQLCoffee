import React, { useEffect, useState } from 'react';
import LeftSide from '../components/LeftSide';
import SideBar from '../components/SideBar';
import Header from '../components/Header'
import coffee from '../apis/coffee';
import { Link } from 'react-router-dom';
import '../styles/allorders.css'
import { useSelector } from 'react-redux';
const AllOrders = () => {

  const user=useSelector(state=>state.user.user)
 const [orders,setOrders]=useState([])
  const getOrders = async()=>{
    const {data} =await coffee.get('/api/orders',{
      headers:{
         Authorization: `Bearer ${user.token}`
      }
   })

  setOrders(data)
  }

  useEffect(()=>{
     getOrders()
  },[])

  return(
      <>
      <SideBar/>
          <LeftSide/>
       <div className='mainarea all-oredrs'>
         <Header/>
         <div className="all-orders-area">
           <h1>My Orders</h1>
           <div className="display-orders">
           { orders.length>0?orders.map((order)=>(
               <Link to={`/order/${order?._id}`}><div className="order-detail-card" key={order?._id}>
               <div className="order-left-details">
                 {
                   order.orderItems?.map(item=>(
                    <div className='image-card' key={item?._id}>
                    <div className="img">
                      <img src={item?.image} alt="" />
                    </div>
                    <div className="details">
                     <h4>{item?.name}</h4>
                     <p>Quantity: {item?.qty}</p>
                     <p>Time: {order?.createdAt.slice(11, -8)}</p>
                    </div>
                    </div>
                   ))
                 
                }
                </div>
                 <div className="status">
                  <p>Date: {order?.createdAt.slice(0, -14)} </p>
                  <span>Your item has been placed.</span>
                 </div>
               </div></Link>
           )):<h3 className='secondTupe'>No Past Orders</h3>
               
              }

           </div>
         </div>
        </div>

      </>
  );
};

export default AllOrders;

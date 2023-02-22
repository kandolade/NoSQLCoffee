import React ,{useState}from 'react'
import '../styles/sidebar.css'
import {
    FaHome,
    FaBoxOpen,
    FaWallet,
    FaTimes,
    FaMicroblog,
    FaBug,
    FaEquals,
    FaExchangeAlt,
    FaExclamationCircle,
    FaGrinHearts,
    FaUniversalAccess,
    FaCoffee,
    FaCommentSlash,
    FaCommentDots,
    FaCrop,
    FaCube,
    FaDeaf, FaDemocrat, FaDiceD20, FaEdit
} from 'react-icons/fa'
import {BsHeartHalf,BsGear} from 'react-icons/bs'
import {CgFileDocument} from 'react-icons/cg'
import { Link,useLocation } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/auth'
import { showSideBar } from '../actions'
const SideBar = () => {
       const dispatch =useDispatch()
       const user = useSelector(state=>state.user.user)
       const show = useSelector(state=>state.sidebar.show)

       const location =useLocation()
       const path = location.pathname

    const handleSignOut =()=>{
          dispatch(logout())
    }
    return (
        <div className={`sidebar  ${show&&'showSideBar'}`}  >
            <div className="close" onClick={()=>dispatch(showSideBar(false))}>
                <FaTimes/>
            </div>
            <div className="top-icons">
            <Link to="/"><div className={`icon ${path==='/'&&'active'}`}>
                <FaCoffee/>
            </div></Link>
            <Link to="/orders"><div className={`icon ${path==='/orders'&&'active'}`}>
                <FaEquals/>
            </div></Link>
            <Link to='/wishlist'> <div className={`icon ${path==='/wishlist'&&'active'}`}>
                <FaGrinHearts/>
            </div></Link>
            <Link to='/profile'><div className={`icon ${path==='/profile'&&'active'}`}>
                <FaEdit/>
            </div></Link>



            </div>
            <div className="bottom-icon">
            {user&&(<div className="icon" onClick={handleSignOut}>
            <FiLogOut/>
            </div>)}
            </div>
        </div>
    )
}

export default SideBar

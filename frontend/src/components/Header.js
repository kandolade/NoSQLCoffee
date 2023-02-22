import React, { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import {HiMenuAlt1} from 'react-icons/hi'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { searchProducts, showSideBar } from '../actions'
import Spinner from './Spinner'
import logoNOSQL from '../assests/logoNOSQLCOFFEE.svg'

const Header = () => {
    const [name,setName]=useState('')
     const navigate=useNavigate()
    const search=useSelector(state=>state.search)
    const dispatch =useDispatch()
    const handleSearch=(e)=>{
        e.preventDefault()
     dispatch(searchProducts(name))
     navigate(`/search?=${name}`)

    }
    return (
        <div className='header'>
           <div className="logo">
              <div className="burger" onClick={()=>dispatch(showSideBar(true))}>
               <HiMenuAlt1/>
              </div>

              <img src="https://m107.syncusercontent.com/mfs-60:7247ce7c0bfc5863b4345e35b95cf2ea=============================/p/Frame%201%202.svg?allowdd=0&datakey=LQ9ONGfL2XSTJGab7Tk9diQjAQi8tPSpMCZ/lBJb6X2FwlPTat8bduvsXmhKPwvfyxc/tupMe907y2AIagE1a82EGGWc9UL+8Uo9+HI0oYwajs0pUZviJenmp36W2B2mpIA70mcaJK6mOytckUL29eg7D02uWufQE2F0JBCcb8jsxeMnVh6twIPnEcN4s72oWIwaTx58p6iei/Bu6oxHHt3L2QPYJGQv36xIUEviwNSCsGZpTEquHze2jhuXMBFU4G8l+ykhw3mYTC4QgDNj9u5hPmRsN+7GowKC+iS3V69/gN+TAmlgnLk0Z6WvMkwCFczU+nJTfHjOx2CH6DQiPA&engine=ln-3.1.15&errurl=GsMXPmFuYg0JiCcy6VoQpMpnUoTHA4Vw5Lyp+viwIWG8k/1nxZMo4dNidHbeVTRiBD/XuUaVUBVwoQrZWdxZtUjWqFLCT5+zO6cZA71VI/pDwvZS5oFJboRWqgqyoq29RHHDM7boXADsEPm0iOLuL6FLMKd1CCYdAL3lhCsKZgMcAUXzl8PMZtamlcuKS605xHYR1l8kpQFjcVWltWu/HJ1wv6SXubGQdBed46xAYXmv+wh5gqWQBv/wDYaz6bVvwpwhMUGsMpm7TqH0lo7LGVRqZnvLlebZjdhVfsEfE/px7Y4MZRi89+6f7m7mt4WDgOBZx9hysJNNeyNI+ryUrw==&header1=Q29udGVudC1UeXBlOiBpbWFnZS9zdmcreG1s&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iRnJhbWUlMjAxJTIwMi5zdmciO2ZpbGVuYW1lKj1VVEYtOCcnRnJhbWUlMjAxJTIwMi5zdmc7&ipaddress=2992254234&linkcachekey=a3ac7daa0&linkoid=1588550013&mode=101&sharelink_id=8167044600013&timestamp=1677055637714&uagent=08b4a8785c453f1a826bbb960d64df0841031f1f&signature=7016206498066debea23266cd345906d6b09e070&cachekey=60:7247ce7c0bfc5863b4345e35b95cf2ea=============================" alt="logo" />
            </div>
            <form onSubmit={handleSearch} className="search-bar">
                <div className="input">
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Latte..' />
                {search?.loading?(<div>
                  <Spinner/>
                </div>):<FiSearch onClick={handleSearch}/>}
                </div>
            </form>  
        </div>
    )
}

export default Header

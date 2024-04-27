import {useState} from 'react'
import img from '../images/logo.jpg'
import { HiBars3BottomRight} from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";



function Header() {
    const links = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Contact', path: '/contact'},
        {name: 'Services', path: '/services'},
    ];
      const[isOpened, setIsOpened] = useState(false)

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:px-6 md:flex justify-between items-center bg-white">
    <div className="md:px-10 py-1.5 px-1.5 flex text-2xl items-center gap-2">
        <img src={img} alt="logo" className="w-20 h-20 rounded-full"/>
       <span className='font-bold'>Tracking System</span>
  </div>
  <div>
    
  </div>
    <div onClick = {() => setIsOpened(!isOpened)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden'>
       {
        isOpened ? <HiXMark/> : <HiBars3BottomRight/>
       }
        </div>
   <ul className='md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12'>
    {
    links.map(link => (
        <li key={link.path} className=' font-semibold my-7 md:my-0 md:ml-8'>
            <a href={link.path}>{link.name}</a>
        </li>))}
        <button className='btn bg-gray-600 text-white py-1 px-3 md:ml-8 rounded md:static'>LOGIN</button>
   </ul>
  </div>
    </div>
   
  )
}

export default Header
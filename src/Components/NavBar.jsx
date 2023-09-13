import { memo, useState } from "react"
import { NavLink } from "react-router-dom"
import {FaTimes, FaBars} from "react-icons/fa"
export default function NavBar(){
const [menu,setMenu]=useState(false)
const Links=[
    {name:"Payment", link:"/payment"},
    {name:"Salesperson", link:"/salesperson"},
    {name:"Business", link:"/business" },
    {name:"Signout" , link:"/"}
]
function handleMenu(){
    setMenu(!menu)
}

    return(
        <div className="shadow-md shadow-black w-full fixed top-0 left-0 z-10">
            <div className="md:flex items-center py-4 bg-orange-700 w-full top-0 left-0 ">
                <div onClick={handleMenu} className="text-2xl absolute md:hidden cursor-pointer ">
                    {menu? <FaTimes/> :<FaBars/>}
                </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static w-full bg-orange-700
                    ${menu ? "top-16 opacity-100 ":"top-[-490px] md:opacity-100 opacity-0"}
                    `}>
                        {menu? <li className="text-2xl hover:text-white font-bold hover:italic mb-3">Admin Panel</li>:""}
                        {Links.map((link)=>{
                            return(
                            
                            <li key={link.name} className="md:ml-8 py-3 text-xl md:my-0">
                                <NavLink  
                                className="text-xl hover:text-white hover:italic"
                                to={link.link}
                                >
                                {link.name}
                                </NavLink>
                            </li>
                        )
                        })}
                    </ul>
                    <div className="flex justify-between text-3xl font-[Poppins] hover:text-white ">
                        <h1></h1>
                            OASIS HUB
                    <img 
                    src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
                    alt="smilling man"
                    className="h-10 w-12 mr-3 ml-100 rounded-md"
                    />
                </div>

            </div>
        </div>
    )
}
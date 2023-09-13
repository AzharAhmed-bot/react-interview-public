import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { Element } from 'react-scroll'
import Panel from "./Panel"
import { Route,Routes } from 'react-router-dom'
import { FaHandHolding } from 'react-icons/fa'
function App() {
  const navigate=useNavigate()
  const [admin, setAdmin] = useState(false)
function handleClick(){
  navigate('/admin')
}
 

  return (
    <div>
      <div className='justify-center p-36  items-center flex'>
      
      </div>
      <Element name=''>

      </Element>
    </div>
  )
}

export default App

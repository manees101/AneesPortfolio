import React from 'react'
import {BsGithub,BsLinkedin} from "react-icons/bs"
const SocialMedia = () => {
  return (
    <div className='app__social'>
       <a href="https://github.com/manees101"> <div>
             <BsGithub/> 
        </div>
        </a>  
        <a href="https://linkedin.com/in/manees101">
        <div>
       <BsLinkedin/>
        </div>
        </a> 
    </div>
  )
}

export default SocialMedia
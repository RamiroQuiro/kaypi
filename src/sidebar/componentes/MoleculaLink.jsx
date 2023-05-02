"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MoleculaLink({isActive,icon,className,children}) {
    return (
      <>
              <FontAwesomeIcon icon={icon} className= {`${className} text-2xl w-3/12   md:w-10 mr-5`}/>
              <p className={ isActive?'flex font-semibold md:text-xs ':'hidden md:text-xs md:opacity-0 w-full  invisible text-gray-700 font- text-center'}>{children}</p>
              </> 
    )
  }
  
  export default MoleculaLink
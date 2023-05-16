import { useState, useEffect, useRef } from 'react';

function useStyleElement(id) {

    const isClicked=useRef(false)
    
    const [style, setStyle] = useState({})

    useEffect(() => {
      const target=document.getElementById(id);
if (!target) return



    
      return () => {
        
      }
    }, [])
    


}
export default useStyleElement;
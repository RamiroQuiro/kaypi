import { useState, useEffect } from 'react'

function useWidth(id) {
  const [width, setWidth] = useState(null)

  useEffect(() => {
      const element = document.getElementById(id)?.clientWidth
      if (element) {
          setWidth(element)
        }
        if (!element)return

  }, [id])
 

  return width-25
}
export default useWidth
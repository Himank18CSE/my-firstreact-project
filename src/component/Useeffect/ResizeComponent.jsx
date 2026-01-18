import React, { useEffect, useState } from 'react'

export const ResizeComponent = () => {
    const[windowwidth,setwindowwidth]=useState(window.innerWidth);

    useEffect(() => {
      const handleResize=()=>setwindowwidth(window.innerWidth);
       window.addEventListener("resize",handleResize);
      return () => {
        window.removeEventListener("resize",handleResize);
      }
    }, [])
    
  return (
    <div>Window Width: {windowwidth}px</div>
  )
}

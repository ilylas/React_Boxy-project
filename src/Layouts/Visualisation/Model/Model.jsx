import { useState } from "react"
import { createPortal } from "react-dom"
import ModelResult from "./ModelResult"
export default function Model() {
  const [showModel,setShowModel] = useState(false)


  return (
    <>
    <button 
    onClick={()=>setShowModel(!showModel)}
    className="mx-auto mt-2 z-0 py-1 px-3 text-sm rounded bg-blue-600 text-white
    hover:bg-blue-700">
        Get the code

    </button>
    {showModel && 
    createPortal(
    <ModelResult closeModel={()=>setShowModel(!showModel)}/>,
    document.body
    )}
    </>
  )
}
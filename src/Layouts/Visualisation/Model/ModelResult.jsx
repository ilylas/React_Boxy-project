import getBoxShadowValue from "../../../utils/getboxShadowValue"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export default function ModelResult({closeModel}) {
  const shadowValues=useSelector(state=>state.shadowSlice)

  useEffect(()=> {
    document.body.style.overflowY = "hidden"

    return ()=>document.body.style.overflowY="auto"
  },[])

  let runninganim =false

  function handleCopy(e){
    runninganim=true
    e.target.textContent="Copied !"

    setTimeout(()=>{
        e.target.textContent="Copy"
        runninganim =false
    },1250)
  }

  navigator.clipboard.writeText(`box-shadow : ${getBoxShadowValue(shadowValues)}`)
  return (
    <div 
    onClick={closeModel}
    className="fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75">
        <div 
        onClick={e=>e.stopPropagation()}
        className="max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]"
        >
            <div 
            onClick={handleCopy}
            className="flex items-end mb-5">
                <p className="font-semibold mr-5">Here is your code 🎉</p>
                <button className="ml-auto mr-2 text-sm bg-blue-600 text-white
                hover:bg-blue-700 py-1 px-3 rounded">Copy</button>
                <button
                onClick={closeModel}
                className="  text-sm bg-red-600 text-white
                hover:bg-red-700 py-1 px-3 rounded">Close</button>
            </div>
            <p className="rounded bg-gray-100 p-5">
                <span className="font-semibold">
                    box-shadow : 
                </span>
                <span>{getBoxShadowValue(shadowValues)}</span>
            </p>
        </div>
    </div>
  )
}
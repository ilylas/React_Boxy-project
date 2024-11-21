import {useDispatch,useSelector} from "react-redux"
import {addShadow} from "../../features/shadow"
import Shadow from "./shadow"
import { useEffect } from "react"

export default function ShadowList() {
  const shadows = useSelector(state => state.shadowSlice)
  const dispatch=useDispatch()


  return (
    <div >
      <div className="flex justify-between p-6 border-b border-gray-300">
        <p className="font-bold text-lg">
          Customize Shadows
        </p>
        <button className="py-1 px-3 text-sm rounded bg-blue-600 
        focus::outline-none focus:ring-4 focus-ring-offset-2 
        hover:bg-blue-700 text-white"
        onClick={()=>dispatch(addShadow())}>
            Add a Shadow
        </button>
      </div>
      <ul>
        {shadows.map((shadow,index) => (
          <Shadow 
          panelNumber= {index+1}
          shadow={shadow}
          key={shadow.id}
          />
        ))
      }
      
      </ul>
    </div>
  )
}
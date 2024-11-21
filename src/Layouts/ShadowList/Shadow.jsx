import { useState,useEffect } from "react"
import Chevron from "../../assets/chevron.svg"
import ShadowRange from "./ShadowRange"
import Shadowcolorpicker from "./Shadowcolorpicker"
import ShadowCheckBox from "./ShadowCheckBox"
import { useDispatch } from "react-redux"
import { removeShadow } from "../../features/shadow"

export default function Shadow({panelNumber,shadow}) {
  const dispatch=useDispatch()
  const [toggleShadow,setToggleShadow]  = useState(false)
  const shadowInputs = shadow.input.map((input, index) => {
    if (input.type === "range"){
      return <ShadowRange 
      key={index} 
      inputData={shadow.input[index]}
      ShadowID={shadow.id}
      ></ShadowRange>
    }
    else if (input.type === "color"){
      return <Shadowcolorpicker 
      key={index} 
      inputData={shadow.input[index]}
      ShadowID={shadow.id}
      ></Shadowcolorpicker>
    }
    
  })

  useEffect(()=> {
    if (panelNumber === 1){
      setToggleShadow(true)
    }
  })
  return (
    <div>
        <li className="bg-gray-50 border-b border-gray-300">
            <button
            className="px-6 py-4 justify-between items-center hover:bg-gray-100
            w-full"
            onClick={() => setToggleShadow(!toggleShadow)}>
                <span>Shadow {panelNumber} </span>
                <img 
                style={{
                    transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`
                }}
                className="font-bold w-5 "
                src={Chevron} alt="" />
            </button>
            {toggleShadow && <>
            
            <div className="flex items-end px-6 pt-4">
                <ShadowCheckBox name={"active"} shadowID={shadow.id}></ShadowCheckBox>
                <ShadowCheckBox name={"inset"} shadowID={shadow.id}></ShadowCheckBox>

                <button 
                onClick={()=>dispatch(removeShadow(shadow.id))}
                className="ml-auto text-sm bg-red-600 text-white
                hover:bg-red-700 py-1 px-3 rounded">
                    Remove
                </button>

            </div>
            <div className="px-6 py-4">
                {shadowInputs}
            </div>
            
            </>}
        </li>
    </div>
  )
}
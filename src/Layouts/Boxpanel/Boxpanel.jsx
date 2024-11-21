import { useSelector } from "react-redux"
import Boxrange from "./Boxrange"
import Boxcolorpanel from "./Boxcolorpanel"

export default function Boxpanel() {

  const boxState = useSelector(state => state.boxProperties)

  const boxInputs = boxState.map((input, index) => {
    if (input.type === "range"){
      return <Boxrange key={index} inputData={input}></Boxrange>
    }
    else if (input.type === "color"){
      return <Boxcolorpanel key={index} inputData={input}></Boxcolorpanel>
    }
    
  })

  
  return (
    <div className="bg-gray-50 px-6 py-4 border-b border-gray-300">
        <p className="font-bold text-lg my-2">
            Box Properties
        </p>
        {boxInputs}
    </div>
  )
}
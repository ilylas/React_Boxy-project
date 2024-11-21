import {useState} from "react"
import ShadowList from "./ShadowList/ShadowList"
import Boxpanel from "./Boxpanel/Boxpanel"

export default function () {

  const [tabs,setTabs] = useState(0)

  const tabsList=[
    {name:"shadow", component: <ShadowList/>},
    {name:"Boxpanel", component: <Boxpanel/>}
  ]
  console.log(tabs);
  return (
    <div className="relative mt-20 w-[600px] h-[550px] border rounded-b rounded-tr border-gray-300 
    bg-gray-50 md:mt-0 shadow-xl" >
        <div className="flex absolute -translate-y-full -left-[1px]">
            {tabsList.map((tabs, index) =>( 
                <button
                key={index}
                onClick={() => setTabs(index)}
                className="min-w-[125px] py-2 px-3 mr-4 font-bold
                border-t border-x border-gray-300 bg-slate-50
                hover:bg-slate-200 text-slate-700 rounded-t 
                focus:outline-none focus-ring-2 ring-inset 
                focus:ring-blue-300">
                    
                    {tabs.name}
                </button>
            ))}
        </div>
        <div  
        className="flex-shrink-0 h-full max-h-[700px] overflow-auto "
        >
            {tabsList[tabs].component}
        </div>
    </div>
  )
}
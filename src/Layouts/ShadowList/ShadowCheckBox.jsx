import { useDispatch,useSelector } from "react-redux"
import { updateCheckBox } from "../../features/shadow"


export default function ShadowCheckBox({name,ShadowID}) {
    const dispatch=useDispatch();
    const checkBoxshadow = useSelector(state => state.shadowSlice.find(
        shadow=> shadow.input.id === ShadowID
        
    ))
    console.log(checkBoxshadow);

  return (
    <>
        <input 
        onChange={()=> dispatch(updateCheckBox({ShadowID,name}))}
        type="checkbox" 
        checked={checkBoxshadow[name] }
        id={`checkbox-${name}-${ShadowID}`}
        className="h-4 w-4 border-gray-300 rounded mr-2"
        />
        <label 
        className="leading-4 mr-5"
        htmlFor={`checkbox-${name}-${ShadowID}`}>
            {name.charAt(0).toUpperCase()+ name.slice(1)}
        </label>
    </>
  )
}
import { useDispatch } from "react-redux"
import { updateShadowValue } from "../../features/shadow"


export default function Shadowcolorpicker( {inputData,ShadowID} ) {
    const dispatch = useDispatch()

    function handleInputs(e){
        dispatch(updateShadowValue({
            inputNumber: inputData.inputNumber,
            value: e.target.value,
            ShadowID
        }))
    }
    return (
        <div className="mt-3">
            <p>{inputData.name}</p>
            <div className="flex mt-2">
                <input type="text"
                value={inputData.value}
                onChange={handleInputs}
                className="flex-grow border py-1 px-2 focus:outline-1 outline-gray-400"
                />
                <input type="color"
                value={inputData.value}
                onChange={handleInputs}
                className="cursor-pointer h-[40px]"
                />
            </div>
        </div>)
}
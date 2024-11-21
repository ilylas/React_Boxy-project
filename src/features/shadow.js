import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(8),
        active: true,
        inset: false,
        input:[
            {
                inputNumber: 1,
                name: "Horizontal offset",
                value:0,
                type:"range",
                minMax: [-250,250]
            },
            {
                inputNumber: 2,
                name: "Vertical offset",
                value:10,
                type:"range",
                minMax: [-250,250]
            },
            {
                inputNumber: 3,
                name: "Blur radius",
                value:15,
                type:"range",
                minMax: [0,250]
            },
            {
                inputNumber: 4,
                name: "Spread offset",
                value:-3,
                type:"range",
                minMax: [-250,250]
            },
            {
                inputNumber: 5,
                name: "Color",
                value:"#4f4f4f",
                type:"color",
                
            },
        ]

    }
]

export const shadowSlice= createSlice({
    name:"shadow",
    initialState,
    reducers:{
        removeShadow: (state,action)=>{
            const shadowIndexRemove = state.findIndex(shadow=> shadow.id ===
                action.payload
            )
            state.splice(shadowIndexRemove, 1)
        },
        addShadow: (state,action)=>{
            state.push(
                {
                    id: nanoid(8),
                    active: true,
                    inset: false,
                    input:[
                        {
                            inputNumber: 1,
                            name: "Horizontal offset",
                            value:0,
                            type:"range",
                            minMax: [-250,250]
                        },
                        {
                            inputNumber: 2,
                            name: "Vertical offset",
                            value:10,
                            type:"range",
                            minMax: [-250,250]
                        },
                        {
                            inputNumber: 3,
                            name: "Blur radius",
                            value:15,
                            type:"range",
                            minMax: [0,250]
                        },
                        {
                            inputNumber: 4,
                            name: "Spread offset",
                            value:-3,
                            type:"range",
                            minMax: [-250,250]
                        },
                        {
                            inputNumber: 5,
                            name: "Color",
                            value:"#4f4f4f",
                            type:"color",
                            
                        },
                    ]
            
                }
            )
        },
        updateShadowValue: (state,action)=>{

            const currentshadow=state.find(
                shadow=> shadow.id === action.payload.ShadowID
            )
            const currentinput=currentshadow.input.find(
                input=> input.inputNumber === action.payload.inputNumber
            )
            currentinput.value = action.payload.value
        },
        updateCheckBox: (state,action)=>{
            const currentshadow=state.find(
                shadow => shadow.input.id === action.payload.ShadowID
            )

            currentshadow[action.payload.name] = !currentshadow[action.payload.name]
        }
    }
})
export const {updateCheckBox,removeShadow,addShadow,updateShadowValue} = shadowSlice.actions
export default shadowSlice.reducer
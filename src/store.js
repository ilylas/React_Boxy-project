import {configureStore} from "@reduxjs/toolkit";
import shadowSlice  from "./features/shadow"
import boxProperties from "./features/boxProperties"

export const store= configureStore({
    reducer: {
        shadowSlice,
        boxProperties

    }
})
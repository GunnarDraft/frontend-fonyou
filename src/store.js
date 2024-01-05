import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './reducers/index'
export default configureStore({
    reducer: {
        character: charactersReducer
    },
})
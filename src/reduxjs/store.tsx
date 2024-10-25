import { configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import { combineReducers } from "redux"
import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "MyUserSlice",
    initialState: {
        id: "",
        phone: "",
        isLogin: false,
    },
    reducers: {
        login: (state, action) => {
            if (action.payload && action.payload.phone && action.payload.isLogin && action.payload.id) {
                state.id = action.payload.id
                state.phone = action.payload.phone
                state.isLogin = action.payload.isLogin
            }
        },
        logout: (state) => {
            state.id = ''
            state.phone = ''
            state.isLogin = false
        }
    }
})

const persistConfig = {
    key: "root",
    storage,
    version: 1,
}

const rootReducer = combineReducers({
    MyUserSlice: userSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const { login, logout } = userSlice.actions

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)
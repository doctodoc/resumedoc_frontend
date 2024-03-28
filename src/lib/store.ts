import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from '@/lib/features/auth/authSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        auth: authReducer
    }
  })
}

// Infer the type of makeStore
export type AppStoreType = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateType = ReturnType<AppStoreType['getState']>
export type AppDispatchType = AppStoreType['dispatch']
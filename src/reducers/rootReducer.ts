import { combineReducers } from 'redux'
import device from './deviceSlice'
import user from './userSlice'

const rootReducer = combineReducers({
  user,
  device,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer

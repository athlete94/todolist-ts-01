import {applyMiddleware, combineReducers} from "redux";
import {tasksReducer, tasksReducerActionType} from "./tasksReducer";
import {todolistsReducer, todolistsReducerActionType} from "./todolists-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppActionsType, appReducer} from "./app-reducer";
import {authReducer, AuthReducerActionType} from "./authReducer";
import { legacy_createStore as createStore} from 'redux'


const rootReducers = combineReducers({
        tasksReducer,
        todolistsReducer,
        appReducer,
        authReducer
    }
)

export const store = createStore(rootReducers, applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionType>


export type AppActionType = AppActionsType | AuthReducerActionType | tasksReducerActionType | todolistsReducerActionType

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AppActionType>


// @ts-ignore
window.store = store;


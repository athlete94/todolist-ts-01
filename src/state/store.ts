import {applyMiddleware, combineReducers, createStore} from "redux";
import {tasksReducer} from "./tasksReducer";
import {todolistsReducer} from "./todolists-reducer";
import thunk from "redux-thunk";
import {AppReducer} from "./app-reducer";


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния

const rootReducers = combineReducers({
        tasksReducer,
        todolistsReducer,
        AppReducer
    }
)

export const store = createStore(rootReducers, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducers>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;


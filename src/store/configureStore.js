import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import jokeProgramReducers from '../reducers/jokeProgramReducers'
import comicJokeReducer from '../reducers/comicReducer'
import jokeTwoReducers from '../reducers/jokeTwoReducers'
import memeReducers from '../reducers/memeReducers'
import memesPart2 from '../reducers/memesPart2'

const configureStore = () => {
    const store = createStore(combineReducers({
        jokeProgram : jokeProgramReducers,
        jokeComic : comicJokeReducer,
        jokeTwo : jokeTwoReducers,
        memes : memeReducers,
        memesTwo : memesPart2
        
    }),applyMiddleware(thunk))
    return store
}

export default configureStore
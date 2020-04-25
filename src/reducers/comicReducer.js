const intialState = {}

const comicJokeReducer = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_JOKES_COMIC' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default comicJokeReducer
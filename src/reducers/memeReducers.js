const intialState = []

const memeReducers = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_MEME_JOKES' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default memeReducers
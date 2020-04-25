const intialState = []

const jokeProgramReducers = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_JOKES_ONE' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default jokeProgramReducers
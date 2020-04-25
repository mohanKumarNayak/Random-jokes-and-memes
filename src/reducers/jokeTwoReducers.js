const intialState = {}

const jokeTwoReducers = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_JOKES_TWO' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default jokeTwoReducers
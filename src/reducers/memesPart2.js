const intialState = []

const memesPart2 = (state=intialState,action) => {
    switch(action.type){
        case 'ADD_MEMES_PART_2' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default memesPart2
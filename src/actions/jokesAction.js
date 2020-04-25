import axios from 'axios'

export const addJokesOne = (jokes) => {
    return {type:'ADD_JOKES_ONE',payload:jokes}
}

export const startGetJokesOne = () => {
    return(dispatch)=>{
        axios.get('http://dct-cors.herokuapp.com/https://official-joke-api.appspot.com/jokes/programming/ten')
            .then((response)=>{
                dispatch(addJokesOne(response.data))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const addJokesComic = (jokes) => {
    return {type : 'ADD_JOKES_COMIC',payload:jokes}
}

export const startGetComicJokes = () => {
    return(dispatch)=>{
        const randomJoke = Math.round(Math.random()*2000)
        axios.get(`http://dct-cors.herokuapp.com/https://xkcd.com/${randomJoke}/info.0.json`)
            .then((response)=>{
                dispatch(addJokesComic(response.data))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const addJokesTwo = (jokes) => {
    return{type : 'ADD_JOKES_TWO',payload : jokes}
}

export const startGetJokesTwo = (obj) => {
    return(dispatch)=>{
        if(!obj){
            axios.get('http://dct-cors.herokuapp.com/https://sv443.net/jokeapi/v2/joke/Any')
                .then((response)=>{
                    dispatch(addJokesTwo(response.data))
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
    }
}

export const addMemeJokes = (jokes) => {
    return{type : 'ADD_MEME_JOKES',payload : jokes}
}
export const startGetMemesJokes = () => {
    return(dispatch)=>{
        axios.get('http://dct-cors.herokuapp.com/https://meme-api.herokuapp.com/gimme/6')
            .then((response)=>{
                dispatch(addMemeJokes(response.data.memes))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const addMemesPart2 = (jokes) => {
    return {type : 'ADD_MEMES_PART_2',payload : jokes}
}

export const startGetMemesPart2 = () => {
    return(dispatch)=>{
        axios.get('http://dct-cors.herokuapp.com/https://meme-api.herokuapp.com/gimme/dankmemes/2')
            .then((response)=>{
                dispatch(addMemesPart2(response.data.memes))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}
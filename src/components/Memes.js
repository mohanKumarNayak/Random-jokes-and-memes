import React from 'react'
import {connect} from 'react-redux'
import { MDBContainer, MDBRow, MDBCol,MDBTypography, MDBBtn } from 'mdbreact'
import { startGetMemesJokes, startGetMemesPart2 } from '../actions/jokesAction'
import image5 from '../images/image5.jpg'

function Memes(props){
    const handleRefresh = () => {
        props.dispatch(startGetMemesJokes())
    }
    const handleRefreshTwo = () =>{
        props.dispatch(startGetMemesPart2())
    }
    if(Object.keys(props.memes).length == 0){
        props.dispatch(startGetMemesJokes())
        props.dispatch(startGetMemesPart2())
    }
    return(
        <div style={{backgroundImage:`url(${image5})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
             <br /><br /><br />
            <MDBContainer>
            <MDBRow>
                <MDBCol md="12">
                    <MDBTypography tag='h1' variant="h1-responsive" style={{color:'black',fontSize:'40px'}}                             className="text-left">Random Memes</MDBTypography>
                    {
                        props.memes && props.memes.map((meme,i)=>{
                            return(<div key={i+'memesJokes'}> 
                                    <MDBTypography tag='h2' variant="h2-responsive" style={{color:'black'}} className="text-left">Joke - {i+1} </MDBTypography>
                                    <MDBTypography tag='h3' variant="h3-responsive" style={{color:'black'}} className="text-left">Title - {meme.title} </MDBTypography>
                                    <img src={meme.url} className="img-fluid" alt="" />
                                    <hr />
                            </div>)
                        })
                    }
                </MDBCol>
                    
            <MDBCol md="4">
                    <MDBBtn color="success" style={{borderRadius:"30px"}} className="btn btn-block" onClick={handleRefresh}>Refresh</MDBBtn>
                    <br />
                    </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol md="12">
                    <MDBTypography tag='h1' variant="h1-responsive" style={{color:'black',fontSize:'40px'}}                             className="text-left">Random Memes Part-2</MDBTypography>
                    {
                        props.memesTwo && props.memesTwo.map((meme,i)=>{
                            return(<div key={i+'memesJokes'}> 
                                    <MDBTypography tag='h2' variant="h2-responsive" style={{color:'black'}} className="text-left">Joke - {i+1} </MDBTypography>
                                    <MDBTypography tag='h3' variant="h3-responsive" style={{color:'black'}} className="text-left">Title - {meme.title} </MDBTypography>
                                    <img src={meme.url} className="img-fluid" alt="" />
                                    <hr />
                            </div>)
                        })
                    }
                </MDBCol>
                    
            <MDBCol md="4">
                    <MDBBtn color="success" style={{borderRadius:"30px"}} className="btn btn-block" onClick={handleRefreshTwo}>Refresh</MDBBtn>
                    <br />
                    </MDBCol>
            </MDBRow>
            </MDBContainer>

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        memes : state.memes,
        memesTwo : state.memesTwo
    }
}

export default connect(mapStateToProps)(Memes)
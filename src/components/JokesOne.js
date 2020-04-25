import React from 'react'
import {connect} from 'react-redux'
import { MDBContainer, MDBRow, MDBCol,MDBTypography, MDBBtn } from 'mdbreact'
import { startGetJokesOne } from '../actions/jokesAction'
import image2 from '../images/image2.jpg'

function JokesOne(props){
    const handleRefresh = () => {
        props.dispatch(startGetJokesOne())
    }
    if(props.jokeProgram.length == 0){
        props.dispatch(startGetJokesOne())
    }
    return(
        <div style={{backgroundImage:`url(${image2})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <br /><br /><br />
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                    <MDBTypography tag='h1' variant="h1-responsive" style={{color:'black',fontSize:'60px'}} className="text-center">Random Jokes</MDBTypography>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="12">
                    <MDBTypography tag='h1' variant="h1-responsive" style={{color:'black',fontSize:'40px'}}                             className="text-left">Random 10 Programming Jokes</MDBTypography>
                    {
                        props.jokeProgram && props.jokeProgram.map((joke,i)=>{
                            return(
                                <div key={i+'jokeOne'}>
                                     <MDBTypography tag='h2' variant="h2-responsive" style={{color:'black'}}        className="text-left">Joke - {i+1}</MDBTypography>
                                     <MDBTypography tag='h3' variant="h3-responsive" style={{color:'black'}}        className="text-left">setup - {joke.setup} </MDBTypography>
                                     <MDBTypography tag='h3' variant="h3-responsive" style={{color:'black'}}        className="text-left">punchline - {joke.punchline} </MDBTypography>
                                     <hr />
                                </div>
                            )
                        })
                    }
                    <MDBCol md="4">
                    <MDBBtn color="success" style={{borderRadius:"30px"}} className="btn btn-block" onClick={handleRefresh}>Refresh</MDBBtn>
                    <br />
                    </MDBCol>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        jokeProgram : state.jokeProgram
    }
}

export default connect(mapStateToProps)(JokesOne)
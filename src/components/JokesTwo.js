import React from 'react'
import {connect} from 'react-redux'
import { MDBContainer, MDBRow, MDBCol,MDBTypography, MDBBtn } from 'mdbreact'
import { startGetJokesTwo } from '../actions/jokesAction'
import image4 from '../images/image4.jpg'

function JokesTwo(props){
    const handleRefresh = () => {
        props.dispatch(startGetJokesTwo())
    }
    if(Object.keys(props.jokeTwo).length == 0){
        props.dispatch(startGetJokesTwo())
    }
    return(
        <div style={{backgroundImage:`url(${image4})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',height:'100vh',backgroundSize:'cover'}}>
             <br /><br /><br />
            <MDBContainer>
            <MDBRow>
                    <MDBCol md="12">
                    <MDBTypography tag='h1' variant="h1-responsive" style={{color:'black',fontSize:'40px'}}                             className="text-left">Random Jokes</MDBTypography>
                    <MDBTypography tag='h2' variant="h2-responsive" style={{color:'black'}} className="text-left">Category - {props.jokeTwo && props.jokeTwo.category} </MDBTypography>
                    {
                        props.jokeTwo && props.jokeTwo.type == "single" ? 
                        <div>
                            <MDBTypography tag='h2' variant="h2-responsive" style={{color:'black'}} className="text-left">Joke - {props.jokeTwo && props.jokeTwo.joke} </MDBTypography>
                        </div> :
                         <div>
                             <MDBTypography tag='h2' variant="h2-responsive" style={{color:'black'}} className="text-left">SetUp - {props.jokeTwo && props.jokeTwo.setup} </MDBTypography>
                             <MDBTypography tag='h3' variant="h2-responsive" style={{color:'black'}} className="text-left">Delivery - {props.jokeTwo && props.jokeTwo.delivery} </MDBTypography>
                         </div>
                    }





                    <MDBBtn color="success" style={{borderRadius:"30px"}}  onClick={handleRefresh}>Refresh</MDBBtn>
                    
                    </MDBCol>
                    <MDBCol md="4">
                    
                    <br />
                    </MDBCol>
            </MDBRow>
            </MDBContainer>

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        jokeTwo : state.jokeTwo
    }
}

export default connect(mapStateToProps)(JokesTwo)
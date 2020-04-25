import React from 'react'
import {connect} from 'react-redux'
import { MDBContainer, MDBRow, MDBCol,MDBTypography, MDBBtn } from 'mdbreact'
import { startGetComicJokes } from '../actions/jokesAction'
import image3 from '../images/image3.jpg'

function JokesComic(props){
    const handleRefresh = () => {
        props.dispatch(startGetComicJokes())
    }
    if(Object.keys(props.jokeComic).length == 0){
        props.dispatch(startGetComicJokes())
    }
    return(
        <div style={{backgroundImage:`url(${image3})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',height:'100vh',backgroundSize:'cover'}}>
             <br /><br /><br />
            <MDBContainer>
            <MDBRow>
                    <MDBCol md="12">
                    <MDBTypography tag='h1' variant="h1-responsive" style={{color:'black',fontSize:'40px'}}                             className="text-left">Random Comic Jokes</MDBTypography>

                    <MDBTypography tag='h2' variant="h2-responsive" style={{color:'black'}} className="text-left">Title - {props.jokeComic && props.jokeComic.safe_title} </MDBTypography>

                    <MDBRow className="mb-4">
                    <MDBCol md="8">
                        <img src={props.jokeComic && props.jokeComic.img} className="img-fluid" alt="" />
                    </MDBCol>
                    </MDBRow>

                    <MDBTypography tag='h3' variant="h3-responsive" style={{color:'black'}} className="text-left"> {props.jokeComic && props.jokeComic.alt} </MDBTypography>
                   
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
        jokeComic : state.jokeComic
    }
}

export default connect(mapStateToProps)(JokesComic)
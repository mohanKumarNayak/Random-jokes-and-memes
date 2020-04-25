import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import JokesOne from './components/JokesOne';
import JokesComic from './components/JokesComic';
import JokesTwo from './components/JokesTwo';
import Memes from './components/Memes';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    const bgPink = {backgroundColor: '#e91e63'}
    const container = {height: 1300}
    return(
      <div>
        <Router>
          <header>
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                      <MDBNavLink to="/">Random 10 Jokes</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="/comic">Comic Jokes</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="/random">Random Joke</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/memes">Random Memes</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavbarBrand href="/">
                    <strong>Random Jokes and Memes</strong>
                </MDBNavbarBrand>
                  <a href="https://github.com/mohanKumarNayak"><MDBIcon fab icon="github" size="2x"/></a>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
          <Route path="/" component={JokesOne} exact={true} />
          <Route path="/comic" component={JokesComic} />
          <Route path="/random" component={JokesTwo} />
          <Route path="/memes" component={Memes} />
        </Router>
        
      </div>
    );
  }
}


// function App() {
//   return (
//     <div>
//       <JokesOne />
//       <JokesComic />
//       <JokesTwo />
//       <Memes />
//     </div>
//   );
// }

export default App;

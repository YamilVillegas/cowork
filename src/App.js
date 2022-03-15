import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';
import { LOCATIONS } from './shared/locations'

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      locations: LOCATIONS
    }
  }
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Co-Work</NavbarBrand>
                </div>
                </Navbar>
                <Directory locations={this.state.locations}/>
            </div>
        );
    }
}

export default App;

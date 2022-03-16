import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import LocationInfo from './LocationInfo';
import { LOCATIONS } from '../shared/locations'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state ={
      locations: LOCATIONS,
      selectedLocation: null
    }
  }

  onLocationSelect(locationId) {
    this.setState({selectedLocation: locationId});
}
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Co-Work</NavbarBrand>
                </div>
                </Navbar>
                <Directory locations={this.state.locations} onClick={locationId => this.onLocationSelect(locationId)}/>
                <LocationInfo location={this.state.locations.filter(location => location.id === this.state.selectedLocation)[0]}/>
            </div>
        );
    }
}

export default Main;
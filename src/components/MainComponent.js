import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import LocationInfo from './LocationInfo';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
                <Header />
                <Directory locations={this.state.locations} onClick={locationId => this.onLocationSelect(locationId)}/>
                <LocationInfo location={this.state.locations.filter(location => location.id === this.state.selectedLocation)[0]}/>
                <Footer />
            </div>
        );
    }
}

export default Main;
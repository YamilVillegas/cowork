import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import LocationInfo from './LocationInfo';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLocation: null
        }
    }

    onLocationSelect(location) {
        this.setState({selectedLocation: location});
    }

    render() {
        const directory = this.props.locations.map(location => {
            return (
                <div key={location.id} className='col-md-5 m-1'>
                    <Card onClick={() => this.onLocationSelect(location)}>
                        <CardImg width="100%" src={location.image} alt={location.name} />
                        <CardImgOverlay>
                            <CardTitle>{location.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className='container'>
                <div className='row'>
                    {directory}
                </div>
                <div className='row'>
                    <LocationInfo location={this.state.selectedLocation}/>
                </div>
            </div>
        );
    }
}

export default Directory;
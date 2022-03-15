import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [
                {
                    id: 0,
                    name: 'New York Location',
                    image: 'assets/images/NewYorkOffice.jpeg',
                    rooms: 100,
                    description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
                },
                {
                  id: 1,
                  name: 'Chicago Location',
                  image: 'assets/images/ChicagoOffice.jpeg',
                  rooms: 75,
                  description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
                },
                {
                    id: 2,
                    name: 'California Location',
                    image: 'assets/images/CaliforniaOffice.jpeg',
                    rooms: 100,
                    description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
                },
                {
                    id: 3,
                    name: 'Florida Location',
                    image: 'assets/images/FloridaOffice.jpeg',
                    rooms: 75,
                    description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
                }
            ],
        }
    }

    render() {
        const directory = this.state.locations.map(location => {
            return (
                <div key={location.id} className='col'>
                    <img src={location.image} alt={location.name} />
                    <h2>{location.name}</h2>
                    <p>{location.description}</p>
                </div>
            )
        })

        return(
            <div className='container'>
                <div className='row'>
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;
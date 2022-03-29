import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({ location, onClick}) {
  return (
    <Card onClick={() => onClick(location.id)}>
        <CardImg width="100%" src={location.image} alt={location.name} />
        <CardImgOverlay>
            <CardTitle>{location.name}</CardTitle>
        </CardImgOverlay>
    </Card>
  );
}

function Directory(props) {
  const directory = props.locations.map((location) => {
    return (
      <div key={location.id} className="col-12 col-md-5 m-1">
        <RenderDirectoryItem location={location} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        {directory}
      </div>
    </div>
  );
}

export default Directory;
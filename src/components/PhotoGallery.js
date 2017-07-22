import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';
import { fetchPhotos } from '../actions';


class PhotoGallery extends Component {
  componentWillMount() {
    this.props.fetchPhotos();
  }

  renderPhotos() {
  return this.props.photos.map((photo) => {
    return <img className="img-responsive" src={photo.url} alt="company_data" key={photo.uuid} />;
  });
  }

    render() {
      return (
    <div className="carousel-container">
      <h1>Company Photos</h1>
      <Carousel speed={900} dragging>
      {this.renderPhotos()}
    </Carousel>
    <h6> <em> Drag Each Image to View the Slideshow! </em> </h6>
    </div>
            );
    }
}
function mapStateToProps(state) {
    return {
      photos: state.photos
    };
}

export default connect(mapStateToProps, { fetchPhotos })(PhotoGallery);

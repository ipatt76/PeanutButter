import React from 'react';

class ProductReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      rating: 0,
      comment: "",
      date: new Date().toLocaleString()
    }
  }
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
};

export default ProductReview
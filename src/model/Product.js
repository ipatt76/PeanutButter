import React from "react";
import ProductDetails from "../app/ProductDetails";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
      productName: "Jif Peanut Butter, 40 ounce",
      productDescription: "7g of Protein per serving with no preservatives, artifical flavors or colors.",
      productPrice: 7.99,
      productImage: "https://johnlawrimore.com/smu/101.png",
      productReviews: [],
    };
  };

  render() {
    return (
      <ProductDetails
        productId={this.state.productId}
        productName={this.state.productName}
        productDescription={this.state.productDescription}
        productPrice={this.state.productPrice}
        productImage={this.state.productImage}
        productReviews={this.state.productReviews}
      />
    );
  };
};

export default Product;

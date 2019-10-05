import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class DishdetailComponent extends Component {
  renderDish(dish) {
    if (dish.selectedDish != null) {
      console.log(dish.selectedDish.id);
      return (
        <Card>
          <CardImg
            key={dish.selectedDish.id}
            top
            src={dish.selectedDish.image}
            alt={dish.selectedDish.name}
          />
          <CardBody>
            <CardTitle>{dish.selectedDish.name}</CardTitle>
            <CardText>{dish.selectedDish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else return <div></div>;
  }

  render() {
    if (this.props.selectedDish != null) {
      var comments = this.props.selectedDish.comments.map(comment => {
        return (
          <div className="col-12 col-md-5 m-1">
            <Card key={comment.id}>
              <CardText>{comment.comment}</CardText>
            </Card>
          </div>
        );
      });
    } else return <div></div>;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props)}
          </div>
          <div>{comments}</div>
        </div>
      </div>
    );
  }
}
export default DishdetailComponent;

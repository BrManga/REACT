import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.handleModal = this.handleModal.bind(this);
  }
  handleModal = () => {
    this.setState({ toggle: this.state.toggle ? false : true });
    console.log(this.state.toggle);
  };
  render() {
    return (
      <div>
        <Button outline values={15} onClick={this.handleModal}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
        <div>
          <Modal isOpen={this.state.toggle}>
            Modal olacam
            <Button color="success" onClick={this.handleModal}>
              Close
            </Button>
          </Modal>
        </div>
      </div>
    );
  }
}
function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map(comment => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author}, {}
                </p>
              </li>
            );
          })}
        </ul>
        <CommentForm />
      </div>
    );
  } else return <div></div>;
}

const DishDetail = props => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null)
    if (props.dish != null)
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.comments} />
          </div>
        </div>
      );
    else return <div></div>;
};

export default DishDetail;

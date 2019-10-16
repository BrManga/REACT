import React, { Component } from "react";
import "../css/dishdetail.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  Col,
  Row,
  Label
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }
  handleModal = () => {
    this.setState({ toggle: this.state.toggle ? false : true });
  };
  handleForm = values => {
    console.log("current State is" + JSON.stringify(values));
    alert("current State is" + JSON.stringify(values));
    this.handleModal();
  };
  render() {
    return (
      <div>
        <Button outline values={15} onClick={this.handleModal}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
        <div>
          <Modal isOpen={this.state.toggle}>
            <div className="col-12">
              <LocalForm
                onSubmit={values => this.handleForm(values)}
                className={"localform"}
              >
                <div className="d-flex mb-3">
                  <div>
                    <strong>Submit Comment</strong>{" "}
                  </div>
                  <div
                    onClick={this.handleModal}
                    className="fa fa-times fa-lg ml-auto"
                  ></div>
                </div>
                <hr />
                {/* ----------------Rating Part -------------------*/}
                <Row className="form-group">
                  <Label htmlFor="rating" md={12}>
                    Rating
                  </Label>
                  <Col>
                    <Control.select
                      model=".rating"
                      name="rating"
                      className="form-control"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Control.select>
                  </Col>
                </Row>
                {/* ----------------Author Part -------------------*/}
                <Row className="form-group">
                  <Label htmlFor="author" md={12}>
                    Your Name
                  </Label>
                  <Col>
                    <Control.text
                      model=".author"
                      id="author"
                      name="author"
                      placeholder="Your Name"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15)
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".author"
                      show="touched"
                      messages={{
                        required: "Required",
                        minLength: "Must be greater than 2 characters",
                        maxLength: "Must be 15 characters or less"
                      }}
                    />
                  </Col>
                </Row>
                {/* ----------------Comment Part -------------------*/}
                <Row className="form-group">
                  <Label htmlFor="message" md={12}>
                    Your Feedback
                  </Label>
                  <Col>
                    <Control.textarea
                      model=".message"
                      id="message"
                      name="message"
                      rows="6"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </LocalForm>
            </div>
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

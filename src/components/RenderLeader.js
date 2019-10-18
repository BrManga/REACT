import React from "react";
import { Media } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";

function RenderLeader(props) {
  const leaders = props.leaders;
  console.log(leaders);
  return leaders.leaders.map(leader => {
    if (props.leaders.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (props.leaders.errMess) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>{props.leaders.errMess}</h4>
            </div>
          </div>
        </div>
      );
    } else
      return (
        <Media className="mb-3" key={leader.id}>
          <Media className="col-3" left href="#">
            <Media
              object
              src={baseUrl + leader.image}
              alt="Generic placeholder image"
            />
          </Media>
          <Media body className="col-9">
            <Media heading>{leader.name}</Media>
            <Media className="mb-1">{leader.designation}</Media>
            {leader.description}
          </Media>
        </Media>
      );
  });
}
export default RenderLeader;

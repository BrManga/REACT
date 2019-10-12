import React from "react";
import { Media } from "reactstrap";

function RenderLeader(props) {
  const leaders = props.leaders;
  return leaders.map(leader => {
    return (
      <Media className="mb-3" key={leader.id}>
        <Media className="col-3" left href="#">
          <Media object src={leader.image} alt="Generic placeholder image" />
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

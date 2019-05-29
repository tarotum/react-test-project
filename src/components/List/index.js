import React from "react";
import PropTypes from "prop-types";
import ListGroup from "../ListGroup";

import "./list.css";

function List({ list, level }) {
  return (
    <div className="list">
      {list.map((item, index) => (
        <ListGroup
          key={`level-${level}-index-${index}`}
          item={item}
          level={level}
        />
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  level: PropTypes.number.isRequired
};

export default List;

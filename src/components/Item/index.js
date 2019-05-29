import React from "react";
import classnames from "classnames";

import ToogleContext from "../../ToogleContext.js";

import "./item.css";

function Item({ name, hasChildren, level }) {
  const itemClass = classnames({
    item: true,
    [`item-level-${level}`]: true,
    "item-with-children": hasChildren
  });

  return (
    <ToogleContext.Consumer>
      {({ toogle }) => (
        <div className={itemClass} onClick={toogle}>
          {name}
        </div>
      )}
    </ToogleContext.Consumer>
  );
}

export default Item;

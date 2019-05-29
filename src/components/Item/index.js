import React from "react";
import classnames from "classnames";

import "./item.css";

function Item({ name, hasChildren, level, toogle }) {
  const itemClass = classnames({
    item: true,
    [`item-level-${level}`]: true,
    "item-with-children": hasChildren
  });

  return (
    <div className={itemClass} onClick={toogle}>
      {name}
    </div>
  );
}

export default Item;

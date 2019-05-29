import React from "react";
import Item from "../Item";
import ToogleList from "../ToogleList";
import ToogleContext from "../../ToogleContext.js";
import sliceData from "../../utils/sliceData";

import "./listGroup.css";

function hasChildren(item) {
  return item.children && item.children.length > 0;
}

const ListGroup = ({ item, level }) => {
  return (
    <ToogleContext.Consumer>
      {({ isOpen }) => (
        <>
          <Item
            name={item.name}
            hasChildren={hasChildren(item)}
            level={level}
          />
          {hasChildren(item) &&
            isOpen &&
            sliceData(item.children, 100).map((item, index) => (
              <WithToogle
                key={`level-${level}-index-${index}`}
                item={item}
                level={level + 1}
              />
            ))}
        </>
      )}
    </ToogleContext.Consumer>
  );
};

const WithToogle = ToogleList(ListGroup);
export default WithToogle;

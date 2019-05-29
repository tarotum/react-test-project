import React, { useState, useEffect } from "react";
import ToogleContext from "../../ToogleContext";
import ToogleList from "../ToogleList";
import Item from "../Item";
import sliceData from "../../utils/sliceData";

import "./listGroup.css";

const hasChildren = item => {
  return item.children && item.children.length > 0;
};

const ListGroup = props => {
  const { item, level, isOpen } = props;

  const [mode, setMode] = useState(false);

  useEffect(() => {
    setMode(isOpen);
  }, [isOpen]);

  return (
    <ToogleContext.Consumer>
      {({ set }) => {
        return (
          <>
            <Item
              name={item.name}
              hasChildren={hasChildren(item)}
              level={level}
              toogle={() => {
                if (hasChildren(item)) {
                  setMode(!mode);
                  if (level === 0) set(true);
                } else {
                  set(false);
                }
              }}
            />

            {hasChildren(item) &&
              mode &&
              sliceData(item.children, 100).map((item, index) => (
                <ListGroup
                  key={`level-${level}-index-${index}`}
                  item={item}
                  level={level + 1}
                />
              ))}
          </>
        );
      }}
    </ToogleContext.Consumer>
  );
};

export default ToogleList(ListGroup);

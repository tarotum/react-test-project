const createItem = (count, depth) => {
  const name =
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);

  if (count && depth >= 0) {
    depth--;
    const children = [];
    for (let i = 0; i < count; i++) {
      const subItem = createItem(count, depth);
      children.push(subItem);
    }

    return {
      name,
      children
    };
  }

  return { name };
};

export default (itemsCount, depth) => {
  const items = [];
  depth--;

  for (let i = 0; i < itemsCount; i++) {
    const item = createItem(itemsCount, depth);
    items.push(item);
  }

  return { data: items };
};

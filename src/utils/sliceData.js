export default (data, length) => {
  let result = [];

  if (data && data.length > length) {
    result = data.slice(0, length);
  } else {
    result = data;
  }

  return result;
};

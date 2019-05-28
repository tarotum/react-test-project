# react-test-project

## Task:
1. Create a reactjs application which is capable to render nested json data struture of the following format:
```js
{
  "data": [
    {
      "name": "String",
      "children": [
        {
          "name": "String",
          "children": [
            // ...
          ]
        }, {
          "name": "String",
          "children": [
            // ...
          ]
        },
        // ...
      ]
    }, {
      "name": "String",
      "children": [
        // ...
      ]
    },
    // ...
  ]
}
```
where nesting depth and number of siblings at each node is no more than 100. This component should show each node's name and indicate relation to it's children nodes (example: http://static.webdeveloperplus.com/uploads/2009/07/css-amazing-techniques/tree-like-navigation.png).

2. Make each node collapsable by click on it's name (the whole tree should start collapsed).

3. Make collapsable component logic reusable by using higher order component pattern.

4. Using react context make it so when you click on any the leaf node it will collapse the whole tree.

5. Make a generator of the mock data(nested json data structures) to test your component

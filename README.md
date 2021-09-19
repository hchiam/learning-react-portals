# Learning React Portals [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://github.com/hchiam/learning-react-portals/blob/main/LICENSE)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Basically inject a child component anywhere in the DOM, not necessarily into the current parent component. For example, if you want to inject content into a modal's _DOM tree_, but you want that content based on what's going on in the _React tree_ parent of the "portalled" children ([example](https://codepen.io/gaearon/pen/yzMaBd?editors=1010)). **Note:** events bubble into the _DOM tree_ parent ([example](https://codepen.io/gaearon/pen/jGBWpE?editors=1010)), but **_also_** bubble into the _React tree_ parent (I like to think of it as from the code's point of view). Portals basically let you put the children HTML somewhere else/outside of the parent, but still have React take care of bubbling etc. as if it were the children (just look from the code point of view).

<https://reactjs.org/docs/portals.html>

```jsx
render() {
  // this does not create a new div:
  return ReactDOM.createPortal(
    this.props.children, // put these children into:
    someElementThatCouldBeAnywhereInTheDOM
  );
}
```

## Setup

```bash
yarn
npx create-react-app my-app
cd my-app
yarn
yarn start
```

## Helpful reference with React hooks

<https://stackoverflow.com/questions/53595935/how-can-i-make-react-portal-work-with-react-hook>

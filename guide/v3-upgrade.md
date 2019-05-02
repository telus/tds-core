# Upgrading to TDS V3

As of **July 1st, 2019** TDS will move feature support from V2: Split Components to V3: Styled Components of the design system. This is being done primarily to facilitate the use of styled-components V4. For a detailed view of our sunsetting schedule, please read our [roadmap page](roadmap.md). Additionally, more information on this subject can be found on the the [Reference Architecture CSS Document](https://github.com/telus/reference-architecture/blob/bb7059d135574c380d2865aa1bbdd633c2345461/development/css.md).

We would also like to note that the following document also applies to Community. Community is now accepting components developed with styled-components, and it is recommended that all new components use it.

## Requirements

To upgrade to TDS V3, your repo will need **styled-components 4.1** and **React 16.8** installed. These packages are peer dependencies of all TDS V3 components, and lower versions will cause incompatibilities.

### Upgrading from styled-components V3 to V4

The styled-components team has provided a codemod to make the upgrade process from V3 to V4 as fast as possible. It can be accessed [here](https://github.com/styled-components/styled-components-codemods). If you would like more information on the changes and improvements made from V3 to V4, check out the [styled-components V4 announcement](https://medium.com/styled-components/announcing-styled-components-v4-better-faster-stronger-3fe1aba1a112).

### Upgrading from React 15 to React 16

Upgrading from React 15 to React 16 could be as straightforward as upgrading the dependency without any code changes. As noted on the [React 16 announcement post](https://reactjs.org/blog/2017/09/26/react-v16.0.html#upgrading):

> With minor exceptions, if your app runs in 15.6 without any warnings, it should work in 16.

If your app does not currently display any warnings from React, the upgrade to React 16 should work without hindrances. If your app does display warnings however, there are [official codemods](https://github.com/reactjs/react-codemod) that may be able to expedite the process of upgrading.

## Developing in Styled components

If you are unfamiliar with styled-components, we recommend you read the [official documentation](https://www.styled-components.com/docs) on the subject. Additionally, some decisions have been made about using styled-components at TELUS to encourage consistency and ease of use between codebases.

### Object notation

To make linting, using variables, and creating shared style files easier, we have decided to use object notation over string literals.

Here is an example of a styled component using string literals:

```js
const StyledDiv.styled.div`
  width: 500px;
  height: 500px;
  background-color: ${props => props.isPink ? 'hotpink' : 'green'};
  &:hover {
    background-color: purple;
  }`
```

Here is the previous example using object notation:

```js
const StyledDiv.styled.div((props)=>({
  width: '500px',
  height: '500px',
  backgroundColor: props.isPink ? 'hotpink' : 'green',
  '&:hover': {
    backgroundColor: 'purple'
  }
}));
```

### Sanitizing inputs

If it is necessary for your application to insert user input into styles, the input **must** be sanitized. Inserting user input into CSS rules without sanitizing is a security risk. For more information on security, see [styled-components advanced usage](https://www.styled-components.com/docs/advanced#security).

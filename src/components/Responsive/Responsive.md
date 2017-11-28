The Responsive component is a thin wrapper over the [**react-media**](https://github.com/ReactTraining/react-media) community 
component. We encourage mobile-first development by using the `minWidth` prop exclusively, though you're welcome to use 
`maxWidth` or any of the other props supplied by **react-media** if the need arises; **note** if you do use props 
supplied by react-media, you must provide pixel values and not breakpoint keys as used by the Responsive component.

### Breakpoints

Using the `minWidth` and `maxWidth` props, you can pass a breakpoint key. They represent the following:

| Breakpoint key | Value as `minWidth` | Value as `maxWidth` |
| -------------- | ------------------- | ------------------- |
| `sm` | 576px | 575px |
| `md` | 768px | 767px |
| `lg` | 992px | 991px |
| `xl` | 1200px | 1199px |

### Basic usage

```jsx
<div>
  <Responsive minWidth="sm" maxWidth="md">
    <Heading level="h1">Hello I'm a heading in XS and SM</Heading>
  </Responsive>
  <Responsive minWidth="md" maxWidth="lg">
    <Card>
      Hello I'm a Card in MD
    </Card>
  </Responsive>
  <Responsive minWidth="lg">
    <Button>Hello I'm a Button in L and XL</Button>
  </Responsive>
</div>
```

### Passing a child function

Since the Responsive component wraps **react-media**, you may pass a function as the only child to perform logical 
operations based on whether or not the query matches the browser viewport.

```jsx
<Responsive minWidth="sm">
{
  (matches) => 
    matches ? "You're using a large display." : "You're viewing this on mobile."
}
</Responsive>
```

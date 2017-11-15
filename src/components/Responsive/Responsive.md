### Usage

The Responsive component is a thin wrapper over the [**react-responsive**](https://github.com/contra/react-responsive) community component. We encourage mobile-first development by using the `minWidth` prop exclusively, though you're welcome to use `maxWidth` or any of the other props supplied by **react-responsive** if the need arises; **note** if you do use props supplied by react-responsive, you must provide pixel values and not breakpoint keys as used by the Responsive component.

### Breakpoints

Using the `minWidth` and `maxWidth` props, you can pass a breakpoint key. They represent the following:

| Breakpoint key | Value as `minWidth` | Value as `maxWidth` |
| ---------- | ------------------- | ------------------- |
| `sm` | 576px | 575px |
| `md` | 768px | 767px |
| `lg` | 992px | 991px |
| `xl` | 1200px | 1199px |

```jsx
<div>
  <Responsive minWidth='xs' maxWidth='md'>
    <Heading level="h1">Hello I'm a heading in XS and SM</Heading>
  </Responsive>
  <Responsive minWidth='md' maxWidth='lg'>
    <Card>
      Hello I'm a Card in MD
    </Card>
  </Responsive>
  <Responsive minWidth='lg'>
    <Button>Hello I'm a Button in L and XL</Button>
  </Responsive>
</div>
```

import React from 'react';
import { shallow } from 'enzyme';
import Container from '../Container';

describe('<Container />', () => {
  it('correctly merges className', () => {
    const container = shallow(<Container className="red" />);

    expect(container.hasClass('container')).toEqual(true);
    expect(container.hasClass('red')).toEqual(true);
  });

  it('correctly passes attributes to DOM node', () => {
    const container = shallow(<Container id="hello" title="my title" />);

    expect(container.prop('id')).toEqual('hello');
    expect(container.prop('title')).toEqual('my title');
  });

  it('correctly renders children', () => {
    const div = <div id="hello"></div>;
    const container = shallow(
      <Container>
        { div }
      </Container>
    );

    expect(container.contains(div)).toEqual(true);
  });

  it('defaults to auto width', () =>
    expect(shallow(<Container />).hasClass('container--limited-width'))
      .toEqual(false));

  it('supports opt-in max-width', () =>
    expect(shallow(<Container limitWidth />).hasClass('container--limited-width'))
      .toEqual(true));
});

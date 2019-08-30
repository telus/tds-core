import safeRest from '../safeRest'

describe('safeRest', () => {
  it('filters the style and className props', () => {
    const props = {
      variant: 'primary',
      a11yText: 'Accessibile Text',
      style: { color: 'hotpink' },
      className: 'button--primary',
    }
    const safeResetedProps = safeRest(props)
    expect(safeResetedProps).toEqual({ variant: 'primary', a11yText: 'Accessibile Text' })
  })
})

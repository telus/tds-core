// Note: This file is only necessary for the tests that use `@jest-environment node` (the SSR tests)

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

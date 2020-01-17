import { createContext } from 'react'

// This module helps establish a predefined provider and consumer when used in an application
// Be cautious about using this in multiple components as it may share only a single context among every consumer
const { Provider, Consumer } = createContext({})
export { Provider, Consumer }

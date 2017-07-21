import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Router from './app/containers/Router'

// This app doesn't use actual APIs or dynamic data currently,
// but feel free to take this app as a starting point and build it out
const initialState = {
  recentLocations: [] //redux is currently not required but have implimented it for future use.
}

const store = createStore((state) => state, initialState)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
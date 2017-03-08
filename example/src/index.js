import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import generator from '../../lib'
import reducer from './reducers'
import App from './components/App'

const store = createStore(
  reducer,
  applyMiddleware([thunk,generator])
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

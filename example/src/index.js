import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import thunk from 'redux-thunk';
import generator from '../../lib';
import reducer from './reducers';
import App from './components/App';

const store = createStore(
  reducer,
  applyMiddleware([thunk,generator])
)

const render = (Component) => {
  ReactDOM.render(
      <Provider store={store}>
        <AppContainer>
        <App />
        </AppContainer>
      </Provider>,
    document.getElementById('root')
  );
};

render(App);

// 模块热替换的 API
if (module.hot)  module.hot.accept('./components/App', () =>render(App));
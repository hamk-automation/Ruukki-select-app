import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import ReduxLogger from 'redux-logger'

import { Provider } from 'react-redux'
import reducers from './redux/reducers'
import App from './components/app.js'
import { StyleRoot } from 'radium'
import ReduxThunk from 'redux-thunk'

import 'react-widgets/dist/css/react-widgets.css'

const middlewares = [ReduxThunk]
if (process.env.NODE_ENV != 'production') {
    middlewares.push(ReduxLogger)
}
const store = createStore(reducers, applyMiddleware(...middlewares))

ReactDOM.render(
  <StyleRoot>
    <Provider store={store}>
     <App/>
    </Provider>
  </StyleRoot>,

  document.getElementById('app')
)

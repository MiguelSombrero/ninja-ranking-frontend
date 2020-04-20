import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { IconContext } from 'react-icons'

import './index.css'

ReactDOM.render(
  <IconContext.Provider value={{ size: '2.5rem', color: 'rgb(54, 51, 124)' }}>
    <Provider store={store} >
      <App />
    </Provider>
  </IconContext.Provider>,
  document.getElementById('root')
)
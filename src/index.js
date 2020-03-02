import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { IconContext } from 'react-icons'

import './index.css'

ReactDOM.render(
  <IconContext.Provider value={{ size: '1.5rem', color: 'white' }}>
    <Provider store={store} >
      <App />
    </Provider>
  </IconContext.Provider>,
  document.getElementById('root')
)
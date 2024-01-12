import ReactDOM from 'react-dom/client'
import Router from './routes/Router'
import { Provider } from 'react-redux'
import store from './store/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router/>
  </Provider>
)

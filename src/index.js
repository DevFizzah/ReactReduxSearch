import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import Details from './components/VideosList/details'
import VideosList from './components/VideosList/videosList'
import reducer from './reducers'
import{ createLogger} from 'redux-logger'
import thunk from 'redux-thunk';
import { Router, Route, browserHistory} from 'react-router';

const store = createStore(reducer,applyMiddleware(createLogger(),thunk))

render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route  path="/" component={App}>
          <Route path="movies" component={VideosList}/>
        </Route>
        <Route path="/movies/:videoId" component={Details} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

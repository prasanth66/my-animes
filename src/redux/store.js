import {createStore,compose ,applyMiddleware} from 'redux' ;
import createSagaMiddleware from 'redux-saga';


import rootReducer from './reducers'
import rootSaga from '../sagas';



const sagaMiddleware = createSagaMiddleware();

const store =compose(
  applyMiddleware(sagaMiddleware),
  // window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const store = createStore(
//   rootReducer, 
//   composeEnhancers(
//     applyMiddleware(sagaMiddleware)
//   )
// );

  sagaMiddleware.run(rootSaga);

  export default store ;
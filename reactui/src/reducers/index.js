// reducers/index.js

import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import auth from './auth'
import myCases from './myCases'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  routing,
  auth,
  myCases,
  form: formReducer
})

export default rootReducer
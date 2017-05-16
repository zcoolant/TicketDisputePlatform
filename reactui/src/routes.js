import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
  App,
  HomePage,
  CaseContainer,
  CaseIndex,
  CaseNew,
  CaseDetail,
  AboutPage,
  NotFoundPage,
  LoginPage
} from './components'

export default function createRoutes() {
  return (
    <Route path='/' component={App}>
      <IndexRoute component={HomePage}/>
      <Route path='/case' component={CaseContainer}>
        <IndexRoute component={CaseIndex}/>
        <Route path='all' component={CaseIndex}/>
        <Route path='new' component={CaseNew}/>
        <Route path=':id' component={CaseDetail}/>
      </Route>
      <Route path='/login' component={LoginPage}/>
      <Route path='/about' component={AboutPage}/>
      <Route path='*' component={NotFoundPage}/>
    </Route>
  )
}

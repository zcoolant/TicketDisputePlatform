import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { AppContainer, EnsureLoggedInContainer } from './containers'
import { HomePage, CasePage, AboutPage, NotFoundPage, LoginPage} from './components'

export default function createRoutes() {
  return (
    <Route path='/' component={AppContainer}>
      <IndexRoute component={HomePage}/>
      <Route component={EnsureLoggedInContainer}>
        <Route path='/case' component={CasePage}/>
      </Route>
      <Route path='/login' component={LoginPage}/>
      <Route path='/about' component={AboutPage}/>
      <Route path='*' component={NotFoundPage}/>
    </Route>
  )
}

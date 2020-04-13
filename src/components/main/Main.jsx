import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import IntroPage from './intro-page/IntroPage'
import ResultPage from './result-page/ResultPage'

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/avto-test" render={() => <IntroPage />} />
          <Route path="/result" render={() => <ResultPage />} />
        </Switch>
      </main>
    )
  }
}

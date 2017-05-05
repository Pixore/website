import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Sprite from './routes/Sprite'
import Home from './routes/Home'
import Modal from './components/Modal.js'

class ModalSwitch extends React.Component {
  constructor (props) {
    super(props)
    this.previousLocation = this.props.location
  }
  componentWillUpdate (nextProps) {
    const { location } = this.props
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }
  render () {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path='/' component={Home} />
          <Route path='/s/:id' component={Sprite} />
        </Switch>
        {isModal ? <Route path='/s/:id' component={Modal} /> : null}
      </div>
    )
  }
}

export default () => <Router>
  <Route component={ModalSwitch} />
</Router>

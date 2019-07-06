import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'


class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <header>
          <h1>TicTacTuring</h1>
          <Button
          onTouchTap={()=>{console.log('hello, I work')}}
          />
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
      </MuiThemeProvider>
    )
  }
}
  export default Template

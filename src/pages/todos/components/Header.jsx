import React, { Component, PropTypes } from 'react'

class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  state = {
    text: ''
  }
  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.addTodo(text)
      this.setState({text: ''})
    }
  }
  handleChange = e => {
    this.setState({text: e.target.value})
  }
  render () {
    return (
      <header>
        <h1>Todos</h1>
        <input type="text" value={this.state.text} onKeyDown={this.handleSubmit} onChange={this.handleChange}/>
      </header>
    )
  }
}

export default Header

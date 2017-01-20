import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from './components/Header'
import MainSection from './components/MainSection'
import * as todoActions from '../../modules/todos/actions'

class TodoPage extends Component {
  render () {
    const {todos, actions} = this.props
    return (
      <div>
        <Header addTodo={actions.addTodo}></Header>
        <MainSection todos={todos} actions={actions}></MainSection>
      </div>
    )
  }
}

TodoPage.propTypes = {
  todos: PropTypes.shape({
    items: PropTypes.array.isRequired
  }),
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage)

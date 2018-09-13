import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';

export default connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
  })
)(TodoList)

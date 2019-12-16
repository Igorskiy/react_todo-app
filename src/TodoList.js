import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const mark = 'Mark all as complete';

const TodoList = ({
  visibleTodos,
  todos,
  selectAllTodos,
  deleteTodo,
  toggleTodoCompleted,
}) => (

  <section className={cn(
    'main',
    { hidden: todos.length === 0 }
  )}
  >
    <input
      type="checkbox"
      onChange={selectAllTodos}
      checked={todos.every(todo => todo.completed)}
      id="toggle-all"
      className="toggle-all"
    />
    <label htmlFor="toggle-all">{mark}</label>
    <ul className="todo-list">
      {visibleTodos.map(todo => (
        <li key={todo.id}>
          <li
            className={cn(
              { completed: todo.completed }
            )}
          >
            <div className="view">
              <input
                type="checkbox"
                className="toggle"
                id={todo.id}
                checked={todo.completed}
                onChange={() => toggleTodoCompleted(todo.id)}
              />
              <label
                htmlFor={`todo-${todo.id}`}
              >
                {todo.title}
              </label>
              <button
                type="button"
                onClick={() => deleteTodo(todo.id)}
                className="destroy"
              />
            </div>
          </li>

        </li>
      ))}
    </ul>
  </section>
);

TodoList.propTypes = {
  selectAllTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodoCompleted: PropTypes.func.isRequired,
  visibleTodos: PropTypes
    .arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    })).isRequired,
  todos: PropTypes
    .arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    })).isRequired,
};

export default TodoList;
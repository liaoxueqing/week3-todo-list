import { hashHistory } from 'react-router';
import $ from 'jquery';
export const editTodo = (id, name) => ({ type: 'EDIT_TODO', id, name });
export const addTodo = (name, deleted, completed, time, userId) => dispatch => {
  fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify({
      name: name,
      deleted: deleted,
      completed: completed,
      time: time,
      userId: userId
    })
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      getTodosFromBack(dispatch);
    });
};

export const addTask = (todoId, taskContent) => dispatch => {
  console.log('add task ---', todoId, taskContent);
  fetch('/api/todos/addTask', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify({
      content: taskContent,
      todo_id: todoId
    })
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      getTodosFromBack(dispatch);
    });
};

export const deleteTodo = id => ({ type: 'DELETE_TODO', id });
export const completeTodo = id => ({ type: 'COMPLETE_TODO', id });
export const canEditTodo = id => ({ type: 'CAN_EDIT_TODO', id });
export const searchTodo = searchItem => ({ type: 'SEARCH_TODO', searchItem });
export const getTodoFromServerById = () => dispatch => {
  const id = localStorage.detailTodo;
  $.ajax({
    method: 'GET',
    url: '/api/todos/' + id,
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    },
    success: function(detailTodo) {
      dispatch({ type: 'SET_DETAIL_TODO', detailTodo });
    }
  });
};
// export const setDetailTodo = id => dispatch => {
//   dispatch({ type: "SET_DETAIL_TODO", id });
//   localStorage.detailTodo = id;
//   hashHistory.push(`/todoInfo/${id}`);
// };
export const gotTodos = todos => ({ type: 'GOT_TODOS', todos });
export const setUser = (id, name) => ({ type: 'SET_USER', id, name });
export const getUserInfo = () => dispatch => {
  $.ajax({
    url: '/api/users/logged',
    type: 'GET',
    headers: {
      Authorization: localStorage.token
    },
    success: function(user) {
      const id = user.id;
      const name = user.name;
      dispatch({
        type: 'SET_USER',
        id,
        name
      });
    }
  });
};
export const logOut = () => dispatch => {
  localStorage.removeItem('token');
  hashHistory.push('/');
};
export const RegisterToServer = (name, password) => dispatch => {
  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      password: password.value
    })
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(data);
      hashHistory.push('/');
    });
};
export const loginToServer = (name, password) => dispatch => {
  console.log(name, password);
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name.value,
      password: password.value
    })
  })
    .then(response => {
      return response.text();
    })
    .then(token => {
      localStorage.token = token;
      console.log('storage token', localStorage.token);
      hashHistory.push('/todos');
    });
};
export const getTodosFromServer = () => dispatch => {
  getTodosFromBack(dispatch);
};
export const completeServerTodo = id => dispatch => {
  $.ajax({
    method: 'PUT',
    url: '/api/todos/completed/' + id,
    headers: {
      Authorization: localStorage.getItem('token')
    },
    success: function() {
      dispatch({
        type: 'COMPLETE_TODO',
        id
      });
    }
  });
};
export const deleteServerTodo = id => dispatch => {
  $.ajax({
    method: 'delete',
    url: '/api/todos/' + id,
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    },
    success: function(todos) {
      getTodosFromBack(dispatch);
    },
    error: function(data) {
      console.log(data);
    }
  });
};
function getTodosFromBack(dispatch) {
  $.ajax({
    method: 'GET',
    url: '/api/todos',
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    },
    success: function(todos) {
      dispatch({
        type: 'GOT_TODOS',
        todos
      });
    }
  });
}

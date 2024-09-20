import {createStore} from 'redux'
export const addTodo = (text) => ({ type: 'ADD_TODO', payload: text });
export const deleteTodo = (index) => ({ type: 'DELETE_TODO', payload: index });
export const startEdit = (index, text) => ({ type: 'START_EDIT', payload: { index, text } });
export const saveEdit = (index, text) => ({ type: 'SAVE_EDIT', payload: { index, text } });

console.log(startEdit);



const initialState = {
  listTodo: [],
  editIndex: null,
  editText: '',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        listTodo: [...state.listTodo, action.payload],
      };
    case 'DELETE_TODO':
      const newList = state.listTodo.filter((_, index) => index !== action.payload);
      return {
        ...state,
        listTodo: newList,
        editIndex: state.editIndex === action.payload ? null : state.editIndex,
      };
    case 'START_EDIT':
      return {
        ...state,
        editIndex: action.payload.index,
        editText: action.payload.text
      };
    case 'SAVE_EDIT':
      const updatedList = state.listTodo.map((item, i) =>
        i === action.payload.index ? action.payload.text : item
      );
      return {
        ...state,
        listTodo: updatedList,
        editIndex: null,
        editText: '',
      };
    default:
      return state;
  }
};

 const store=createStore(todoReducer)
 export default store;

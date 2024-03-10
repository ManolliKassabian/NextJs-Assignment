import { useSelector } from 'react-redux';
import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    FILTER_TODOS,
    MARK_ALL_COMPLETED,
    UPDATE_SEARCH_TERM,
  } from './actionTypes';
import { RootState } from './store';
  
  export interface TodoState {
    todos: Todo[];
    filter: string;
    searchTerm: string;
  }
  
  interface Todo {
    text: string;
    completed: boolean;
  }
  
  type TodoAction =
    | { type: typeof ADD_TODO; payload: { text: string } }
    | { type: typeof TOGGLE_TODO; payload: { id: number } }
    | { type: typeof REMOVE_TODO; payload: { id: number } }
    | { type: typeof MARK_COMPLETED; payload: { id: number } }
    | { type: typeof MARK_INCOMPLETE; payload: { id: number } }
    | { type: typeof FILTER_TODOS; payload: { filter: string } }
    | { type: typeof UPDATE_SEARCH_TERM; payload: { searchTerm: string } }
    | { type: typeof MARK_ALL_COMPLETED };
  
  const initialState: TodoState = { todos: [], filter: 'ALL', searchTerm: '' };
  
  const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, { text: action.payload.text, completed: false }],
        };
  
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
          index.toString() === action.payload.id.toString() ? { ...todo, completed: !todo.completed } : todo
          ),
        };
  
      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter((_todo, index) => index.toString() !== action.payload.id.toString()),
        };
  
      case MARK_COMPLETED:
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
          index.toString() === action.payload.id.toString() ? { ...todo, completed: true } : todo
          ),
        };
  
      case MARK_INCOMPLETE:
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
          index.toString() === action.payload.id.toString() ? { ...todo, completed: false } : todo
          ),
        };
  
      case FILTER_TODOS:
        return {
          ...state,
          filter: action.payload.filter,
        };
  
      case UPDATE_SEARCH_TERM:
        return {
          ...state,
          searchTerm: action.payload.searchTerm,
        };
  
      case MARK_ALL_COMPLETED:
        return {
          ...state,
          todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        };
  
      default:
        return state;
    }
    
  };
  export default todoReducer;
  
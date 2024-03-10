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
  
  
  interface TodoPayload {
    text: string;
  }
  
  interface IdPayload {
    id: string;
  }
  
  interface FilterPayload {
    filter: string;
  }
  
  interface SearchTermPayload {
    searchTerm: string;
  }
  
  
  export const addTodo = (text: string): { type: string; payload: TodoPayload } => ({
    type: ADD_TODO,
    payload: { text },
  });
  
  export const toggleTodo = (id: string): { type: string; payload: IdPayload } => ({
    type: TOGGLE_TODO,
    payload: { id },
  });
  
  export const removeTodo = (id: string): { type: string; payload: IdPayload } => ({
    type: REMOVE_TODO,
    payload: { id },
  });
  
  export const markCompleted = (id: string): { type: string; payload: IdPayload } => ({
    type: MARK_COMPLETED,
    payload: { id },
  });
  
  export const markIncomplete = (id: string): { type: string; payload: IdPayload } => ({
    type: MARK_INCOMPLETE,
    payload: { id },
  });
  
  export const filterTodos = (filter: string): { type: string; payload: FilterPayload } => ({
    type: FILTER_TODOS,
    payload: { filter },
  });
  
  export const markAllCompleted = (): { type: string } => ({
    type: MARK_ALL_COMPLETED,
  });
  
  export const updateSearchTerm = (searchTerm: string): { type: string; payload: SearchTermPayload } => ({
    type: UPDATE_SEARCH_TERM,
    payload: { searchTerm },
  });
  
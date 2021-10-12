import request from 'superagent';
const URL = 'https://taylor-todos.herokuapp.com/';

// Get To-Dos 
export async function getTodos(token){
    const response = await request 
    .get(`${URL}api/todos/`)
    .set('Authorization', token)
    return response.body;
}

// Update To-Dos
export async function updateTodo(id, completed, token){
    const response = await request 
    .put (`${URL}api/todos/${id}`)
    .send ({ completed: completed })
    .set('Authorization', token)
    return response.body;
}

// Create To'Do
export async function createTodo(todo, token){
    const response = await request 
    .post (`${URL}api/todos/`)
    .send ({ todo: todo })
    .set('Authorization', token)
    return response.body;
}

// Login
export async function login(email, password){
    const response = await request 
    .post (`${URL}/auth/signin`)
    .send ({ email, password })
    return response.body;
}

// Sign Up
export async function signUp(email, password){
    const response = await request 
    .post (`${URL}/auth/signup`)
    .send ({ email, password })
    return response.body;
}


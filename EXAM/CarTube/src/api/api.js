import {clearUserData, getUserData, setUserData} from '../utility.js';

export const settings = {
    host: ''
};

async function request(url, options) {
    try {
        // * sends request with appropriate method, headers and body
        const response = await fetch(url, options);

        // * handling errors
        if (response.ok == false) {
            const error = response.json();
            throw new Error(error.message);
        }

        // * returning result
        try {
            // * parsing responses
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

// * function that creates headers, based on application state and body
function createOptions(method = 'get', body) {
    const options = {
        method,
        headers: {},
    };
    const user = getUserData();
    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }
    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }
    return options;
}

// * decorate function for all REST methods
export async function get(url) {
    return await request(url, createOptions());
}

export async function post(url, data) {
    return await request(url, createOptions('post', data));
}

export async function put(url, data) {
    return await request(url, createOptions('put', data));
}

export async function del(url){
    return await request(url, createOptions('delete'));
}

export async function login(username, password){
    const result = await post(settings.host + '/users/login', {username, password});
    setUserData(result);
    return result;
}

export async function register(username, password){
    const result = await post(settings.host + '/users/register', {username, password});
    setUserData(result);
    return result;
}

export async function logout(){
    const result = get(settings.host + '/users/logout');
    clearUserData();
    return result;
}
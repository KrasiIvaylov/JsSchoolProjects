import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';

import {logout as apiLogout} from './api/data.js';
import {homePage} from "./views/home.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";
import {catalogPage} from "./views/catalog.js";
import {createPage} from "./views/create.js";
import {detailsPage} from "./views/detail.js";
import {editPage} from "./views/edit.js";
import {profilePage} from "./views/profile.js";
import {notify} from "./notification.js"; //importing notifications file


const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();

        //ROUTE
page('/', decorateContext, guestUsersOnly ,homePage); //добавяме middleware и homePage функция
page('/login', decorateContext ,loginPage); //добавяме middleware и loginPage функция
page('/register', decorateContext ,registerPage); //добавяме middleware и registerPage функция
page('/catalog', decorateContext ,catalogPage); //добавяме middleware и catalogPage функция
page('/details/:id', decorateContext ,detailsPage); //добавяме middleware и detailsPage функция
page('/create', decorateContext ,createPage); //добавяме middleware и createPage функция
page('/edit/:id', decorateContext ,editPage); //добавяме middleware и editPage функция
page('/profile', decorateContext ,profilePage); //добавяме middleware и profilePage функция

page.start();

function guestUsersOnly(ctx, next){
    const token = sessionStorage.getItem('authToken');
    if (token != null){
        return ctx.page.redirect('/catalog');
    }
    next();
}

            //MIDDLEWARE
function decorateContext(ctx, next){
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}
             // setting up User Navigation bar
function setUserNav(){
    const email = sessionStorage.getItem('email');
    if (email != null){
        document.querySelector('div.profile > span').textContent = `Welcome, ${email}`;
        document.querySelector('.user').style.display = '';
        document.querySelector('.guest').style.display = 'none';
    }else{
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = '';
    }
}

async function logout() {
    await apiLogout();
    setUserNav();
    page.redirect('/');
}
import page from '../node_modules/page/page.mjs';
import {render} from '../node_modules/lit-html/lit-html.js';

import {logout as apiLogout} from './api/data.js';
import {homePage} from "./views/home.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";
import {articlesPage} from "./views/catalog.js";
import {createPage} from "./views/create.js";
import {detailsPage} from "./views/detail.js";

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();

        //ROUTE
page('/', decorateContext,homePage);
page('/login', decorateContext ,loginPage);
page('/register', decorateContext ,registerPage);
page('/catalog', decorateContext ,articlesPage);
page('/create', decorateContext ,createPage);
page('/details/:id', decorateContext ,detailsPage);
page.start();

function guestUsersOnly(ctx, next){
    const token = sessionStorage.getItem('authToken');
    if (token != null){
        return ctx.page.redirect('/');
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
        //document.querySelector('div.profile > span').textContent = `Welcome, ${email}`;
        document.getElementById('user').style.display = '';
        document.getElementById('guest').style.display = 'none';
    }else{
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = '';
    }
}

async function logout() {
    await apiLogout();
    setUserNav();
    page.redirect('/');
}
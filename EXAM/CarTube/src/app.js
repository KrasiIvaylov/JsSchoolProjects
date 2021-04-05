import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import {logout as apiLogout} from './api/data.js';
import {getUserData} from './utility.js';
import {homePage} from "./views/home.js";
import {loginPage, registerPage} from "./views/auth.js";
import {catalogPage} from "./views/catalog.js";
import {detailsPage} from "./views/detail.js";
import {createPage} from "./views/create.js";
import {editPage} from "./views/edit.js";
import {profilePage} from "./views/profile.js";
import {searchPage} from "./views/search.js";

const main = document.getElementById('site-content');
document.getElementById('logout-btn').addEventListener('click', logout);
setUserNav();

page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/all-listings', decorateContext, catalogPage);
page('/details/:id', decorateContext, detailsPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/my-listings', decorateContext, profilePage);
page('/search', decorateContext, searchPage);

page.start();

// MIDDLEWARE
function decorateContext(ctx, next){
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    ctx.user = getUserData();
    next();
}

function setUserNav(){
    const user = getUserData();
    if (user){
        document.getElementById('profile').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user-greeting').textContent = `Welcome ${user.username}`;
    }else{
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}

async function logout(){
    await apiLogout();
    setUserNav();
    page.redirect('/');
}
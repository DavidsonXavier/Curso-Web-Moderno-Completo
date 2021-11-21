import React from "react";
import MenuItens from './MenuItens'
import './Nav.css'

const Nav = props=>
<aside className="menu-area">
    <MenuItens icon={'home'} name={'Início'}/>
    <MenuItens icon ={'user'} name={'Usuário'}value="users"/>
</aside>

export default Nav
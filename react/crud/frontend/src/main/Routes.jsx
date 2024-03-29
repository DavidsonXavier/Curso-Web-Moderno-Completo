import React from "react";
import {Switch, Route, Redirect} from 'react-router'

import Home from '../componentes/home/Home'
import UserCrud from "../componentes/user/userCrud"

const Routes = props =>
<Switch>
    <Route exact path ='/' component={Home} />
    <Route patch='/users' component={UserCrud} />
    <Redirect from ='*' to='/' />
</Switch>

export default Routes
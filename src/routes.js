import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Match from './pages/Match';
import Matches from './pages/Matches';

export default function Routes() {
    return(
        <Switch>
            <Route path="/" exact component={Match} />
            <Route path="/matches" component={Matches} />
        </Switch>
    )
}
import React, { Component ,PropTypes} from 'react';
import ReactDOM from 'react/lib/ReactDOM';
import { Redirect, Router, Route } from 'react-router';
import History from 'history/lib/createHashHistory';

import '../css/common.less';

import Base from './base.js';
import FilterCheckbox from './checkbox.js';

let Index = ()=>(
    <div className="index-wrapper">
        <header>
            ph-filter
        </header>
        <ul className="index-menu">
            <li><a href="#/base">Base</a></li>
            <li><a href="#/checkbox">Checkbox</a></li>
        </ul>
    </div>
);

let AppRouter = class AppRouter extends Component {
    constructor(props, context) {
        super(props, context);
        this.history = new History({
            queryKey: false
        });
    }

    render() {
        return (
            <Router history={this.history}>
                <Route path="/index" name="base" component={Index} />
                <Route path="/base" name="base" component={Base} />
                <Route path="/checkbox" name="checkbox" component={FilterCheckbox} />
                <Redirect from="/" to="/index" />
            </Router>
        );
    }
};


let App = ()=>(
    <div>
        <AppRouter />
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
);



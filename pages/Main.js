import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Portfolio from '../pages/Portfolio';
import M from 'materialize-css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

export default class Main extends Component {
    state = {
        portfolio: '',
        contact: '',
    }
    componentDidMount() {
        M.AutoInit()
    }

    navClick = event => {
        this.setState({
            portfolio: '',
            contact: '',
            [event.target.name]: 'active'
        })
    }
    render() {
        return (
            <Router>
                <Navbar
                navClick={this.navClick}
                portfolio={this.state.portfolio}
                contact={this.state.contact}
                />
                <main>
                    <Switch>
                        <Route exact path='/'>
                            <Card/>
                        </Route>
                        <Route exact path='/portfolio'>
                            <Portfolio/>
                        </Route>
                    </Switch>
                </main>
            </Router>
        )
    }
}
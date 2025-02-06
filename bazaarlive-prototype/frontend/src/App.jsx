import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SellerDashboard from './pages/SellerDashboard';
import Checkout from './pages/Checkout';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={SellerDashboard} />
                <Route path="/checkout" component={Checkout} />
            </Switch>
        </Router>
    );
};

export default App;
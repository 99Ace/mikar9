import React from 'react';
// import react router stuff
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import custom CSS file
import './styles/style.css'

class App extends React.Component {

    render() {
        return <React.Fragment>
            <div className='p-3'>
                <Router>
                    {/*  Setting the Links */}
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'
                                className='text-dark font-weight-bold'
                                >Home</Link></li>
                            <li>
                                <Link to='/find-a-car'
                                className='text-dark font-weight-bold'                                
                                >Finding a car</Link></li>
                            <li>
                                <Link to='/sell-a-car'
                                className='text-dark font-weight-bold'
                                >Selling a car</Link></li>
                            <li>
                                <Link to='/contact-us'
                                className='text-dark font-weight-bold'
                                >Contact Us</Link></li>
                        </ul>
                    </nav>

                    <Switch>
                        <div className='w-100'>
                            {/* Setting the path for the route */}
                            <Route exact path='/'>
                                <h1>Home</h1>
                                <button className='btn btn-success m-1 ml-auto mr-0'>Home</button>
                            </Route>
                            <Route exact path='/find-a-car'>
                                <h1>Find a car</h1>
                                <button className='btn btn-primary m-1'>Find a car</button>
                            </Route>
                            <Route exact path='/sell-a-car'>
                                <h1>Sell a car</h1>
                                <button className='btn btn-danger m-1'>Sell a car</button>
                            </Route>
                            <Route exact path='/contact-us'>
                                <h1>Contact Us</h1>
                                <button className='btn btn-light m-1'>Contact Us</button>
                            </Route>
                        </div>
                    </Switch >

                </Router >
            </div >
        </React.Fragment>

    }
}

export default App;

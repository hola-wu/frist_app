import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { TicTacToe } from './pages/TicTacToe';
import { GoodsShow } from './pages/GoodsShow';
import { Home } from './pages/Home';
// import { Jump } from './pages/components/Jump';
import { Travel } from './pages/Travel';
import { Traveler } from './pages/Traveler';
import { TravelManager } from './pages/TravelManager';
import { TravelPlanShow } from './pages/TravelPlanShow';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(() => [], {}, applyMiddleware());


export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <BrowserRouter>
                        <div>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/TicTacToe' component={TicTacToe}>
                                {/* <BrowserRouter basename='/TicTacToe'>
                                    <Switch>
                                        <Route path='/Jump' exact component={Jump}></Route>
                                        // <Route path='/../' exact component={Home}></Route>
                                        // <Route path='/../TicTacToe' exact component={TicTacToe}></Route>
                                        // <Route path='/../GoodsShow' exact component={GoodsShow}></Route>
                                        <Route path='/' component={TicTacToe}></Route>
                                        <Redirect to='/' />
                                    </Switch>
                                </BrowserRouter> */}
                            </Route>
                            <Route path='/GoodsShow' exact component={GoodsShow}></Route>
                            <Route path='/Travel' exact component={Travel}>
                                {/* <BrowserRouter>
                                <Switch>
                                    <Route path='/Traveler' exact component={Traveler}></Route>
                                    <Route path='/TravelManager' exact component={TravelManager}></Route>
                                    <Route path='/' exact component={Travel}></Route>
                                    <Redirect to='/' />
                                </Switch>
                                </BrowserRouter> */}
                            </Route>
                            <Route path='/Traveler' exact component={Traveler}></Route>
                            <Route path='/TravelManager' exact component={TravelManager}></Route>
                            <Route path='/TravelPlanShow' exact component={TravelPlanShow}></Route>
                        </div>
                    </BrowserRouter>
                </Fragment>
            </Provider>
        )
    }
}

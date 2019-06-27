import React from 'react';
import Layout from '../hoc/Layout/Layout';
import {Route, Switch, Redirect} from 'react-router-dom'
import PeoplePage from '../containers/PeoplePage/PeoplePage';
import PlanetsPage from '../containers/PlanetsPage/PlanetsPage';
import StarShipsPage from '../containers/StarShipsPage/StarShipsPage';




const App = () => {
    const styles = {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingBottom: 100
    };
        return (
                <Layout>
                    <div className='d-flex justify-content-between flex-md-wrap' style={styles}>
                        <Switch>
                            <Route path='/' exact component={PeoplePage} />
                            <Route path='/planets' component={PlanetsPage} />
                            <Route path='/starships' component={StarShipsPage}/>
                            <Redirect to='/'/>
                        </Switch>
                    </div>
                </Layout>
        );
    }


export default App;

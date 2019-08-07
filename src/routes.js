import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/layout';
import Dashboard from './pages/Dashboard/dashboard';
class Routes extends Component{
  render(){
    return(
      <Layout>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Layout>
    )
  }
}

export default Routes;

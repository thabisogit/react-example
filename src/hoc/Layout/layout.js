import React, {Component} from 'react';
import Sidebar from '../../components/Sidebar/sidebar';
import Header from '../../components/Header/header';
class Layout extends Component{
state = {
}
  render(){
    return (
      <div>
      <Header />
      <Sidebar />
          {this.props.children}
      </div>
    )
  }
}


export default Layout;

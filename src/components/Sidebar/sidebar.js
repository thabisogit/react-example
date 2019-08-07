import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () =>{

  const items =  [
    {
      text: 'Dashboard',
      link: '/dashboard',
      icon: 'fa fa-dashboard'
    },
    {
      text: 'Doctors',
      link: '/doctors',
      icon: 'fa fa-user-md'
    },
    {
      text: 'Patients',
      link: '/patients',
      icon: 'fa fa-wheelchair'
    },
    {
      text: 'Appointments',
      link: '/appointments',
      icon: 'fa fa-calendar'
    },
    {
      text: 'Doctor Schedule',
      link: '/doctor-schedule',
      icon: 'fa fa-calendar-check-o'
    },
    {
      text: 'Departments',
      link: '/departments',
      icon: 'fa fa-hospital-o'
    },
    {
      text: 'Chat',
      link: '/chat',
      icon: 'fa fa-comments'
    },
    {
      text: 'Employees',
      link: '/employees',
      icon: 'fa fa-user',
      Subclass: 'submenu',
      classArrow: 'menu-arrow'
    },
    {
      text: 'Accounts',
      link: '/accounts',
      icon: 'fa fa-money',
      Subclass: 'submenu',
      classArrow: 'menu-arrow'
    },
    {
      text: 'Payroll',
      link: '/payroll',
      icon: 'fa fa-book',
      Subclass: 'submenu',
      classArrow: 'menu-arrow'
    },
    {
      text: 'Calls',
      link: '/calls',
      icon: 'fa fa-video-camera camera',
      Subclass: 'submenu',
      classArrow: 'menu-arrow'
    },
    {
      text: 'Email',
      link: '/email',
      icon: 'fa fa-envelope',
      Subclass: 'submenu',
      classArrow: 'menu-arrow'
    },
    {
      text: 'Blog',
      link: '/blog',
      icon: 'fa fa-commenting-o',
      Subclass: 'submenu',
      classArrow: 'menu-arrow'
    },
    {
      text: 'Assets',
      link: '/assets',
      icon: 'fa fa-cube'
    },
    {
      text: 'Activities',
      link: '/activities',
      icon: 'fa fa-bell-o'
    },
    {
      text: 'Reports',
      link: '/reports',
      icon: 'fa fa-flag-o',
      Subclass: 'submenu',
      classArrow: 'menu-arrow',
      dropDowns: [{
            text: 'Expense Report',
            link: '/expense-report'
      }]
  }]


const showItems = () =>{
  return items.map((item,i)=>{

  
    return(

        <li key={i} className={item.Subclass}>
          <Link to={item.link}><i className={item.icon}></i> <span>{item.text}</span><span className={item.classArrow}></span></Link>
          {item.Subclass === 'submenu' ?
          <ul  style={{display: 'none'}}>
            <li><Link to="">{item.text}</Link></li>
          </ul>
          :
          null
          }

        </li>
    )
  })
}
return(
  <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="menu-title">Main</li>
                        {showItems()}
                    </ul>
                </div>
            </div>
        </div>
)
}
export default Sidebar;

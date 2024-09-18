import { useState } from 'react'
import logo from '../assets/logo.svg';
import {Link} from 'react-router-dom';
function Sidebar() {
  return (
    <>
      <nav id="sidebar" className="sidebar-wrapper">
        <div className="app-brand px-3 py-2 d-flex align-items-center">
          <a href="index.html">
            <Link to='Dashboard'>
              <img src={logo} className="logo" alt="Bootstrap Gallery" />
            </Link>
          </a>
        </div>
        <div className="sidebarMenuScroll">
          <ul className="sidebar-menu">
            <li className="active current-page">
              <Link to='Dashboard'>
                <i className="icon-home"></i>
                <span className="menu-text">Dashboard</span>
              </Link>
            </li>
            <li>
                <Link to='Adduser'>
                <i className="icon-pie-chart"></i>
                <span className="menu-text">Add User</span>
                </Link>
            </li>
            <li className="treeview">
              <a href="#!">
                <i className="icon-book-open"></i>
                <span className="menu-text">Pages</span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="contacts.html">Contacts</a>
                </li>
                <li>
                  <a href="faq.html">FAQ's</a>
                </li>
                <li>
                  <a href="invoice-list.html">Invoice List</a>
                </li>
                <li>
                  <a href="invoice.html">Invoice Details</a>
                </li>
                <li>
                  <a href="create-invoice.html">Create Invoice</a>
                </li>
                <li>
                  <a href="notifications.html">Notifications</a>
                </li>
                <li>
                  <a href="subscribers.html">Subscribers</a>
                </li>
                <li>
                  <a href="profile.html">User Profile</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="datatables.html">
                <i className="icon-grid_on"></i>
                <span className="menu-text">DataTables</span>
              </a>
            </li>
            <li>
              <a href="editor.html">
                <i className="icon-edit"></i>
                <span className="menu-text">Editor</span>
              </a>
            </li>
            <li>
              <a href="placeholder.html">
                <i className="icon-align-left"></i>
                <span className="menu-text">Placeholder</span>
              </a>
            </li>
            <li className="treeview">
              <a href="#!">
                <i className="icon-calendar"></i>
                <span className="menu-text">Calendars</span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="calendar.html">Daygrid View</a>
                </li>
                <li>
                  <a href="calendar-external-draggable.html">External Draggable</a>
                </li>
                <li>
                  <a href="calendar-google.html">Google Calendar</a>
                </li>
                <li>
                  <a href="calendar-list-view.html">List View</a>
                </li>
                <li>
                  <a href="calendar-selectable.html">Selectable</a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#!">
                <i className="icon-layers"></i>
                <span className="menu-text">Components</span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="accordions.html">Accordions</a>
                </li>
                <li>
                  <a href="alerts.html">Alerts</a>
                </li>
                <li>
                  <a href="avatars.html">Avatars</a>
                </li>
                <li>
                  <a href="buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="badges.html">Badges</a>
                </li>
                <li>
                  <a href="cards.html">Cards</a>
                </li>
                <li>
                  <a href="custom-cards.html">Custom Cards</a>
                </li>
                <li>
                  <a href="carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="icons.html">Icons</a>
                </li>
                <li>
                  <a href="list-items.html">List Items</a>
                </li>
                <li>
                  <a href="modals.html">Modals</a>
                </li>
                <li>
                  <a href="progress.html">Progress Bars</a>
                </li>
                <li>
                  <a href="popovers.html">Popovers</a>
                </li>
                <li>
                  <a href="tabs.html">Tabs</a>
                </li>
                <li>
                  <a href="tooltips.html">Tooltips</a>
                </li>
                <li>
                  <a href="spinners.html">Spinners</a>
                </li>
                <li>
                  <a href="typography.html">Typography</a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#!">
                <i className="icon-layout"></i>
                <span className="menu-text">Forms</span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="form-inputs.html">Basic Form Inputs</a>
                </li>
                <li>
                  <a href="form-checkbox-radio.html">Checkbox &amp; Radio</a>
                </li>
                <li>
                  <a href="form-file-input.html">File Input</a>
                </li>
                <li>
                  <a href="form-validations.html">Validations</a>
                </li>
                <li>
                  <a href="date-time-pickers.html">Date Time Pickers</a>
                </li>
                <li>
                  <a href="form-layouts.html">Form Layouts</a>
                </li>
                <li>
                  <a href="input-tags.html">Input Tags</a>
                </li>
                <li>
                  <a href="input-masks.html">Input Masks</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="starter-page.html">
                <i className="icon-padding"></i>
                <span className="menu-text">Starter Page</span>
              </a>
            </li>
            <li>
              <a href="tables.html">
                <i className="icon-grid"></i>
                <span className="menu-text">Tables</span>
              </a>
            </li>
            <li className="treeview">
              <a href="#!">
                <i className="icon-map"></i>
                <span className="menu-text">Graphs & Maps</span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="apex.html">Apex</a>
                </li>
                <li>
                  <a href="morris.html">Morris</a>
                </li>
                <li>
                  <a href="maps.html">Maps</a>
                </li>
              </ul>
            </li>

            <li className="treeview">
              <a href="#!">
                <i className="icon-lock"></i>
                <span className="menu-text">Authentication</span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="signup.html">Signup</a>
                </li>
                <li>
                  <a href="forgot-password.html">Forgot Password</a>
                </li>
                <li>
                  <a href="page-not-found.html">Page Not Found</a>
                </li>
                <li>
                  <a href="maintenance.html">Maintenance</a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#!">
                <i className="icon-notes"></i>
                <span className="menu-text">Multi Level</span>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="#!">Level One Link</a>
                </li>
                <li>
                  <a href="#!">
                    Level One Menu
                    <i className="icon-arrow_forward_ios"></i>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="#!">Level Two Link</a>
                    </li>
                    <li>
                      <a href="#!">Level Two Menu
                        <i className="icon-arrow_forward_ios"></i>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="#!">Level Three Link</a>
                        </li>
                        <li>
                          <a href="#!">Level Three Link</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#!">Level One Link</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Sidebar

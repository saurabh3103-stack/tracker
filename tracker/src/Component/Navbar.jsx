import { useState } from 'react'
import Sidebar from './Sidebar'
import logo from '../assets/logo-sm.svg'
function Navbar() {
  return (
    <>
      <div class="app-header d-flex align-items-center">
        <div class="d-flex">
          <button class="btn btn-outline-success toggle-sidebar" id="toggle-sidebar">
            <i class="icon-menu"></i>
          </button>
          <button class="btn btn-outline-success pin-sidebar" id="pin-sidebar">
            <i class="icon-menu"></i>
          </button>
        </div>
        <div class="app-brand-sm d-md-none d-sm-block">
          <a href="index.html">
            <img src={logo} class="logo" alt="Bootstrap Gallery"/>
          </a>
        </div>
        <div class="search-container d-lg-block d-none mx-3">
          <input type="text" class="form-control" placeholder="Search" />
          <i class="icon-search"></i>
        </div>
        <div class="header-actions">
          <div class="d-md-flex d-none">
            <div class="dropdown">
              <a class="dropdown-toggle d-flex p-3 position-relative" href="#!" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img src="assets/images/flags/1x1/gb.svg" class="flag-img" alt="Great Britain" />
              </a>
              <div class="dropdown-menu dropdown-menu-end shadow-sm dropdown-menu-mini">
                <div class="country-container">
                  <a href="index.html" class="py-2">
                    <img src="assets/images/flags/1x1/us.svg" alt="USA" />
                  </a>
                  <a href="index.html" class="py-2">
                    <img src="assets/images/flags/1x1/in.svg" alt="India" />
                  </a>
                  <a href="index.html" class="py-2">
                    <img src="assets/images/flags/1x1/br.svg" alt="Brazil" />
                  </a>
                  <a href="index.html" class="py-2">
                    <img src="assets/images/flags/1x1/tr.svg" alt="Turkey" />
                  </a>
                  <a href="index.html" class="py-2">
                    <img src="assets/images/flags/1x1/id.svg" alt="Indonesia" />
                  </a>
                </div>
              </div>
            </div>
            <div class="dropdown">
              <a class="dropdown-toggle d-flex p-3 position-relative" href="#!" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <i class="icon-shopping-cart fs-4 lh-1 text-secondary"></i>
                <span class="count rounded-circle bg-danger">9</span>
              </a>
              <div class="dropdown-menu dropdown-menu-end dropdown-menu-md shadow-sm">
                <h5 class="fw-semibold px-3 py-2 m-0">Orders</h5>
                <a href="javascript:void(0)" class="dropdown-item">
                  <div class="d-flex align-items-start py-2">
                    <div class="p-3 bg-danger-light border border-danger rounded-circle me-3">
                      MS
                    </div>
                    <div class="m-0">
                      <h6 class="mb-1 fw-semibold">Moory Sammy</h6>
                      <p class="mb-1 text-secondary">Ordered an iPhone.</p>
                      <p class="small m-0 text-secondary">3 Mins Ago</p>
                    </div>
                  </div>
                </a>
                <a href="javascript:void(0)" class="dropdown-item">
                  <div class="d-flex align-items-start py-2">
                    <div class="p-3 bg-primary-light border border-primary rounded-circle me-3">
                      KY
                    </div>
                    <div class="m-0">
                      <h6 class="mb-1 fw-semibold">Kyle Yomaha</h6>
                      <p class="mb-1 text-secondary">Purchased a MacBook.</p>
                      <p class="small m-0 text-secondary">5 Mins Ago</p>
                    </div>
                  </div>
                </a>
                <a href="javascript:void(0)" class="dropdown-item">
                  <div class="d-flex align-items-start py-2">
                    <div class="p-3 bg-success-light border border-success rounded-circle me-3">
                      SB
                    </div>
                    <div class="m-0">
                      <h6 class="mb-1 fw-semibold">Srinu Basava</h6>
                      <p class="mb-1 text-secondary">Purchased a NotePad.</p>
                      <p class="small m-0 text-secondary">7 Mins Ago</p>
                    </div>
                  </div>
                </a>
                <div class="d-grid p-3 border-top">
                  <a href="javascript:void(0)" class="btn btn-outline-primary">View all</a>
                </div>
              </div>
            </div>
            <div class="dropdown">
              <a class="dropdown-toggle d-flex p-3 position-relative" href="#!" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <i class="icon-twitch fs-4 lh-1 text-secondary"></i>
                <span class="count rounded-circle bg-danger">5</span>
              </a>
              <div class="dropdown-menu dropdown-menu-end dropdown-menu-md shadow-sm">
                <h5 class="fw-semibold px-3 py-2 m-0">Notifications</h5>
                <a href="javascript:void(0)" class="dropdown-item">
                  <div class="d-flex align-items-start py-2">
                    <img src="assets/images/user.png" class="img-3x me-3 rounded-3" alt="Admin Themes" />
                    <div class="m-0">
                      <h6 class="mb-1 fw-semibold">Sophie Michiels</h6>
                      <p class="mb-1 text-secondary">
                        Membership has been ended.
                      </p>
                      <p class="small m-0 text-secondary opacity-50">
                        Today, 07:30pm
                      </p>
                    </div>
                  </div>
                </a>
                <a href="javascript:void(0)" class="dropdown-item">
                  <div class="d-flex align-items-start py-2">
                    <img src="assets/images/user2.png" class="img-3x me-3 rounded-3" alt="Admin Theme" />
                    <div class="m-0">
                      <h6 class="mb-1 fw-semibold">Sophie Michiels</h6>
                      <p class="mb-1 text-secondary">
                        Congratulate, James for new job.
                      </p>
                      <p class="small m-0 text-secondary opacity-50">
                        Today, 08:00pm
                      </p>
                    </div>
                  </div>
                </a>
                <a href="javascript:void(0)" class="dropdown-item">
                  <div class="d-flex align-items-start py-2">
                    <img src="assets/images/user1.png" class="img-3x me-3 rounded-3" alt="Admin Theme" />
                    <div class="m-0">
                      <h6 class="mb-1 fw-semibold">Sophie Michiels</h6>
                      <p class="mb-1 text-secondary">
                        Lewis added new schedule release.
                      </p>
                      <p class="small m-0 text-secondary opacity-50">
                        Today, 09:30pm
                      </p>
                    </div>
                  </div>
                </a>
                <div class="d-grid p-3 border-top">
                  <a href="javascript:void(0)" class="btn btn-outline-primary">View all</a>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown ms-2">
            <a class="dropdown-toggle d-flex align-items-center user-settings" href="#!" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              <span>Fuzail Malik</span>
              <img src="assets/images/user3.png" class="img-3x m-2 me-0 rounded-3" alt="User Avatar" />
            </a>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-sm shadow-sm gap-3">
              <a class="dropdown-item d-flex align-items-center py-2" href="profile.html"><i
                  class="icon-gitlab fs-4 me-3"></i>User Profile</a>
              <a class="dropdown-item d-flex align-items-center py-2" href="account-settings.html"><i
                  class="icon-settings fs-4 me-3"></i>Account Settings</a>
              <a class="dropdown-item d-flex align-items-center py-2" href="login.html"><i
                  class="icon-log-out fs-4 me-3"></i>Logout</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar

import React , {useState} from "react";
import Key from "../images/key.png";
import promote from "../images/promotions.png";
import help from "../images/question.png";
import Setting from "../images/setting.png";
import wallet from "../images/wallet.png";
import Dashboard from "./Dashboard";
import ProductSell from "./ProductSell";
import Sidebar from "./SideBar";
import menu from "../images/menu.png"

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <img className="hide_in_web" src={menu} alt="" onClick={toggleSidebar} height={24} style={{margin : "10px 28px"}}></img>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />

      <div className="container-fluid overflow-hidden">
        <div className="row vh-100 overflow-auto ">
          <div
            className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 d-flex sticky-top Background hide_in_mobile"
            style={{ paddingBottom: "40px" }}
          >
            <div className=" d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-2 pt-2 text-white ps-0 pe-0">
              <a
                href="/"
                className="d-flex align-items-center pb-sm-3 mt-3 d-none d-sm-inline mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <img
                  src={Setting}
                  alt="key"
                  height={24}
                  width={24}
                  style={{ marginBottom: "4px" }}
                />
                <span className="d-none d-sm-inline fs-5 ms-2">Dashboard</span>
              </a>
              <ul
                className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 w-100 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item w-100 SidebarLi">
                  <a href="#" className="nav-link px-sm-0 px-2">
                    <img
                      src={Key}
                      alt="key"
                      height={18}
                      width={18}
                      className="filterImg"
                    />
                    <span className="ms-3 d-none d-sm-inline SidebarHeading">
                      Dashboard
                    </span>
                  </a>
                </li>
                <li className=" w-100 SidebarLi">
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-sm-0 px-2"
                  >
                    <img
                      src={Key}
                      alt="key"
                      height={18}
                      width={18}
                      className="filterImg"
                    />
                    <span className="ms-3 d-none d-sm-inline SidebarHeading">
                      Product
                    </span>{" "}
                    <i
                      className="fa fa-angle-right rightarrow"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li className=" w-100 SidebarLi">
                  <a href="#" className="nav-link px-sm-0 px-2">
                    <img
                      src={Key}
                      alt="key"
                      height={18}
                      width={18}
                      className="filterImg"
                    />
                    <span className="ms-3 d-none d-sm-inline SidebarHeading ">
                      Customers
                      <i
                        className="fa fa-angle-right rightarrow"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </a>
                </li>

                <li className=" w-100 SidebarLi">
                  <a href="#" className="nav-link px-sm-0 px-2">
                    <img
                      src={wallet}
                      alt="key"
                      height={18}
                      width={18}
                      className="filterImg"
                    />
                    <span className="ms-3 d-none d-sm-inline SidebarHeading">
                      Income{" "}
                      <i
                        className="fa fa-angle-right rightarrow"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </a>
                </li>
                <li className=" w-100 SidebarLi">
                  <a href="#" className="nav-link px-sm-0 px-2">
                    <img
                      src={promote}
                      alt="key"
                      height={18}
                      width={18}
                      className="filterImg"
                    />
                    <span className="ms-3 d-none d-sm-inline SidebarHeading">
                      Promote{" "}
                      <i
                        className="fa fa-angle-right rightarrow"
                        aria-hidden="true"
                      ></i>
                    </span>{" "}
                  </a>
                </li>
                <li className=" w-100 SidebarLi">
                  <a href="#" className="nav-link px-sm-0 px-2">
                    <img
                      src={help}
                      alt="key"
                      height={18}
                      width={18}
                      className="filterImg"
                    />
                    <span className="ms-3 d-none d-sm-inline SidebarHeading">
                      Help{" "}
                      <i
                        className="fa fa-angle-right rightarrow"
                        aria-hidden="true"
                      ></i>
                    </span>{" "}
                  </a>
                </li>
              </ul>
              <div
                className="dropdown mt-sm-auto ms-auto ms-sm-0 flex-shrink-1"
                style={{
                  width: "100%",
                  background: "#534895fc",
                  borderRadius: "3px",
                }}
              >
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle profile-section"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="28"
                    height="28"
                    className="rounded-circle"
                  />
                  <div style={{ marginLeft: "5px" }}>
                    <h1 className="profile-Name">Evano</h1>
                    <p className="designation">Project Manager</p>
                  </div>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark text-small shadow"
                  aria-labelledby="dropdownUser1"
                  style={{ width: "100%" }}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col d-flex flex-column h-sm-100">
            <main className="row overflow-auto p-4">
              <Dashboard />
              <ProductSell />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

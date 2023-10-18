import React from "react";
import Rupees from "../images/income.png";
import Order from "../images/test.png";
import Shopping from "../images/shopping-bag.png";
import Hello from "../images/hello1.jpg";
import BarChartExample from "./BarChart";
import PieChartExample from "./PieChart";

const Dashboard = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="d-flex justify-content-between">
          <h1 className="userHeading">
            Hello Simran
            <img
             className="hide_in_mobile"
              src={Hello}
              height={20}
              width={20}
              style={{ marginLeft: "5px" }}
              alt="hello"
            />,
          </h1>
          <div className="main-1">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control form-control-search"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mt-4">
        <div className="CardDiv">
          <img src={Rupees} height={110} width={110} alt="rupees" />
          <div>
            <h6 className="Heading1">Earning</h6>
            <h6 className="heading2">$196k</h6>
            <p className="heading3">
              <span
                style={{
                  color: "#0baa49",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                &uarr; 37.8%
              </span>{" "}
              this month
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mt-4">
        <div className="CardDiv">
          <img src={Order} height={110} width={110} alt="order" />
          <div>
            <h6 className="Heading1">Orders</h6>
            <h6 className="heading2">$2.4k</h6>
            <p className="heading3">
              <span
                style={{
                  color: "#EA1A85",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                &darr; 2%
              </span>{" "}
              this month
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mt-4">
        <div className="CardDiv">
          <img src={Rupees} height={110} width={110} alt="balance" />
          <div>
            <h6 className="Heading1">Balance</h6>
            <h6 className="heading2">$2.4k</h6>
            <p className="heading3">
              <span
                style={{
                  color: "#EA1A85",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                &darr;2%
              </span>{" "}
              this month
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mt-4">
        <div className="CardDiv">
          <img src={Shopping} height={110} width={110} alt="shopping" />
          <div>
            <h6 className="Heading1">Total Sales</h6>
            <h6 className="heading2">$89k</h6>
            <p className="heading3">
              <span
                style={{
                  color: "#0baa49",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                &uarr;11%
              </span>{" "}
              this week
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-8 mt-3">
        <BarChartExample />
      </div>
      <div className="col-lg-4 mt-3">
        <PieChartExample />
      </div>
    </>
  );
};

export default Dashboard;

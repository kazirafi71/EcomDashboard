import React from "react";
import { Paper } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="">
      <Paper style={{ boxShadow: "0px 0px 3px 1px gray" }} className=" mt-5">
        <div className="d-flex align-items-center justify-content-between px-4 pt-3 ">
          <p>{new Date().getFullYear()}@ Kazi Musaddi Rafi</p>
          <div className="">
            <span>About</span>
            <span className="mx-2">About</span>
            <span>About</span>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Footer;

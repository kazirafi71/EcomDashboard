import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./CommonNav.module.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const navData = [
  { title: "Today" },
  { title: "Week" },
  { title: "Month" },
  { title: "Year" },
];

const CommonNav = ({ heading }) => {
  const [active, setActive] = useState("Today");
  return (
    <div className="">
      <div className={Styles.main__nav}>
        <div className={Styles.left_style}>
          <p>{heading}</p>
        </div>
        <div className={Styles.right_style}>
          <ul>
            {navData.map((val) => {
              return (
                <li
                  className={val.title === active && `${Styles.nav__active}`}
                  onClick={() => setActive(val.title)}
                >
                  {val.title}
                </li>
              );
            })}
            <li>
              <MoreHorizIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommonNav;

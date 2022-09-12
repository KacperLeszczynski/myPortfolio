import { time } from "console";
import React from "react";
import "../css/Navbar.css";
const TIME_BETWEEN_DIVS_ANIMATE = 700;

const Navbar = () => {
  function activateNav() {
    const navbarSite = document.querySelector(".navbar");
    const firstAnimation = document.querySelector(".first-animation");
    const secondAnimation = document.querySelector(".second-animation");
    const thirdAnimation = document.querySelector(".third-animation");
    const menuDiv = document.querySelector(".menu-div");

    if (navbarSite) {
      navbarSite.classList.toggle("change");
    }

    if (firstAnimation && secondAnimation && thirdAnimation && menuDiv) {
      if (navbarSite?.classList.contains("change")) {
        setTimeout(() => {
          firstAnimation.classList.add("change-transform");
          setTimeout(() => {
            secondAnimation.classList.add("change-transform");
            setTimeout(() => {
              thirdAnimation.classList.add("change-transform");
              setTimeout(() => {
                menuDiv.classList.add("change-transform");
                showHeadersMenu();
              }, 400);
            }, 500);
          }, 500);
        }, TIME_BETWEEN_DIVS_ANIMATE);
      } else
        setTimeout(() => {
          menuDiv.classList.remove("change-transform");
          hideHeadersMenu();
          setTimeout(() => {
            thirdAnimation.classList.remove("change-transform");
            setTimeout(() => {
              secondAnimation.classList.remove("change-transform");
              setTimeout(() => {
                firstAnimation.classList.remove("change-transform");
              }, 400);
            }, 500);
          }, 500);
        }, TIME_BETWEEN_DIVS_ANIMATE);
    }
  }

  function hideHeadersMenu() {
    const linksWrapper = document.querySelector(".links-wrapper");
    if (linksWrapper)
      for (let i = 0; i < linksWrapper.children.length; i++) {
        // timer(i, linksWrapper);
        linksWrapper.children[i].classList.remove("change-opacity");
      }
  }

  function showHeadersMenu() {
    const linksWrapper = document.querySelector(".links-wrapper");
    setTimeout(() => {
      if (linksWrapper) {
        for (let i = 0; i < linksWrapper.children.length; i++) {
          // timer(i, linksWrapper);
          setTimeout(() => {
            linksWrapper.children[i].classList.add("change-opacity");
          }, 200 * i);
        }
      }
    }, 400);
  }

  return (
    <div className="navbar">
      <div className="icon-menu-div">
        <div className="bar-container" onClick={activateNav}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div className="first-animation"></div>
      <div className="second-animation"></div>
      <div className="third-animation"></div>
      <div className="menu-div">
        <div className="links-wrapper">
          <h1>HOME</h1>
          <h1>PROJECTS</h1>
          <h1>ABOUT</h1>
          <h1>TRAINING</h1>
          <h1>CONTACT</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { time } from "console";
import React, { useState } from "react";
import { DARK_GREEN, ORANGE } from "../Constants";
import "../css/Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(true)
  function activateNav() {
    const htmlWebsite = document.getElementsByTagName("html")[0];
    const navbarSite = document.querySelector(".navbar");
    const firstAnimation = document.querySelector(".first-animation");
    const secondAnimation = document.querySelector(".second-animation");
    const thirdAnimation = document.querySelector(".third-animation");
    const menuDiv = document.querySelector(".menu-div");

    const buttonMenu = document.querySelector(".bar-container") as HTMLButtonElement;
    
    // buttonMenu!.disabled = true;
    // setTimeout(() => {
    //   buttonMenu!.disabled = false;
    // }, 1500)
  
    if (!isActive) return;
    setIsActive(false);
    setTimeout(() => {
      setIsActive(true)
    }, 1500)
    
    

    if (navbarSite) {
      navbarSite.classList.toggle("change");
    }


    if (
      firstAnimation &&
      secondAnimation &&
      thirdAnimation &&
      menuDiv &&
      htmlWebsite
    ) {
      if (navbarSite?.classList.contains("change")) {
        setTimeout(() => {
          firstAnimation.classList.add("change-transform");
          htmlWebsite.style.overflowY = "hidden";
          setTimeout(() => {
            secondAnimation.classList.add("change-transform");
            setTimeout(() => {
              thirdAnimation.classList.add("change-transform");
              setTimeout(() => {
                menuDiv.classList.add("change-transform");
                showHeadersMenu();
              }, 350);
            }, 400);
          }, 400);
        }, 400);
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
                htmlWebsite.style.overflowY = "auto";
              }, 350);
            }, 400);
          }, 400);
        }, 400);
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

  function changeScroll(
    destination: string,
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) {
    document?.getElementById(destination)?.scrollIntoView();
    activateNav();
    (e.target as Element).classList.add("change-opacity");
    (e.target as HTMLElement).style.backgroundColor = DARK_GREEN;
    setTimeout(() => {
      (e.target as HTMLElement).style.backgroundColor = "transparent";
    }, 500);
  }

  return (
    <section className="navbar">
      <div className="icon-menu-div">
        <button className="bar-container" onClick={activateNav}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
      </div>
      <div className="first-animation"></div>
      <div className="second-animation"></div>
      <div className="third-animation"></div>
      <div className="menu-div">
        <div className="links-wrapper">
          <h1 onClick={(e) => changeScroll("home", e)}>HOME</h1>
          <h1 onClick={(e) => changeScroll("project", e)}>PROJECTS</h1>
          <h1 onClick={(e) => changeScroll("about", e)}>ABOUT</h1>
          <h1 onClick={(e) => changeScroll("contact", e)}>CONTACT</h1>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

var navBurger=document.getElementById("myburger");
var navBar=document.getElementById("deepnav");
var clic=true;
function navFunction(){
  if(clic==true){
    navBar.style.visibility="visible";
  }
  clic=!clic;
 if(clic){
    navBar.style.visibility="hidden";
 }
}
var cancel=document.getElementById("cancel");
function cancelUl(){
    navBar.style.visibility="hidden";
}
// kkkjkkj
/**
* Template Name: NewBiz - v4.7.0
* Template URL: https://bootstrapmade.com/newbiz-bootstrap-business-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
    "use strict";
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
    /**
     * Easy event listener function
     */
    // cons
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
      if (!header.classList.contains('header-scrolled')) {
        offset -= 20
      }
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  })()
  var check=document.getElementById("check");
  var ck=document.getElementById("ck");
function goodman(){
    ck.style.transition="5s";
    ck.style.display="block";
}
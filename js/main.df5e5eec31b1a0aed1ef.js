"use strict";(self.webpackChunktakeshi=self.webpackChunktakeshi||[]).push([[179],{182:()=>{var e={nav:function(){return this.element.querySelector(".header__nav")},openCloseMenu:function(){this.nav().classList.toggle("header__nav--open"),document.querySelector("body").classList.toggle("body--no-scroll")}},t=t=>{var n=t.target,a="I"===n.tagName?n.parentElement:n,d=a.dataset.action;if(a&&d){var i=a.dataset.action;e.element=t.currentTarget,e[i]()}else console.log("not acepted")};window.addEventListener("DOMContentLoaded",(()=>{var e,n;document.getElementById("header").addEventListener("click",t),e=document.body,n={initial:0,final:0},e.addEventListener("touchstart",(e=>{n.initial=Math.round(e.changedTouches[0].clientX||0)})),e.addEventListener("touchend",(e=>{n.final=Math.round(e.changedTouches[0].clientX||0);var t=window.innerWidth,a=document.getElementById("header__nav");t<768&&n.initial<55&&a&&n.initial<n.final&&(a.classList.add("header__nav--open"),document.body.classList.add("body--no-scroll"))}))}))}},e=>{e(e.s=182)}]);
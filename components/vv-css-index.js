import { css } from '../lit-core.min.js';

export const indexCss = css`
@charset "UTF-8";
/*!
 * Bootstrap v4.5.3 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root {
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #ffffff;
  --gray: #7E8299;
  --gray-dark: #3F4254;
  --primary: #3699FF;
  --secondary: #E4E6EF;
  --success: #1BC5BD;
  --info: #8950FC;
  --warning: #FFA800;
  --danger: #F64E60;
  --light: #F3F6F9;
  --dark: #181C32;
  --white: #ffffff;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --breakpoint-xxl: 1400px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }

*,
*::before,
*::after {
  box-sizing: border-box; }
ol, ul, dl {
    margin-top: 0;
    margin-bottom: 1rem;
}
/****************h***************/
h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
}
h5, .h5 {
    font-size: 1.25rem;
}

/****************a***************/
a {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}
a {
    color: #3699FF;
    text-decoration: none;
    background-color: transparent;
}
/***************button****************/
.btn.btn-icon.btn-lg, .btn-group-lg > .btn.btn-icon {
    height: calc(1.5em + 1.65rem + 2px);
    width: calc(1.5em + 1.65rem + 2px);
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
.btn.btn-clean {
    color: #B5B5C3;
    background-color: transparent;
    border-color: transparent;
}
.btn.btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: calc(1.5em + 1.3rem + 2px);
    width: calc(1.5em + 1.3rem + 2px);
}
.btn:not(.btn-text) {
    cursor: pointer;
}
.btn {
    outline: none !important;
    vertical-align: middle;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}
.mr-1, .mx-1 {
    margin-right: 0.25rem !important;
}
.btn-lg, .btn-group-lg > .btn {
    padding: 0.825rem 1.42rem;
    font-size: 1.08rem;
    line-height: 1.5;
    border-radius: 0.42rem;
}
.btn {
    display: inline-block;
    font-weight: normal;
    color: #3F4254;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.65rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.42rem;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.btn.btn-icon .svg-icon {
    margin: 0;
    padding: 0;
}
.btn.btn-lg .svg-icon, .btn-group-lg > .btn .svg-icon {
    margin-right: 0.75rem;
}
.btn .svg-icon {
    margin-right: 0.5rem;
}
.btn.btn-lg .svg-icon svg, .btn-group-lg > .btn .svg-icon svg {
    height: 20px;
    width: 20px;
}

.svg-icon.svg-icon-xl svg {
    height: 2rem !important;
    width: 2rem !important;
}
.btn .svg-icon svg {
    height: 18px;
    width: 18px;
}
.svg-icon svg {
    height: 1.5rem;
    width: 1.5rem;
}
svg {
    overflow: hidden;
    vertical-align: middle;
}
.svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #B5B5C3;
}
.svg-icon.svg-icon-primary svg g [fill] {
    transition: fill 0.3s ease;
    fill: #3699FF !important;
}
.btn.btn-clean .svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #B5B5C3;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
html, body {
    height: 100%;
    margin: 0px;
    padding: 0px;
    font-size: 13px !important;
    font-weight: 400;
    font-family: Poppins, Helvetica, "sans-serif";
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    margin: 0;
    font-family: Poppins, Helvetica, "sans-serif";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #3F4254;
    text-align: left;
    background-color: #ffffff;
}
body {
    display: flex;
    flex-direction: column;
    color: #3F4254;
	background: #EEF0F8;
}
.flex-root {
    flex: 1;
    -ms-flex: 1 0 0px;
}
.flex-column {
    flex-direction: column !important;
}
.d-flex {
    display: flex !important;
}
.flex-column-fluid {
    flex: 1 0 auto;
}
.flex-row-fluid {
    flex: 1 auto;
    -ms-flex: 1 0 0px;
    /* min-width: 0; */
}
.flex-row {
    flex-direction: row !important;
}
.header-fixed.subheader-fixed.subheader-enabled .wrapper {
    padding-top: 119px;
}
.header-fixed.subheader-fixed .header {
    box-shadow: none !important;
}
.header.header-fixed {
    height: 65px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 97;
}
.header {
    background-color: #ffffff;
    min-width: 992px;
}
.header {
    display: flex;
    justify-content: space-between;
    height: 65px;
    position: relative;
    z-index: 2;
}
.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl, .container-xxl {
    padding: 0 25px;
	width: 100%;
    margin-right: auto;
    margin-left: auto;
}
.container, .container-sm, .container-md, .container-lg, .container-xl, .container-xxl {
    max-width: 1340px;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -12.5px;
    margin-left: -12.5px;
}
.align-items-stretch {
    align-items: stretch !important;
}
.justify-content-between {
    justify-content: space-between !important;
}
.header-menu-wrapper {
    align-items: stretch;
}
/************topbar**************/
.topbar {
    display: flex;
    align-items: stretch;
    padding: 0;
}
.topbar .dropdown {
    display: flex;
    align-items: stretch;
}

.dropup, .dropright, .dropdown, .dropleft {
    position: relative;
}
.topbar .topbar-item {
    display: flex;
    align-items: center;
}
.pulse {
    position: relative;
}
.pulse.pulse-primary .pulse-ring {
    border-color: rgba(54, 153, 255, 0.75);
}
.pulse .pulse-ring {
    display: block;
    border-radius: 40px;
    height: 40px;
    width: 40px;
    position: absolute;
    animation: animation-pulse 3.5s ease-out;
    animation-iteration-count: infinite;
    opacity: 0;
    border-width: 3px;
    border-style: solid;
    border-color: #E4E6EF;
}
@keyframes animation-pulse {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    opacity: 0.0; }
  60% {
    -webkit-transform: scale(0.1, 0.1);
    opacity: 0.0; }
  65% {
    opacity: 1; }
  100% {
    -webkit-transform: scale(1.2, 1.2);
    opacity: 0.0; } }
.w-auto {
    width: auto !important;
}
.w-auto {
    width: auto !important;
}
.pl-2, .px-2 {
    padding-left: 0.5rem !important;
}

.pr-2, .px-2 {
    padding-right: 0.5rem !important;
}
.align-items-center {
    align-items: center !important;
}
.font-size-base {
    font-size: 1rem;
}
.text-muted {
    color: #B5B5C3 !important;
}
.text-muted {
    color: #B5B5C3 !important;
}
.font-weight-bold {
    font-weight: 500 !important;
}
.d-none {
    display: none !important;
}
.d-md-inline {
    display: inline !important;
}
.text-dark-50 {
    color: #7E8299 !important;
}
.font-weight-bolder {
    font-weight: 600 !important;
}
.mr-3, .mx-3 {
    margin-right: 0.75rem !important;
}
.symbol {
    display: inline-block;
    flex-shrink: 0;
    position: relative;
    border-radius: 0.42rem;
}
.symbol.symbol-lg-35 .symbol-label {
    width: 35px;
    height: 35px;
}
.symbol .symbol-label {
    width: 50px;
    height: 50px;
}
.symbol.symbol-25 .symbol-label {
    width: 25px;
    height: 25px;
}
.symbol.symbol-light-success .symbol-label {
    background-color: #C9F7F5;
    color: #1BC5BD;
}
.symbol .symbol-label {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: #3F4254;
    background-color: #F3F6F9;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 0.42rem;
}
.font-size-h5 {
    font-size: 1.25rem !important;
}
/***********************content*****************/
.content {
    padding: 25px 0;
	min-width: 992px;
}
.subheader {
    display: flex;
    align-items: center;
}
.subheader.subheader-solid {
    border-top: 1px solid #EBEDF3;
    background-color: #ffffff;
}
.header-fixed.subheader-fixed .subheader {
    position: fixed;
    height: 54px;
    top: 65px;
    left: 0;
    right: 0;
    transition: top 0.3s ease;
    z-index: 95;
    box-shadow: 0px 10px 30px 0px rgb(82 63 105 / 8%);
    background-color: #ffffff;
    border-top: 1px solid #EBEDF3;
    margin: 0;
}
.pb-lg-6, .py-lg-6 {
    padding-bottom: 1.5rem !important;
}
.pt-lg-6, .py-lg-6 {
    padding-top: 1.5rem !important;
}
.pb-2, .py-2 {
    padding-bottom: 0.5rem !important;
}
.pt-2, .py-2 {
    padding-top: 0.5rem !important;
}
.flex-sm-nowrap {
    flex-wrap: nowrap !important;
}
.align-items-baseline {
    align-items: baseline !important;
}
.mr-5, .mx-5 {
    margin-right: 1.25rem !important;
}
.flex-wrap {
    flex-wrap: wrap !important;
}
.text-dark {
    color: #181C32 !important;
}
.mb-1, .my-1 {
    margin-bottom: 0.25rem !important;
}
.mt-1, .my-1 {
    margin-top: 0.25rem !important;
}
.breadcrumb.breadcrumb-transparent {
    background-color: transparent;
    border-radius: 0;
}
.breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #EBEDF3;
    border-radius: 0.42rem;
}
.breadcrumb {
    align-items: center;
}
.font-size-sm {
    font-size: 0.925rem;
}
.p-0 {
    padding: 0 !important;
}
.mb-2, .my-2 {
    margin-bottom: 0.5rem !important;
}
.mt-2, .my-2 {
    margin-top: 0.5rem !important;
}
.breadcrumb-item {
    display: flex;
}
.breadcrumb-item + .breadcrumb-item {
    padding-left: 0.5rem; 
}
.breadcrumb.breadcrumb-dot .breadcrumb-item:before {
    display: none;
}
.breadcrumb.breadcrumb-dot .breadcrumb-item:after {
    content: "\\2022";
    padding-left: 0.5rem;
}
.breadcrumb .breadcrumb-item a {
    display: flex;
    align-items: center;
}
/*************footer****************/
.pb-4, .py-4 {
    padding-bottom: 1rem !important;
}
.pt-4, .py-4 {
    padding-top: 1rem !important;
}
.bg-white {
    background-color: #ffffff !important;
}
.flex-lg-column {
    flex-direction: column !important;
	min-width: 992px;
}
.flex-md-row {
    flex-direction: row !important;
}
.order-2 {
    order: 2;
}
.order-md-1 {
    order: 1;
}
.mr-2, .mx-2 {
    margin-right: 0.5rem !important;
}
a.text-hover-primary, .text-hover-primary {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}
.text-dark-75 {
    color: #3F4254 !important;
}
.nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
.nav .nav-link {
    display: flex;
    align-items: center;
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    padding: 0.75rem 1.5rem;
    color: #7E8299;
}
.pr-5, .px-5 {
    padding-right: 1.25rem !important;
}
.pl-0, .px-0 {
    padding-left: 0 !important;
}
    `;
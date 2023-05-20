import { css } from '../lit-core.min.js';

export const coreCss = css`
:root {
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
}
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

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block; }

body {
  margin: 0;
  font-family: Poppins, Helvetica, "sans-serif";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #3F4254;
  text-align: left;
  background-color: #ffffff; }
  h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2; }
 h4, .h4 {
  font-size: 1.35rem; }
    h4, .h4 {
      font-size: calc(1.26rem + 0.12vw) ; }
 .font-weight-bolder {
    font-weight: 600 !important;
}
.font-size-sm {
    font-size: 0.925rem;
}

.text-primary {
    color: #3699FF !important;
}
.text-uppercase {
    text-transform: uppercase !important;
}  
    button, select {
        text-transform: none;
    }
    button, input {
        overflow: visible;
    }
    input, button, select, optgroup, textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }
svg {
    overflow: hidden;
    vertical-align: middle;
}
    button {
        appearance: auto;
        writing-mode: horizontal-tb !important;
        font-style: ;
        font-variant-ligatures: ;
        font-variant-caps: ;
        font-variant-numeric: ;
        font-variant-east-asian: ;
        font-weight: ;
        font-stretch: ;
        font-size: ;
        font-family: ;
        text-rendering: auto;
        color: buttontext;
        letter-spacing: normal;
        word-spacing: normal;
        line-height: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: center;
        align-items: flex-start;
        cursor: default;
        box-sizing: border-box;
        background-color: buttonface;
        margin: 0em;
        padding: 1px 6px;
        border-width: 2px;
        border-style: outset;
        border-color: buttonborder;
        border-image: initial;
    }
    input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit; }
  
    button,
input {
  overflow: visible; }
    button,
select {
  text-transform: none; }
    button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; }
.btn:not(:disabled):not(.disabled) {
    cursor: pointer; }
.btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {
      box-shadow: none; }
.btn.btn-hover-primary:not(:disabled):not(.disabled):active:not(.btn-text), .btn.btn-hover-primary:not(:disabled):not(.disabled).active, .show > .btn.btn-hover-primary.dropdown-toggle, .show .btn.btn-hover-primary.btn-dropdown {
    color: #FFFFFF !important;
    background-color: #3699FF !important;
    border-color: #3699FF !important;
}
a.btn.disabled, fieldset:disabled a.btn {
    pointer-events: none;
}
      a {
  color: #3699FF;
  text-decoration: none;
  background-color: transparent; }
  /*a:hover {
    color: #0073e9;
    text-decoration: underline; }*/
    a {
  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
  a:hover {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
a:not([href]):not([class]) {
  color: inherit;
  text-decoration: none; }
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none; }
    
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
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; }
  
      .btn.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: calc(1.5em + 1.3rem + 2px);
  width: calc(1.5em + 1.3rem + 2px); }
  .btn.btn-icon.btn-xs {
    height: 24px;
    width: 24px; }
    .btn.btn-light {
  color: #7E8299;
  background-color: #F3F6F9;
  border-color: #F3F6F9; }
  
  .btn.btn-icon.btn-sm, .btn-group-sm > .btn.btn-icon {
    height: calc(1.35em + 1.1rem + 2px);
    width: calc(1.35em + 1.1rem + 2px); }
.btn-sm, .btn-group-sm > .btn {
    padding: 0.55rem 0.75rem;
    font-size: 0.925rem;
    line-height: 1.35;
    border-radius: 0.42rem;
}
      .btn {
  outline: none !important;
  vertical-align: middle;
  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
  .btn i {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
  .btn:hover:not(.btn-text), .btn:focus:not(.btn-text), .btn.focus {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
    .btn:hover:not(.btn-text) i, .btn:focus:not(.btn-text) i, .btn.focus i {
      transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
  .btn.disabled, .btn:disabled {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
    .btn.disabled i, .btn:disabled i {
      transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
  .btn:not(:disabled):not(.disabled):active:not(.btn-text), .btn:not(:disabled):not(.disabled).active,
  .show > .btn.dropdown-toggle {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
    .btn:not(:disabled):not(.disabled):active:not(.btn-text) i, .btn:not(:disabled):not(.disabled).active i,
    .show > .btn.dropdown-toggle i {
      transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease; }
  .btn:focus:not(.btn-shadow):not(.btn-shadow-hover) {
    box-shadow: none !important; }
  .btn.btn-square {
    border-radius: 0; }
  .btn.btn-pill {
    border-radius: 2rem; }
  .btn.btn-text {
    cursor: text; }
  .btn:not(.btn-text) {
    cursor: pointer; }
  .btn.btn-borderless {
    border-color: transparent; }
.btn-light {
  color: #181C32;
  background-color: #F3F6F9;
  border-color: #F3F6F9;
  box-shadow: none; }
  .btn-light:hover {
    color: #181C32;
    background-color: #dae3ec;
    border-color: #d1dde8; }
  .btn-light:focus, .btn-light.focus {
    color: #181C32;
    background-color: #dae3ec;
    border-color: #d1dde8;
    box-shadow: 0 0 0 0.2rem rgba(210, 213, 219, 0.5); }
  .btn-light.disabled, .btn-light:disabled {
    color: #181C32;
    background-color: #F3F6F9;
    border-color: #F3F6F9; }
  .btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,
  .show > .btn-light.dropdown-toggle {
    color: #181C32;
    background-color: #d1dde8;
    border-color: #c9d6e4; }
    .btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,
    .show > .btn-light.dropdown-toggle:focus {
      box-shadow: 0 0 0 0.2rem rgba(210, 213, 219, 0.5); }
      
      .btn.btn-icon i {
    padding: 0;
    margin: 0; }
.btn.btn-light-primary {
    color: #3699FF;
    background-color: #E1F0FF;
    border-color: transparent;
}
.btn.btn-light-gray {
    color: #B5B5C3;
    background-color: #F2F9FF;
    border-color: transparent;
}
.btn.btn-primary {
    color: #FFFFFF;
    background-color: #3699FF;
    border-color: #3699FF;
}
.btn.btn-primary:hover:not(.btn-text):not(:disabled):not(.disabled), .btn.btn-primary:focus:not(.btn-text), .btn.btn-primary.focus:not(.btn-text) {
  color: #FFFFFF;
  background-color: #187DE4;
  border-color: #187DE4; }
.btn.btn-primary:hover:not(.btn-text):not(:disabled):not(.disabled) i, .btn.btn-primary:focus:not(.btn-text) i, .btn.btn-primary.focus:not(.btn-text) i {
  color: #FFFFFF; }
.btn.btn-primary:hover:not(.btn-text):not(:disabled):not(.disabled) .svg-icon svg g [fill], .btn.btn-primary:focus:not(.btn-text) .svg-icon svg g [fill], .btn.btn-primary.focus:not(.btn-text) .svg-icon svg g [fill] {
  transition: fill 0.3s ease;
  fill: #FFFFFF; }
.btn.btn-primary:hover:not(.btn-text):not(:disabled):not(.disabled) .svg-icon svg:hover g [fill], .btn.btn-primary:focus:not(.btn-text) .svg-icon svg:hover g [fill], .btn.btn-primary.focus:not(.btn-text) .svg-icon svg:hover g [fill] {
  transition: fill 0.3s ease; }
.btn.btn-primary:hover:not(.btn-text):not(:disabled):not(.disabled).dropdown-toggle:after, .btn.btn-primary:focus:not(.btn-text).dropdown-toggle:after, .btn.btn-primary.focus:not(.btn-text).dropdown-toggle:after {
    color: #FFFFFF; }
.btn.disabled, .btn:disabled {
    opacity: 0.6;
    box-shadow: none;
}
.btn.btn-primary.disabled, .btn.btn-primary:disabled {
  color: #FFFFFF;
  background-color: #3699FF;
  border-color: #3699FF; }
.btn.btn-primary.disabled i, .btn.btn-primary:disabled i {
  color: #FFFFFF; }
.btn.btn-primary.disabled .svg-icon svg g [fill], .btn.btn-primary:disabled .svg-icon svg g [fill] {
  transition: fill 0.3s ease;
  fill: #FFFFFF; }
.btn.btn-primary.disabled .svg-icon svg:hover g [fill], .btn.btn-primary:disabled .svg-icon svg:hover g [fill] {
      transition: fill 0.3s ease; }
.btn.btn-light .svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #7E8299;
}
.btn.btn-icon .svg-icon {
    margin: 0;
    padding: 0;
}
.svg-icon.svg-icon-primary svg g [fill] {
    transition: fill 0.3s ease;
    fill: #3699FF !important;
}
.svg-icon.svg-icon-md svg {
    height: 1.5rem !important;
    width: 1.5rem !important;
}
.svg-icon.svg-icon-primary svg g [fill] {
  transition: fill 0.3s ease;
  fill: #3699FF !important; }

.svg-icon.svg-icon-primary svg:hover g [fill] {
  transition: fill 0.3s ease; }
.btn.btn-hover-primary:hover:not(.btn-text):not(:disabled):not(.disabled), .btn.btn-hover-primary:focus:not(.btn-text), .btn.btn-hover-primary.focus:not(.btn-text) {
  color: #FFFFFF !important;
  background-color: #3699FF !important;
  border-color: #3699FF !important; }
.btn.btn-hover-primary:hover:not(.btn-text):not(:disabled):not(.disabled) .svg-icon svg g [fill], .btn.btn-hover-primary:focus:not(.btn-text) .svg-icon svg g [fill], .btn.btn-hover-primary.focus:not(.btn-text) .svg-icon svg g [fill] {
  transition: fill 0.3s ease;
  fill: #FFFFFF !important; }
.btn.btn-hover-primary:hover:not(.btn-text):not(:disabled):not(.disabled) .svg-icon svg:hover g [fill], .btn.btn-hover-primary:focus:not(.btn-text) .svg-icon svg:hover g [fill], .btn.btn-hover-primary.focus:not(.btn-text) .svg-icon svg:hover g [fill] {
  transition: fill 0.3s ease; }
.btn.btn-primary .svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #FFFFFF;
}
.svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #B5B5C3;
}
.btn.btn-light-primary .svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #3699FF; }
.btn.btn-light-primary .svg-icon svg:hover g [fill] {
    transition: fill 0.3s ease; }
.vv-icon-wrapper {
    display: inline-flex;
    align-items: center;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
}
    .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
.col-xl-auto, .col-xxl-1, .col-xxl-2, .col-xxl-3, .col-xxl-4, .col-xxl-5, .col-xxl-6, .col-xxl-7, .col-xxl-8, .col-xxl-9, .col-xxl-10, .col-xxl-11, .col-xxl-12, .col-xxl,
.col-xxl-auto {
  position: relative;
  width: 100%;
  padding-right: 12.5px;
  padding-left: 12.5px; }

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%; }

.row-cols-1 > * {
  flex: 0 0 100%;
  max-width: 100%; }

.row-cols-2 > * {
  flex: 0 0 50%;
  max-width: 50%; }

.row-cols-3 > * {
  flex: 0 0 33.33333%;
  max-width: 33.33333%; }

.row-cols-4 > * {
  flex: 0 0 25%;
  max-width: 25%; }

.row-cols-5 > * {
  flex: 0 0 20%;
  max-width: 20%; }

.row-cols-6 > * {
  flex: 0 0 16.66667%;
  max-width: 16.66667%; }

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%; }

.col-1 {
  flex: 0 0 8.33333%;
  max-width: 8.33333%; }

.col-2 {
  flex: 0 0 16.66667%;
  max-width: 16.66667%; }

.col-3 {
  flex: 0 0 25%;
  max-width: 25%; }

.col-4 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%; }

.col-5 {
  flex: 0 0 41.66667%;
  max-width: 41.66667%; }

.col-6 {
  flex: 0 0 50%;
  max-width: 50%; }

.col-7 {
  flex: 0 0 58.33333%;
  max-width: 58.33333%; }

.col-8 {
  flex: 0 0 66.66667%;
  max-width: 66.66667%; }

.col-9 {
  flex: 0 0 75%;
  max-width: 75%; }

.col-10 {
  flex: 0 0 83.33333%;
  max-width: 83.33333%; }

.col-11 {
  flex: 0 0 91.66667%;
  max-width: 91.66667%; }

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -12.5px;
  margin-left: -12.5px; }
.row{ flex: 0 0 100%; }  
.col-12 {
  flex: 0 0 100%;
  max-width: 100%; }
    .gutter-b {
  margin-bottom: 25px; }

.col-md-offset-7 {
    margin-left: 58.33333333%;
}
.col-md-5 {
    width: 41.66666667%;
}
.col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9 {
    float: left;
}

.gutter-t {
  margin-top: 25px; }
  
    .col-sm-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%; }
  .col-sm-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%; }
  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%; }
  :host(.col-sm-3) {
    flex: 0 0 25%;
    max-width: 25%; }
  .col-sm-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%; }
  :host(.col-sm-4){
    flex: 0 0 33.33333%;
    max-width: 33.33333%; }
  .col-sm-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%; }
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%; }
  .col-sm-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%; }
  .col-sm-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%; }
  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%; }
  :host(.col-sm-9) {
    flex: 0 0 75%;
    max-width: 75%; }
  .col-sm-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%; }
  .col-sm-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%; }
  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%; }
  :host(.col-sm-12) {
    flex: 0 0 100%;
    max-width: 100%; }
  /*:host(.vv-control-wapper){
    display:flex;flex-direction:row;padding:0px
  }*/
  .pl-0, .px-0 {
    padding-left: 0 !important;
}
.pr-0,
.px-0 {
  padding-right: 0 !important; }
  
  .m-0 {
  margin: 0 !important; }
.mt-0,
.my-0 {
  margin-top: 0 !important; }
.mr-0,
.mx-0 {
  margin-right: 0 !important; }
.mb-0,
.my-0 {
  margin-bottom: 0 !important; }
.ml-0,
.mx-0 {
  margin-left: 0 !important; }
.ml-2, .mx-2 {
    margin-left: 0.5rem !important;
}
.mr-1, .mx-1 {
    margin-right: 0.25rem !important;
}
.pb-1, .py-1 {
    padding-bottom: 0.25rem !important;
}
.mr-2,
.mx-2 {
  margin-right: 0.5rem !important; }
.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important; }
.pb-2, .py-2 {
    padding-bottom: 0.5rem !important;
}
.pt-2, .py-2 {
    padding-top: 0.5rem !important;
}
.pl-2, .px-2 {
    padding-left: 0.5rem !important;
}
.pr-2, .px-2 {
    padding-right: 0.5rem !important;
}
.pb-3, .py-3 {
    padding-bottom: 0.75rem !important;
}
.pt-3, .py-3 {
    padding-top: 0.75rem !important;
}
.ml-3, .mx-3 {
    margin-left: 0.75rem !important;
}
.mr-3, .mx-3 {
    margin-right: 0.75rem !important;
}
.px-3 {
    padding-right: 0.75rem !important;
    padding-left: 0.75rem !important;
}
.pl-4, .px-4 {
    padding-left: 1rem !important;
}

.pr-4, .px-4 {
    padding-right: 1rem !important;
}
  .m-5 {
  margin: 1.25rem !important; }
.mt-5,
.my-5 {
  margin-top: 1.25rem !important; }
.mr-5,
.mx-5 {
  margin-right: 1.25rem !important; }
.mb-1, .my-1 {
    margin-bottom: 0.25rem !important;
}
.mb-5,
.my-5 {
  margin-bottom: 1.25rem !important; }
.ml-5,
.mx-5 {
  margin-left: 1.25rem !important; }
  
.p-5 {
  padding: 1.25rem !important; }

.pt-5,
.py-5 {
  padding-top: 1.25rem !important; }

.pr-5,
.px-5 {
  padding-right: 1.25rem !important; }

.pb-5,
.py-5 {
  padding-bottom: 1.25rem !important; }

.pl-5,
.px-5 {
  padding-left: 1.25rem !important; }
  
.pt-6,
.py-6 {
  padding-top: 1.5rem !important; }
  .pb-6,
.py-6 {
  padding-bottom: 1.5rem !important; }
  
  .pb-7,
.py-7 {
  padding-bottom: 1.75rem !important; }
  
  .p-10 {
  padding: 2.5rem !important; }
  .pt-10,
.py-10 {
  padding-top: 2.5rem !important; }

.pr-10,
.px-10 {
  padding-right: 2.5rem !important; }

.pb-10,
.py-10 {
  padding-bottom: 2.5rem !important; }

.pl-10,
.px-10 {
  padding-left: 2.5rem !important; }
  
  .font-weight-bold {
  font-weight: 500 !important; }
.citem{
    display:flex;/*flex-direction:row;padding:0px;flex: 0 0 100%;max-width: 100%;*/
}
/*todo 抽组件*/
  .bullet {
    display: inline-block;
    background-color: #E4E6EF;
    width: 10px;
    height: 2px;
    border-radius: 2rem;
}
.bullet.bullet-bar {
    width: 4px;
    height: auto;
}
.bg-primary{
    background-color: #3699FF !important;
}
.bg-success {
    background-color: #1BC5BD !important;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 1.3rem + 2px);
  padding: 0.65rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #3F4254;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #E4E6EF;
  border-radius: 0.42rem;
  box-shadow: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
  @media (prefers-reduced-motion: reduce) {
    .form-control {
      transition: none; } }
/*   
.btn-circle {
    width: 30px;
    height: 30px;
    padding: 6px 0;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 1.428571429;
}
.btn-danger {
    background-color: #ed5565;
    border-color: #ed5565;
    color: #FFFFFF;
}*/
.elem-delete {
    position: absolute;
    right: 15px;
    top: -10px;
    z-index: 999;
    cursor:pointer
}

  .form-control::-ms-expand {
    background-color: transparent;
    border: 0; }
  .form-control:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #3F4254; }
  .form-control:focus {
    color: #3F4254;
    background-color: #ffffff;
    border-color: #69b3ff;
    outline: 0; }
  .form-control::placeholder {
    color: #B5B5C3;
    opacity: 1; }
  .form-control:disabled, .form-control[readonly] {
    background-color: #F3F6F9;
    opacity: 1; }
    
.form-control-sm {
    height: calc(1.35em + 1.1rem);  /*bottom下边+了2？(1.35em + 1.1rem + 2px)*/
    padding: 0.55rem 0.75rem;
    font-size: 0.925rem;
    line-height: 1.35;
    border-radius: 0.28rem;
}
.form-control-lg {
  height: calc(1.5em + 1.65rem + 2px);
  padding: 0.825rem 1.42rem;
  font-size: 1.08rem;
  line-height: 1.5;
  border-radius: 0.42rem; }
  
  .form-group {
  margin-bottom: 1.75rem; }

.form-text {
  display: block;
  margin-top: 0.25rem; }
  .text-left {
    text-align: left !important;
}
.text-left {
  text-align: left !important; }
.text-right {
  text-align: right !important; }
.text-center {
  text-align: center !important; }
    /*label*/
    .form-group label {
    font-size: 1rem;
    font-weight: 400;
    color: #3F4254;
}

.text-sm-right {
    text-align: right !important;
}
.col-form-label {
    padding-top: calc(0.65rem + 1px);
    padding-bottom: calc(0.65rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
}
label {
    display: inline-block;
    margin-bottom: 0.5rem;
    cursor: default;
}
.form-group .form-text {
    font-size: 0.9rem;
    font-weight: 400;
}
.text-muted {
    color: #B5B5C3 !important;
}
.form-text {
    display: block;
    margin-top: 0.25rem;
}
.d-flex {
  display: flex !important; }
.flex-column {
    flex-direction: column !important;
}
.flex-wrap {
    flex-wrap: wrap !important;
}
.justify-content-between {
  justify-content: space-between !important; }
  .align-items-center {
  align-items: center !important; }

  .scroll {
  position: relative;
  overflow: hidden; }
  .scroll.scroll-pull {
    padding-right: 12px;
    margin-right: -12px; }
    .scroll.scroll-pull .ps__rail-y {
      right: -2px; }
  .scroll.scroll-push .ps__rail-y {
    right: 5px !important; }
  .scroll.ps > .ps__rail-y {
    width: 4px; }
    .scroll.ps > .ps__rail-y:hover, .scroll.ps > .ps__rail-y:focus {
      width: 4px; }
    .scroll.ps > .ps__rail-y > .ps__thumb-y {
      width: 4px;
      border-radius: 0.42rem !important; }
      .scroll.ps > .ps__rail-y > .ps__thumb-y:hover, .scroll.ps > .ps__rail-y > .ps__thumb-y:focus {
        width: 4px; }
  .scroll.ps > .ps__rail-x {
    height: 4px; }
    .scroll.ps > .ps__rail-x:hover, .scroll.ps > .ps__rail-x:focus {
      height: 4px; }
    .scroll.ps > .ps__rail-x > .ps__thumb-x {
      top: 0;
      height: 4px;
      border-radius: 0.42rem !important; }
      .scroll.ps > .ps__rail-x > .ps__thumb-x:hover, .scroll.ps > .ps__rail-x > .ps__thumb-x:focus {
        top: 0;
        height: 4px; }
  .scroll.ps > .ps__rail-x {
    background-color: transparent; }
    .scroll.ps > .ps__rail-x:hover, .scroll.ps > .ps__rail-x:focus {
      opacity: 1;
      background-color: transparent; }
      .scroll.ps > .ps__rail-x:hover > .ps__thumb-x, .scroll.ps > .ps__rail-x:focus > .ps__thumb-x {
        opacity: 1; }
    .scroll.ps > .ps__rail-x > .ps__thumb-x {
      background-color: #E4E6EF;
      opacity: 1; }
      .scroll.ps > .ps__rail-x > .ps__thumb-x:hover, .scroll.ps > .ps__rail-x > .ps__thumb-x:focus {
        opacity: 1;
        background-color: #E4E6EF; }
  .scroll.ps > .ps__rail-y {
    background-color: transparent; }
    .scroll.ps > .ps__rail-y:hover, .scroll.ps > .ps__rail-y:focus {
      background-color: transparent;
      opacity: 1; }
      .scroll.ps > .ps__rail-y:hover > .ps__thumb-y, .scroll.ps > .ps__rail-y:focus > .ps__thumb-y {
        opacity: 1; }
    .scroll.ps > .ps__rail-y > .ps__thumb-y {
      background: #E4E6EF;
      opacity: 1; }
      .scroll.ps > .ps__rail-y > .ps__thumb-y:hover, .scroll.ps > .ps__rail-y > .ps__thumb-y:focus {
        opacity: 1;
        background: #E4E6EF; }

  /*perfect-scrollbar.css*/
.ps {
  overflow: hidden !important;
  overflow-anchor: none;
  -ms-overflow-style: none;
  touch-action: auto;
  -ms-touch-action: auto;
}

/*
 * Scrollbar rail styles
 */
.ps__rail-x {
  display: none;
  opacity: 0;
  transition: background-color .2s linear, opacity .2s linear;
  -webkit-transition: background-color .2s linear, opacity .2s linear;
  height: 15px;
  /* there must be 'bottom' or 'top' for ps__rail-x */
  bottom: 0px;
  /* please don't change 'position' */
  position: absolute;
}

.ps__rail-y {
  display: none;
  opacity: 0;
  transition: background-color .2s linear, opacity .2s linear;
  -webkit-transition: background-color .2s linear, opacity .2s linear;
  width: 15px;
  /* there must be 'right' or 'left' for ps__rail-y */
  right: 0;
  /* please don't change 'position' */
  position: absolute;
}

.ps--active-x > .ps__rail-x,
.ps--active-y > .ps__rail-y {
  display: block;
  background-color: transparent;
}

.ps:hover > .ps__rail-x,
.ps:hover > .ps__rail-y,
.ps--focus > .ps__rail-x,
.ps--focus > .ps__rail-y,
.ps--scrolling-x > .ps__rail-x,
.ps--scrolling-y > .ps__rail-y {
  opacity: 0.6;
}

.ps .ps__rail-x:hover,
.ps .ps__rail-y:hover,
.ps .ps__rail-x:focus,
.ps .ps__rail-y:focus,
.ps .ps__rail-x.ps--clicking,
.ps .ps__rail-y.ps--clicking {
  background-color: #eee;
  opacity: 0.9;
}
.long {
        vertical-align:middle;
        text-align:center;
        word-break: break-all;/*分行*/
        /*white-space: nowrap;不换行用这个*/
        overflow:hidden; /*超出部分省略号显示*/
        text-overflow:ellipsis; /*省略号显示*/
        display:-webkit-box;
        -webkit-text-overflow:ellipsis; /*兼容*/
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2; /*显示2行*/
}
/*
 * Scrollbar thumb styles
 */
.ps__thumb-x {
  background-color: #aaa;
  border-radius: 6px;
  transition: background-color .2s linear, height .2s ease-in-out;
  -webkit-transition: background-color .2s linear, height .2s ease-in-out;
  height: 6px;
  /* there must be 'bottom' for ps__thumb-x */
  bottom: 2px;
  /* please don't change 'position' */
  position: absolute;
}

.ps__thumb-y {
  background-color: #aaa;
  border-radius: 6px;
  transition: background-color .2s linear, width .2s ease-in-out;
  -webkit-transition: background-color .2s linear, width .2s ease-in-out;
  width: 6px;
  /* there must be 'right' for ps__thumb-y */
  right: 2px;
  /* please don't change 'position' */
  position: absolute;
}

.ps__rail-x:hover > .ps__thumb-x,
.ps__rail-x:focus > .ps__thumb-x,
.ps__rail-x.ps--clicking .ps__thumb-x {
  background-color: #999;
  height: 11px;
}

.ps__rail-y:hover > .ps__thumb-y,
.ps__rail-y:focus > .ps__thumb-y,
.ps__rail-y.ps--clicking .ps__thumb-y {
  background-color: #999;
  width: 11px;
}

/* MS supports */
@supports (-ms-overflow-style: none) {
  .ps {
    overflow: auto !important;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ps {
    overflow: auto !important;
  }
}
/*end ps.css*/

/*card*/
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #ffffff;
  background-clip: border-box;
  border: 1px solid #EBEDF3;
  border-radius: 0.42rem; }
  .card > hr {
    margin-right: 0;
    margin-left: 0; }
  .card > .list-group {
    border-top: inherit;
    border-bottom: inherit; }
    .card > .list-group:first-child {
      border-top-width: 0;
      border-top-left-radius: calc(0.42rem - 1px);
      border-top-right-radius: calc(0.42rem - 1px); }
    .card > .list-group:last-child {
      border-bottom-width: 0;
      border-bottom-right-radius: calc(0.42rem - 1px);
      border-bottom-left-radius: calc(0.42rem - 1px); }
  .card > .card-header + .list-group,
  .card > .list-group + .card-footer {
    border-top: 0; }

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 2.25rem; }

.card-title {
  margin-bottom: 2rem; }

.card-subtitle {
  margin-top: -1rem;
  margin-bottom: 0; }

.card-text:last-child {
  margin-bottom: 0; }

.card-link:hover {
  text-decoration: none; }

.card-link + .card-link {
  margin-left: 2.25rem; }

.card-header {
  padding: 2rem 2.25rem;
  margin-bottom: 0;
  background-color: #ffffff;
  border-bottom: 1px solid #EBEDF3; }
  .card-header:first-child {
    border-radius: calc(0.42rem - 1px) calc(0.42rem - 1px) 0 0; }

.card-footer {
  padding: 2rem 2.25rem;
  background-color: #ffffff;
  border-top: 1px solid #EBEDF3; }
  .card-footer:last-child {
    border-radius: 0 0 calc(0.42rem - 1px) calc(0.42rem - 1px); }

.card-header-tabs {
  margin-right: -1.125rem;
  margin-bottom: -2rem;
  margin-left: -1.125rem;
  border-bottom: 0; }

.card-header-pills {
  margin-right: -1.125rem;
  margin-left: -1.125rem; }

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
  border-radius: calc(0.42rem - 1px); }

.card-img,
.card-img-top,
.card-img-bottom {
  flex-shrink: 0;
  width: 100%; }

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.42rem - 1px);
  border-top-right-radius: calc(0.42rem - 1px); }

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.42rem - 1px);
  border-bottom-left-radius: calc(0.42rem - 1px); }

.card-deck .card {
  margin-bottom: 12.5px; }

@media (min-width: 576px) {
  .card-deck {
    display: flex;
    flex-flow: row wrap;
    margin-right: -12.5px;
    margin-left: -12.5px; }
    .card-deck .card {
      flex: 1 0 0%;
      margin-right: 12.5px;
      margin-bottom: 0;
      margin-left: 12.5px; } }

.card-group > .card {
  margin-bottom: 12.5px; }

@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap; }
    .card-group > .card {
      flex: 1 0 0%;
      margin-bottom: 0; }
      .card-group > .card + .card {
        margin-left: 0;
        border-left: 0; }
      .card-group > .card:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0; }
        .card-group > .card:not(:last-child) .card-img-top,
        .card-group > .card:not(:last-child) .card-header {
          border-top-right-radius: 0; }
        .card-group > .card:not(:last-child) .card-img-bottom,
        .card-group > .card:not(:last-child) .card-footer {
          border-bottom-right-radius: 0; }
      .card-group > .card:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0; }
        .card-group > .card:not(:first-child) .card-img-top,
        .card-group > .card:not(:first-child) .card-header {
          border-top-left-radius: 0; }
        .card-group > .card:not(:first-child) .card-img-bottom,
        .card-group > .card:not(:first-child) .card-footer {
          border-bottom-left-radius: 0; } }

.card-columns .card {
  margin-bottom: 2rem; }

@media (min-width: 576px) {
  .card-columns {
    column-count: 3;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1; }
    .card-columns .card {
      display: inline-block;
      width: 100%; } }

.accordion {
  overflow-anchor: none; }
  .accordion > .card {
    overflow: hidden; }
    .accordion > .card:not(:last-of-type) {
      border-bottom: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0; }
    .accordion > .card:not(:first-of-type) {
      border-top-left-radius: 0;
      border-top-right-radius: 0; }
    .accordion > .card > .card-header {
      border-radius: 0;
      margin-bottom: -1px; }
      
      .card.card-custom {
  box-shadow: 0px 0px 30px 0px rgba(82, 63, 105, 0.05);
  border: 0; }
  .card.card-custom > .card-header {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    min-height: 70px;
    padding-top: 0;
    padding-bottom: 0;
    background-color: transparent; }
    .card.card-custom > .card-header .card-title {
      display: flex;
      align-items: center;
      margin: 0.5rem;
      margin-left: 0; }
      .card.card-custom > .card-header .card-title .card-icon {
        margin-right: 0.75rem;
        line-height: 0; }
        .card.card-custom > .card-header .card-title .card-icon i {
          font-size: 1.25rem;
          color: #7E8299;
          line-height: 0; }
          .card.card-custom > .card-header .card-title .card-icon i:after, .card.card-custom > .card-header .card-title .card-icon i:before {
            line-height: 0; }
        .card.card-custom > .card-header .card-title .card-icon .svg-icon svg {
          height: 24px;
          width: 24px; }
        .card.card-custom > .card-header .card-title .card-icon .svg-icon svg g [fill] {
          transition: fill 0.3s ease;
          fill: #7E8299; }
        .card.card-custom > .card-header .card-title .card-icon .svg-icon svg:hover g [fill] {
          transition: fill 0.3s ease; }
      .card.card-custom > .card-header .card-title,
      .card.card-custom > .card-header .card-title .card-label {
        font-weight: 500;
        font-size: 1.275rem;
        color: #181C32; }
      .card.card-custom > .card-header .card-title .card-label {
        margin: 0 0.75rem 0 0;
        flex-wrap: wrap; }
      .card.card-custom > .card-header .card-title small {
        color: #B5B5C3;
        font-size: 1rem; }
    .card.card-custom > .card-header .card-toolbar {
      display: flex;
      align-items: center;
      margin: 0.5rem 0;
      flex-wrap: wrap; }
    .card.card-custom > .card-header.card-header-tabs-line {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      align-items: stretch; }
      .card.card-custom > .card-header.card-header-tabs-line .card-toolbar {
        margin: 0; }
      .card.card-custom > .card-header.card-header-tabs-line .nav {
        border-bottom-color: transparent; }
        .card.card-custom > .card-header.card-header-tabs-line .nav .nav-item {
          align-items: stretch; }
        .card.card-custom > .card-header.card-header-tabs-line .nav .nav-link {
          padding-top: 2rem;
          padding-bottom: 2rem; }
    .card.card-custom > .card-header.card-header-right {
      justify-content: flex-end; }
  .card.card-custom > .card-body {
    padding: 2rem 2.25rem; }
  .card.card-custom > .card-footer {
    background-color: transparent; }
  .card.card-custom .card-scroll {
    position: relative;
    overflow: auto; }
  .card.card-custom.card-stretch {
    display: flex;
    align-items: stretch !important;
    flex-direction: column;
    height: 100%; }
    .card.card-custom.card-stretch.gutter-b {
      height: calc(100% - 25px); }
    .card.card-custom.card-stretch.card-stretch-half {
      height: 50%; }
      .card.card-custom.card-stretch.card-stretch-half.gutter-b {
        height: calc(50% - 25px); }
    .card.card-custom.card-stretch.card-stretch-third {
      height: 33.33%; }
      .card.card-custom.card-stretch.card-stretch-third.gutter-b {
        height: calc(33.33% - 25px); }
    .card.card-custom.card-stretch.card-stretch-fourth {
      height: 25%; }
      .card.card-custom.card-stretch.card-stretch-fourth.gutter-b {
        height: calc(25% - 25px); }
  .card.card-custom.card-fit > .card-header {
    border-bottom: 0; }
  .card.card-custom.card-fit > .card-footer {
    border-top: 0; }
  .card.card-custom.card-space {
    padding-left: 2.25rem;
    padding-right: 2.25rem; }
    .card.card-custom.card-space > .card-header {
      padding-left: 0;
      padding-right: 0; }
    .card.card-custom.card-space > form > .card-body,
    .card.card-custom.card-space > .card-body {
      padding-left: 0;
      padding-right: 0; }
    .card.card-custom.card-space > form > .card-footer,
    .card.card-custom.card-space > .card-footer {
      padding-left: 0;
      padding-right: 0; }
  .card.card-custom.card-sticky > .card-header {
    transition: left 0.3s, right 0.3s, height 0.3s;
    min-height: 70px; }
  .card-sticky-on .card.card-custom.card-sticky > .card-header {
    transition: left 0.3s, right 0.3s, height 0.3s;
    position: fixed;
    box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.1);
    z-index: 101;
    background: #ffffff; }
  .card.card-custom.card-transparent {
    background-color: transparent; }
  .card.card-custom.card-shadowless {
    box-shadow: none; }
  .card.card-custom.card-px-0 .card-header,
  .card.card-custom.card-px-0 .card-body,
  .card.card-custom.card-px-0 .card-footer {
    padding-left: 0;
    padding-right: 0; }
  .card.card-custom.card-border {
    box-shadow: none;
    border: 1px solid #EBEDF3; }
  .card.card-custom.card-collapsed > form,
  .card.card-custom.card-collapsed > .card-body {
    display: none; }
  .card.card-custom .card-header .card-toolbar [data-card-tool="toggle"] i {
    transition: all 0.15s ease; }
  .card.card-custom.card-collapsed .card-header .card-toolbar [data-card-tool="toggle"] i, .card.card-custom.card-collapse .card-header .card-toolbar [data-card-tool="toggle"] i {
    transition: all 0.15s ease;
    transform: rotate(180deg); }

.card-spacer {
  padding: 2rem 2.25rem !important; }

.card-spacer-x {
  padding-left: 2.25rem !important;
  padding-right: 2.25rem !important; }

.card-spacer-y {
  padding-top: 2rem !important;
  padding-bottom: 2rem !important; }

.card-rounded {
  border-radius: 0.42rem; }

.card-rounded-top {
  border-top-left-radius: 0.42rem;
  border-top-right-radius: 0.42rem; }

.card-rounded-bottom {
  border-bottom-left-radius: 0.42rem;
  border-bottom-right-radius: 0.42rem; }

@media (max-width: 767.98px) {
  .card.card-custom > .card-header:not(.flex-nowrap) {
    min-height: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem; } }

.rounded-card {
  border-radius: 0.42rem; }

.rounded-card-top {
  border-top-left-radius: 0.42rem;
  border-top-right-radius: 0.42rem; }

.rounded-card-bottom {
  border-bottom-left-radius: 0.42rem;
  border-bottom-right-radius: 0.42rem; }
table {
  border-collapse: collapse; }
  .border-0 { border: 0 !important; }
    
  // The selectpicker components
.bootstrap-select {
  &.form-control {
    margin-bottom: 0;
    padding: 0;
    border: none;
    height: auto;

    :not(.input-group) > &:not([class*="col-"]) {
      width: 100%;
    }

    &.input-group-btn {
      float: none;
      z-index: auto;
    }
  }

  .form-inline &,
  .form-inline &.form-control:not([class*="col-"]) {
    width: auto;
  }

  &:not(.input-group-btn),
  &[class*="col-"] {
    float: none;
    display: inline-block;
    margin-left: 0;
  }

  // Forces the pull to the right, if necessary
  &,
  &[class*="col-"],
  .row &[class*="col-"] {
    &.dropdown-menu-right {
      float: right;
    }
  }

  .form-inline &,
  .form-horizontal &,
  .form-group & {
    margin-bottom: 0;
  }

  .form-group-lg &.form-control,
  .form-group-sm &.form-control {
    padding: 0;

    .dropdown-toggle {
      height: 100%;
      font-size: inherit;
      line-height: inherit;
      border-radius: inherit;
    }
  }

  &.form-control-sm .dropdown-toggle,
  &.form-control-lg .dropdown-toggle {
    font-size: inherit;
    line-height: inherit;
    border-radius: inherit;
  }

  &.form-control-sm .dropdown-toggle {
    padding: @input-padding-y-sm @input-padding-x-sm;
  }

  &.form-control-lg .dropdown-toggle {
    padding: @input-padding-y-lg @input-padding-x-lg;
  }

  // Set the width of the live search (and any other form control within an inline form)
  // see https://github.com/silviomoreto/bootstrap-select/issues/685
  .form-inline & .form-control {
    width: 100%;
  }

  &.disabled,
  > .disabled {
    .cursor-disabled();

    &:focus {
      outline: none !important;
    }
  }

  &.bs-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 0 !important;
    padding: 0 !important;
    
    .dropdown-menu {
      z-index: @zindex-select-dropdown;
    }
  }
  
  // The selectpicker button
  .dropdown-toggle {
    .filter-option {
      position: static;
      top: 0;
      left: 0;
      float: left;
      height: 100%;
      width: 100%;
      text-align: left;
      overflow: hidden;
      flex: 0 1 auto; // for IE10

      .bs3& {
        padding-right: inherit;
      }

      .input-group .bs3-has-addon& {
        position: absolute;
        padding-top: inherit;
        padding-bottom: inherit;
        padding-left: inherit;
        float: none;

        .filter-option-inner {
          padding-right: inherit;
        }
      }
    }

    .filter-option-inner-inner {
      overflow: hidden;
    }

    // used to expand the height of the button when inside an input group
    .filter-expand {
      width: 0 !important;
      float: left;
      opacity: 0 !important;
      overflow: hidden;
    }

    .caret {
      position: absolute;
      top: 50%;
      right: 12px;
      margin-top: -2px;
      vertical-align: middle;
    }
  }

  .input-group &.form-control .dropdown-toggle {
    border-radius: inherit;
  }

  &[class*="col-"] .dropdown-toggle {
    width: 100%;
  }

  // The selectpicker dropdown
  .dropdown-menu {
    min-width: 100%;
    box-sizing: border-box;

    > .inner:focus {
      outline: none !important;
    }

    &.inner {
      position: static;
      float: none;
      border: 0;
      padding: 0;
      margin: 0;
      border-radius: 0;
      box-shadow: none;
    }

    li {
      position: relative;

      &.active small {
        color: @input-alt-color-placeholder !important;
      }

      &.disabled a {
        .cursor-disabled();
      }

      a {
        cursor: pointer;
        user-select: none;

        &.opt {
          position: relative;
          padding-left: 2.25em;
        }

        span.check-mark {
          display: none;
        }

        span.text {
          display: inline-block;
        }
      }

      small {
        padding-left: 0.5em;
      }
    }

    .notify {
      position: absolute;
      bottom: 5px;
      width: 96%;
      margin: 0 2%;
      min-height: 26px;
      padding: 3px 5px;
      background: rgb(245, 245, 245);
      border: 1px solid rgb(227, 227, 227);
      box-shadow: inset 0 1px 1px fade(rgb(0, 0, 0), 5%);
      pointer-events: none;
      opacity: 0.9;
      box-sizing: border-box;

      &.fadeOut {
        animation: 300ms linear 750ms forwards bs-notify-fadeOut;
      }
    }
  }
  
  .dropup,
.dropright,
.dropdown,
.dropleft {
  position: relative; }

.dropdown-toggle {
  white-space: nowrap; }
  .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent; }
  .dropdown-toggle:empty::after {
    margin-left: 0; }

.dropdown-menu-left {
  right: auto;
  left: 0; }

.dropdown-menu-right {
  right: 0;
  left: auto; }

@media (min-width: 576px) {
  .dropdown-menu-sm-left {
    right: auto;
    left: 0; }
  .dropdown-menu-sm-right {
    right: 0;
    left: auto; } }

@media (min-width: 768px) {
  .dropdown-menu-md-left {
    right: auto;
    left: 0; }
  .dropdown-menu-md-right {
    right: 0;
    left: auto; } }

@media (min-width: 992px) {
  .dropdown-menu-lg-left {
    right: auto;
    left: 0; }
  .dropdown-menu-lg-right {
    right: 0;
    left: auto; } }

@media (min-width: 1200px) {
  .dropdown-menu-xl-left {
    right: auto;
    left: 0; }
  .dropdown-menu-xl-right {
    right: 0;
    left: auto; } }

@media (min-width: 1400px) {
  .dropdown-menu-xxl-left {
    right: auto;
    left: 0; }
  .dropdown-menu-xxl-right {
    right: 0;
    left: auto; } }

.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem; }

.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent; }

.dropup .dropdown-toggle:empty::after {
  margin-left: 0; }

.dropright .dropdown-menu {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem; }

.dropright .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid; }

.dropright .dropdown-toggle:empty::after {
  margin-left: 0; }

.dropright .dropdown-toggle::after {
  vertical-align: 0; }

.dropleft .dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem; }

.dropleft .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: ""; }

.dropleft .dropdown-toggle::after {
  display: none; }

.dropleft .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent; }

.dropleft .dropdown-toggle:empty::after {
  margin-left: 0; }

.dropleft .dropdown-toggle::before {
  vertical-align: 0; }

.dropdown-menu[x-placement^="top"], .dropdown-menu[x-placement^="right"], .dropdown-menu[x-placement^="bottom"], .dropdown-menu[x-placement^="left"] {
  right: auto;
  bottom: auto; }

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #EBEDF3; }

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.75rem 1.25rem;
  clear: both;
  font-weight: 400;
  color: #181C32;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0; }
  .dropdown-item:hover, .dropdown-item:focus {
    color: #101221;
    text-decoration: none;
    background-color: #F3F6F9; }
  .dropdown-item.active, .dropdown-item:active {
    color: #ffffff;
    text-decoration: none;
    background-color: #3699FF; }
  .dropdown-item.disabled, .dropdown-item:disabled {
    color: #7E8299;
    pointer-events: none;
    background-color: transparent; }

.dropdown-menu.show {
  display: block; }

.dropdown-header {
  display: block;
  padding: 0.5rem 1.25rem;
  margin-bottom: 0;
  font-size: 0.925rem;
  color: #7E8299;
  white-space: nowrap; }

.dropdown-item-text {
  display: block;
  padding: 0.75rem 1.25rem;
  color: #181C32; }
  .bootstrap-select > .dropdown-toggle {
  position: relative;
  outline: none !important;
  padding: 0.65rem 1rem;
  border-radius: 0.42rem; }
  .bootstrap-select > .dropdown-toggle:focus {
    outline: none !important;
    border-color: #69b3ff !important; }
  .bootstrap-select > .dropdown-toggle:after {
    border: 0;
    margin-right: -2px;
    font-size: 0.6rem;
    display: inline-block;
    font-family: Ki;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    line-height: 1;
    text-decoration: inherit;
    text-rendering: optimizeLegibility;
    text-transform: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    content: ""; }
  .bootstrap-select > .dropdown-toggle:before {
    width: auto; }
  .bootstrap-select > .dropdown-toggle.btn-light, .bootstrap-select > .dropdown-toggle.btn-secondary {
    background: #ffffff !important;
    color: #3F4254;
    border-color: #E4E6EF !important;
    box-shadow: none; }
    .bootstrap-select > .dropdown-toggle.btn-light.focus, .bootstrap-select > .dropdown-toggle.btn-light.active, .bootstrap-select > .dropdown-toggle.btn-secondary.focus, .bootstrap-select > .dropdown-toggle.btn-secondary.active {
      border-color: #E4E6EF !important; }
    .bootstrap-select > .dropdown-toggle.btn-light.disabled, .bootstrap-select > .dropdown-toggle.btn-light:disabled, .bootstrap-select > .dropdown-toggle.btn-secondary.disabled, .bootstrap-select > .dropdown-toggle.btn-secondary:disabled {
      background: #F3F6F9 !important;
      opacity: 1; }
    .bootstrap-select > .dropdown-toggle.btn-light .filter-option, .bootstrap-select > .dropdown-toggle.btn-secondary .filter-option {
      color: #3F4254; }
      .bootstrap-select > .dropdown-toggle.btn-light .filter-option .bs-icon, .bootstrap-select > .dropdown-toggle.btn-secondary .filter-option .bs-icon {
        color: #3F4254;
        margin-right: 0.1rem; }
  .bootstrap-select > .dropdown-toggle.bs-placeholder {
    color: #B5B5C3; }
    .bootstrap-select > .dropdown-toggle.bs-placeholder.btn {
      color: #ffffff; }

.bootstrap-select .dropdown-menu.inner {
  display: block; }
  .bootstrap-select .dropdown-menu.inner > li > a {
    display: block;
    position: relative;
    outline: none !important;
    padding: 10px 15px; }
    .bootstrap-select .dropdown-menu.inner > li > a:hover {
      text-decoration: none; }
    .bootstrap-select .dropdown-menu.inner > li > a .bs-icon {
      font-size: 1.3rem;
      vertical-align: middle;
      color: #B5B5C3;
      margin-right: 0.5rem; }
    .bootstrap-select .dropdown-menu.inner > li > a .text {
      color: #3F4254; }
      .bootstrap-select .dropdown-menu.inner > li > a .text small {
        color: #B5B5C3; }
    .bootstrap-select .dropdown-menu.inner > li > a .check-mark {
      color: #7E8299; }
  .bootstrap-select .dropdown-menu.inner > li.selected > a .check-mark {
    top: 50%;
    position: absolute;
    margin-top: -0.4rem;
    font-size: 0.7rem;
    right: 1rem; }
    .bootstrap-select .dropdown-menu.inner > li.selected > a .check-mark:before {
      font-family: Ki;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      line-height: 1;
      text-decoration: inherit;
      text-rendering: optimizeLegibility;
      text-transform: none;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smoothing: antialiased;
      content: ""; }
    .bootstrap-select .dropdown-menu.inner > li.selected > a .check-mark:after {
      display: none; }
  .bootstrap-select .dropdown-menu.inner > li.selected > a, .bootstrap-select .dropdown-menu.inner > li:hover > a {
    background: #F3F6F9; }
    .bootstrap-select .dropdown-menu.inner > li.selected > a .text, .bootstrap-select .dropdown-menu.inner > li:hover > a .text {
      color: #3F4254; }
    .bootstrap-select .dropdown-menu.inner > li.selected > a .bs-icon, .bootstrap-select .dropdown-menu.inner > li:hover > a .bs-icon {
      color: #3F4254; }
    .bootstrap-select .dropdown-menu.inner > li.selected > a .check-mark, .bootstrap-select .dropdown-menu.inner > li:hover > a .check-mark {
      color: #7E8299; }
  .bootstrap-select .dropdown-menu.inner > li.divider {
    margin: 10px 0;
    border-bottom: 1px solid #F3F6F9; }
  .bootstrap-select .dropdown-menu.inner > li.hidden {
    display: none; }
  .bootstrap-select .dropdown-menu.inner > li.no-results {
    padding: 10px 15px; }
  .bootstrap-select .dropdown-menu.inner > li.dropdown-header {
    color: #7E8299; }
  .bootstrap-select .dropdown-menu.inner > li.selected > a {
    background: #F3F6F9; }
  .bootstrap-select .dropdown-menu.inner > li.disabled > a {
    opacity: 0.8; }
  .bootstrap-select .dropdown-menu.inner > li.active:not(.selected) > a {
    background: #3699FF; }
    .bootstrap-select .dropdown-menu.inner > li.active:not(.selected) > a .bs-icon,
    .bootstrap-select .dropdown-menu.inner > li.active:not(.selected) > a .text {
      color: #ffffff; }
    .bootstrap-select .dropdown-menu.inner > li.active:not(.selected) > a .check-mark {
      color: #ffffff; }
  .bootstrap-select .dropdown-menu.inner > li.no-results {
    color: #7E8299; }

.bootstrap-select .popover-title {
  padding: 10px 15px;
  margin-bottom: 5px; }
  .bootstrap-select .popover-title .close {
    display: none; }

.bootstrap-select .bs-searchbox,
.bootstrap-select .bs-actionsbox,
.bootstrap-select .bs-donebutton {
  padding: 10px 15px; }


.bootstrap-select.is-invalid .btn.dropdown-toggle {
  border-color: #F64E60; }

.bootstrap-select.is-valid .btn.dropdown-toggle {
  border-color: #1BC5BD; }

.bootstrap-select .popover-title {
  background: #F3F6F9;
  border: 0; }

.bootstrap-select .dropdown-menu {
  max-width: 100% !important;
  border-top: none !important;
  border: 0;
  box-shadow: 0px 0px 50px 0px rgba(82, 63, 105, 0.15); }
  .bootstrap-select .dropdown-menu.show {
    width: auto; }

.content .bootstrap-select .dropdown-menu {
  z-index: 93; }
    `;
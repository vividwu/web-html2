import {LitElement, html, css} from './lit-core.min.js';
import { coreCss } from './vv-css.js';
import { VvPopup } from './vv-popup.js';
import { VvIcon } from './vv-icon.js';

export class VvDate extends LitElement {
    static get properties() {
        return {  id: String,
            type: String,
            value: String,
            mode: String,
            size: String,
            labelName: String,
            placeholder: String,
            noLabel: { type: Boolean, reflect: true },  /*设置完只写属性Key也可以*/
            open: { type: Boolean, reflect: true },
            removable: { type: Boolean, reflect: true },
            myArray: Array };
    }
    static get styles() {
        return [
            coreCss,
            css`
            .datepicker {
  border-radius: 4px;
  direction: ltr;
}
.bootstrap-select.show > .dropdown-toggle.btn-light, .bootstrap-select.show > .dropdown-toggle.btn-secondary {
  border-color: #69b3ff !important; }
  
  .dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 98;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #3F4254;
  text-align: left;
  list-style: none;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 0 solid rgba(0, 0, 0, 0.15);
  border-radius: 0.42rem;
  box-shadow: 0px 0px 50px 0px rgb(82 63 105 / 15%); }
  
  .content .bootstrap-select .dropdown-menu {
  z-index: 93; }
  
  .bootstrap-select .dropdown-menu {
  max-width: 100% !important;
  border-top: none !important;
  border: 0;
  box-shadow: 0px 0px 50px 0px rgb(82 63 105 / 15%); }
  
  .btn.btn-light {
  color: #7E8299;
  background-color: #F3F6F9;
  border-color: #F3F6F9; }
  .btn.btn-light i {
    color: #7E8299; }
  .btn.btn-light .svg-icon svg g [fill] {
    transition: fill 0.3s ease;
    fill: #7E8299; }
  .btn.btn-light .svg-icon svg:hover g [fill] {
    transition: fill 0.3s ease; }
  .btn.btn-light.dropdown-toggle:after {
    color: #7E8299; }
  .btn.btn-light:hover:not(.btn-text):not(:disabled):not(.disabled), .btn.btn-light:focus:not(.btn-text), .btn.btn-light.focus:not(.btn-text) {
    color: #7E8299;
    background-color: #E4E6EF;
    border-color: #E4E6EF; }
    .btn.btn-light:hover:not(.btn-text):not(:disabled):not(.disabled) i, .btn.btn-light:focus:not(.btn-text) i, .btn.btn-light.focus:not(.btn-text) i {
      color: #7E8299; }
    .btn.btn-light:hover:not(.btn-text):not(:disabled):not(.disabled) .svg-icon svg g [fill], .btn.btn-light:focus:not(.btn-text) .svg-icon svg g [fill], .btn.btn-light.focus:not(.btn-text) .svg-icon svg g [fill] {
      transition: fill 0.3s ease;
      fill: #7E8299; }
    .btn.btn-light:hover:not(.btn-text):not(:disabled):not(.disabled) .svg-icon svg:hover g [fill], .btn.btn-light:focus:not(.btn-text) .svg-icon svg:hover g [fill], .btn.btn-light.focus:not(.btn-text) .svg-icon svg:hover g [fill] {
      transition: fill 0.3s ease; }
    .btn.btn-light:hover:not(.btn-text):not(:disabled):not(.disabled).dropdown-toggle:after, .btn.btn-light:focus:not(.btn-text).dropdown-toggle:after, .btn.btn-light.focus:not(.btn-text).dropdown-toggle:after {
      color: #7E8299; }
  .btn.btn-light.disabled, .btn.btn-light:disabled {
    color: #7E8299;
    background-color: #F3F6F9;
    border-color: #F3F6F9; }
    .btn.btn-light.disabled i, .btn.btn-light:disabled i {
      color: #7E8299; }
    .btn.btn-light.disabled .svg-icon svg g [fill], .btn.btn-light:disabled .svg-icon svg g [fill] {
      transition: fill 0.3s ease;
      fill: #7E8299; }
    .btn.btn-light.disabled .svg-icon svg:hover g [fill], .btn.btn-light:disabled .svg-icon svg:hover g [fill] {
      transition: fill 0.3s ease; }
    .btn.btn-light.disabled.dropdown-toggle:after, .btn.btn-light:disabled.dropdown-toggle:after {
      color: #7E8299; }
  .btn.btn-light:not(:disabled):not(.disabled):active:not(.btn-text), .btn.btn-light:not(:disabled):not(.disabled).active,
  .show > .btn.btn-light.dropdown-toggle,
  .show .btn.btn-light.btn-dropdown {
    color: #7E8299;
    background-color: #E4E6EF;
    border-color: #E4E6EF; }
    .btn.btn-light:not(:disabled):not(.disabled):active:not(.btn-text) i, .btn.btn-light:not(:disabled):not(.disabled).active i,
    .show > .btn.btn-light.dropdown-toggle i,
    .show .btn.btn-light.btn-dropdown i {
      color: #7E8299; }
    .btn.btn-light:not(:disabled):not(.disabled):active:not(.btn-text) .svg-icon svg g [fill], .btn.btn-light:not(:disabled):not(.disabled).active .svg-icon svg g [fill],
    .show > .btn.btn-light.dropdown-toggle .svg-icon svg g [fill],
    .show .btn.btn-light.btn-dropdown .svg-icon svg g [fill] {
      transition: fill 0.3s ease;
      fill: #7E8299; }
    .btn.btn-light:not(:disabled):not(.disabled):active:not(.btn-text) .svg-icon svg:hover g [fill], .btn.btn-light:not(:disabled):not(.disabled).active .svg-icon svg:hover g [fill],
    .show > .btn.btn-light.dropdown-toggle .svg-icon svg:hover g [fill],
    .show .btn.btn-light.btn-dropdown .svg-icon svg:hover g [fill] {
      transition: fill 0.3s ease; }
    .btn.btn-light:not(:disabled):not(.disabled):active:not(.btn-text).dropdown-toggle:after, .btn.btn-light:not(:disabled):not(.disabled).active.dropdown-toggle:after,
    .show > .btn.btn-light.dropdown-toggle.dropdown-toggle:after,
    .show .btn.btn-light.btn-dropdown.dropdown-toggle:after {
      color: #7E8299; }
      
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
 
.bootstrap-select .popover-title {
  padding: 10px 15px;
  margin-bottom: 5px; }
  .bootstrap-select .popover-title .close {
    display: none; }
    
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
      .btn {
  display: inline-block;
  font-weight: normal;
  color: #3F4254;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.55rem 1rem;/*0.65*/
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.42rem;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none; } }
  .btn:hover {
    color: #3F4254;
    text-decoration: none; }
  .btn:focus, .btn.focus {
    outline: 0;
    box-shadow: none; }
  .btn.disabled, .btn:disabled {
    opacity: 0.6;
    box-shadow: none; }
  .btn:not(:disabled):not(.disabled) {
    cursor: pointer; }
    .btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {
      box-shadow: none; }
      .bootstrap-select > .dropdown-toggle {
  position: relative;
  outline: none !important;
  padding: 0.55rem 1rem;/*0.65*/
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

.bootstrap-select .popover-title {
  padding: 10px 15px;
  margin-bottom: 5px; }
  .bootstrap-select .popover-title .close {
    display: none; }
    
    select.bs-select-hidden,
.bootstrap-select > select.bs-select-hidden,
select.selectpicker {
  display: none !important;
}
.bootstrap-select {
  width: 220px \\0;
  /*IE9 and below*/
  vertical-align: middle;
}
.bootstrap-select > .dropdown-toggle {
  position: relative;
  width: 100%;
  text-align: right;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
}
.bootstrap-select > .dropdown-toggle:after {
  margin-top: -1px;
}
.bootstrap-select > .dropdown-toggle.bs-placeholder,
.bootstrap-select > .dropdown-toggle.bs-placeholder:hover,
.bootstrap-select > .dropdown-toggle.bs-placeholder:focus,
.bootstrap-select > .dropdown-toggle.bs-placeholder:active {
  color: #999;
}
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary:hover,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary:hover,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success:hover,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger:hover,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info:hover,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark:hover,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary:focus,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary:focus,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success:focus,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger:focus,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info:focus,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark:focus,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-primary:active,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-secondary:active,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-success:active,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-danger:active,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-info:active,
.bootstrap-select > .dropdown-toggle.bs-placeholder.btn-dark:active {
  color: rgba(255, 255, 255, 0.5);
}
.bootstrap-select > select {
  position: absolute !important;
  bottom: 0;
  left: 50%;
  display: block !important;
  width: 0.5px !important;
  height: 100% !important;
  padding: 0 !important;
  opacity: 0 !important;
  border: none;
  z-index: 0 !important;
}
.bootstrap-select > select.mobile-device {
  top: 0;
  left: 0;
  display: block !important;
  width: 100% !important;
  z-index: 2 !important;
}

.form-inline .bootstrap-select,
.form-horizontal .bootstrap-select,
.form-group .bootstrap-select {
  margin-bottom: 0;
}
.form-group-lg .bootstrap-select.form-control,
.form-group-sm .bootstrap-select.form-control {
  padding: 0;
}
.form-group-lg .bootstrap-select.form-control .dropdown-toggle,
.form-group-sm .bootstrap-select.form-control .dropdown-toggle {
  height: 100%;
  font-size: inherit;
  line-height: inherit;
  border-radius: inherit;
}
.bootstrap-select.form-control-sm .dropdown-toggle,
.bootstrap-select.form-control-lg .dropdown-toggle {
  font-size: inherit;
  line-height: inherit;
  border-radius: inherit;
}
/*.bootstrap-select.form-control-sm .dropdown-toggle {
  padding: 0.25rem 0.5rem;
}*/
.bootstrap-select.form-control-lg .dropdown-toggle {
  padding: 0.5rem 1rem;
}
.form-inline .bootstrap-select .form-control {
  width: 100%;
}
.bootstrap-select.disabled,
.bootstrap-select > .disabled {
  cursor: not-allowed;
}
.bootstrap-select.form-control {
    margin-bottom: 0;
    padding: 0;
    border: none;
}

  
  .bootstrap-select .dropdown-menu.show {
    width: auto; }
    .dropdown-menu.show {
  display: block; }
  .dropdown-menu[x-placement^="top"], .dropdown-menu[x-placement^="right"], .dropdown-menu[x-placement^="bottom"], .dropdown-menu[x-placement^="left"] {
  right: auto;
  bottom: auto; }
  
  .bootstrap-select .dropdown-menu {
  min-width: 100%;
  box-sizing: border-box;
}

.bootstrap-datetimepicker-widget {
    /*border: 1px solid #EBEDF3;*/
    border-radius: 0.42rem;
}
.bootstrap-datetimepicker-widget {
    list-style: none;
}
.bootstrap-datetimepicker-widget .datepicker table {
    width: 100%;
}
.datepicker table {
    width: 100%;
}
.datepicker table {
  margin: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.bootstrap-datetimepicker-widget .list-unstyled {
    margin: 0;
}
.list-unstyled {
    padding-left: 0;
    list-style: none;
}
.list-unstyled {
    padding-left: 0;
    list-style: none;
}
.bootstrap-datetimepicker-widget .datepicker {
    width: 100%;
    padding: 10px;
}
.datepicker {
    width: 265px;
    padding: 10px;
    border-radius: 0.42rem;
}
.datepicker {
    border-radius: 4px;
    direction: ltr;
}
.datepicker table {
  margin: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.datepicker table tr td,
.datepicker table tr th {
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: none;
}
.table-striped .datepicker table tr td,
.table-striped .datepicker table tr th {
  background-color: transparent;
}
.datepicker table tr td.old,
.datepicker table tr td.new {
  color: #777777;
}
.datepicker table tr td.day:hover,
.datepicker table tr td.focused {
  background: #eeeeee;
  cursor: pointer;
}
.datepicker table tr td.disabled,
.datepicker table tr td.disabled:hover {
  background: none;
  color: #777777;
  cursor: default;
}
.datepicker table tr td.highlighted {
  color: #000;
  background-color: #d9edf7;
  border-color: #85c5e5;
  border-radius: 0;
}
.datepicker table tr td.highlighted:focus,
.datepicker table tr td.highlighted.focus {
  color: #000;
  background-color: #afd9ee;
  border-color: #298fc2;
}
.datepicker table tr td.highlighted:hover {
  color: #000;
  background-color: #afd9ee;
  border-color: #52addb;
}


.datepicker table tr td.highlighted.disabled:hover,
.datepicker table tr td.highlighted[disabled]:hover,
fieldset[disabled] .datepicker table tr td.highlighted:hover,
.datepicker table tr td.highlighted.disabled:focus,
.datepicker table tr td.highlighted[disabled]:focus,
fieldset[disabled] .datepicker table tr td.highlighted:focus,
.datepicker table tr td.highlighted.disabled.focus,
.datepicker table tr td.highlighted[disabled].focus,
fieldset[disabled] .datepicker table tr td.highlighted.focus {
  background-color: #d9edf7;
  border-color: #85c5e5;
}
.datepicker table tr td.highlighted.focused {
  background: #afd9ee;
}
.datepicker table tr td.highlighted.disabled,
.datepicker table tr td.highlighted.disabled:active {
  background: #d9edf7;
  color: #777777;
}
.datepicker table tr td.today {
  color: #000;
  background-color: #ffdb99;
  border-color: #ffb733;
}
.datepicker table tr td.today:focus,
.datepicker table tr td.today.focus {
  color: #000;
  background-color: #ffc966;
  border-color: #b37400;
}
.datepicker table tr td.today:hover {
  color: #000;
  background-color: #ffc966;
  border-color: #f59e00;
}
.datepicker table tr td.today:active,
.datepicker table tr td.today.active {
  color: #000;
  background-color: #ffc966;
  border-color: #f59e00;
}
.datepicker table tr td.today:active:hover,
.datepicker table tr td.today.active:hover,
.datepicker table tr td.today:active:focus,
.datepicker table tr td.today.active:focus,
.datepicker table tr td.today:active.focus,
.datepicker table tr td.today.active.focus {
  color: #000;
  background-color: #ffbc42;
  border-color: #b37400;
}
.datepicker table tr td.today.disabled:hover,
.datepicker table tr td.today[disabled]:hover,
fieldset[disabled] .datepicker table tr td.today:hover,
.datepicker table tr td.today.disabled:focus,
.datepicker table tr td.today[disabled]:focus,
fieldset[disabled] .datepicker table tr td.today:focus,
.datepicker table tr td.today.disabled.focus,
.datepicker table tr td.today[disabled].focus,
fieldset[disabled] .datepicker table tr td.today.focus {
  background-color: #ffdb99;
  border-color: #ffb733;
}
.datepicker table tr td.today.focused {
  background: #ffc966;
}
.datepicker table tr td.today.disabled,
.datepicker table tr td.today.disabled:active {
  background: #ffdb99;
  color: #777777;
}
.datepicker table tr td.range {
  color: #000;
  background-color: #eeeeee;
  border-color: #bbbbbb;
  border-radius: 0;
}
.datepicker table tr td.range:focus,
.datepicker table tr td.range.focus {
  color: #000;
  background-color: #d5d5d5;
  border-color: #7c7c7c;
}
.datepicker table tr td.range:hover {
  color: #000;
  background-color: #d5d5d5;
  border-color: #9d9d9d;
}
.datepicker table tr td.range:active,
.datepicker table tr td.range.active {
  color: #000;
  background-color: #d5d5d5;
  border-color: #9d9d9d;
}
.datepicker table tr td.range:active:hover,
.datepicker table tr td.range.active:hover,
.datepicker table tr td.range:active:focus,
.datepicker table tr td.range.active:focus,
.datepicker table tr td.range:active.focus,
.datepicker table tr td.range.active.focus {
  color: #000;
  background-color: #c3c3c3;
  border-color: #7c7c7c;
}
.datepicker table tr td.range.disabled:hover,
.datepicker table tr td.range[disabled]:hover,
fieldset[disabled] .datepicker table tr td.range:hover,
.datepicker table tr td.range.disabled:focus,
.datepicker table tr td.range[disabled]:focus,
fieldset[disabled] .datepicker table tr td.range:focus,
.datepicker table tr td.range.disabled.focus,
.datepicker table tr td.range[disabled].focus,
fieldset[disabled] .datepicker table tr td.range.focus {
  background-color: #eeeeee;
  border-color: #bbbbbb;
}
.datepicker table tr td.range.focused {
  background: #d5d5d5;
}
.datepicker table tr td.range.disabled,
.datepicker table tr td.range.disabled:active {
  background: #eeeeee;
  color: #777777;
}
.datepicker table tr td.range.highlighted {
  color: #000;
  background-color: #e4eef3;
  border-color: #9dc1d3;
}
.datepicker table tr td.range.highlighted:focus,
.datepicker table tr td.range.highlighted.focus {
  color: #000;
  background-color: #c1d7e3;
  border-color: #4b88a6;
}
.datepicker table tr td.range.highlighted:hover {
  color: #000;
  background-color: #c1d7e3;
  border-color: #73a6c0;
}
.datepicker table tr td.range.highlighted:active,
.datepicker table tr td.range.highlighted.active {
  color: #000;
  background-color: #c1d7e3;
  border-color: #73a6c0;
}
.datepicker table tr td.range.highlighted:active:hover,
.datepicker table tr td.range.highlighted.active:hover,
.datepicker table tr td.range.highlighted:active:focus,
.datepicker table tr td.range.highlighted.active:focus,
.datepicker table tr td.range.highlighted:active.focus,
.datepicker table tr td.range.highlighted.active.focus {
  color: #000;
  background-color: #a8c8d8;
  border-color: #4b88a6;
}
.datepicker table tr td.range.highlighted.disabled:hover,
.datepicker table tr td.range.highlighted[disabled]:hover,
fieldset[disabled] .datepicker table tr td.range.highlighted:hover,
.datepicker table tr td.range.highlighted.disabled:focus,
.datepicker table tr td.range.highlighted[disabled]:focus,
fieldset[disabled] .datepicker table tr td.range.highlighted:focus,
.datepicker table tr td.range.highlighted.disabled.focus,
.datepicker table tr td.range.highlighted[disabled].focus,
fieldset[disabled] .datepicker table tr td.range.highlighted.focus {
  background-color: #e4eef3;
  border-color: #9dc1d3;
}
.datepicker table tr td.range.highlighted.focused {
  background: #c1d7e3;
}
.datepicker table tr td.range.highlighted.disabled,
.datepicker table tr td.range.highlighted.disabled:active {
  background: #e4eef3;
  color: #777777;
}
.datepicker table tr td.range.today {
  color: #000;
  background-color: #f7ca77;
  border-color: #f1a417;
}
.datepicker table tr td.range.today:focus,
.datepicker table tr td.range.today.focus {
  color: #000;
  background-color: #f4b747;
  border-color: #815608;
}
.datepicker table tr td.range.today:hover {
  color: #000;
  background-color: #f4b747;
  border-color: #bf800c;
}
.datepicker table tr td.range.today:active,
.datepicker table tr td.range.today.active {
  color: #000;
  background-color: #f4b747;
  border-color: #bf800c;
}
.datepicker table tr td.range.today:active:hover,
.datepicker table tr td.range.today.active:hover,
.datepicker table tr td.range.today:active:focus,
.datepicker table tr td.range.today.active:focus,
.datepicker table tr td.range.today:active.focus,
.datepicker table tr td.range.today.active.focus {
  color: #000;
  background-color: #f2aa25;
  border-color: #815608;
}
.datepicker table tr td.range.today.disabled:hover,
.datepicker table tr td.range.today[disabled]:hover,
fieldset[disabled] .datepicker table tr td.range.today:hover,
.datepicker table tr td.range.today.disabled:focus,
.datepicker table tr td.range.today[disabled]:focus,
fieldset[disabled] .datepicker table tr td.range.today:focus,
.datepicker table tr td.range.today.disabled.focus,
.datepicker table tr td.range.today[disabled].focus,
fieldset[disabled] .datepicker table tr td.range.today.focus {
  background-color: #f7ca77;
  border-color: #f1a417;
}
.datepicker table tr td.range.today.disabled,
.datepicker table tr td.range.today.disabled:active {
  background: #f7ca77;
  color: #777777;
}
.datepicker table tr td.selected,
.datepicker table tr td.selected.highlighted {
  color: #fff;
  background-color: #777777;
  border-color: #555555;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.datepicker table tr td.selected:focus,
.datepicker table tr td.selected.highlighted:focus,
.datepicker table tr td.selected.focus,
.datepicker table tr td.selected.highlighted.focus {
  color: #fff;
  background-color: #5e5e5e;
  border-color: #161616;
}
.datepicker table tr td.selected:hover,
.datepicker table tr td.selected.highlighted:hover {
  color: #fff;
  background-color: #5e5e5e;
  border-color: #373737;
}
.datepicker table tr td.selected:active,
.datepicker table tr td.selected.highlighted:active,
.datepicker table tr td.selected.active,
.datepicker table tr td.selected.highlighted.active {
  color: #fff;
  background-color: #5e5e5e;
  border-color: #373737;
}
.datepicker table tr td.selected:active:hover,
.datepicker table tr td.selected.highlighted:active:hover,
.datepicker table tr td.selected.active:hover,
.datepicker table tr td.selected.highlighted.active:hover,
.datepicker table tr td.selected:active:focus,
.datepicker table tr td.selected.highlighted:active:focus,
.datepicker table tr td.selected.active:focus,
.datepicker table tr td.selected.highlighted.active:focus,
.datepicker table tr td.selected:active.focus,
.datepicker table tr td.selected.highlighted:active.focus,
.datepicker table tr td.selected.active.focus,
.datepicker table tr td.selected.highlighted.active.focus {
  color: #fff;
  background-color: #4c4c4c;
  border-color: #161616;
}
.datepicker table tr td.selected.disabled:hover,
.datepicker table tr td.selected.highlighted.disabled:hover,
.datepicker table tr td.selected[disabled]:hover,
.datepicker table tr td.selected.highlighted[disabled]:hover,
fieldset[disabled] .datepicker table tr td.selected:hover,
fieldset[disabled] .datepicker table tr td.selected.highlighted:hover,
.datepicker table tr td.selected.disabled:focus,
.datepicker table tr td.selected.highlighted.disabled:focus,
.datepicker table tr td.selected[disabled]:focus,
.datepicker table tr td.selected.highlighted[disabled]:focus,
fieldset[disabled] .datepicker table tr td.selected:focus,
fieldset[disabled] .datepicker table tr td.selected.highlighted:focus,
.datepicker table tr td.selected.disabled.focus,
.datepicker table tr td.selected.highlighted.disabled.focus,
.datepicker table tr td.selected[disabled].focus,
.datepicker table tr td.selected.highlighted[disabled].focus,
fieldset[disabled] .datepicker table tr td.selected.focus,
fieldset[disabled] .datepicker table tr td.selected.highlighted.focus {
  background-color: #777777;
  border-color: #555555;
}
.datepicker table tr td.active,
.datepicker table tr td.active.highlighted {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);  /*-1px*/
}
.datepicker table tr td.active:focus,
.datepicker table tr td.active.highlighted:focus,
.datepicker table tr td.active.focus,
.datepicker table tr td.active.highlighted.focus {
  color: #fff;
  background-color: #286090;
  border-color: #122b40;
}
.datepicker table tr td.active:hover,
.datepicker table tr td.active.highlighted:hover {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}
.datepicker table tr td.active:active,
.datepicker table tr td.active.highlighted:active,
.datepicker table tr td.active.active,
.datepicker table tr td.active.highlighted.active {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}
.datepicker table tr td.active:active:hover,
.datepicker table tr td.active.highlighted:active:hover,
.datepicker table tr td.active.active:hover,
.datepicker table tr td.active.highlighted.active:hover,
.datepicker table tr td.active:active:focus,
.datepicker table tr td.active.highlighted:active:focus,
.datepicker table tr td.active.active:focus,
.datepicker table tr td.active.highlighted.active:focus,
.datepicker table tr td.active:active.focus,
.datepicker table tr td.active.highlighted:active.focus,
.datepicker table tr td.active.active.focus,
.datepicker table tr td.active.highlighted.active.focus {
  color: #fff;
  background-color: #204d74;
  border-color: #122b40;
}
.datepicker table tr td.active.disabled:hover,
.datepicker table tr td.active.highlighted.disabled:hover,
.datepicker table tr td.active[disabled]:hover,
.datepicker table tr td.active.highlighted[disabled]:hover,
fieldset[disabled] .datepicker table tr td.active:hover,
fieldset[disabled] .datepicker table tr td.active.highlighted:hover,
.datepicker table tr td.active.disabled:focus,
.datepicker table tr td.active.highlighted.disabled:focus,
.datepicker table tr td.active[disabled]:focus,
.datepicker table tr td.active.highlighted[disabled]:focus,
fieldset[disabled] .datepicker table tr td.active:focus,
fieldset[disabled] .datepicker table tr td.active.highlighted:focus,
.datepicker table tr td.active.disabled.focus,
.datepicker table tr td.active.highlighted.disabled.focus,
.datepicker table tr td.active[disabled].focus,
.datepicker table tr td.active.highlighted[disabled].focus,
fieldset[disabled] .datepicker table tr td.active.focus,
fieldset[disabled] .datepicker table tr td.active.highlighted.focus {
  background-color: #337ab7;
  border-color: #2e6da4;
}
.datepicker table tr td span {
  display: block;
  width: 23%;
  height: 54px;
  line-height: 54px;
  float: left;
  margin: 1%;
  cursor: pointer;
  border-radius: 4px;
}
.datepicker table tr td span:hover,
.datepicker table tr td span.focused {
  background: #eeeeee;
}
.datepicker table tr td span.disabled,
.datepicker table tr td span.disabled:hover {
  background: none;
  color: #777777;
  cursor: default;
}
.datepicker table tr td span.active,
.datepicker table tr td span.active:hover,
.datepicker table tr td span.active.disabled,
.datepicker table tr td span.active.disabled:hover {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.datepicker table tr td span.active:focus,
.datepicker table tr td span.active:hover:focus,
.datepicker table tr td span.active.disabled:focus,
.datepicker table tr td span.active.disabled:hover:focus,
.datepicker table tr td span.active.focus,
.datepicker table tr td span.active:hover.focus,
.datepicker table tr td span.active.disabled.focus,
.datepicker table tr td span.active.disabled:hover.focus {
  color: #fff;
  background-color: #286090;
  border-color: #122b40;
}
.datepicker table tr td span.active:hover,
.datepicker table tr td span.active:hover:hover,
.datepicker table tr td span.active.disabled:hover,
.datepicker table tr td span.active.disabled:hover:hover {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}
.datepicker table tr td span.active:active,
.datepicker table tr td span.active:hover:active,
.datepicker table tr td span.active.disabled:active,
.datepicker table tr td span.active.disabled:hover:active,
.datepicker table tr td span.active.active,
.datepicker table tr td span.active:hover.active,
.datepicker table tr td span.active.disabled.active,
.datepicker table tr td span.active.disabled:hover.active {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}
.datepicker table tr td span.active:active:hover,
.datepicker table tr td span.active:hover:active:hover,
.datepicker table tr td span.active.disabled:active:hover,
.datepicker table tr td span.active.disabled:hover:active:hover,
.datepicker table tr td span.active.active:hover,
.datepicker table tr td span.active:hover.active:hover,
.datepicker table tr td span.active.disabled.active:hover,
.datepicker table tr td span.active.disabled:hover.active:hover,
.datepicker table tr td span.active:active:focus,
.datepicker table tr td span.active:hover:active:focus,
.datepicker table tr td span.active.disabled:active:focus,
.datepicker table tr td span.active.disabled:hover:active:focus,
.datepicker table tr td span.active.active:focus,
.datepicker table tr td span.active:hover.active:focus,
.datepicker table tr td span.active.disabled.active:focus,
.datepicker table tr td span.active.disabled:hover.active:focus,
.datepicker table tr td span.active:active.focus,
.datepicker table tr td span.active:hover:active.focus,
.datepicker table tr td span.active.disabled:active.focus,
.datepicker table tr td span.active.disabled:hover:active.focus,
.datepicker table tr td span.active.active.focus,
.datepicker table tr td span.active:hover.active.focus,
.datepicker table tr td span.active.disabled.active.focus,
.datepicker table tr td span.active.disabled:hover.active.focus {
  color: #fff;
  background-color: #204d74;
  border-color: #122b40;
}
.datepicker table tr td span.active.disabled:hover,
.datepicker table tr td span.active:hover.disabled:hover,
.datepicker table tr td span.active.disabled.disabled:hover,
.datepicker table tr td span.active.disabled:hover.disabled:hover,
.datepicker table tr td span.active[disabled]:hover,
.datepicker table tr td span.active:hover[disabled]:hover,
.datepicker table tr td span.active.disabled[disabled]:hover,
.datepicker table tr td span.active.disabled:hover[disabled]:hover,
fieldset[disabled] .datepicker table tr td span.active:hover,
fieldset[disabled] .datepicker table tr td span.active:hover:hover,
fieldset[disabled] .datepicker table tr td span.active.disabled:hover,
fieldset[disabled] .datepicker table tr td span.active.disabled:hover:hover,
.datepicker table tr td span.active.disabled:focus,
.datepicker table tr td span.active:hover.disabled:focus,
.datepicker table tr td span.active.disabled.disabled:focus,
.datepicker table tr td span.active.disabled:hover.disabled:focus,
.datepicker table tr td span.active[disabled]:focus,
.datepicker table tr td span.active:hover[disabled]:focus,
.datepicker table tr td span.active.disabled[disabled]:focus,
.datepicker table tr td span.active.disabled:hover[disabled]:focus,
fieldset[disabled] .datepicker table tr td span.active:focus,
fieldset[disabled] .datepicker table tr td span.active:hover:focus,
fieldset[disabled] .datepicker table tr td span.active.disabled:focus,
fieldset[disabled] .datepicker table tr td span.active.disabled:hover:focus,
.datepicker table tr td span.active.disabled.focus,
.datepicker table tr td span.active:hover.disabled.focus,
.datepicker table tr td span.active.disabled.disabled.focus,
.datepicker table tr td span.active.disabled:hover.disabled.focus,
.datepicker table tr td span.active[disabled].focus,
.datepicker table tr td span.active:hover[disabled].focus,
.datepicker table tr td span.active.disabled[disabled].focus,
.datepicker table tr td span.active.disabled:hover[disabled].focus,
fieldset[disabled] .datepicker table tr td span.active.focus,
fieldset[disabled] .datepicker table tr td span.active:hover.focus,
fieldset[disabled] .datepicker table tr td span.active.disabled.focus,
fieldset[disabled] .datepicker table tr td span.active.disabled:hover.focus {
  background-color: #337ab7;
  border-color: #2e6da4;
}
.datepicker table tr td span.old,
.datepicker table tr td span.new {
  color: #777777;
}
 .bootstrap-datetimepicker-widget .datepicker .datepicker-days table tr td,
    .bootstrap-datetimepicker-widget .datepicker .datepicker-days table tr th {
      font-size: 1rem;
      width: 35px;
      height: 35px;
      padding: 0;
      font-weight: regular;
      vertical-align: middle;
      text-align: center;
      border-radius: 0.42rem; }
    .bootstrap-datetimepicker-widget .datepicker .datepicker-days table tbody tr > td {
      color: #7E8299; }
      .bootstrap-datetimepicker-widget .datepicker .datepicker-days table tbody tr > td:hover {
        background: #F3F6F9; }
      .bootstrap-datetimepicker-widget .datepicker .datepicker-days table tbody tr > td.old {
        color: #7E8299; }
      .bootstrap-datetimepicker-widget .datepicker .datepicker-days table tbody tr > td.new {
        color: #3F4254; }
      .bootstrap-datetimepicker-widget .datepicker .datepicker-days table tbody tr > td:focus, .bootstrap-datetimepicker-widget .datepicker .datepicker-days table tbody tr > td.active {
        background: #3699FF !important;
        color: #ffffff !important; }
      .bootstrap-datetimepicker-widget .datepicker .datepicker-days table tbody tr > td.selected {
        background: #E1F0FF;
        color: #3699FF; }
      .bootstrap-datetimepicker-widget .datepicker .datepicker-days table tbody tr > td.disabled {
        color: #B5B5C3;
        cursor: not-allowed; }
      .bootstrap-datetimepicker-widget .datepicker .datepicker-days table tbody tr > td.today {
        position: relative;
        background: #E1F0FF !important;
        color: #3699FF !important; }
        .bootstrap-datetimepicker-widget .datepicker .datepicker-days table tbody tr > td.today:before {
          content: '';
          display: inline-block;
          border: solid transparent;
          border-width: 0 0 7px 7px;
          border-bottom-color: #3699FF;
          border-top-color: #3699FF;
          position: absolute;
          bottom: 4px;
          right: 4px; }
.bootstrap-datetimepicker-widget table thead tr:first-child th {
  cursor: pointer;
}
.bootstrap-datetimepicker-widget table thead tr:first-child th:hover {
  background: #e9ecef;
}
.bootstrap-datetimepicker-widget .datepicker table thead th {
        display: table-cell; }
.datepicker thead th.prev, .datepicker thead th.datepicker-switch, .datepicker thead th.next {
      font-weight: 500;
      color: #3F4254; }
.datepicker thead th.prev i, .datepicker thead th.datepicker-switch i, .datepicker thead th.next i {
        font-size: 1.2rem;
        color: #7E8299; }
.datepicker thead th.prev i:before, .datepicker thead th.datepicker-switch i:before, .datepicker thead th.next i:before {
          line-height: 0;
          vertical-align: middle; }
.table:not(.table-bordered) thead th, .table:not(.table-bordered) thead td {
  border-top: 0; }
          .bootstrap-datetimepicker-widget .datepicker table thead th.picker-switch {
          color: #3F4254;
          font-weight: 500;
          display: table-cell;
          font-size: 1rem; }
          .bootstrap-datetimepicker-widget .datepicker table thead th.picker-switch:hover {
            color: #3699FF;
            background: #F3F6F9 !important; }
            .bootstrap-datetimepicker-widget table th.picker-switch {
  width: 145px;
}
.bootstrap-datetimepicker-widget .picker-switch {
  text-align: center;
}
.bootstrap-datetimepicker-widget table th {
  height: 20px;
  line-height: 20px;
  width: 20px;
}
    .datepicker thead th.dow {
      color: #3F4254;
      font-weight: 600; }
      .datepicker tbody tr > td.day {
    color: #7E8299;
    font-weight: 400;
}
.bootstrap-datetimepicker-widget table td.day {
    height: 20px;
    line-height: 20px;
    width: 20px;
}
.bootstrap-datetimepicker-widget .datepicker table thead th.prev span, .bootstrap-datetimepicker-widget .datepicker table thead th.next span {
    font-size: 0.8rem;
    color: #7E8299;
}
.ki {
    font-size: 1rem;
}

.ki:before {
    font-family: "Ki";
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
}
.ki-arrow-back:before { content: "\\f106"; }
.ki-arrow-next:before { content: "\\f105"; }
        `
        ]
    }
    constructor() {
        super();
        this.type = "date";
        this.mode = "date";
        //this.value = "VvDate value";
        this.myArray=[1,2,3];
        this.size = "sm"
        this.labelName = "Full Name:"
        this.placeholder = "Full name"
        this.noLabel = false,
            this.open = false
    }
    render(){console.log('date render',this.open);
        const [year,month,day] = this.value?this.toDate(new Date(this.value)):this.toDate(new Date());
        switch (this.mode) {
            case 'date':
                console.log('month',month)
                const days = this.getDays(year, month);
                console.log('days',days)
            default:
                break;
        }
        return html`<label class="col-form-label text-right col-sm-4">${this.labelName}</label>
						<div class="col-sm-8">
							<div id="vvDate" class="dropdown bootstrap-select form-control form-control-sm dropup ${this.open?'show':''}">
							<button type="button" tabindex="-1" @click="${this.clickHandler}" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="${this.text}" selected-value="${this.value}">
							<div class="filter-option" style="width:100%;display: flex;">
							 
							</div>
							<vv-icon name="close-circle-fill" @click="${this.clickClearHandler}" style="display: inline-flex;align-items: center;width: 1.25em;font-size: inherit;border: none;background: none;padding: 0px;cursor: pointer;margin-right:8px"></vv-icon>
							</button>
							<vv-popup show @focus="${this.focusPopupHandler}" @blur="${this.blurPopupHandler}" @option-click="${this.optionClickHander}">
                                    <div class="bootstrap-datetimepicker-widget">
                                        <ul class="list-unstyled">
                                            <li class="collapse show">
                                                <div class="datepicker">
                                                <div class="datepicker-days">
                                                    <table class="table table-sm">
                                                        <thead><tr><th class="prev" data-action="previous"><span class="ki ki-arrow-back" title="上月"></span></th><th class="picker-switch" data-action="pickerSwitch" colspan="5" title="切换年">2020年10月</th><th class="next" data-action="next"><span class="ki ki-arrow-next" title="下月"></span></th></tr><tr><th class="dow">日</th><th class="dow">一</th><th class="dow">二</th><th class="dow">三</th><th class="dow">四</th><th class="dow">五</th><th class="dow">六</th></tr></thead>
                                                        <tbody>
                                                            <tr><td data-action="selectDay" data-day="09/25/2022" class="day old weekend">25</td><td data-action="selectDay" data-day="09/26/2022" class="day old">26</td><td data-action="selectDay" data-day="09/27/2022" class="day old">27</td><td data-action="selectDay" data-day="09/28/2022" class="day old">28</td><td data-action="selectDay" data-day="09/29/2022" class="day old">29</td><td data-action="selectDay" data-day="09/30/2022" class="day old">30</td><td data-action="selectDay" data-day="10/01/2022" class="day weekend">1</td></tr>
                                                            <tr><td data-action="selectDay" data-day="10/02/2022" class="day weekend">2</td><td data-action="selectDay" data-day="10/03/2022" class="day">3</td><td data-action="selectDay" data-day="10/04/2022" class="day">4</td><td data-action="selectDay" data-day="10/05/2022" class="day">5</td><td data-action="selectDay" data-day="10/06/2022" class="day">6</td><td data-action="selectDay" data-day="10/07/2022" class="day">7</td><td data-action="selectDay" data-day="10/08/2022" class="day weekend">8</td></tr>
                                                            <tr><td data-action="selectDay" data-day="10/09/2022" class="day weekend">9</td><td data-action="selectDay" data-day="10/10/2022" class="day">10</td><td data-action="selectDay" data-day="10/11/2022" class="day">11</td><td data-action="selectDay" data-day="10/12/2022" class="day active today">12</td><td data-action="selectDay" data-day="10/13/2022" class="day">13</td><td data-action="selectDay" data-day="10/14/2022" class="day">14</td><td data-action="selectDay" data-day="10/15/2022" class="day weekend">15</td></tr>
                                                            <tr><td data-action="selectDay" data-day="10/16/2022" class="day weekend">16</td><td data-action="selectDay" data-day="10/17/2022" class="day">17</td><td data-action="selectDay" data-day="10/18/2022" class="day">18</td><td data-action="selectDay" data-day="10/19/2022" class="day">19</td><td data-action="selectDay" data-day="10/20/2022" class="day">20</td><td data-action="selectDay" data-day="10/21/2022" class="day">21</td><td data-action="selectDay" data-day="10/22/2022" class="day weekend">22</td></tr>
                                                            <tr><td data-action="selectDay" data-day="10/23/2022" class="day weekend">23</td><td data-action="selectDay" data-day="10/24/2022" class="day">24</td><td data-action="selectDay" data-day="10/25/2022" class="day">25</td><td data-action="selectDay" data-day="10/26/2022" class="day">26</td><td data-action="selectDay" data-day="10/27/2022" class="day">27</td><td data-action="selectDay" data-day="10/28/2022" class="day">28</td><td data-action="selectDay" data-day="10/29/2022" class="day weekend">29</td></tr>
                                                            <tr><td data-action="selectDay" data-day="10/30/2022" class="day weekend">30</td><td data-action="selectDay" data-day="10/31/2022" class="day">31</td><td data-action="selectDay" data-day="11/01/2022" class="day new">1</td><td data-action="selectDay" data-day="11/02/2022" class="day new">2</td><td data-action="selectDay" data-day="11/03/2022" class="day new">3</td><td data-action="selectDay" data-day="11/04/2022" class="day new">4</td><td data-action="selectDay" data-day="11/05/2022" class="day new weekend">5</td></tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            </li>
                                        </ul>
                                    </div>
							</vv-popup>
							</div>
						</div>`;
    }
    clickHandler(e) {
        console.log('btn click',e.target);debugger  //
        //this.open = true;debugger
        this.renderRoot.querySelector("vv-popup").show = true;
    }
    clickClearHandler(e) {
        console.log('clear',e.target);  //
    }
    blurPopupHandler(e){debugger
        console.log('popup blur',e.target);  //点option先触发
        // if(e.target.tagName == 'VV-OPTION' && this.renderRoot.querySelector("vv-popup").show){
        // }else{
        // this.renderRoot.querySelector("vv-popup").show = false;}
        //this.open = false;
    }
    focusPopupHandler(e) {debugger
        console.log('popup focus', e.target);
    }
    optionClickHander(e){debugger
        console.log('date fire popup click event:',e);
        this.text = e.detail.text;
        this.value = e.detail.value;
        if(!this.multiple) {
            this.renderRoot.querySelector("vv-popup").show = false;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('mousedown',this.setpop);
    }
    setpop = (ev) => {
    const path = ev.path || (ev.composedPath && ev.composedPath());//debugger
    if(!path.includes(this) && ev.which == '1' && !path.includes(ev.path.includes(this.renderRoot.getElementById("vvDate").children[0]))){
    this.renderRoot.querySelector("vv-popup").show = false;
}
console.log('mousedown ev',ev.target);
console.log('path',path);
}
disconnectedCallback() {
    document.removeEventListener('mousedown', this);
}
    toDate(date){
        //const date = new Date(d);
        const year = date.getFullYear();
        const month = date.getMonth()+1;
        const day = date.getDate();
        return [year,month,day];
    }
    getDays(year,month){
        const lastdays = new Date(year,month-1,0).getDate();
        const days = new Date(year,month,0).getDate();
        const week = new Date(year,month-1,1).getDay();
        const prev = Array.from({length:week},(el,i)=>(month==1?year-1:year)+'-'+(month==1?12:month-1)+'-'+(lastdays+i-week+1));
        const current = Array.from({length:days},(el,i)=>year+'-'+month+'-'+(i+1));
        const next = Array.from({length:42 - days - week},(el,i)=>(month==12?year+1:year)+'-'+(month==12?1:month+1)+'-'+(i+1));
        return [...prev,...current,...next];
    }
}
window.customElements.define('vv-date', VvDate);
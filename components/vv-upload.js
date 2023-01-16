import {LitElement, html, css} from '../lit-core.min.js';
import { coreCss } from '../components/vv-css.js';
import {VvIcon } from '../components/vv-icon.js'
import '../uppy.min.js';

export class VvUpload extends LitElement {
    static get properties() {
        return {  id: String,
            type: String,
            size: String,
            text: String,
            uploadingText: String,
            muted: String };
    }
    static get styles() {
        return [
            coreCss,
            css`
.uppy-wrapper .uppy-FileInput-container {
    margin-bottom: 0rem;
}
.uppy-Root {
    font-family: Poppins, Helvetica, "sans-serif";
}

.uppy-FileInput-container {
    margin-bottom: 15px;
}
.uppy-Root {
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    position: relative;
    color: #333;
}
.uppy-input-control {
    position: relative;
    z-index: 1;
    height: 0;
    width: 0;
    opacity: 0;
}
.uppy-status {
    transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}
.uppy-StatusBar {
    z-index: 1;
}

.uppy-Root {
    font-family: Poppins, Helvetica, "sans-serif";
}
.uppy-StatusBar[aria-hidden=true] {
    overflow-y: hidden;
    height: 0;
}
.uppy-StatusBar {
    display: -ms-flexbox;
    display: flex;
    position: relative;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    background-color: #fff;
    z-index: 1001;
    transition: height .2s;
}
.uppy-StatusBar .uppy-StatusBar-progress {
    background-color: #3699FF;
}
.uppy-StatusBar.is-waiting .uppy-StatusBar-progress {
    display: none;
}

.uppy-StatusBar-progress {
    background-color: #2275d7;
    height: 2px;
    position: absolute;
    z-index: 1001;
    transition: background-color,width .3s ease-out;
}
.uppy-StatusBar.uppy-Root .uppy-StatusBar-actions {
    right: 0 !important;
}
.uppy-StatusBar.is-waiting .uppy-StatusBar-actions {
    width: 100%;
    height: 100%;
    position: static;
    padding: 0 15px;
    background-color: #fafafa;
}
[dir=ltr] .uppy-StatusBar-actions {
    right: 10px;
}
.uppy-StatusBar-actions {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1004;
}
.uppy-informer-min .uppy-Informer[aria-hidden="true"] {
    display: none;
}

.uppy-informer-min .uppy-Informer {
    position: static !important;
    top: auto;
    bottom: auto;
    transform: none;
    z-index: 0;
}
.uppy-Informer[aria-hidden=true] {
    opacity: 0;
    transform: translateY(350%);
    transition: all .3s ease-in;
    z-index: -1000;
}
.uppy-Informer {
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    text-align: center;
    opacity: 1;
    transform: none;
    transition: all .25s ease-in;
    z-index: 1005;
}
.uppy-informer-min .uppy-Informer p {
    display: block;
    max-width: none;
}

.uppy.uppy-Informer p {
    background-color: rgba(246, 78, 96, 0.1);
    color: #F64E60;
    border-radius: 0.42rem;
}
.uppy-Informer p {
    display: inline-block;
    margin: 0;
    font-size: 12px;
    line-height: 1.4;
    font-weight: 400;
    padding: 6px 15px;
    background-color: #757575;
    color: #fff;
    border-radius: 18px;
    max-width: 90%;
}
.btn-sm, .btn-group-sm > .btn {
    padding: 0.55rem 0.75rem;
    font-size: 0.925rem;
    line-height: 1.35;
    border-radius: 0.42rem;
}
.uppy-list .uppy-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #F3F6F9;
  margin-top: 0.75rem;
  border-radius: 0.42rem; }
.uppy-list .uppy-list-item:last-child {
  margin-bottom: 0.75rem; }
.uppy-list .uppy-list-item .uppy-list-label {
  font-weight: 500;
  color: #7E8299; }
.uppy-list .uppy-list-item .uppy-list-remove {
    cursor: pointer;
    margin-left: 1rem; }
.uppy-list .uppy-list-item .uppy-list-remove vv-icon {
  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
  font-size: 0.7rem;
  color: #7E8299; }
.uppy-list .uppy-list-item .uppy-list-remove:hover vv-icon {
  transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
  color: #3699FF; }
.uppy-status.uppy-status-hidden {
    display: none; }
.uppy-status.uppy-status-hidden {
    display: none; }
        `
        ]
    }

    constructor() {
        super();
        this.type = "upload";
        this.size = "sm"
        this.text = "Attach files"
        this.uploadingText = "Uploading...";
        this.addMoreText = "Add more files";
        this.muted = "Please enter your full name"
    }

    render(){
        return html`
      <div class="uppy-wrapper">
      </div>
      <div class="uppy-list"></div>
      <div class="uppy-status">
        <div class="uppy-Root uppy-StatusBar is-waiting" aria-hidden="true" dir="ltr">
            <div class="uppy-StatusBar-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" style="width: 0%;"></div>
            <div class="uppy-StatusBar-actions"></div>
         </div>
      </div>
      <div class="uppy-informer uppy-informer-min">
        <div class="uppy uppy-Informer" aria-hidden="true">
            <p role="alert"> </p>
        </div>
      </div>`;
    }

    connectedCallback() {
        super.connectedCallback();
    }
    addClass(ele,name) {
        if (name) {
            ele.className ? ele.className = ele.className + " " + name : ele.className = name;
        } else {
            throw new Error("请传递一个有效的class类名");
        };
    }
    removeClass(ele, name) {
        //将className属性转为数组
        let classArr = ele.className.split(" "),
            index = classArr.indexOf(name);
        //将符合条件的class类删除
        index > -1 ? classArr.splice(index, 1) : null;
        ele.className = classArr.join(" ");
    }
    firstUpdated(changedProperties) {
        debugger
        let Tus = Uppy.Tus;
        let ProgressBar = Uppy.ProgressBar;
        let StatusBar = Uppy.StatusBar;
        let FileInput = Uppy.FileInput;
        let Informer = Uppy.Informer;
        var elemId = 'kt_uppy_5';
        var timeout;
        var $statusBar = this.renderRoot.querySelector(' .uppy-status');
        var $uploadedList = this.renderRoot.querySelector(' .uppy-list');
        var that = this;
        var uppyMin = Uppy.Core({
            debug: true,
            autoProceed: true,
            showProgressDetails: true,
            restrictions: {
                maxFileSize: 1000000, // 1mb
                maxNumberOfFiles: 5,
                minNumberOfFiles: 1
            }
        });
        uppyMin.use(FileInput, {
            target: this.renderRoot.querySelector(".uppy-wrapper"),
            pretty: false
        });
        uppyMin.use(Informer, {target: this.renderRoot.querySelector(".uppy-informer")});
        //server
        uppyMin.use(Uppy.XHRUpload, {
            id: 'XHRUpload',
            endpoint: 'http://10.12.28.45:8899/utils/excel_2json',
            method: 'post',
            formData: true,
            fieldName: 'files',
            metaFields: null,
            bundle: true,
            getResponseData(responseText, response) {
                debugger
                console.log(response);//eval("("+response.response+")")
                let event = new CustomEvent('vesuccess', {
                    detail: {
                        value: eval("("+response.response+")")
                    }
                });
                that.dispatchEvent(event);
            },
            getResponseError(responseText, xhr) {
                debugger
            },
            timeout: 30 * 1000, // default 30s
            limit: 0, // Limit the amount of uploads going on at the same time.
            responseType: '', // only '','text','arraybuffer','blob','document'
            locale: {
                strings: {
                    timeOut: 'upload stalled for %{seconds} seconds, aborting..'
                }
            }
        });
        uppyMin.use(StatusBar, {
            target: this.renderRoot.querySelector(' .uppy-status'),
            hideUploadButton: true,
            hideAfterFinish: false
        });
        let finput = this.renderRoot.querySelector(' .uppy-FileInput-input');
        this.addClass(finput, 'uppy-input-control');
        finput.setAttribute('id', elemId + '_input_control');
        var lb = document.createElement('label');
        lb.setAttribute("class", "uppy-input-label btn btn-light-primary btn-sm btn-bold");
        lb.setAttribute("for", elemId + "_input_control");
        lb.innerText = this.text;
        this.renderRoot.querySelector(' .uppy-FileInput-container').appendChild(lb);

        var $fileLabel = this.renderRoot.querySelector(' .uppy-input-label');
        uppyMin.on('upload', function (data) {
            debugger
            $fileLabel.innerText = that.uploadingText;
            that.addClass($statusBar, 'uppy-status-ongoing');
            that.removeClass($statusBar, 'uppy-status-hidden');
            clearTimeout(timeout);
        });
        uppyMin.on('complete', function (file) {
            debugger
            file.successful.forEach(function (value, index) {
                var sizeLabel = "bytes";
                var filesize = value.size;
                if (filesize > 1024) {
                    filesize = filesize / 1024;
                    sizeLabel = "kb";

                    if (filesize > 1024) {
                        filesize = filesize / 1024;
                        sizeLabel = "MB";
                    }
                }
                var uploadListDiv = document.createElement('div');
                uploadListDiv.setAttribute("class", "uppy-list-item");
                uploadListDiv.setAttribute("data-id", value.id);

                var uploadListLabel = document.createElement('div');
                uploadListLabel.setAttribute("class", "uppy-list-label");
                uploadListLabel.innerText = value.name + ' (' + Math.round(filesize, 2) + ' ' + sizeLabel + ')';
                uploadListDiv.appendChild(uploadListLabel);

                var uploadListSpan = document.createElement('span');
                uploadListSpan.setAttribute("class", "uppy-list-remove vv-icon-wrapper");
                uploadListSpan.setAttribute("data-id", value.id);
                uploadListSpan.onclick = function (ev) {
                    debugger
                    var itemId = this.getAttribute('data-id');
                    uppyMin.removeFile(itemId);
                    var child = that.renderRoot.getElementById(itemId);
                    that.renderRoot.querySelector(".uppy-list").removeChild(child);
                }
                var spanIcon = document.createElement('vv-icon');
                spanIcon.setAttribute("name", "close-circle-fill");
                uploadListSpan.appendChild(spanIcon);
                uploadListDiv.appendChild(uploadListSpan);

                //var uploadListHtml = '<div class="uppy-list-item" data-id="'+value.id+'"><div class="uppy-list-label">'+value.name+' ('+ Math.round(filesize, 2) +' '+sizeLabel+')</div><span class="uppy-list-remove" data-id="'+value.id+'"><i class="flaticon2-cancel-music"></i></span></div>';
                $uploadedList.appendChild(uploadListDiv);
            });

            $fileLabel.innerText = that.addMoreText;

            that.addClass($statusBar, 'uppy-status-hidden');
            that.removeClass($statusBar, 'uppy-status-ongoing');
        });
    }
}
if(!customElements.get('vv-upload')) {
    window.customElements.define('vv-upload', VvUpload);
}
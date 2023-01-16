import {LitElement, html, css} from '../lit-core.min.js';
import { VvCard } from '../components/vv-card.js';
import { VvDialog } from '../components/vv-dialog.js';
import { VvButton } from '../components/vv-button.js';
import { VvInput } from '../components/vv-input.js';
import { VvTreeview } from '../components/vv-treeview.js';
import { VvDropdownButton } from '../components/vv-dropdown-button.js';
import { VvDropdownItem } from '../components/vv-dropdown-item.js';
import { VvUpload } from '../components/vv-upload.js';
import '../jsplumb2.6.8.js';

class PgDeptUser extends LitElement {
    constructor() {
        super();
        this._nodeData = { nodes:[{"id":"begin","type":"begin","pt":"10px","pl":"10px"},
                {"id":"end","type":"end","pt":"10px","pl":"450px"},
                {"id":"taskDriectLeader","type":"task","desc":"直接上级审批","pt":"10px","pl":"110px"},
                {"id":"taskHrbp","type":"task","desc":"HRBP审批","pt":"10px","pl":"250px"},
                {"id":"taskCEO","type":"task","desc":"CEO审批","pt":"10px","pl":"350px"}],
            links:[{"from":"begin","to":"taskDriectLeader","desc":""},
                {"from":"taskDriectLeader","to":"taskHrbp","desc":""},
                {"from":"taskHrbp","to":"taskCEO","desc":""},
                {"from":"taskCEO","to":"end","desc":""}] }
        this._commonAll = {
            isSource: true,
            isTarget: true,
            /*connector: ['Flowchart'],*/
            endpoint: ["Dot", {radius: 5}],
            endpointStyle : { fill:"#fc5531" },
            paintStyle: {
                stroke: "#fc2f49",
                strokeWidth: 1,  /*连线粗细*/
            },
            connector: ["Flowchart", {
                stub: [40, 60],
                gap: 5,
                cornerRadius: 5,
                alwaysRespectStubs: true
            }],
            connectorOverlays: [["Arrow", {width: 10, length: 10, location: 1,foldback: 1,}]],
            connectionsDetachable: true,
        };
        this._commonBegin = {
            isSource: true,
            /*connector: ['Flowchart'],*/
            endpoint: ["Dot", {radius: 5}],
            endpointStyle : { fill:"#fc5531" },
            paintStyle: {
                stroke: "#fc2f49",
                strokeWidth: 1,  /*连线粗细*/
            },
            connector: ["Flowchart", {
                stub: [40, 60],
                gap: 5,
                cornerRadius: 5,
                alwaysRespectStubs: true
            }],
            connectorOverlays: [["Arrow", {width: 10, length: 10, location: 1,foldback: 1,}]],
            connectionsDetachable: true,
        };
        this._commonEnd = {
            isTarget: true,
            /*connector: ['Flowchart'],*/
            endpoint: ["Dot", {radius: 5}],
            endpointStyle : { fill:"#fc5531" },
            paintStyle: {
                stroke: "#fc2f49",
                strokeWidth: 1,  /*连线粗细*/
            },
            connector: ["Flowchart", {
                stub: [40, 60],
                gap: 5,
                cornerRadius: 5,
                alwaysRespectStubs: true
            }],
            connectorOverlays: [["Arrow", {width: 10, length: 10, location: 1,foldback: 1,}]],
            connectionsDetachable: true,
        };

        this._commonLeft = {
            endpoint: 'Rectangle', cssClass: 'rect-input-endpoint', endpointStyle:
                {
                    width: 8,
                    width: 8,
                    height: 20,
                    fill: 'hsl(220,7.4%,52.5%)',
                    stroke: 'hsl(220,7.4%,52.5%)',
                    lineWidth: 0, connector: 'Bezier'
                },
            paintStyle: {
                stroke: 'hsl(150,54%,70%)',
                strokeWidth: 2,
                outlineWidth: 12,
                outlineStroke: 'transparent',
            }, overlays: [
                [
                    'Arrow',
                    {
                        id: 'endpoint-arrow',
                        location: 1,
                        width: 12,
                        foldback: 1,
                        length: 10,
                        visible: true,
                    },
                ],
            ]
        };
        this._commonRight = {
            endpoint: 'Dot', cssClass: 'dot-output-endpoint', endpointStyle:
                {
                    width: 8,
                    height: 18,
                    fill: 'hsl(220,7.4%,52.5%)',
                    stroke: 'none',
                    lineWidth: 0, connector: 'Bezier'
                },
            paintStyle: {
                stroke: 'hsl(150,54%,70%)',
                strokeWidth: 2,
                outlineWidth: 12,
                outlineStroke: 'transparent',
            }, connectorStyle: {
                stroke: 'hsl(150,54%,70%)',
                strokeWidth: 2,
                outlineWidth: 12,
                outlineStroke: 'transparent',
            },
            connectorOverlays: [
                ['Arrow', {
                    id: 'endpoint-arrow',
                    width: 12,
                    length: 10,
                    location: 1,
                    foldback: 1
                }]]
        }
        this._flowElems = [];
    }
    static get styles() {
        return [
            css`
    .node-circle {
                display: inline-flex;
    justify-content: center;
    align-items: center;
                border-radius: 50%;

                width: 50px;
                height: 50px;font-weight: 400;color: #ffffff;
    
    position: absolute; /*drag*/
            }
.node-begin{
    background-color: #3699FF;
}
.node-end{
    background-color: #3699FF;
}
            .node-box {
                width: 100%;
                height: 100%;
                border: 2px solid #29a568;
                border-radius: 8px;
                background-color: #ffffff;
                width: 100px;
    height: 50px;
    
    position: absolute; /*drag*/
            }
.node-info-icon {
    color:#29a568;
    bottom: 6px;
    right: 6px;
}
.svg-inline--fa.fa-w-16 {
    width: 1em;
}
.svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
}
.node-desc {
    text-align: center;
    margin-top: -4px;
}

 .item {
      position: absolute;
      height: 80px;
      width: 80px;
      border: 1px solid blue;
    }
        `
        ]
    }
    render(){
        return html`
      <h2>Home</h2><vv-card><span>aaaa</span><vv-button @click="${this.openDialogClick}">弹出</vv-button>
      <vv-button @click="${this.getData}">jsplumb</vv-button>
      <vv-dialog title="编辑内容" id="myDialog">
      <vv-input></vv-input>
      <div slot="footer"><vv-button>close</vv-button></div></vv-dialog>
      <div><vv-treeview @label-click="${(e)=>console.log(e)}"></vv-treeview></div>
      <vv-dropdown-button @item-click="${(e)=>console.log('ddb1 click',e)}">
      <vv-dropdown-item header class="pb-1">Add new:</vv-dropdown-item>
      <vv-dropdown-item icon="shopping" value="order">Order</vv-dropdown-item>
      <vv-dropdown-item icon="calendar" value="event">Event</vv-dropdown-item>
      </vv-dropdown-button>
      
      <vv-dropdown-button buttonType="flat" @item-click="${(e)=>console.log('ddb2 click',e)}">
      <vv-dropdown-item header class="pb-1">Add new2:</vv-dropdown-item>
      <vv-dropdown-item icon="shopping" value="order2">Order2</vv-dropdown-item>
      <vv-dropdown-item icon="calendar" value="event2">Event2</vv-dropdown-item>
      </vv-dropdown-button>
      <vv-upload text="点击上传"></vv-upload>
      <div id="item_begin" class="node-begin node-circle">开始</div>
      <div id="item_left2" class="node-box" style="left:150px">
        <div class="node-info-icon"><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-check fa-w-16"><path data-v-4928a906="" fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class=""></path></svg></div>
        <div class="node-desc">提交申请</div>
      </div>
      <div id="item_right2" class="node-box" style="left:300px">
        <div class="node-info-icon"><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-check fa-w-16"><path data-v-4928a906="" fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class=""></path></svg></div>
        <div class="node-desc">直接上级审批</div>
      </div>
      <div id="item_right_new" class="node-box" style="left:500px">
        <div class="node-info-icon"><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-check fa-w-16"><path data-v-4928a906="" fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class=""></path></svg></div>
        <div class="node-desc">直接上级22</div>
      </div>
      <div id="item_end" class="node-end node-circle">结束</div>
      <div id="diagramContainer">
    <div id="item_left" class="item"></div>
    <div id="item_right" class="item" style="left:150px;"></div>
  </div>
      </vv-card>
    `;
    }
    openDialogClick(){
        this.renderRoot.getElementById("myDialog").show = true;
    }
    getData(){
        console.log(jsPlumb.getAllConnections());
    }
    firstUpdated(changedProperties) {
        debugger
        console.log("org design first update...");
        let that = this;

        jsPlumb.ready(() => {
            setTimeout(function() {
                jsPlumb.connect({
                    source: that.renderRoot.getElementById('item_left2'),
                    target: that.renderRoot.getElementById('item_right2'),
                    endpoint: ["Dot", {radius: 5}],
                    paintStyle: {
                        stroke: "#fc2f49",
                        strokeWidth: 1,  /*连线粗细*/
                    },
                    connector: ["Flowchart", {
                        stub: [40, 60],
                        gap: 5,
                        cornerRadius: 5,
                        alwaysRespectStubs: true
                    }],
                    overlays: [["Arrow", {width: 10, length: 10, location: 1}]],
                    connectionsDetachable: true,
                });
                //
                jsPlumb.addEndpoint(that.renderRoot.getElementById('item_right2'), { anchor: 'Right' }, that._commonAll);
                jsPlumb.addEndpoint(that.renderRoot.getElementById('item_right2'), { anchor: 'Left' }, that._commonAll);
                jsPlumb.addEndpoint(that.renderRoot.getElementById('item_right2'), { anchor: 'Top' }, that._commonAll);
                jsPlumb.addEndpoint(that.renderRoot.getElementById('item_right2'), { anchor: 'Bottom' }, that._commonAll);

                jsPlumb.addEndpoint(that.renderRoot.getElementById('item_right_new'), { anchor: 'Right' }, that._commonAll);
                jsPlumb.addEndpoint(that.renderRoot.getElementById('item_right_new'), { anchor: 'Left' }, that._commonAll);
                jsPlumb.addEndpoint(that.renderRoot.getElementById('item_right_new'), { anchor: 'Top' }, that._commonAll);
                jsPlumb.addEndpoint(that.renderRoot.getElementById('item_right_new'), { anchor: 'Bottom' }, that._commonAll);
                //
                jsPlumb.addEndpoint(that.renderRoot.getElementById('item_begin'), { anchor: 'Right' }, that._commonBegin);
                jsPlumb.addEndpoint(that.renderRoot.getElementById('item_end'), { anchor: 'Left' }, that._commonEnd);
                //
                jsPlumb.draggable(that.renderRoot.getElementById('item_left2'))
                jsPlumb.draggable(that.renderRoot.getElementById('item_right2'))
                jsPlumb.draggable(that.renderRoot.getElementById('item_right_new'))
                jsPlumb.draggable(that.renderRoot.getElementById('item_begin'))
                jsPlumb.draggable(that.renderRoot.getElementById('item_end'))
                //that.requestUpdate();
            },100);
        })
        /*jsPlumb.ready(function () {
            //$("#item_left").attr("style", "left:" + ($(".node-view-wrapper")[0].clientWidth / 2 - 100) + "px;top:" + ($(".node-view-wrapper")[0].clientHeight / 2 - 100) + "px");

            jsPlumb.addEndpoint(that.renderRoot.getElementById('item_left'), {
                anchors: ['Right'],
                isSource: true,
                isTarget: false,
                parameters: {index: 'left1', type: 'out', name: 'http'},
                uuid: 'left1'
            }, that.commonRight);
            //
            jsPlumb.addEndpoint(that.renderRoot.getElementById('item_left'), {
                anchors: ['Left'], isSource: false, isTarget: true, parameters: {index: 'left1', type: 'in', name: 'http'},
                uuid: 'left1'
            }, that.commonRight);
            //
            jsPlumb.addEndpoint(that.renderRoot.getElementById('item_right'), {
                anchors: ['Left'],
                uuid: 'right1'
            }, {isSource: true, isTarget: true, connector: ['Bezier']});
            jsPlumb.addEndpoint(that.renderRoot.getElementById('item_right_new'), {
                anchor: 'Left',
                isSource: true,
                isTarget: true,
                parameters: {index: 'item_right_new', type: 'in', name: 'http'},
            }, that.commonLeft);
            jsPlumb.addEndpoint(that.renderRoot.getElementById('item_right_new'), {
                anchor: 'Right',
                isSource: true,
                isTarget: true,
                parameters: {index: 'item_right_new', type: 'out', name: 'http'},
            }, that.commonRight);
            //jsPlumb.connect({ uuids: ['left1', 'right1'] })
            jsPlumb.connect({
                uuids: ['left1', 'right1'],
                endpoint: ['Dot', {radius: 5}],
                connector: ['Bezier', {curviness: 63}],
                paintStyle: {
                    stroke: 'hsl(150,54%,70%)',
                    strokeWidth: 2,
                    outlineWidth: 12,
                    outlineStroke: 'transparent',
                },
                // endpointStyle: { fill: 'lightgray', outlineStroke: 'darkgray', outlineWidth: 2 },
                overlays: [
                    [
                        'Arrow',
                        {
                            id: 'endpoint-arrow',
                            location: 1,
                            width: 12,
                            foldback: 1,
                            length: 10,
                            visible: true,
                        },
                    ],
                    //  [
                    //   'Arrow',
                    //   {
                    //     id: 'midpoint-arrow',
                    //     location: 0.5,
                    //     width: 12,
                    //     foldback: 1,
                    //     length: 10,
                    //     visible: false,
                    //   },
                    // ],
                ]
            })

            jsPlumb.draggable(that.renderRoot.getElementById('item_left'))
            jsPlumb.draggable(that.renderRoot.getElementById('item_right'))

            jsPlumb.draggable(that.renderRoot.getElementById('item_right_new'))

            jsPlumb.bind('beforeDrop', function (info) {
                debugger
                var source = info.connection.endpoints[0].getParameters();
                var target = info.dropEndpoint.getParameters();
                if (source.type == 'out' && target.type == 'in') {
                    console.log('connection ok')
                    return true // 链接会自动建立
                } else {
                    console.log('no connection from in 2 out')
                    return false // 链接不会建立，注意，必须是false
                }
            });
            // jsPlumb.bind('connection', function (info) {
            //     console.log('connect event', info);
            //     addConnectionActionsOverlay(info.connection);
            // });
        });*/
    }
}
window.customElements.define('pg-dept-user', PgDeptUser);
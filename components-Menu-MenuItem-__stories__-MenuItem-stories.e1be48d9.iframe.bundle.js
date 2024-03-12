"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[3371],{"./src/components/Menu/MenuItem/__stories__/MenuItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Icons:()=>Icons,Label:()=>Label,Overflow:()=>Overflow,Overview:()=>Overview,States:()=>States,SubMenu:()=>SubMenu,TooltipStory:()=>TooltipStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/MenuItem/MenuItem.tsx"),_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Menu/Menu/Menu.tsx"),_Icon_Icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Icon/Icons/components/Activity.tsx"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Icon/Icon.tsx"),_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Tooltip/Tooltip.tsx"),_storybook_functions_createStoryMetaSettingsDecorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var metaSettings=(0,_storybook_functions_createStoryMetaSettingsDecorator__WEBPACK_IMPORTED_MODULE_2__.w)({component:_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,enumPropNamesArray:["tooltipPosition"],iconPropNamesArray:["icon"]});const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/Menu/MenuItem",component:_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var menuItemTemplate=function menuItemTemplate(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.c,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,_objectSpread({},args))})};menuItemTemplate.displayName="menuItemTemplate";var Overview={render:menuItemTemplate.bind({}),name:"Overview",args:{title:"Menu item"}},States={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.c,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Regular menu item"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Selected menu item",selected:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Disabled menu item",disabled:!0})]})},name:"States"},Icons={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.c,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"SVG icon",icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_5__.c}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Font icon",icon:"fa fa-star",iconType:_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c.iconType.ICON_FONT})]})},name:"Icons"},Label={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.c,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Menu item",label:"New"})})},name:"Label",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},SubMenu={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.c,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Opens on item hover",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.c,{tabIndex:0,id:"sub-menu",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Sub menu item 1",onClick:function onClick(){return alert("clicked on sub menu item 1")}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Sub menu item 2",onClick:function onClick(){return alert("clicked on sub menu item 2")}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Sub menu item 3",onClick:function onClick(){return alert("clicked on sub menu item 3")}})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Opens on icon hover",splitMenuItem:!0,onClick:function onClick(){return alert("clicked on menu item")},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.c,{tabIndex:0,id:"sub-menu",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Sub menu item 1",onClick:function onClick(){return alert("clicked on sub menu item 1")}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Sub menu item 2",onClick:function onClick(){return alert("clicked on sub menu item 2")}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Sub menu item 3",onClick:function onClick(){return alert("clicked on sub menu item 3")}})]})})]})},name:"Sub menu"},Overflow={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.c,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"short text"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"long text - bla bla bla bla bla bla bla bla bla bla bla"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"long text with sub menu - bla bla bla bla bla bla bla bla bla bla bla",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.c,{tabIndex:0,id:"sub-menu",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Sub menu item 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Sub menu item 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Sub menu item 3"})]})})]})},name:"Overflow"},TooltipStory={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__.c,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Menu item with tooltip",tooltipContent:"I am tooltip"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Disabled menu item with tooltip",disabled:!0,disableReason:"I am a disabled tooltip"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"I am a very very very very long text please hover me to get a tooltip"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Menu item with bottom tooltip",tooltipContent:"I am tooltip",tooltipPosition:_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c.tooltipPositions.BOTTOM}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.c,{title:"Menu item with icon and tooltip",tooltipContent:"Menu item with icon and tooltip",tooltipPosition:_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_6__.c.positions.LEFT,icon:_Icon_Icons__WEBPACK_IMPORTED_MODULE_5__.c,iconType:_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__.c.type.SVG})]})},name:"Tooltip"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: menuItemTemplate.bind({}),\n  name: "Overview",\n  args: {\n    title: "Menu item"\n  }\n}',...Overview.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <Menu>\n      <MenuItem title="Regular menu item" />\n      <MenuItem title="Selected menu item" selected />\n      <MenuItem title="Disabled menu item" disabled />\n    </Menu>,\n  name: "States"\n}',...States.parameters?.docs?.source}}},Icons.parameters={...Icons.parameters,docs:{...Icons.parameters?.docs,source:{originalSource:'{\n  render: () => <Menu>\n      <MenuItem title="SVG icon" icon={Activity} />\n      <MenuItem title="Font icon" icon="fa fa-star" iconType={MenuItem.iconType.ICON_FONT} />\n    </Menu>,\n  name: "Icons"\n}',...Icons.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'{\n  render: () => <Menu>\n      <MenuItem title="Menu item" label="New" />\n    </Menu>,\n  name: "Label",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...Label.parameters?.docs?.source}}},SubMenu.parameters={...SubMenu.parameters,docs:{...SubMenu.parameters?.docs,source:{originalSource:'{\n  render: () => <Menu>\n      <MenuItem title="Opens on item hover">\n        <Menu tabIndex={0} id="sub-menu">\n          <MenuItem title="Sub menu item 1" onClick={() => alert("clicked on sub menu item 1")} />\n          <MenuItem title="Sub menu item 2" onClick={() => alert("clicked on sub menu item 2")} />\n          <MenuItem title="Sub menu item 3" onClick={() => alert("clicked on sub menu item 3")} />\n        </Menu>\n      </MenuItem>\n      <MenuItem title="Opens on icon hover" splitMenuItem={true} onClick={() => alert("clicked on menu item")}>\n        <Menu tabIndex={0} id="sub-menu">\n          <MenuItem title="Sub menu item 1" onClick={() => alert("clicked on sub menu item 1")} />\n          <MenuItem title="Sub menu item 2" onClick={() => alert("clicked on sub menu item 2")} />\n          <MenuItem title="Sub menu item 3" onClick={() => alert("clicked on sub menu item 3")} />\n        </Menu>\n      </MenuItem>\n    </Menu>,\n  name: "Sub menu"\n}',...SubMenu.parameters?.docs?.source}}},Overflow.parameters={...Overflow.parameters,docs:{...Overflow.parameters?.docs,source:{originalSource:'{\n  render: () => <Menu>\n      <MenuItem title="short text" />\n      <MenuItem title="long text - bla bla bla bla bla bla bla bla bla bla bla" />\n      <MenuItem title="long text with sub menu - bla bla bla bla bla bla bla bla bla bla bla">\n        <Menu tabIndex={0} id="sub-menu">\n          <MenuItem title="Sub menu item 1" />\n          <MenuItem title="Sub menu item 2" />\n          <MenuItem title="Sub menu item 3" />\n        </Menu>\n      </MenuItem>\n    </Menu>,\n  name: "Overflow"\n}',...Overflow.parameters?.docs?.source}}},TooltipStory.parameters={...TooltipStory.parameters,docs:{...TooltipStory.parameters?.docs,source:{originalSource:'{\n  render: () => <Menu>\n      <MenuItem title="Menu item with tooltip" tooltipContent="I am tooltip" />\n      <MenuItem title="Disabled menu item with tooltip" disabled={true} disableReason="I am a disabled tooltip" />\n      <MenuItem title="I am a very very very very long text please hover me to get a tooltip" />\n      <MenuItem title="Menu item with bottom tooltip" tooltipContent="I am tooltip" tooltipPosition={MenuItem.tooltipPositions.BOTTOM} />\n      <MenuItem title="Menu item with icon and tooltip" tooltipContent="Menu item with icon and tooltip" tooltipPosition={Tooltip.positions.LEFT} icon={Activity} iconType={Icon.type.SVG} />\n    </Menu>,\n  name: "Tooltip"\n}',...TooltipStory.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","States","Icons","Label","SubMenu","Overflow","TooltipStory"]}}]);
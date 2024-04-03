"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[1873,4595],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Checkbox/__stories__/checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,SingleCheckbox:()=>SingleCheckbox,States:()=>States,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../storybook-blocks/dist/src/components/link/link.js"),_Checkbox__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Checkbox/Checkbox.tsx"),_storybook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/components/Checkbox/__stories__/checkbox.stories.scss"),__webpack_require__("../../node_modules/react/jsx-runtime.js")),metaSettings=(0,_storybook__WEBPACK_IMPORTED_MODULE_3__.B)({component:_Checkbox__WEBPACK_IMPORTED_MODULE_4__.A}),checkboxTemplate=(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_5__.M)(_Checkbox__WEBPACK_IMPORTED_MODULE_4__.A);const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/Checkbox",component:_Checkbox__WEBPACK_IMPORTED_MODULE_4__.A,decorators:metaSettings.decorators};var Overview={render:checkboxTemplate.bind({}),name:"Overview",args:{label:"Option",defaultChecked:!0}},States={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_4__.A,{label:"Regular"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_4__.A,{label:"Selected",checked:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_4__.A,{label:"Indeterminate",indeterminate:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_4__.A,{label:"Disabled",disabled:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_4__.A,{label:"Disabled checked",disabled:!0,checked:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_4__.A,{label:"Disabled indeterminate",disabled:!0,indeterminate:!0})]})},name:"States"},SingleCheckbox={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Checkbox__WEBPACK_IMPORTED_MODULE_4__.A,{checked:!0,label:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["I agree to the",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.A,{size:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.A.sizes.SMALL,href:"#",children:"Terms of Service"}),"and"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.A,{size:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_6__.A.sizes.SMALL,href:"#",withoutSpacing:!0,children:"Privacy Policy"}),"."]})})},name:"Single checkbox"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: checkboxTemplate.bind({}),\n  name: "Overview",\n  args: {\n    label: "Option",\n    defaultChecked: true\n  }\n}',...Overview.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Checkbox label="Regular" />\n      <Checkbox label="Selected" checked />\n      <Checkbox label="Indeterminate" indeterminate />\n      <Checkbox label="Disabled" disabled />\n      <Checkbox label="Disabled checked" disabled checked />\n      <Checkbox label="Disabled indeterminate" disabled indeterminate />\n    </>,\n  name: "States"\n}',...States.parameters?.docs?.source}}},SingleCheckbox.parameters={...SingleCheckbox.parameters,docs:{...SingleCheckbox.parameters?.docs,source:{originalSource:'{\n  render: () => <Checkbox checked label={<>\n          I agree to the\n          <Link size={Link.sizes.SMALL} href={"#"}>\n            Terms of Service\n          </Link>\n          and{" "}\n          <Link size={Link.sizes.SMALL} href={"#"} withoutSpacing>\n            Privacy Policy\n          </Link>\n          .\n        </>} />,\n  name: "Single checkbox"\n}',...SingleCheckbox.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","States","SingleCheckbox"]},"./src/components/Checkbox/__stories__/checkbox.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{checkboxTemplate:()=>checkboxTemplate,default:()=>_stories_checkbox,metaSettings:()=>metaSettings});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),Checkbox=__webpack_require__("./src/components/Checkbox/Checkbox.tsx"),createComponentTemplate=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),DialogContentContainer=__webpack_require__("./src/components/DialogContentContainer/DialogContentContainer.tsx"),tip=__webpack_require__("../storybook-blocks/dist/src/components/tip/tip.js"),storybook_link=__webpack_require__("../storybook-blocks/dist/src/components/storybook-link/storybook-link.js"),TipAmIUsingTheRightComponent=function TipAmIUsingTheRightComponent(){return(0,jsx_runtime.jsxs)(tip.A,{title:"Am I using the right component?",children:["For settings that are immediately applied, consider using a"," ",(0,jsx_runtime.jsx)(storybook_link.A,{page:"Inputs/Toggle",size:storybook_link.A.sizes.SMALL,children:"toggle switch"})," ","instead."]})};TipAmIUsingTheRightComponent.displayName="TipAmIUsingTheRightComponent";__webpack_require__("./src/components/Checkbox/__stories__/checkbox.stories.scss");var _stories_checkbox_stories=__webpack_require__("./src/components/Checkbox/__stories__/checkbox.stories.tsx");const metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:Checkbox.A}),checkboxTemplate=(0,createComponentTemplate.M)(Checkbox.A);function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",span:"span",h3:"h3",div:"div"},(0,lib.RP)(),props.components),{PropsTable,UsageGuidelines,ComponentRules,StorybookLink,RelatedComponents}=_components;return ComponentRules||_missingMdxReference("ComponentRules",!0),PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),StorybookLink||_missingMdxReference("StorybookLink",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:_stories_checkbox_stories}),"\n","\n",(0,jsx_runtime.jsx)(_components.h1,{id:"checkbox",children:"Checkbox"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Checkboxes allow users to select one or more items from a set of options."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:_stories_checkbox_stories.Overview}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:[(0,jsx_runtime.jsxs)(_components.span,{className:"monday-storybook-checkbox_list",children:[(0,jsx_runtime.jsx)(_components.span,{children:"Use checkboxes to:"}),(0,jsx_runtime.jsx)(_components.span,{className:"monday-storybook-checkbox_list-item",children:"1. Select one or more options from a list"}),(0,jsx_runtime.jsx)(_components.span,{className:"monday-storybook-checkbox_list-item",children:"2. Turn an item on or off in a desktop environment"})]}),"Use checkboxes independently from each other: selecting one checkbox shouldn’t change the selection status of another checkbox in the list. The exception is when a checkbox is used to make a bulk selection.","Ensure both label and input are clickable to select the checkbox field. ","Keep a positive tone of voice. For example: “Turn on notifications” instead of “Turn off notifications”.","Checkboxes should be listed according to a logical order.","Place checkboxes vertically, using 16px spacing.","Checkbox will always apear with a label."]}),"\n",(0,jsx_runtime.jsx)(TipAmIUsingTheRightComponent,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"states",children:"States"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Has 4 states: regular, hover, selected, and disabled."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:_stories_checkbox_stories.States}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,jsx_runtime.jsx)(ComponentRules,{rules:[{positive:{component:(0,jsx_runtime.jsxs)(DialogContentContainer.A,{className:"monday-storybook-checkbox_wrapper",children:[(0,jsx_runtime.jsx)(Checkbox.A,{label:"Item 1",name:"Item 1"}),(0,jsx_runtime.jsx)(Checkbox.A,{label:"Item 2",name:"Item 2",checked:!0}),(0,jsx_runtime.jsx)(Checkbox.A,{label:"Item 3",name:"Item 3",checked:!0})]}),description:"Use checkboxes when one or more items can be selected."},negative:{component:(0,jsx_runtime.jsxs)(DialogContentContainer.A,{className:"monday-storybook-checkbox_wrapper",children:[(0,jsx_runtime.jsx)(Checkbox.A,{label:"Item 1",name:"Item 1",checked:!0}),(0,jsx_runtime.jsx)(Checkbox.A,{label:"Item 2",name:"Item 2",disabled:!0}),(0,jsx_runtime.jsx)(Checkbox.A,{label:"Item 3",name:"Item 3",disabled:!0})]}),description:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Don't use checkboxes when only one item can be selected from a list. Use"," ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Inputs/RadioButton",children:"radio buttons"})," instead."]})}},{positive:{component:(0,jsx_runtime.jsx)(_components.div,{className:"monday-storybook-checkbox_border",children:(0,jsx_runtime.jsx)(Checkbox.A,{label:"Option",checked:!0})}),description:"Use the checkbox label’s prop to describe the option purpse."},negative:{component:[(0,jsx_runtime.jsx)(_components.div,{className:"monday-storybook-checkbox_border",children:(0,jsx_runtime.jsx)(Checkbox.A,{className:"monday-storybook-checkbox_minus-margin",checked:!0})}),(0,jsx_runtime.jsx)(_components.div,{className:"monday-storybook-checkbox_border",children:"Option"})],description:"Don’t use a separte div which is not related to the Checkbox component."}},{positive:{component:(0,jsx_runtime.jsxs)(DialogContentContainer.A,{className:"monday-storybook-checkbox_wrapper",children:[(0,jsx_runtime.jsx)(Checkbox.A,{label:"Item 1",name:"Item 1"}),(0,jsx_runtime.jsx)(Checkbox.A,{label:"Item 2",name:"Item 2",checked:!0}),(0,jsx_runtime.jsx)(Checkbox.A,{label:"Item 3",name:"Item 3",checked:!0})]}),description:"Place the checkbox on the left side of the label."},negative:{component:(0,jsx_runtime.jsxs)(DialogContentContainer.A,{className:"monday-storybook-checkbox_wrapper",children:[(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-checkbox_inline-wrapper",children:[(0,jsx_runtime.jsx)(_components.span,{children:"Item 1"}),(0,jsx_runtime.jsx)(Checkbox.A,{className:"monday-storybook-checkbox_minus-margin"})]}),(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-checkbox_inline-wrapper",children:[(0,jsx_runtime.jsx)(_components.span,{children:"Item 2"}),(0,jsx_runtime.jsx)(Checkbox.A,{className:"monday-storybook-checkbox_minus-margin",checked:!0})]}),(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-checkbox_inline-wrapper",children:[(0,jsx_runtime.jsx)(_components.span,{children:"Item 3"}),(0,jsx_runtime.jsx)(Checkbox.A,{className:"monday-storybook-checkbox_minus-margin",checked:!0})]})]}),description:"Don’t change the position of the checkbox. Keep it to the left side of the label."}},{positive:{component:(0,jsx_runtime.jsx)(DialogContentContainer.A,{className:"monday-storybook-checkbox_wrapper",children:(0,jsx_runtime.jsx)(Checkbox.A,{label:"Only show incomplete items",checked:!0})}),description:"Always keep a positive tone of voice."},negative:{component:(0,jsx_runtime.jsx)(DialogContentContainer.A,{className:"monday-storybook-checkbox_wrapper",children:(0,jsx_runtime.jsx)(Checkbox.A,{label:"Hide done items",checked:!0})}),description:"Avoid negative language that makes the user check the box in order for something not to happen."}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"single-checkbox",children:"Single checkbox"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Allows the user to choose a single option. For example: accept terms of use."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:_stories_checkbox_stories.SingleCheckbox}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.rT,component_description_map.DR,component_description_map.a0]})]})}const _stories_checkbox=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Checkbox/__stories__/checkbox.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-checkbox_border{display:flex;align-items:center;justify-content:center;border:1px dashed var(--sb-ui-border-color);padding:0 8px;height:38px;margin-right:3px}.monday-storybook-checkbox_border:nth-child(2){margin-left:11px;font-size:14px;line-height:22px}.monday-storybook-checkbox_wrapper{padding:14px 16px;width:240px;display:flex;flex-direction:column;row-gap:16px}.monday-storybook-checkbox_inline-wrapper{display:flex;justify-content:space-between;align-items:center}.monday-storybook-checkbox_minus-margin{margin-right:-8px}.monday-storybook-checkbox_list{display:flex;flex-direction:column}.monday-storybook-checkbox_list span{font-family:var(--sb-font-family);font-size:var(--sb-text-font-size);line-height:var(--sb-text-line-height);font-weight:400;color:var(--sb-primary-text-color);-webkit-font-smoothing:initial}.monday-storybook-checkbox_list-item{display:inline-block;width:100%}.monday-storybook-checkbox_link{display:initial}","",{version:3,sources:["webpack://./src/components/Checkbox/__stories__/checkbox.stories.scss","webpack://./../storybook-blocks/dist/styles/mixins/_typography.scss"],names:[],mappings:"AAGE,kCACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,2CAAA,CACA,aAAA,CACA,WAAA,CACA,gBAAA,CACA,+CACE,gBAAA,CACA,cAAA,CACA,gBAAA,CAIJ,mCACE,iBAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,YAAA,CAGF,0CACE,YAAA,CACA,6BAAA,CACA,kBAAA,CAGF,wCACE,iBAAA,CAGF,gCACE,YAAA,CACA,qBAAA,CACA,qCCjCF,iCAAA,CACA,kCAAA,CACA,sCAAA,CACA,eAAA,CARA,kCAAA,CACA,8BAAA,CD0CA,qCACE,oBAAA,CACA,UAAA,CAGF,gCACE,eAAA",sourcesContent:['@import "~vibe-storybook-components/dist/mixins";\n\n.monday-storybook-checkbox {\n  &_border {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px dashed var(--sb-ui-border-color);\n    padding: 0 8px;\n    height: 38px;\n    margin-right: 3px;\n    &:nth-child(2) {\n      margin-left: 11px;\n      font-size: 14px;\n      line-height: 22px;\n    }\n  }\n\n  &_wrapper {\n    padding: 14px 16px;\n    width: 240px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 16px;\n  }\n\n  &_inline-wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  &_minus-margin {\n    margin-right: -8px;\n  }\n\n  &_list {\n    display: flex;\n    flex-direction: column;\n    span {\n      @include sb-content-text;\n    }\n  }\n\n  &_list-item {\n    display: inline-block;\n    width: 100%;\n  }\n\n  &_link {\n    display: initial;\n  }\n}\n',"@mixin sb-basic-text {\n  color: var(--sb-primary-text-color);\n  -webkit-font-smoothing: initial;\n}\n\n@mixin sb-content-text-without-color {\n  font-family: var(--sb-font-family);\n  font-size: var(--sb-text-font-size);\n  line-height: var(--sb-text-line-height);\n  font-weight: 400;\n}\n\n@mixin sb-content-text {\n  @include sb-content-text-without-color;\n  @include sb-basic-text;\n}\n\n@mixin sb-small-text-without-color {\n  font-size: var(--sb-small-text-font-size);\n  font-weight: 400;\n  line-height: var(--sb-text-line-height);\n}\n\n@mixin sb-small-text {\n  @include sb-basic-text;\n  @include sb-small-text-without-color;\n}\n\n@mixin sb-title-appearance {\n  margin-bottom: var(--sb-spacing-between-title-to-content);\n  font-family: var(--sb-title-font-family);\n  @include sb-basic-text;\n  font-size: var(--sb-h3-font-size);\n  line-height: 28px;\n  letter-spacing: -0.21px;\n  text-align: left;\n  font-weight: 300;\n}\n\n@mixin sb-font-link {\n  font: var(--sb-font-general-label);\n  text-decoration: none;\n  color: var(--sb-link-color);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Checkbox/__stories__/checkbox.stories.scss":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_checkbox_stories_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Checkbox/__stories__/checkbox.stories.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_checkbox_stories_scss__WEBPACK_IMPORTED_MODULE_6__.A,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_checkbox_stories_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_checkbox_stories_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_15_use_3_checkbox_stories_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals}}]);
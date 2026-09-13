import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,f as r,g as i,h as a,l as o,o as s,s as c,u as l}from"./iframe-D8__2Nly.js";import{n as u,t as d}from"./_plugin-vue_export-helper-BqBa3wPr.js";var f,p,m,h,g,_;function v(){return(v=e((()=>{t(),f=[`for`],p={class:`input-container`},m=[`id`,`type`,`value`,`placeholder`,`disabled`],h={key:1,class:`input-message input-message--error`,role:`alert`},g={key:2,class:`input-message input-message--helper`},_=l({__name:`Input`,props:{modelValue:{default:``},label:{default:``},placeholder:{default:``},helperText:{default:``},errorMessage:{default:``},disabled:{type:Boolean,default:!1},type:{default:`text`},id:{default:()=>`input-${Math.random().toString(36).substring(2,9)}`}},emits:[`update:modelValue`,`focus`,`blur`],setup(e,{emit:t}){let l=e,u=t,d=s(()=>!!l.errorMessage),_=e=>{let t=e.target;u(`update:modelValue`,t.value)};return(t,s)=>(r(),o(`div`,{class:a([`input-wrapper`,{"input-wrapper--error":d.value,"input-wrapper--disabled":e.disabled}])},[e.label?(r(),o(`label`,{key:0,for:e.id,class:`input-label`},i(e.label),9,f)):n(``,!0),c(`div`,p,[c(`input`,{id:e.id,type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,class:`input-field`,onInput:_,onFocus:s[0]||=e=>t.$emit(`focus`,e),onBlur:s[1]||=e=>t.$emit(`blur`,e)},null,40,m)]),e.errorMessage?(r(),o(`p`,h,i(e.errorMessage),1)):e.helperText?(r(),o(`p`,g,i(e.helperText),1)):n(``,!0)],2))}})})))()}var y;function b(){return(b=e((()=>{v(),u(),y=d(_,[[`__scopeId`,`data-v-7ab4ed79`]]),_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:`default`,displayName:`Input`,description:``,tags:{},props:[{name:`modelValue`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`}]},defaultValue:{func:!1,value:`''`}},{name:`label`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`''`}},{name:`placeholder`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`''`}},{name:`helperText`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`''`}},{name:`errorMessage`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`''`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`type`,required:!1,type:{name:`union`,elements:[{name:`"text"`},{name:`"email"`},{name:`"password"`},{name:`"number"`},{name:`"search"`},{name:`"url"`}]},defaultValue:{func:!1,value:`'text'`}},{name:`id`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:"() => `input-${Math.random().toString(36).substring(2, 9)}`"}}],events:[{name:`focus`,type:{names:[`FocusEvent`]}},{name:`blur`,type:{names:[`FocusEvent`]}},{name:`update:modelValue`,type:{names:[`string`]}}],sourceFiles:[`/private/tmp/storybook-vue-demo/src/components/Input/Input.vue`]})})))()}var x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{b(),{expect:x,userEvent:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/Input`,component:y,tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`text`,`email`,`password`,`number`,`search`,`url`]},label:{control:`text`},placeholder:{control:`text`},helperText:{control:`text`},errorMessage:{control:`text`},disabled:{control:`boolean`}}},T={args:{label:`Username`,placeholder:`Enter your username`,helperText:`Your public display handle.`}},E={args:{label:`Email Address`,modelValue:`invalid-email`,placeholder:`name@example.com`,errorMessage:`Please enter a valid email address.`}},D={args:{label:`API Key`,modelValue:`sk_live_1234567890abcdef`,disabled:!0,helperText:`Contact admin to update key.`}},O={args:{label:`Search Components`,placeholder:`Type to search...`},play:async({canvasElement:e})=>{let t=C(e).getByRole(`textbox`);await S.type(t,`Storybook Pages`),await x(t).toHaveValue(`Storybook Pages`)}},k=[`Default`,`WithError`,`Disabled`,`InteractiveTyping`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'Your public display handle.'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    modelValue: 'invalid-email',
    placeholder: 'name@example.com',
    errorMessage: 'Please enter a valid email address.'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'API Key',
    modelValue: 'sk_live_1234567890abcdef',
    disabled: true,
    helperText: 'Contact admin to update key.'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search Components',
    placeholder: 'Type to search...'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.type(input, 'Storybook Pages');
    await expect(input).toHaveValue('Storybook Pages');
  }
}`,...O.parameters?.docs?.source}}}})))()}A();export{T as Default,D as Disabled,O as InteractiveTyping,E as WithError,k as __namedExportsOrder,w as default};
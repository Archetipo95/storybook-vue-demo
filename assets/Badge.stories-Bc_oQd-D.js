import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Badge-D3yQgUMG.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),r={title:`Components/Badge`,component:n,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`primary`,`success`,`warning`,`danger`,`info`]},size:{control:`select`,options:[`sm`,`md`]},dot:{control:`boolean`}}},i={args:{variant:`default`},render:e=>({components:{Badge:n},setup(){return{args:e}},template:`<Badge v-bind="args">Default Badge</Badge>`})},a={args:{variant:`success`,dot:!0},render:e=>({components:{Badge:n},setup(){return{args:e}},template:`<Badge v-bind="args">Live Deployment</Badge>`})},o={args:{variant:`warning`},render:e=>({components:{Badge:n},setup(){return{args:e}},template:`<Badge v-bind="args">Needs Review</Badge>`})},s={args:{variant:`danger`,dot:!0},render:e=>({components:{Badge:n},setup(){return{args:e}},template:`<Badge v-bind="args">Build Failed</Badge>`})},c=[`Default`,`SuccessWithDot`,`Warning`,`Danger`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Default Badge</Badge>'
  })
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    dot: true
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Live Deployment</Badge>'
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Needs Review</Badge>'
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    dot: true
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Build Failed</Badge>'
  })
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Danger,i as Default,a as SuccessWithDot,o as Warning,c as __namedExportsOrder,r as default};
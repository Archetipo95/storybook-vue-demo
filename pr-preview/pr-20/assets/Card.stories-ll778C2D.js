import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,f as r,h as i,l as a,p as o,s,u as c}from"./iframe-CJcczHWQ.js";import{n as l,t as u}from"./Badge-BuDEuiLT.js";import{n as d,t as f}from"./_plugin-vue_export-helper-BqBa3wPr.js";import{n as p,t as m}from"./Button-D4MC0pHX.js";var h,g,_,v;function y(){return(y=e((()=>{t(),h={key:0,class:`card__header`},g={class:`card__body`},_={key:1,class:`card__footer`},v=c({__name:`Card`,props:{variant:{default:`elevated`},padding:{default:`md`}},setup(e){return(t,c)=>(r(),a(`div`,{class:i([`card`,`card--${e.variant}`,`card--pad-${e.padding}`])},[t.$slots.header?(r(),a(`div`,h,[o(t.$slots,`header`,{},void 0,!0)])):n(``,!0),s(`div`,g,[o(t.$slots,`default`,{},void 0,!0)]),t.$slots.footer?(r(),a(`div`,_,[o(t.$slots,`footer`,{},void 0,!0)])):n(``,!0)],2))}})})))()}var b;function x(){return(x=e((()=>{y(),d(),b=f(v,[[`__scopeId`,`data-v-5dcfac7b`]]),v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:`default`,displayName:`Card`,description:``,tags:{},props:[{name:`variant`,required:!1,type:{name:`union`,elements:[{name:`"elevated"`},{name:`"outlined"`},{name:`"flat"`}]},defaultValue:{func:!1,value:`'elevated'`}},{name:`padding`,required:!1,type:{name:`union`,elements:[{name:`"none"`},{name:`"sm"`},{name:`"md"`},{name:`"lg"`}]},defaultValue:{func:!1,value:`'md'`}}],slots:[{name:`header`},{name:`default`},{name:`footer`}],sourceFiles:[`/home/runner/work/storybook-vue-demo/storybook-vue-demo/src/components/Card/Card.vue`]})})))()}var S,C,w,T;function E(){return(E=e((()=>{x(),p(),l(),S={title:`Components/Card`,component:b,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`elevated`,`outlined`,`flat`]},padding:{control:`select`,options:[`none`,`sm`,`md`,`lg`]}}},C={args:{variant:`elevated`,padding:`md`},render:e=>({components:{Card:b,Button:m,Badge:u},setup(){return{args:e}},template:`
      <Card v-bind="args" style="max-width: 400px;">
        <template #header>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>Deployment Info</span>
            <Badge variant="success" dot>Active</Badge>
          </div>
        </template>
        <p style="margin: 0; color: var(--color-text-muted);">
          Storybook deployed automatically via <strong>storybook-github-pages</strong> action.
        </p>
        <template #footer>
          <div style="display: flex; justify-content: flex-end; gap: 0.5rem;">
            <Button variant="outline" size="sm">Docs</Button>
            <Button variant="primary" size="sm">Open Storybook</Button>
          </div>
        </template>
      </Card>
    `})},w={args:{variant:`outlined`,padding:`md`},render:e=>({components:{Card:b},setup(){return{args:e}},template:`
      <Card v-bind="args" style="max-width: 400px;">
        <h4 style="margin: 0 0 0.5rem 0;">Minimal Card</h4>
        <p style="margin: 0; color: var(--color-text-muted);">
          Clean card container with subtle borders for structured layouts.
        </p>
      </Card>
    `})},T=[`Elevated`,`Outlined`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    padding: 'md'
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Card,
      Button,
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args" style="max-width: 400px;">
        <template #header>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>Deployment Info</span>
            <Badge variant="success" dot>Active</Badge>
          </div>
        </template>
        <p style="margin: 0; color: var(--color-text-muted);">
          Storybook deployed automatically via <strong>storybook-github-pages</strong> action.
        </p>
        <template #footer>
          <div style="display: flex; justify-content: flex-end; gap: 0.5rem;">
            <Button variant="outline" size="sm">Docs</Button>
            <Button variant="primary" size="sm">Open Storybook</Button>
          </div>
        </template>
      </Card>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    padding: 'md'
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args" style="max-width: 400px;">
        <h4 style="margin: 0 0 0.5rem 0;">Minimal Card</h4>
        <p style="margin: 0; color: var(--color-text-muted);">
          Clean card container with subtle borders for structured layouts.
        </p>
      </Card>
    \`
  })
}`,...w.parameters?.docs?.source}}}})))()}E();export{C as Elevated,w as Outlined,T as __namedExportsOrder,S as default};
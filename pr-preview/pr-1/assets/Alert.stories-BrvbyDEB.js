import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{_ as t,a as n,c as r,f as i,h as a,l as o,p as s,s as c,u as l,v as u}from"./iframe-Tlb1XsPn.js";import{n as d,t as f}from"./_plugin-vue_export-helper-BqBa3wPr.js";var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),p={class:`alert__icon`,"aria-hidden":`true`},m={key:0,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},h={key:1,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},g={key:2,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},_={key:3,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},v={class:`alert__content`},y={key:0,class:`alert__title`},b={class:`alert__message`},x=l({__name:`Alert`,props:{variant:{default:`info`},title:{default:``},dismissible:{type:Boolean,default:!1}},emits:[`dismiss`],setup(e,{emit:n}){let l=n,d=a(!1);function f(){d.value=!0,l(`dismiss`)}return(n,a)=>d.value?r(``,!0):(i(),o(`div`,{key:0,class:t([`alert`,`alert--${e.variant}`]),role:`alert`,"aria-live":`polite`},[c(`div`,p,[e.variant===`info`?(i(),o(`svg`,m,[...a[0]||=[c(`circle`,{cx:`12`,cy:`12`,r:`10`},null,-1),c(`line`,{x1:`12`,y1:`16`,x2:`12`,y2:`12`},null,-1),c(`line`,{x1:`12`,y1:`8`,x2:`12.01`,y2:`8`},null,-1)]])):e.variant===`success`?(i(),o(`svg`,h,[...a[1]||=[c(`path`,{d:`M22 11.08V12a10 10 0 1 1-5.93-9.14`},null,-1),c(`polyline`,{points:`22 4 12 14.01 9 11.01`},null,-1)]])):e.variant===`warning`?(i(),o(`svg`,g,[...a[2]||=[c(`path`,{d:`M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z`},null,-1),c(`line`,{x1:`12`,y1:`9`,x2:`12`,y2:`13`},null,-1),c(`line`,{x1:`12`,y1:`17`,x2:`12.01`,y2:`17`},null,-1)]])):e.variant===`danger`?(i(),o(`svg`,_,[...a[3]||=[c(`circle`,{cx:`12`,cy:`12`,r:`10`},null,-1),c(`line`,{x1:`15`,y1:`9`,x2:`9`,y2:`15`},null,-1),c(`line`,{x1:`9`,y1:`9`,x2:`15`,y2:`15`},null,-1)]])):r(``,!0)]),c(`div`,v,[e.title?(i(),o(`strong`,y,u(e.title),1)):r(``,!0),c(`div`,b,[s(n.$slots,`default`,{},void 0,!0)])]),e.dismissible?(i(),o(`button`,{key:0,type:`button`,class:`alert__dismiss`,"aria-label":`Dismiss alert`,onClick:f},[...a[4]||=[c(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[c(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),c(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})],-1)]])):r(``,!0)],2))}})})))()}var C;function w(){return(w=e((()=>{S(),d(),C=f(x,[[`__scopeId`,`data-v-a261e6da`]]),x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:`default`,displayName:`Alert`,description:``,tags:{},props:[{name:`variant`,required:!1,type:{name:`AlertVariant`},defaultValue:{func:!1,value:`'info'`}},{name:`title`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`''`}},{name:`dismissible`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],events:[{name:`dismiss`}],slots:[{name:`default`}],sourceFiles:[`/home/runner/work/storybook-vue-demo/storybook-vue-demo/src/components/Alert/Alert.vue`]})})))()}var T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{w(),{expect:T,fn:E,userEvent:D,within:O}=__STORYBOOK_MODULE_TEST__,k={title:`Components/Alert`,component:C,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`info`,`success`,`warning`,`danger`]},title:{control:`text`},dismissible:{control:`boolean`}},args:{onDismiss:E()}},A={args:{variant:`info`,title:`Pull Request Preview`,dismissible:!0},render:e=>({components:{Alert:C},setup(){return{args:e}},template:`<Alert v-bind="args">This storybook instance was deployed from an active pull request.</Alert>`})},j={args:{variant:`success`,title:`Deployment Complete`,dismissible:!1},render:e=>({components:{Alert:C},setup(){return{args:e}},template:`<Alert v-bind="args">GitHub Pages preview deployment succeeded in 4.2s.</Alert>`})},M={args:{variant:`warning`,title:`Preview Expiration`,dismissible:!0},render:e=>({components:{Alert:C},setup(){return{args:e}},template:`<Alert v-bind="args">Ephemeral PR preview directories are cleaned up when the PR is closed.</Alert>`})},N={args:{variant:`danger`,title:`Build Issue Detected`,dismissible:!0},render:e=>({components:{Alert:C},setup(){return{args:e}},template:`<Alert v-bind="args">Check the Actions tab for details on failing checks.</Alert>`})},P={args:{variant:`info`,title:`Dismissible Notification`,dismissible:!0},render:e=>({components:{Alert:C},setup(){return{args:e}},template:`<Alert v-bind="args">Click the dismiss icon on the right to close this notification.</Alert>`}),play:async({canvasElement:e,args:t})=>{let n=O(e).getByRole(`button`,{name:/dismiss alert/i});await T(n).toBeInTheDocument(),await D.click(n);let r=t.onDismiss;await T(r).toHaveBeenCalled()}},F=[`Info`,`Success`,`Warning`,`Danger`,`InteractiveDismiss`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Pull Request Preview',
    dismissible: true
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args">This storybook instance was deployed from an active pull request.</Alert>'
  })
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Deployment Complete',
    dismissible: false
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args">GitHub Pages preview deployment succeeded in 4.2s.</Alert>'
  })
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Preview Expiration',
    dismissible: true
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args">Ephemeral PR preview directories are cleaned up when the PR is closed.</Alert>'
  })
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Build Issue Detected',
    dismissible: true
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args">Check the Actions tab for details on failing checks.</Alert>'
  })
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Dismissible Notification',
    dismissible: true
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args">Click the dismiss icon on the right to close this notification.</Alert>'
  }),
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const dismissButton = canvas.getByRole('button', {
      name: /dismiss alert/i
    });
    await expect(dismissButton).toBeInTheDocument();
    await userEvent.click(dismissButton);
    const onDismiss = (args as {
      onDismiss?: () => void;
    }).onDismiss;
    await expect(onDismiss).toHaveBeenCalled();
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{N as Danger,A as Info,P as InteractiveDismiss,j as Success,M as Warning,F as __namedExportsOrder,k as default};
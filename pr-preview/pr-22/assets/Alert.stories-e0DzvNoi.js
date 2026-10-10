import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Alert-DwGVYy7K.js";var r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),{expect:r,fn:i,userEvent:a,within:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/Alert`,component:n,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`info`,`success`,`warning`,`danger`]},title:{control:`text`},dismissible:{control:`boolean`}},args:{onDismiss:i()}},c={args:{variant:`info`,title:`Pull Request Preview`,dismissible:!0},render:e=>({components:{Alert:n},setup(){return{args:e}},template:`<Alert v-bind="args">This storybook instance was deployed from an active pull request.</Alert>`})},l={args:{variant:`success`,title:`Deployment Complete`,dismissible:!1},render:e=>({components:{Alert:n},setup(){return{args:e}},template:`<Alert v-bind="args">GitHub Pages preview deployment succeeded in 4.2s.</Alert>`})},u={args:{variant:`warning`,title:`Preview Expiration`,dismissible:!0},render:e=>({components:{Alert:n},setup(){return{args:e}},template:`<Alert v-bind="args">Ephemeral PR preview directories are cleaned up when the PR is closed.</Alert>`})},d={args:{variant:`danger`,title:`Build Issue Detected`,dismissible:!0},render:e=>({components:{Alert:n},setup(){return{args:e}},template:`<Alert v-bind="args">Check the Actions tab for details on failing checks.</Alert>`})},f={args:{variant:`info`,title:`Dismissible Notification`,dismissible:!0},render:e=>({components:{Alert:n},setup(){return{args:e}},template:`<Alert v-bind="args">Click the dismiss icon on the right to close this notification.</Alert>`}),play:async({canvasElement:e,args:t})=>{let n=o(e).getByRole(`button`,{name:/dismiss alert/i});await r(n).toBeInTheDocument(),await a.click(n);let i=t.onDismiss;await r(i).toHaveBeenCalled()}},p=[`Info`,`Success`,`Warning`,`Danger`,`InteractiveDismiss`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as Danger,c as Info,f as InteractiveDismiss,l as Success,u as Warning,p as __namedExportsOrder,s as default};
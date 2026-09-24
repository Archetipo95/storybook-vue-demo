import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Button-D4MC0pHX.js";var r,i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{t(),{expect:r,fn:i,userEvent:a,within:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/Button`,component:n,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`outline`,`ghost`,`danger`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},loading:{control:`boolean`},onClick:{action:`clicked`}},args:{onClick:i()}},c={args:{variant:`primary`},render:e=>({components:{Button:n},setup(){return{args:e}},template:`<Button v-bind="args">Primary Button</Button>`})},l={args:{variant:`secondary`},render:e=>({components:{Button:n},setup(){return{args:e}},template:`<Button v-bind="args">Secondary Button</Button>`})},u={args:{variant:`outline`},render:e=>({components:{Button:n},setup(){return{args:e}},template:`<Button v-bind="args">Outline Button</Button>`})},d={args:{variant:`danger`},render:e=>({components:{Button:n},setup(){return{args:e}},template:`<Button v-bind="args">Delete Item</Button>`})},f={args:{loading:!0},render:e=>({components:{Button:n},setup(){return{args:e}},template:`<Button v-bind="args">Processing...</Button>`})},p={args:{variant:`primary`},render:e=>({components:{Button:n},setup(){return{args:e}},template:`<Button v-bind="args">Click Me</Button>`}),play:async({canvasElement:e,args:t})=>{let n=o(e).getByRole(`button`,{name:/Click Me/i});await a.click(n);let i=t.onClick;await r(i).toHaveBeenCalled()}},m=[`Primary`,`Secondary`,`Outline`,`Danger`,`Loading`,`InteractiveClick`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Primary Button</Button>'
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Secondary Button</Button>'
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Outline Button</Button>'
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Delete Item</Button>'
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Processing...</Button>'
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: (args: Record<string, unknown>) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Click Me</Button>'
  }),
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /Click Me/i
    });
    await userEvent.click(button);
    const onClick = (args as {
      onClick?: () => void;
    }).onClick;
    await expect(onClick).toHaveBeenCalled();
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{d as Danger,p as InteractiveClick,f as Loading,u as Outline,c as Primary,l as Secondary,m as __namedExportsOrder,s as default};
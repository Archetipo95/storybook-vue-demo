import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,b as n}from"./iframe-gUt_StRw.js";import{n as r,t as i}from"./Switch-CNf5jTo4.js";var a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),r(),{expect:a,userEvent:o,within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Switch`,component:i,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`]},label:{control:`text`},description:{control:`text`},disabled:{control:`boolean`},modelValue:{control:`boolean`}},render:e=>({components:{Switch:i},setup(){return{args:e,enabled:n(!!e.modelValue)}},template:`<Switch v-bind="args" v-model="enabled" />`})},l={args:{label:`Email notifications`}},u={args:{label:`Email notifications`,modelValue:!0}},d={args:{label:`Publish PR previews`,description:`Deploy a Storybook preview for every pull request.`,modelValue:!0}},f={args:{label:`Compact mode`,size:`sm`}},p={args:{label:`Managed by your organization`,description:`Ask an admin to change this setting.`,modelValue:!0,disabled:!0}},m={args:{label:`Dark mode`},play:async({canvasElement:e})=>{let t=s(e),n=t.getByRole(`switch`,{name:`Dark mode`});await a(n).toHaveAttribute(`aria-checked`,`false`),await o.click(n),await a(n).toHaveAttribute(`aria-checked`,`true`),await o.click(t.getByText(`Dark mode`)),await a(n).toHaveAttribute(`aria-checked`,`false`),n.focus(),await o.keyboard(` `),await a(n).toHaveAttribute(`aria-checked`,`true`)}},h=[`Off`,`On`,`WithDescription`,`Small`,`Disabled`,`InteractiveToggle`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email notifications'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email notifications',
    modelValue: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Publish PR previews',
    description: 'Deploy a Storybook preview for every pull request.',
    modelValue: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Compact mode',
    size: 'sm'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Managed by your organization',
    description: 'Ask an admin to change this setting.',
    modelValue: true,
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dark mode'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch', {
      name: 'Dark mode'
    });
    await expect(toggle).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute('aria-checked', 'true');

    // The label toggles it too.
    await userEvent.click(canvas.getByText('Dark mode'));
    await expect(toggle).toHaveAttribute('aria-checked', 'false');

    // And the keyboard: Space on the focused switch.
    toggle.focus();
    await userEvent.keyboard(' ');
    await expect(toggle).toHaveAttribute('aria-checked', 'true');
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{p as Disabled,m as InteractiveToggle,l as Off,u as On,f as Small,d as WithDescription,h as __namedExportsOrder,c as default};
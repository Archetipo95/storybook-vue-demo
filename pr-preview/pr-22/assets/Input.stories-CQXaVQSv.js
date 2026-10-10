import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Input-BSmRzCt0.js";var r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),{expect:r,userEvent:i,within:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Input`,component:n,tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`text`,`email`,`password`,`number`,`search`,`url`]},label:{control:`text`},placeholder:{control:`text`},helperText:{control:`text`},errorMessage:{control:`text`},disabled:{control:`boolean`}}},s={args:{label:`Username`,placeholder:`Enter your username`,helperText:`Your public display handle.`}},c={args:{label:`Email Address`,modelValue:`invalid-email`,placeholder:`name@example.com`,errorMessage:`Please enter a valid email address.`}},l={args:{label:`API Key`,modelValue:`sk_live_1234567890abcdef`,disabled:!0,helperText:`Contact admin to update key.`}},u={args:{label:`Search Components`,placeholder:`Type to search...`},play:async({canvasElement:e})=>{let t=a(e).getByRole(`textbox`);await i.type(t,`Storybook Pages`),await r(t).toHaveValue(`Storybook Pages`)}},d={args:{type:`email`,label:`Notification Email`,placeholder:`you@example.com`,helperText:`Used for release and preview notifications.`},play:async({canvasElement:e})=>{let t=a(e).getByRole(`textbox`);await i.type(t,`demo@example.com`),await r(t).toHaveValue(`demo@example.com`)}},f=[`Default`,`WithError`,`Disabled`,`InteractiveTyping`,`EmailInputTyping`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'Your public display handle.'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    modelValue: 'invalid-email',
    placeholder: 'name@example.com',
    errorMessage: 'Please enter a valid email address.'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'API Key',
    modelValue: 'sk_live_1234567890abcdef',
    disabled: true,
    helperText: 'Contact admin to update key.'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    label: 'Notification Email',
    placeholder: 'you@example.com',
    helperText: 'Used for release and preview notifications.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.type(input, 'demo@example.com');
    await expect(input).toHaveValue('demo@example.com');
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{s as Default,l as Disabled,d as EmailInputTyping,u as InteractiveTyping,c as WithError,f as __namedExportsOrder,o as default};
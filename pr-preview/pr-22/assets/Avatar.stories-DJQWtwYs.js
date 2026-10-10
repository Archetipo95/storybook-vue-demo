import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Avatar-Boyuy3Rg.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{t(),r={title:`Components/Avatar`,component:n,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]},status:{control:`select`,options:[void 0,`online`,`offline`,`busy`,`away`]},square:{control:`boolean`},src:{control:`text`},name:{control:`text`},alt:{control:`text`}}},i={args:{src:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,name:`Sarah Connor`,size:`lg`}},a={args:{name:`Martin Masevski`,size:`lg`}},o={args:{name:`Alex Chen`,size:`lg`,status:`online`}},s={render:()=>({components:{Avatar:n},template:`
      <div style="display: flex; align-items: center; gap: 1rem;">
        <Avatar name="Small User" size="sm" />
        <Avatar name="Medium User" size="md" />
        <Avatar name="Large User" size="lg" />
        <Avatar name="Extra Large User" size="xl" />
      </div>
    `})},c={args:{size:`lg`}},l=[`WithImage`,`WithInitials`,`WithStatus`,`Sizes`,`Fallback`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    name: 'Sarah Connor',
    size: 'lg'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Martin Masevski',
    size: 'lg'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Alex Chen',
    size: 'lg',
    status: 'online'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 1rem;">
        <Avatar name="Small User" size="sm" />
        <Avatar name="Medium User" size="md" />
        <Avatar name="Large User" size="lg" />
        <Avatar name="Extra Large User" size="xl" />
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Fallback,s as Sizes,i as WithImage,a as WithInitials,o as WithStatus,l as __namedExportsOrder,r as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,f as r,g as i,l as a,m as o,o as s,u as c,v as l,y as u}from"./iframe-BgVYpju_.js";import{n as d,t as f}from"./_plugin-vue_export-helper-BqBa3wPr.js";var p,m,h,g,_,v;function y(){return(y=e((()=>{t(),p=[`aria-label`],m=[`src`,`alt`],h={key:1,class:`avatar__initials`},g={key:2,class:`avatar__fallback`,"aria-hidden":`true`},_=[`aria-label`],v=c({__name:`Avatar`,props:{src:{default:``},alt:{default:``},name:{default:``},size:{default:`md`},status:{default:void 0},square:{type:Boolean,default:!1}},setup(e){let t=e,c=i(!1);o(()=>t.src,()=>{c.value=!1});let d=s(()=>{if(!t.name)return``;let e=t.name.trim().split(/\s+/);return e.length===1?e[0].slice(0,2).toUpperCase():(e[0][0]+e[e.length-1][0]).toUpperCase()}),f=s(()=>!(!t.src||c.value));function v(){c.value=!0}return(t,i)=>(r(),a(`div`,{class:l([`avatar`,`avatar--${e.size}`,{"avatar--square":e.square}]),role:`img`,"aria-label":e.alt||e.name||`Avatar`},[f.value?(r(),a(`img`,{key:0,src:e.src,alt:e.alt||e.name,class:`avatar__image`,onError:v},null,40,m)):d.value?(r(),a(`span`,h,u(d.value),1)):(r(),a(`span`,g,`👤`)),e.status?(r(),a(`span`,{key:3,class:l([`avatar__status`,`avatar__status--${e.status}`]),"aria-label":`Status: ${e.status}`},null,10,_)):n(``,!0)],10,p))}})})))()}var b;function x(){return(x=e((()=>{y(),d(),b=f(v,[[`__scopeId`,`data-v-2061a411`]]),v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:`default`,displayName:`Avatar`,description:``,tags:{},props:[{name:`src`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`''`}},{name:`alt`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`''`}},{name:`name`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`''`}},{name:`size`,required:!1,type:{name:`AvatarSize`},defaultValue:{func:!1,value:`'md'`}},{name:`status`,required:!1,type:{name:`AvatarStatus`},defaultValue:{func:!1,value:`undefined`}},{name:`square`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}}],sourceFiles:[`/home/runner/work/storybook-vue-demo/storybook-vue-demo/src/components/Avatar/Avatar.vue`]})})))()}var S,C,w,T,E,D,O;function k(){return(k=e((()=>{x(),S={title:`Components/Avatar`,component:b,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]},status:{control:`select`,options:[void 0,`online`,`offline`,`busy`,`away`]},square:{control:`boolean`},src:{control:`text`},name:{control:`text`},alt:{control:`text`}}},C={args:{src:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,name:`Sarah Connor`,size:`lg`}},w={args:{name:`Martin Masevski`,size:`lg`}},T={args:{name:`Alex Chen`,size:`lg`,status:`online`}},E={render:()=>({components:{Avatar:b},template:`
      <div style="display: flex; align-items: center; gap: 1rem;">
        <Avatar name="Small User" size="sm" />
        <Avatar name="Medium User" size="md" />
        <Avatar name="Large User" size="lg" />
        <Avatar name="Extra Large User" size="xl" />
      </div>
    `})},D={args:{size:`lg`}},O=[`WithImage`,`WithInitials`,`WithStatus`,`Sizes`,`Fallback`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    name: 'Sarah Connor',
    size: 'lg'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Martin Masevski',
    size: 'lg'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Alex Chen',
    size: 'lg',
    status: 'online'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as Fallback,E as Sizes,C as WithImage,w as WithInitials,T as WithStatus,O as __namedExportsOrder,S as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Button-BG4zzy7W.js";import{n as r,t as i}from"./Badge-xtmQc5Qv.js";import{n as a,t as o}from"./Card-CEjZbyOe.js";var s,c,l,u;function d(){return(d=e((()=>{a(),t(),r(),s={title:`Components/Card`,component:o,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`elevated`,`outlined`,`flat`]},padding:{control:`select`,options:[`none`,`sm`,`md`,`lg`]}}},c={args:{variant:`elevated`,padding:`md`},render:e=>({components:{Card:o,Button:n,Badge:i},setup(){return{args:e}},template:`
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
    `})},l={args:{variant:`outlined`,padding:`md`},render:e=>({components:{Card:o},setup(){return{args:e}},template:`
      <Card v-bind="args" style="max-width: 400px;">
        <h4 style="margin: 0 0 0.5rem 0;">Minimal Card</h4>
        <p style="margin: 0; color: var(--color-text-muted);">
          Clean card container with subtle borders for structured layouts.
        </p>
      </Card>
    `})},u=[`Elevated`,`Outlined`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Elevated,l as Outlined,u as __namedExportsOrder,s as default};
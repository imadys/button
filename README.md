Button component

- Tailwindcss is required
- if you are using vite you can use this example [here](https://github.com/imadys/button-component "link")
- [live preview](https://button-component-kohl.vercel.app/ "@imadys/dropdown")
##### The styles in requered.css file is required .. you will need to copy it and paste it into your tailwind css file
##### To install the package
`npm install @imadys/button`

##### Usage
`import Button from '@imadys/button'`

### Colors
- primary
- secondary
- info
- warning
- danger


`
  <Button color="primary">Primary</Button>
`

### sizes
- xs
- sm
- md
- lg
- xl


`
  <Button color="primary" size="md">Primary</Button>
`

### to add radius

`
  <Button color="primary" size="md" rounded={true}>Primary</Button>
`

### to make the button outlined

`
  <Button color="primary" size="md" outline={true}>Primary</Button>
`

### to make the button disabled

`
  <Button color="primary" size="md" disabled={true}>Primary</Button>
`

### to make event on click
`
  <Button click={() => { alert('its working!') }} color="danger" size="lg">Button with event</Button>
`

### to add icon
`
  <Button setIcon={{ icon: <FontAwesomeIcon icon={faBell} />, direction: 'right' }}>Button with event</Button>
`

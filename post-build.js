/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const content = `
# *
User-agent: *
Allow: /

# Host
Host: https://nirola.tech
`

fs.writeFileSync(path.join(__dirname, 'public/robots.txt'), content)

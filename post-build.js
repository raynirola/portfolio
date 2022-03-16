import fs from 'fs'
import path from 'path'

const content = `
# *
User-agent: *
Allow: /

# Host
Host: https://nirola.tech
`

fs.writeFileSync(path.join(__dirname, 'public/robots.txt'), content)

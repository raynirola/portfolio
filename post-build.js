function main() {
  const fs = require('fs')
  const path = require('path')
  const content = `
# *
User-agent: *
Allow: /

# Host
Host: https://raynirola.com
`
  fs.writeFileSync(path.join(__dirname, 'public/robots.txt'), content)
}

main()

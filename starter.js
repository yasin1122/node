const path = require('path')
const { add, subtract, multiply, divide } = require('./math')
const fs = require('fs')

console.log(path.parse(__filename))
console.log(add(2, 1))

fs.readFile(
  path.join(__dirname, 'text-files', 'starter.txt'),
  'utf8',
  (err, data) => {
    if (err) throw err
    console.log(data)
  }
)

let message = 'This is a NodeJS crash course.'
let newMsg = '\nThis is appended to the file.'

fs.writeFile(
  path.join(__dirname, 'text-files', 'written.txt'),
  message,
  err => {
    if (err) throw err
    console.log(message, '- was written to the file.')

    fs.appendFile(
      path.join(__dirname, 'text-files', 'written.txt'),
      newMsg,
      err => {
        if (err) throw err
        console.log(newMsg, '- was appended to the file.')
      }
    )
  }
)

// exit on uncaugth errors
process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`)
  process.exit(1)
})

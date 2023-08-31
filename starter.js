const path = require('path')
const { add, subtract, multiply, divide } = require('./math')
const fs = require('fs').promises

let message = 'This is a NodeJS crash course.'
let newMsg = '\nThis is appended to the file.'

console.log(path.parse(__filename))
console.log(add(2, 1))

const fileOps = async () => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, 'text-files', 'starter.txt'),
      'utf8'
    )
    console.log(data)
    await fs.writeFile(path.join(__dirname, 'text-files', 'written.txt'), data)
    await fs.appendFile(
      path.join(__dirname, 'text-files', 'written.txt'),
      newMsg
    )
    await fs.rename(
      path.join(__dirname, 'text-files', 'written.txt'),
      path.join(__dirname, 'text-files', 'renamed.txt')
    )
    const newData = await fs.readFile(
      path.join(__dirname, 'text-files', 'renamed.txt'),
      'utf8'
    )
    console.log(newData)
    await fs.unlink(path.join(__dirname, 'text-files', 'renamed.txt'))
  } catch (err) {
    console.error(err)
  }
}

fileOps()

// fs.readFile(
//   path.join(__dirname, 'text-files', 'starter.txt'),
//   'utf8',
//   (err, data) => {
//     if (err) throw err
//     console.log(data)
//   }
// )

// fs.writeFile(
//   path.join(__dirname, 'text-files', 'written.txt'),
//   message,
//   err => {
//     if (err) throw err
//     console.log(message, '- was written to the file.')

//     fs.appendFile(
//       path.join(__dirname, 'text-files', 'written.txt'),
//       newMsg,
//       err => {
//         if (err) throw err
//         console.log(newMsg, '- was appended to the file.')
//       }
//     )
//   }
// )

// // exit on uncaugth errors
// process.on('uncaughtException', err => {
//   console.error(`There was an uncaught error: ${err}`)
//   process.exit(1)
// })

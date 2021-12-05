const server = require("./App")
const port = 3001

const listener = server.listen(port, function () {
    console.log(`Server running on port: ${port}`)
  })
  // a function to stop listening to the port
  const close = () => {
    listener.close()
  }
  module.exports = {
    close: close,
  }

  
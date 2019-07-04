const app = require('./server.js')

const port = 3000
app.listen(port, () => { console.log(`server started on port ${port}`) })
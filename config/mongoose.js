const mongoose = require('mongoose')

mongoose.connect(
  "mongodb+srv://samirguitar:QtfX9VO3aF5FWFjP@cluster0.8esoif9.mongodb.net/?retryWrites=true&w=majority"
//   ,{
    // useNewUrlParser: true,
    // useF indAnModify: true}
)

module.exports = mongoose
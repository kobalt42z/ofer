const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://chm:c26902690@cluster0.5qm9mrs.mongodb.net/mainOne');
  console.log("mongo connected to mainOne successfuly");
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
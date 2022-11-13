const mongoose = require('mongoose');

main().catch(err=>console.log(err)) ;


async function main(){
     
    await mongoose.connect('mongodb+srv://chm:1354213542@cluster0.5qm9mrs.mongodb.net/mainOne')
    console.log('db connnected successfuly ! to mainOne ');
}
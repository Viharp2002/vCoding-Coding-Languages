const mongoose = require("mongoose");
const db = process.env.DATABASE;

mongoose.connect(db).then(() => {
    console.log("Connection");
}).catch((error) => {
    console.log(error);
});
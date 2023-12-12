const mongoose = require("mongoose");

const replySchema= mongoose.Schema({
    userid:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    commentid:{
        type:String,
        required:true,
    },
},{timestamps: true});

replySchema.methods.remove1 = async function () {
    const reply = this;
    await reply.delete();
  };
const Reply = mongoose.model('reply',replySchema)
module.exports = Reply
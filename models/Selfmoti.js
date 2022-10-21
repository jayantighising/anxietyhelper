const uuid= require('uuid');
const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const AhSchema = new Schema({
    images: {type:String,
            required:true,
    },
    videos:{type:String,
        required:true,
    },
});
 module.exports = mongoose.model('Selfmoti',AhSchema);
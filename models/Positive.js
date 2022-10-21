const uuid=require('uuid');
const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const PosSchema = new Schema({
    images: {type:String,
            required:true,
    },
    videos:{type:String,
        required:true,
    },
});
 module.exports = mongoose.model('Positive',PosSchema);
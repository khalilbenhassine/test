var mongoose = require('mongoose');
autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost:27017/events");
autoIncrement.initialize(connection);
var Schema = mongoose.Schema;
var EventSchema=new Schema({
 _id: {type:Schema.Types.ObjectId},
 name:{type:String,required:true}, 
 visit:{type:Number,default:0},
 cookieId:{type:String,required:true,unique:true},
 referrer:{type:String,lowercase:true,required:true}, 
 createdAt:{type: Date, default: Date.now },
    
 
    
},{ versionKey: false }
);

EventSchema.plugin(autoIncrement.plugin, {
    model: 'Event',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});
module.exports=mongoose.model('Event',EventSchema);


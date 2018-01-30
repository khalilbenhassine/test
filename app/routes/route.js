var Event =require('../models/event')
const request = require("request")
var state = {};
module.exports=function(router){
    
    
 router.get('/events',function(req,res){
    Event.find(function(err, events) {
        if (err)
            res.send(err);

    res.json(events);
    });
 });
 router.get('/events/:id',function(req,res){
    Event.findById(req.params.id, function(err, event) {
        if (err)
            res.send(err);
    event.visit=event.visit+1;
    event.save();
    res.json(event);
        });
 });
 router.get('/dashboard/eventsByName',function(req,res){
    Event.aggregate(
        { $group: 
            { _id: '$name', total_event: { $sum: 1 } ,events:{$addToSet:{date:"$createdAt"}}} 
        },
          function (err,events) {
                if (err)
                    res.send(err);
    res.json(events);
            
          }
        );
        
 });
 router.get('/dashboard/eventsByMinute',function(req,res){
    var format = "%Y-%m-%dT%H:%M";
    Event.aggregate(
        {"$group" : { _id: { $dateToString: { format: format, date: "$createdAt" }}
        ,
        "total":{"$sum":1},events:{$addToSet:{name:"$name"}},
         }},
            function (err,events) {
                if (err)
                    res.send(err);
            res.json(events);
            }
    );
        
 });
 router.post('/events',function(req,res){
   
    var event = new Event();
    event.name = req.body.name;
    event.cookieId = req.body.cookieId;
    event.referrer = req.body.referrer;
    
    
    if(event.name==null  ||event.referrer==null||event.cookieId==null||event.name==''  ||event.referrer==''||event.cookieId==''){
        res.send('insert name cookieId and referrer is required  !!');
       }
    else{
        event.save(function(err){
    if(err){
        res.send(err);
           
    }
    else{
         res.send('event created!');  
           
        }
    
       
        });
      }
 });
return router;
    }
const todo = require('../models/task');
module.exports.home = function(req , res ){
   todo.find({},function(err,list){
       if(err){
           console.log('Error in fetching the data from todo list');
           return;
       }
       return res.render('home',{
           title:"TODO LIST",
           todo_list : list
       });
   });
}


module.exports.addDel = function(req , res){

    console.log(req.body,'sdfghjkl;dfghjkl;') ;

    if(req.body.submit_btn==='add'){

        todo.create({
            description:req.body.descripton,
            category:req.body.category,
            date:req.body.date,
        }, function(err,todo){
            console.log(err) ;
            if(err){console.log('error in creating a contact!');
               return};
               console.log('********', todo);
               console.log(err);
               return res.redirect('back');
        })
    }else{
        // delete 
        todo.deleteMany( { _id: { $in: req.body.deleteIds } } ,function (err) {
            return res.redirect('back') ;
        })
    }


    // console.log(req.body)
}  
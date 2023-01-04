const express = require('express');
const router = express.Router();

const uuid = require('uuid');

const file = require('../utility/comman-backend');
const sortingFile = require('../utility/sort');


router.get('/recommended',function(req , res){

let order = req.query.orderHidden;
let orderNumber = 'dsc';

if(order!== 'asc' && order!== 'dsc'){

   order='asc';

}

if(order==='dsc'){
   orderNumber='asc';

}

    const newRead = file.reading();
    const newRead1 = sortingFile.sorting(newRead,order);

   
 
  res.render('recommended',{numberOfRestaurent:newRead1.length, keys:newRead1,orderNumber:orderNumber});
  });

  router.get('/recommended/:id',function(req , res){
      const ID= req.params.id;

      const newRead = file.reading();

       for(const key of newRead){

          if(key.resId === ID){
             return res.render('detailsPage',{keyi:key});
          }
       }

       res.status(404).render('404');
  });
  
  router.get('/shareRestaurent',function(req , res){

 
  res.render('shareRestaurent');
  });

  router.post('/shareRestaurent',function(req , res){

      const userData=req.body;
      userData.resId = uuid.v4();

       const newRead = file.reading();

       newRead.push(userData);

       file.writing(newRead);

       res.redirect('/confirm');


      });

      module.exports=router;

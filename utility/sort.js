function sorting(newRead,order){

    newRead.sort(function(resA,resB){

        if((order === 'asc' && resA.resName>resB.resName) || 
        (order === 'dsc' && resB.resName>resA.resName)){
            return 1;

        } 
        
            return -1;
    });


return newRead;


}

module.exports = {

    sorting:sorting
};
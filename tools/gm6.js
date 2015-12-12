/**
 *
 * Created by kevin on 15/12/11.
 */
var gm = require('gm');
var moment = require('moment');


var Gm6 = function(animalArr,identify){
    var generatetime = moment().format('YYYY-MM-DD-HH-mm-ss');
    var outpath = 'public/generate/'+identify+generatetime+'.jpg';
    var idArr = [];
    var g = gm();
    animalArr.forEach(function(i,index,arr){
        i = i.substring(3);
        console.log(i,index,'<---------------------------------------------');
        if(i.indexOf(identify) != -1){

            idArr.push(index);
        }

        if(index <arr.length/2){
            console.log(index,'+'+index*200+'+0');
            g.in('-page','+'+index*200+'+0')
                .in(i)
            ;
        }else{
            console.log(index,'+'+(index-3)*200+'+200');
            g.in('-page','+'+(index-3)*200+'+200')
                .in(i)
            ;
        }
    });
    g.mosaic();
    g.write(outpath,function(err){
        if(err) console.log(err);
    });
    return {
        outpath:outpath.substring(7),
        generatetime:generatetime,
        idArr:idArr,
        identify:identify
    };
};

module.exports = Gm6;
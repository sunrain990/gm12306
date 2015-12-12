/**
 * Created by kevin on 15/12/11.
 */
var Mysql = require('../config/db/my');
var fs = require('fs');

//var path = '../public/img/rabbit/';
var outpath = '../public/output/';
var files = fs.readdirSync(outpath);
for(var i in files) {
    //console.log(outpath + files[i]);
    var filest = fs.readdirSync(outpath + files[i]);
    for(var j in filest){
        var picurl = outpath + files[i]+'/'+filest[j];
        var picis = files[i];
        console.log(picurl,files[i]);
        var sql = 'insert into pic values(0,"'+picurl+'","'+picis+'")';
        console.log(sql);
        Mysql.gm.query(sql,function(err,res){
            if(!err){
                console.log(res);
            }else{
                console.log(err);
            }
        });
    }
}

//Mysql.gm.query('');
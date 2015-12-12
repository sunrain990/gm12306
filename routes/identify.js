var express = require('express');
var router = express.Router();
var Mysql = require('../config/db/my');
var gm = require('gm');
var gm6 = require('../tools/gm6');

/* GET home page. */
router.post('/code', function(req, res, next) {
    //键值对
    //var kv = {
    //    cat:1,
    //    dog:2,
    //    dragon:3,
    //    onepiece:4,
    //    rabbit:5
    //};
    var animals = ['cat','dog','dragon','onepiece','rabbit'];
    //randomid 1~5
    var randomid = parseInt(4*Math.random());
    var kvalue = animals[randomid];

    //生成查询语句，如果随机到选中的那么选择两张图片
    var generatequery = function(animal,kvalue){
        var num = 1;
        if(animal == kvalue){
            num = 2;
        }
        var sql = 'SELECT * FROM pic where picis="'+animal+'" order by rand() limit '+num;
        return sql;
    };

    var resultmap = [];

    //查询cat
    Mysql.gm.query(generatequery(animals[0],animals[randomid]),function(err,re){
        if(!err){
            console.log(re,re[0]);
            if(re.length==1){
                resultmap.push(re[0]);
            }else{
                resultmap.push(re[0]);
                resultmap.push(re[1]);
            }
            //查询dog
            Mysql.gm.query(generatequery(animals[1],animals[randomid]),function(err,re){
                if(!err){
                    console.log(re);
                    if(re.length==1){
                        resultmap.push(re[0]);
                    }else{
                        resultmap.push(re[0]);
                        resultmap.push(re[1]);
                    }
                    //查询dragon
                    Mysql.gm.query(generatequery(animals[2],animals[randomid]),function(err,re){
                        if(!err){
                            console.log(re);
                            if(re.length==1){
                                resultmap.push(re[0]);
                            }else{
                                resultmap.push(re[0]);
                                resultmap.push(re[1]);
                            }
                            //查询onepiece
                            Mysql.gm.query(generatequery(animals[3],animals[randomid]),function(err,re){
                                if(!err){
                                    console.log(re);
                                    if(re.length==1){
                                        resultmap.push(re[0]);
                                    }else{
                                        resultmap.push(re[0]);
                                        resultmap.push(re[1]);
                                    }
                                    //查询rabbit
                                    Mysql.gm.query(generatequery(animals[4],animals[randomid]),function(err,re){
                                        if(!err){
                                            console.log(re);
                                            if(re.length==1){
                                                resultmap.push(re[0]);
                                            }else{
                                                resultmap.push(re[0]);
                                                resultmap.push(re[1]);
                                            }

                                            //generate resultmap success
                                            //生成6宫图

                                            var picurlmap = resultmap.map(function(obj){
                                                return obj.picurl;
                                            });

                                            var rs = gm6(picurlmap,kvalue);
                                            console.log(rs);

                                            //存入数据库将生成信息存入数据库
                                            var outpath = rs.outpath;
                                            var description = '请找出图中的：'+rs.identify;
                                            var idArr = rs.idArr;
                                            var identifies = JSON.stringify(idArr);
                                            var idcodesql = 'insert into identifycode values(0,"'+outpath+'","'+description+'","'+identifies+'")';
                                            Mysql.gm.query(idcodesql,function(err,re){
                                                if(!err){
                                                    console.log(re);
                                                    res.json({code:1,msg:'查询成功！',data:{
                                                        outpath:outpath,
                                                        identify:rs.identify,
                                                        description:description
                                                    }});
                                                }else{
                                                    console.log(err);
                                                    res.json({code:-1,msg:'插入失败idcodesql！',data:{
                                                    }})
                                                }
                                            });


                                        }else{
                                            console.log(err);
                                        }
                                    });
                                }else{
                                    console.log(err);
                                }
                            });
                        }else{
                            console.log(err);
                        }
                    });
                }else{
                    console.log(err);
                }
            });
        }else{
            console.log(err);
        }
    });
});


router.post('/answer', function(req, res, next) {
   var picurl = req.body.picurl;
    var identifies = req.body.identifies;
    //var idstr = JSON.stringify(identifies);
    console.log(picurl,identifies);
    var sql = 'select identifies from identifycode where picurl="'+picurl+'"';
    Mysql.gm.query(sql,function(err,re){
        if(!err){
            console.log(re[0].identifies);
            var jsonidentifies = re[0].identifies;
            var identifiesArr = JSON.parse(jsonidentifies);
            if(identifiesArr.sort().toString() == identifies.sort().toString()){
                res.json({code:1,msg:'匹配成功！'});
            }else{
                res.json({code:-1,msg:'匹配失败！'});
            }
            console.log(identifiesArr[0]);
        }else{
            console.log(err);
        }
    })
});
module.exports = router;

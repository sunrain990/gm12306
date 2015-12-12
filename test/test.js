/**
 * Created by kevin on 15/12/10.
 */
var gm = require('gm');

var catarr = [
    '../public/img/cat/cata.jpg',
    '../public/img/cat/catb.jpeg',
    '../public/img/cat/catc.jpg',
    '../public/img/cat/catd.jpeg',
    '../public/img/cat/cate.jpg',
    '../public/img/cat/catf.jpg'
];

//格式化所有图片为200＊200
//var fs = require('fs');
//var path = '../public/img/rabbit/';
//var outpath = '../public/output/rabbit/';
//var files = fs.readdirSync(path);
//for(var i in files) {
//    console.log(path + files[i]);
//
//    gm(path+files[i])
//    .resize(200, 200, '^')
//    .gravity('Center')
//    .crop(200, 200)
//    .write(outpath+files[i].split('.')[0]+'.jpg', function (err) {
//        if (err) console.log(err);
//    });
//}


var g = gm();

catarr.forEach(function(i,index,arr){
    if(index <arr.length/2){
        console.log(index,'+'+index*200+'+0');
        g.in('-page','+'+index*200+'+0')
            //.in('-resize','80+80')
            .in(i)
            //.resize(200, 200, '^')
            //.gravity('Center')
            //.crop(200, 200)
        ;
    }else{
        console.log(index,'+'+(index-3)*200+'+200');
        g.in('-page','+'+(index-3)*200+'+200')
            //.in('-resize','80+80')
            .in(i)
            //.resize(200, 200, '^')
            //.gravity('Center')
            //.crop(200, 200)
        ;
    }
});
g.mosaic();
g.write('../public/output/catdddd1.jpg',function(err){
    if(err) console.log(err);
});


//gm('../public/output/cata.jpg').append('../public/output/catb.jpg')
//    .write('../public/output/catdddd1.jpg',function(err){
//        if(err)console.log(err);
//    });


//gm()
//    .in('-page', '+0+0') // Custom place for each of the images
//    .in('../public/output/cata.jpg')
//    .in('-page', '+200+0')
//    .in('../public/output/catb.jpg')
//    .in('-page', '+400+0')
//    .in('../public/output/catc.jpg')
//    .in('-page', '+0+200')
//    .in('../public/output/catd.jpg')
//    .in('-page', '+200+200')
//    .in('../public/output/cate.jpg')
//    .in('-page', '+400+200')
//    .in('../public/output/catf.jpg')
//    //.minify()  // Halves the size, 512x512 -> 256x256
//    .mosaic()  // Merges the images as a matrix
//    .write('output1.jpg', function (err) {
//        if (err) console.log(err);
//    });;

//gm('../public/output/cata.jpg').page(0,0)
//    .mosaic()  // Merges the images as a matrix
//    .write('output2.jpg', function (err) {
//        if (err) console.log(err);
//    });;


//gm('../public/output/cata.jpg')
//    .montage('../public/output/catb.jpg')
//    .montage('../public/output/catc.jpg')
//    .geometry('+0+0')
//    .append()
//    .write('../public/output/cataffff.jpg', function(err) {
//        if(!err) console.log("Written montage image.");
//    });


// a b c d  ->  ab
//              cd
//gm()
//    .in('-page', '+0+0')  // Custom place for each of the images
//    .in('../public/img/cat/cata.jpg')
//    .in('-page', '+256+0')
//    .in('../public/img/cat/catc.jpg')
//    .in('-page', '+0+256')
//    .in('../public/img/cat/cate.jpg')
//    .in('-page', '+256+256')
//    .in('../public/img/cat/catf.jpg')
//    .minify()  // Halves the size, 512x512 -> 256x256
//    .mosaic()  // Merges the images as a matrix
//    .write('output.jpg', function (err) {
//        if (err) console.log(err);
//    });

//var gg = gm();
//    gg.in('../public/img/cat/catf.jpg')
//    .in('-page','+0+0');
//
//    gg.in('../public/img/cat/cata.jpg')
//    .in('-page','+80+0');
//    gg.mosaic();
//    gg.write('../public/output/catd2.jpg',function(err){
//        if(err) console.log(err);
//    });


//gm('../public/img/cat/catg.jpeg')
//    .resize(200, 200, '^')
//    .gravity('Center')
//    .crop(200, 200)
//    .write('../public/output/catg.jpg', function (err) {
//        if (err) console.log(err);
//    });

//gm('../public/output/catd.jpg').append('../public/output/cata.jpg')
//    .write('../public/output/ttt.jpg',function(err){
//        if(err)console.log(err);
//    });;

//gm('../public/img/cat/catd.jpeg')
//    .resize(200, 200, '^')
//    .gravity('Center')
//    .crop(200, 200)
//    .append(gm('../public/img/cat/catg.jpeg')
//        .resize(200, 200, '^')
//        .gravity('Center')
//        .crop(200, 200).write('ttt.jpg',function(){}))
//    .write('../public/output/cbbb.jpg', function (err) {
//        if (err) console.log(err);
//    });


//gm('../public/img/cat/cata.jpg').append('../public/img/cat/catc.jpg',true)
//    .append('../public/img/cat/cate.jpg',false)
//    .append('../public/img/cat/catf.jpg',true)
//    .write('../public/output/ttt.jpg',function(err){
//        if(err)console.log(err);
//    });

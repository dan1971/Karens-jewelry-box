$(document).ready(function(){

let cl = console.log.bind(console);
let path;
let length;

for(let i=1;i<=11;i++){
    cl("hello")
    path = document.querySelector('#svg-path-'+i);
    length = path.getTotalLength();
    cl('path length= ' + length);
};


// stars stuff
/*
var screenWid = $(window).width() - 50;
var randStartPos;
var randEndPos;
var randStarSize;
var aniDuration;
var randAniDelay;
var randHexColorAr = ["#00FFF8", "#08FF08", "#FF0DDD", "#EDFF00"];
var randRbgColorAr = [[0, 255, 248], [8, 255, 8], [255, 13, 221], [237, 255, 0]]

var style = document.createElement('style');
style.type = 'text/css';
var keyframes;
// Use jQuery event delegation to handle clicks on elements with class 'card-selector'
$(document).on('click', '.card-selector', function(e){
    cl('card mouseover');
    let cardId = $(this).data("id");
    
    const commonAncestor = $(this).closest('.detail-shade')
    $('.detail-shade').css('opacity', 1);
    
    cl('card= ' + cardId);
    cl('parent= ',commonAncestor);
});

$('.card').hover(function(){
    $('.detail-shade').css('transform', 'rotateY(180deg)');
    $('.detail-shade').css('opacity', 0);

});


//
*/
});
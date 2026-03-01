$(document).ready(function(){

let cl = console.log.bind(console);

// stars stuff
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

// for (i = 1; i <= 100; i++) {
//     randStartPos = Math.floor(Math.random() * screenWid) + 20;
//     randEndPos = Math.floor(Math.random() * screenWid) + 20;
//     randStarSize = Math.floor(Math.random() * 8) + 1;
//     aniDuration = Math.floor(Math.random() * 37000) + 28000;
//     randAniDelay = Math.random() * 21000 + .5000;
//     randAniDelayCirc = Math.floor(Math.random() * 3280) + 200;
//     randCircColor = Math.floor(Math.random() * 4);

//     $('.container').append('<div class="circle-container"><div class="circle"></div>');

//     $('.circle-container:nth-child(' + i + ')').css({
//         'z-index': -10,
//         'width': randStarSize,
//         'height': randStarSize,
//         'transform': 'translate3d(' + randStartPos + 'px, -10px, 0)',
//         '-webkit-animation-name': 'move-frames-' + i,
//         'animation-name': ' move-frames-' + i,
//         '-webkit-animation-duration': aniDuration + 'ms',
//         'animation-duration': aniDuration,
//         '-webkit-animation-delay': '.' + randAniDelay + 'ms',
//         'animation-delay': randAniDelay + 'ms',
//     });

//     $('.circle-container:nth-child(' + i + ') .circle').css({
//         '-webkit-animation-delay': randAniDelayCirc + 'ms',
//         'animation-delay': randAniDelayCirc + 'ms',
//         'background-image': 'radial-gradient(' + randHexColorAr[randCircColor] + ',' + randHexColorAr[randCircColor] + ' 10%, rgba(' + randRbgColorAr[randCircColor][0] + ', ' + randRbgColorAr[randCircColor][1] + ', ' + randRbgColorAr[randCircColor][2] + ', 0) 56%)'

//     });

//     var keyFrames = '@keyframes move-frames-' + i + '{from {-webkit-transform: translate3d(' + randStartPos + 'px, 100px, 0)transform: translate3d(' + randStartPos + 'px, 100px, 0);}to {-webkit-transform: translate3d(' + randEndPos + 'px, 500px, 0);transform: translate3d(' + randEndPos + 'px, 500px, 0);}}@-webkit-keyframes move-frames-' + i + '{from {-webkit-transform: translate3d(' + randStartPos + 'px, 100px, 0)transform: translate3d(' + randStartPos + 'px, 100px, 0);}to {-webkit-transform: translate3d(' + randEndPos + 'px, 500px, 0);transform: translate3d(' + randEndPos + 'px, 500px, 0);}}';

//     style.innerHTML += keyFrames;
//     document.getElementsByTagName('head')[0].appendChild(style);


//

});
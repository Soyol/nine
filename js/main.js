



$(".item").mousemove(function(e) {
  parallaxIt(e, $(this).children(".para"), -60);
  parallaxIt(e, $(this).children(".paraimg") , -60);
});


function parallaxIt(e, target, movement){
  var $this = $('.item');
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;
  
  TweenMax.to(target, 1, {
    x: (relX - $this.width()/2) / $this.width() * movement,
    y: (relY - $this.height()/2) / $this.height() * movement,
    ease: Power2.easeOut
  })
}


var basicTimeline = anime.timeline({
	loop: true
	});

basicTimeline
  .add({
    targets: '.logo',
    backgroundColor: "#021626",
    easing: 'easeOutExpo',
    offset: 12000 
  })
  .add({
    targets: '.logo',
    backgroundColor: "#39c3b6",
    easing: 'easeOutExpo',
    offset: 9000 
  })
  .add({
    targets: '.logo',
    backgroundColor: "#e4223c",
    easing: 'easeOutExpo',
    offset: 6000 
  })
  .add({
    targets: '.logo',
    backgroundColor: "#fd9e32",
    easing: 'easeOutExpo',
    offset: 3000 
  });
$('.locationSlider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [{
      breakpoint: 768,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
      }
  }, ]
});

var text = [{name:"Lorem",bgColor:"#316EFF",color:"#fff"}, {name:"Lorem ipsum",bgColor:"#E86F3A",color:"#fff"}, {name:"Lorem ipsum Sit",bgColor:"#FFFFFF",color:"#08083D"}];
var counter = 0;
var inst = setInterval(change, 3000);

function change() {
  console.log(text[counter])
  $(".changeText").text(text[counter].name);
  $(".changeText").css("background-color",text[counter].bgColor);
  $(".changeText").css("color",text[counter].color);
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
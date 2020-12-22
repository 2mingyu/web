var Body = {
  setColor:function(color){
    //document.querySelector('body').style.color=color;
    $('body').css('color',color);
  },
  setBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
  }
}
var Links = {
  setColor:function(color){
    //var q=document.querySelectorAll('a');
    //for(var i of q){
    //  i.style.color=color;
    //}
    $('a').css('color', color);
  }
}
function nightDayHandler(self){
  if(self.value==='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('powderblue');
    self.value='day';
  }
  else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.setColor('blue');
    self.value='night';
  }
}
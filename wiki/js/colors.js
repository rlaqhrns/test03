
var body = {
  setColor : function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setbackgroundColor : function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}
var Links ={
 setColor : function(color){
  // var alist = document.querySelectorAll('a');
  // var i=0;
  // while(i<alist.length){
  //
  //   alist[i].style.color = color;
  //   i=i+1;
  //   }
  // }
  $('a').css('color',color);
  }
}
function nightdayhandler(self){
  var target = document.querySelector('body');

  if(self.value === 'day')
  {
    body.setbackgroundColor('white');
    body.setColor('black');
    self.value='night';
    Links.setColor('blue');
  }
  else
  {
    body.setbackgroundColor('black');
    body.setColor('white');
    self.value='day';
    Links.setColor('lightgreen');

  }
}

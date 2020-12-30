var Body = {
  setcolor : function (color){
    document.querySelector('body').style.color= color;
  },
  backcolor : function (color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
var Link = {
  setcolor : function(color){
    var alink = document.querySelectorAll('a');
    var i = 0;
      while(i < alink.length) {
        alink[i].style.color=color;
        i = i + 1;
      }
  }
}
function DarkModeToggle(self) {
  if(self.value ==='Darkmode On') {
    Body.backcolor('black');
    Body.setcolor('white');
    self.value='Darkmode Off';
    Link.setcolor('powderblue');
    }
      else {
    Body.backcolor('white');
    Body.setcolor('black');
    self.value='Darkmode On';
    Link.setcolor('black');
    }
  }

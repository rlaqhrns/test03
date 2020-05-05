function fetchPage(name){
  fetch(name).then(function(response){
  response.text().then(function(text){
  document.querySelector('article').innerHTML = text;
  })
});
}
if(location.hash){
  fetchPage(location.hash.substr(0));
}
else{
  fetchPage('content/welcome');
}
fetch('list').then(function(response){
  response.text().then(function(text){
    var items = text.split(',');
    var tags = '';
    for(var i=0;i<items.length;i++){
      var item = items[i];
      item = item.trim();
      var tag = '<li><a href = "#!'+item+'" onclick="fetchPage(\'content/'+item+'\')">'+item+'</a></li>';
      tags = tags + tag;
    }

    document.querySelector('#nav').innerHTML = tags;
  })
})

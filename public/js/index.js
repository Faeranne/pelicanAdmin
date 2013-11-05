$(funciton(){
  
});

function getPage(url,output){
  $.get(url, function(data){
    output.html(data);
    console.log('loaded '+url);
  });
}

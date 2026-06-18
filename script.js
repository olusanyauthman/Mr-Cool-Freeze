let menu = document.getElementById('menu');
let sidebar = document.getElementById('sidebar');
let close = document.getElementById('close');

menu.addEventListener("click", function(e){
  
  sidebar.style.transform = 'translateX(0px)';
});

close.addEventListener("click", function(e){
  sidebar.style.transform = 'translateX(250px)';
});
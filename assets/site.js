// Mobile menu + copy-email buttons
(function(){
  var btn=document.querySelector('.menu-btn'), nav=document.querySelector('.nav');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)})}
  document.querySelectorAll('[data-copy]').forEach(function(b){
    b.addEventListener('click',function(){
      var t=b.getAttribute('data-copy'), label=b.textContent;
      var done=function(){b.textContent='คัดลอกแล้ว ✓';setTimeout(function(){b.textContent=label},1800)};
      if(navigator.clipboard){navigator.clipboard.writeText(t).then(done,function(){prompt('คัดลอกอีเมล',t)})}else{prompt('คัดลอกอีเมล',t)}
    });
  });
  var y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();
})();

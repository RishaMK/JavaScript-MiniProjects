var menubar=document.getElementById('menubar');
var check=document.getElementById('check');

menubar.addEventListener('mouseover', function() {
    check.style.display = 'grid';
});

check.addEventListener('mouseleave', function() {
    check.style.display = 'none';
});


// menubar.addEventListener('click',function(){
//     if(check.style.display==='none'||check.style.display===''){
//         check.style.display='grid';
//     }else{
//         check.style.display='none';
//     }
// });

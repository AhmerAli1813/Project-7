
function sign(){
    
    var useremail = document.querySelector('#email').value;
    var userpass = document.querySelector('#password').value;
    var comfirmepass = document.querySelector('#comfirm-pass').value;
    if(userpass == comfirmepass){
    
        var obj = {
    
    name:useremail,
    
    password:userpass
    
    
    
    }
    
    console.log(obj);
    
    var stroage = window.localStorage.setItem("userInfo",JSON.stringify(obj));
    
    
    function login(){
                alert("")
                let  loginemail = document.getElementById('loginemail').value;
                let loginpass = document.getElementById('loginpass').value;
                var box = document.getElementById("box");
    
           
                if( stroage!=""){
    if(loginemail == name & loginpass == password){
    
                var file = document.getElementById("downTage");
                file = document.createElement('a');
                
          var linkText = document.createTextNode("Download");
          
          file.appendChild(linkText);
    
          file.title = "Download";
    
          file.href = "Download file text check   1 01.docx";
          
          document.body.appendChild(file);
          
        }
        
        else{
            
            alert("login First")
            
        }
        
    }
            }
        
     }else {
         alert('worng pass');
     }
     
     
    
    
    }
    
    
// login js end
// search js end
function  Search(){
    let Search = document.getElementById("mysearch").value;
switch (Search){
    case 'jazz':
        window.location.href="jazz.html";
        break;
        case 'rock':
        window.location.href="rock.html";
        break;
        case 'pops':
        window.location.href="pops.html";
        break;
        case 'classical ':
        window.location.href="classical.html";
        break;
        case 'amrinder ':
        window.location.href="gill.html";
        break;
        case 'atif aslam ':
        window.location.href="atif.html";
        break;
        case 'nusrat ':
        window.location.href="nusrat.html";
        break;
        case 'aima ':
        window.location.href="Aima.html";
        break;
        case 'atif information ':
        window.location.href="atif-info.html";
        break;
        case 'amrinder gill information ':
        window.location.href="gill-info.html";
        break;
        case 'aima biag information ':
        window.location.href="aima-info.html";
        break;
        case 'nusrat ali khan information ':
        window.location.href="nurat.info.html";
        break;
        default:
            alert("sorry We are not aligiable")
            break;
    }
}
function music(){
    
    if(mysong.paused){
      
        mysong.play();
        icon.classList.add("fa-play-circle ");    
        icon.classList.remove("fa-pause-circle ");    
        
    }else{
        mysong.pause();
        icon.classList.add("fa-pause-circle ");
        icon.classList.remove("fa-play-circle ");    
    
    }
}
function music2(){
    var mysong = document.getElementById("song2");
var icon = document.getElementById("play-icons2");
if(mysong.paused){
    alert("hi")
    mysong.play();
    icon.classList.add("fa-play");    
    icon.classList.remove("fa-pause");    
    
}else{
    mysong.pause();
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");    

}
}
// card star 1
var ourstar1 = document.getElementById("star1");
var ourstar2 = document.getElementById("star2");
var ourstar3 = document.getElementById("star3");
var ourstar4 = document.getElementById("star4");
var ourstar5 = document.getElementById("star5");
function one(){

    
    if(ourstar1.style.color=="gray"){
    ourstar1.style.color="red";
}
else{
    ourstar1.style.color="gray";
}
}
function two(){

if(ourstar2.style.color=="gray"){
    ourstar2.style.color="red";
    ourstar1.style.color="red";
}
else{
    ourstar2.style.color="gray";
    ourstar1.style.color="gray";

}
}
function three(){

if(ourstar3.style.color=="gray"){
    ourstar3.style.color="red";
    ourstar2.style.color="red";
    ourstar1.style.color="red";
    

}
else{
    ourstar3.style.color="gray";
    ourstar2.style.color="gray";
    ourstar1.style.color="gray";

}
}
function four(){

if(ourstar4.style.color=="gray"){
    ourstar4.style.color="red";
    ourstar3.style.color="red";
    ourstar2.style.color="red";
    ourstar1.style.color="red";
    

}
else{
    ourstar4.style.color="gray";
    ourstar3.style.color="gray";
    ourstar2.style.color="gray";
    ourstar1.style.color="gray";

}
}
function five(){
if(ourstar5.style.color=="gray"){
    ourstar5.style.color="red";
    ourstar4.style.color="red";
    ourstar3.style.color="red";
    ourstar2.style.color="red";
    ourstar1.style.color="red";
  

}
else{
    ourstar5.style.color="gray";
    ourstar4.style.color="gray";
    ourstar3.style.color="gray";
    ourstar2.style.color="gray";
    ourstar1.style.color="gray";
    
}
}
// card star 2
var ourstar6 = document.getElementById("star6");
var ourstar7 = document.getElementById("star7");
var ourstar8 = document.getElementById("star8");
var ourstar9 = document.getElementById("star9");
var ourstar10 = document.getElementById("star10");
function six(){

    
    if(ourstar6.style.color=="gray"){
    ourstar6.style.color="red"
}
else{
    ourstar6.style.color="gray"
}
}
function seven(){

if(ourstar7.style.color=="gray"){
    ourstar7.style.color="red";
    ourstar6.style.color="red";
}
else{
    ourstar7.style.color="gray";
    ourstar6.style.color="gray";

}
}
function eight(){

if(ourstar8.style.color=="gray"){
    ourstar8.style.color="red";
    ourstar7.style.color="red";
    ourstar6.style.color="red";
    

}
else{
    ourstar8.style.color="gray";
    ourstar7.style.color="gray";
    ourstar6.style.color="gray";

}
}
function nine(){

if(ourstar9.style.color=="gray"){
    ourstar9.style.color="red";
    ourstar8.style.color="red";
    ourstar7.style.color="red";
    ourstar6.style.color="red";
    

}
else{
    ourstar9.style.color="gray";
    ourstar8.style.color="gray";
    ourstar7.style.color="gray";
    ourstar6.style.color="gray";

}
}
function ten(){
if(ourstar10.style.color=="gray"){
    ourstar10.style.color="red";
    ourstar9.style.color="red";
    ourstar8.style.color="red";
    ourstar7.style.color="red";
    ourstar6.style.color="red";
  

}
else{
    ourstar10.style.color="gray";
    ourstar9.style.color="gray";
    ourstar8.style.color="gray";
    ourstar7.style.color="gray";
    ourstar6.style.color="gray";
    
}
}
// card star 3
var ourstar11 = document.getElementById("star11");
var ourstar12 = document.getElementById("star12");
var ourstar13 = document.getElementById("star13");
var ourstar14 = document.getElementById("star14");
var ourstar15 = document.getElementById("star15");
function eleven(){

    
    if(ourstar11.style.color=="gray"){
    ourstar11.style.color="red"
}
else{
    ourstar11.style.color="gray"
}
}
function twelve(){

if(ourstar12.style.color=="gray"){
    ourstar12.style.color="red";
    ourstar11.style.color="red";
}
else{
    ourstar12.style.color="gray";
    ourstar11.style.color="gray";

}
}
function thirteen(){

if(ourstar13.style.color=="gray"){
    ourstar13.style.color="red";
    ourstar12.style.color="red";
    ourstar11.style.color="red";
    

}
else{
    ourstar13.style.color="gray";
    ourstar12.style.color="gray";
    ourstar11.style.color="gray";

}
}
function fourteen(){

if(ourstar14.style.color=="gray"){
    ourstar14.style.color="red";
    ourstar13.style.color="red";
    ourstar12.style.color="red";
    ourstar11.style.color="red";
    

}
else{
    ourstar14.style.color="gray";
    ourstar13.style.color="gray";
    ourstar12.style.color="gray";
    ourstar11.style.color="gray";

}
}
function fifteen(){
if(ourstar15.style.color=="gray"){
    ourstar15.style.color="red";
    ourstar14.style.color="red";
    ourstar13.style.color="red";
    ourstar12.style.color="red";
    ourstar11.style.color="red";
  

}
else{
    ourstar15.style.color="gray";
    ourstar14.style.color="gray";
    ourstar13.style.color="gray";
    ourstar12.style.color="gray";
    ourstar11.style.color="gray";
    
}
}
// card star 4
var ourstar16 = document.getElementById("star16");
var ourstar17 = document.getElementById("star17");
var ourstar18 = document.getElementById("star18");
var ourstar19 = document.getElementById("star19");
var ourstar20 = document.getElementById("star20");
function sixteen(){

    
    if(ourstar16.style.color=="gray"){
    ourstar16.style.color="red"
}
else{
    ourstar16.style.color="gray"
}
}
function seventeen(){

if(ourstar17.style.color=="gray"){
    ourstar17.style.color="red";
    ourstar16.style.color="red";
}
else{
    ourstar17.style.color="gray";
    ourstar16.style.color="gray";

}
}
function eighteen(){

if(ourstar18.style.color=="gray"){
    ourstar18.style.color="red";
    ourstar17.style.color="red";
    ourstar16.style.color="red";
    

}
else{
    ourstar18.style.color="gray";
    ourstar17.style.color="gray";
    ourstar16.style.color="gray";

}
}
function ninteen(){

if(ourstar19.style.color=="gray"){
    ourstar19.style.color="red";
    ourstar18.style.color="red";
    ourstar17.style.color="red";
    ourstar16.style.color="red";
    

}
else{
    ourstar19.style.color="gray";
    ourstar18.style.color="gray";
    ourstar17.style.color="gray";
    ourstar16.style.color="gray";

}
}
function twinte(){
if(ourstar20.style.color=="gray"){
    ourstar20.style.color="red";
    ourstar19.style.color="red";
    ourstar18.style.color="red";
    ourstar17.style.color="red";
    ourstar16.style.color="red";
  

}
else{
    ourstar20.style.color="gray";
    ourstar19.style.color="gray";
    ourstar18.style.color="gray";
    ourstar17.style.color="gray";
    ourstar16.style.color="gray";
    
}
}

const di=document.querySelector(".di");
const message=document.querySelector(".message");
const messo=document.querySelector(".messo");
const navbar=document.querySelector(".navbar");
const del=document.querySelector(".del");
const tt=document.querySelector(".tt");
const add=document.querySelector(".add");
const inp=document.getElementById("inp").value.toLowerCase();
const long=document.querySelector(".long");
const longc=document.querySelector(".longc");
const short=document.querySelector(".short");
const ext=document.querySelector(".ext");
const sendbtn=document.querySelector(".sendbtn");
const bottompicpa=document.querySelector(".bottompicpa");



var log=[
{
 position:"3",
 name:"Isaiah otieno",
 time:"-/-"
},
 {
 position:"4",
 relay:"long",
 name:"jared kipkorir",
 time:"-/-"
},
{
 position:"7",
 name:"Cornelius Kipruto",
 time:"-/-"
}

];
var longct=[
 {
 position:"5",
 relay:"long",
 name:"Isaiah Otieno",
 time:"-/-"

}];
var shot=[
 
{
 position:"4",
 name:"Evans",
 time:"-/-"
},
{
 position:"6",
 relay:"long",
 name:"Brian Oketch",
 time:"-/-"
},
{
 position:"--",
 relay:"long",
 name:"Emmanuel kipngeno",
 time:"-/-"
}
];
var relay=[
{
 position:"1",
 name:"Herman Mutwiri",
 time:"-/-"
},
 {
 position:"4",
 relay:"long",
 name:"Faraj Wabuke",
 time:"-/-"
}



];
var sprint=[
{
 position:"5",
 relay:"long",
 name:"Brian Oketch",
 time:"-/-"
},
 {
 position:"8",
 relay:"long",
 name:"Brian Ngeno",
 time:"-/-"

}];
var sprintt=[
 {
 position:"3",
 relay:"long",
 name:"John Mbugua",
 time:"-/-"
}];
var sprinto=[
 {
 position:"1",
 relay:"long",
 name:"Joseph Njuguna",
 time:"-/-"
}];
var sprintfl=[
 {
 position:"1",
 relay:"long",
 name:"judy Wairimu",
 time:"-/-"
},
{
 position:"--",
 relay:"long",
 name:"Magret Njuguna",
 time:"-/-"
}];
var sprintft=[
 {
 position:"--",
 relay:"long",
 name:"Elizabeth Nanjalla",
 time:"-/-"
},
{
 position:"--",
 relay:"long",
 name:"Pictor Lumuyo",
 time:"-/-"
}];
var sprintfh=[
 {
 position:"3",
 relay:"long",
 name:"Sheilar Chepkemboi",
 time:"-/-"

}];
var sprintfls=[
 {
 position:"3",
 relay:"long",
 name:"judy Wairimu",
 time:"-/-"

}];
var overall=[
 {
 position:"1",
 relay:"long",
 name:"DEDAN KIMATHI",
 time:"184"
},
{
 position:"1",
 name:"MERU UNIVERSITY",
 time:"144"
},
{
 position:"1",
 relay:"long",
 name:"CHUKA UNIVERSITY",
 time:"45"
},
{
 position:"1",
 name:"EMBU UNIVERSITY",
 time:"60"
},
{
 position:"1",
 relay:"long",
 name:"KIRINYAGA UNIVERSITY",
 time:"49"
},
{
 position:"1",
 name:"KIMATHI UNIVERSITY",
 time:"55"
},
{
 position:"1",
 relay:"long",
 name:"SOUTH EASTERN ",
 time:"18"
}
];

function guko(arr){
let update="";
for(let i=0;i<arr.length;i++){
  update+=`   
    <div class="cont">
       <div class="position">${arr[i].position}</div> <div class="Name">${arr[i].name}</div><div class="time">${arr[i].time}</div>
    </div>
         `;
 }
return update;
}
document.querySelector(".longc").innerHTML=`${guko(log)}`;
document.querySelector(".shortc").innerHTML=`${guko(shot)}`;
document.querySelector(".relayc").innerHTML=`${guko(relay)}`;
document.querySelector(".sprintc").innerHTML=`${guko(sprint)}`;
document.querySelector(".sprintt").innerHTML=`${guko(sprintt)}`;
document.querySelector(".sprinto").innerHTML=`${guko(sprinto)}`;
document.querySelector(".sprintfl").innerHTML=`${guko(sprintfl)}`;
document.querySelector(".sprintfh").innerHTML=`${guko(sprintfh)}`;
document.querySelector(".sprintft").innerHTML=`${guko(sprintft)}`;
document.querySelector(".sprintfls").innerHTML=`${guko(sprintfls)}`;
document.querySelector(".longct").innerHTML=`${guko(longct)}`;
function juko(arr){
let update="";
for(let i=0;i<arr.length;i++){
  update+=`   
    <div class="contst">
       <div class="Name">${arr[i].name}</div><div class="time">${arr[i].time}</div>
    </div>
         `;
 }
return update;
}
document.querySelector(".overall").innerHTML=`${juko(overall)}`;


function jump(){
var inp=document.getElementById("inp").value.toLowerCase();
var tok=document.getElementById("paret");
var cont=tok.getElementsByClassName("Name");
for(let i=0;i<cont.length;i++){
if(cont[i].innerHTML.toLowerCase().indexOf(inp) > -1){
   cont[i].parentNode.style.display="";
 }else{
cont[i].parentNode.style.display="none";
}
 }
}

del.addEventListener("click",()=>{
 navbar.style.width="0";
});
add.addEventListener("click",()=>{
 navbar.style.width="220px";
 navbar.classList.toggle(".navba");
 
});
let date=new Date();
let d=date.getDate();
let m=date.getMonth();
let y=date.getFullYear();
let ttdate=`${d}.${m}.${y}`;
let arri=[
{
location:"EMBU",
time:"2.9.2022"
},
{
location:"JKUAT",
time:"1.9.2022"
}
];
const evtcalender=document.querySelector(".evtcalender");
const evtsub=evtcalender.getElementsByTagName("h5");
for(let j=0;j<arri.length;j++){
  for(let i=0;i<evtsub.length;i++){
      if(ttdate >= arri[j].time && evtsub[i].innerHTML.indexOf(arri[j].location) > -1){
         let bt=document.createElement("strike");
           bt.appendChild(evtsub[i]);
           evtcalender.appendChild(bt);
       }
     }
  }
var messar=[
{
 time:"18/10/2022",
 mess:"Welcome to the athletics WebApp"
},
{
 time:"20/10/2022",
 mess:"Happy madaraka to everyone"
},
{
 time:"22/10/2022",
 mess:"Great job done guys,let's keep on pushing."
},
{
 time:"23/12/2022",
 mess:"Merry Christmas to everyone"
},
{
 time:"06/03/2022",
 mess:"Great job done Team"
}
];
function messaf(mesar){
let mesart="";
for(let i=0;i<mesar.length;i++){
mesart+=`
 <h5><h4>${mesar[i].time}</h4>${mesar[i].mess}</h5>
`;
}
return mesart;
}
document.querySelector(".messages").innerHTML=`${messaf(messar)}`;

messo.addEventListener("click",()=>{
 message.classList.toggle("xlm");
 

});
const mapp=document.querySelector(".mapp");
const picpa=document.querySelector(".picpa");
var imd=document.getElementsByTagName("img");
var dis=document.getElementById("dis");
let diz=false;
for(let i=0;i< imd.length;i++){
 imd[i].addEventListener("click",(e)=>{
 dis.src=e.target.src;
 
});
if(diz==false){
  dis.src=imd[0].src;
}
}
function deli(){
  
  picpa.classList.toggle("blo");
 }
function gall(){
  picpa.classList.toggle("blo");
 }

function mapdeli(){
  mapp.classList.toggle("mapblo");
 }
function mapi(){
  mapp.classList.toggle("mapblo");
}



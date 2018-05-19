var cellwidth=10;               // EACH "CELL" WIDTH IN PIXELS
var cellheight=10;              // EACH "CELL" HEIGHT IN PIXELS
var fontsize=11;                // FONT SIZE OF THE NUMBERS. SETTING THIS TOO BIG CAUSES UNDESIRED EFFECTS.
var fontcolor="white";          // ENTER ANY HTML OR RGB COLOR CODE
var fontstyle="bold";           // ENTER EITHER BOLD, ITALICS, NONE
var oncolor="#0084d8";          // COLOR OF ACTIVE CELLS
var offcolor="#00385c";         // COLOR OF INACTIVE CELLS

//************** DO NOT EDIT BEOND THIS POINT *************//
var NS4 = (document.layers)? true : false;
var IE4 = (document.all && !document.getElementById)? true : false;
var NS6 = (document.getElementById && navigator.appName.indexOf("Netscape")>=0 )? true: false;
var binclk;
var now;
var t='<table cellspacing="1" cellpadding="0" border="0"><tr><td align="center"> </td>';
for(i=0;i<=58;i+=2)t+='<td align="left" colspan="2"><font style="font-size:'+fontsize+'px; font-weight:'+fontstyle+'; color: '+fontcolor+'">'+i+'<br> |</font></td>';
t+='<td> </td></tr><tr><td align="center"><font style="font-size:'+fontsize+'px; font-weight:'+fontstyle+'; color: '+fontcolor+'">H: </font></td>';
for(i=0;i<=23;i++)t+=(NS4)? '<td><ilayer name="hrs'+i+'" height="'+cellheight+'" width="'+cellwidth+'" bgcolor="'+offcolor+'"></ilayer></td>' : '<td><div id="hrs'+i+'" style="position:relative; width:'+cellwidth+'px; font-size:1px; height:'+cellheight+'px; background-color:'+offcolor+'"></div></td>';
t+='<td colspan="36"><td> </td></tr><tr><td align="center"><font style="font-size:'+fontsize+'px; font-weight:'+fontstyle+'; color: '+fontcolor+'">M: </font></td>';
for(i=0;i<=59;i++)t+=(NS4)? '<td><ilayer name="min'+i+'" width="'+cellwidth+'" height="'+cellheight+'" bgcolor="'+offcolor+'"></ilayer></td>' : '<td><div id="min'+i+'" style="position:relative; width:'+cellwidth+'px; font-size:1px; height:'+cellheight+'px; background-color:'+offcolor+'"></div></td>';
t+='<td> </td></tr><tr><td align="center"><font style="font-size:'+fontsize+'px; font-weight:'+fontstyle+'; color: '+fontcolor+'">S: </font></td>';
for(i=0;i<=59;i++)t+=(NS4)? '<td><ilayer name="sec'+i+'" width="'+cellwidth+'" height="'+cellheight+'" bgcolor="'+offcolor+'"></ilayer></td>' : '<td><div id="sec'+i+'" style="position:relative; width:'+cellwidth+'px; font-size:1px; height:'+cellheight+'px; background-color:'+offcolor+'"></div></td>';
t+='<td> </td></tr><tr><td> </td><td> </td>';
for(i=1;i<=59;i+=2)t+='<td align="left" colspan="2"><font style="font-size:'+fontsize+'px; font-weight:'+fontstyle+'; color: '+fontcolor+'"> |<br>'+i+'</font></td>';
t+='</tr></table>';
document.write(t);

function getvals(){
now=new Date();
now.s=now.getSeconds();
now.h=now.getHours();
now.m=now.getMinutes();
}

function setclock(){
getvals();
if((now.h==0)&&(now.m==0)) for(i=1;i<=23;i++)setbgcolor('hrs'+i, offcolor);
if((now.s==0)&&(now.m==0)) for (i=1;i<=59;i++)setbgcolor('min'+i, offcolor);
if(now.s==0) for(i=1;i<=59;i++)setbgcolor('sec'+i, offcolor);
setbgcolor('hrs'+now.h, oncolor);
setbgcolor('min'+now.m, oncolor);
setbgcolor('sec'+now.s, oncolor);
}

function setbgcolor(idstr, color){
if(IE4)document.all[idstr].style.backgroundColor=color;
else if(NS4)document.layers[idstr].bgColor=color;
else document.getElementById(idstr).style.backgroundColor=color;
}

window.onload=function(){
  getvals();
  for(i=0;i<=now.h;i++)setbgcolor('hrs'+i, oncolor);
  for(i=0;i<=now.m;i++)setbgcolor('min'+i, oncolor);
  for(i=0;i<=now.s;i++)setbgcolor('sec'+i, oncolor);
  setInterval('setclock()', 100);
}

window.onresize=function(){
  if(NS4)setTimeout('history.go(0)',400);
}

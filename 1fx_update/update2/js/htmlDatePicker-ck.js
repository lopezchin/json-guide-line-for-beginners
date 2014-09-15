/**************************************************************************************
	htmlDatePicker v0.5
	
	Copyright (c) 2007, Jason Powell
	All Rights Reserved

	Redistribution and use in source and binary forms, with or without modification, are 
		permitted provided that the following conditions are met:

		* Redistributions of source code must retain the above copyright notice, this list of 
			conditions and the following disclaimer.
		* Redistributions in binary form must reproduce the above copyright notice, this list 
			of conditions and the following disclaimer in the documentation and/or other materials 
			provided with the distribution.
		* Neither the name of the product nor the names of its contributors may be used to 
			endorse or promote products derived from this software without specific prior 
			written permission.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS 
	OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF 
	MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL 
	THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, 
	EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE 
	GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
	AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING 
	NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
	OF THE POSSIBILITY OF SUCH DAMAGE.
	
	-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
	
	How to integrate htmlDatePicker into an HTML page:
	
	1) In the <head> portion of your HTML page, place the following code:
		<script language="JavaScript" src="datepicker.js" type="text/javascript"></script>
		<link href="datepicker.css" rel="stylesheet" />
		
	2) In your <form> place an <input> element for your date field:
		<input type="text" name="SelectedDate" id="SelectedDate" readonly onClick="GetDate(this);" />
	   NOTE:  "name" and "id" can be whatever you want.  I would suggest leaving "readonly"
	   		  and, of course, the onClick code is the most important and should not be changed.
	
	
***************************************************************************************/// User Changeable Vars
function GetDate(){EnsureCalendarExists();DestroyCalendar();if(arguments[0]==null||arguments[0]==""){alert("ERROR: Destination control required in funciton call GetDate()");return}dest=arguments[0];y=now.getFullYear();m=now.getMonth();d=now.getDate();var e=ParseFromattedDate(dest.value);if(e.toDateString()!="NaN"&&e.toDateString()!="Invalid Date"){sm=e.getMonth();sd=e.getDate();sy=e.getFullYear();m=sm;d=sd;y=sy}var n=getPosition(dest);l=n.x;t=n.y-n.h-128;t<0&&(t=0);DrawCalendar(l,t);eCal=document.getElementById("dpCalendar");t=n.y-eCal.offsetHeight;t<0&&(t=0);RepositionCalendar(l,t)}function DestroyCalendar(){var e=document.getElementById("dpCalendar");if(e!=null){e.innerHTML=null;e.style.display="none"}return}function DrawCalendar(e,t){DestroyCalendar();var n=document.getElementById("dpCalendar");if(n.style.left==""&&arguments[0]!=null){n.style.left=e+"px";n.style.top=t+"px"}var r='<table><tr><td class="cellButton"><a href="javascript: PrevMonth();" title="Previous Month">&lt;&lt;</a></td><td class="cellMonth" width="80%" colspan="5">'+MonthNames[m]+" "+y+"</td>"+'<td class="cellButton"><a href="javascript: NextMonth();" title="Next Month">&gt;&gt;</a></td></tr>'+"<tr><td>S</td><td>M</td><td>T</td><td>W</td><td>T</td><td>F</td><td>S</td></tr>",i=1,s=new Date(y,m,i);isLeapYear(s)?MonthLengths[1]=29:MonthLengths[1]=28;rangeExists=!1;if(range_start!=null&&range_end!=null&&typeof range_start=="object"&&typeof range_end=="object"){rangeExists=!0;if(range_start.valueOf()>range_end.valueOf()){var o=range_start;range_start=range_end;range_end=o}}var u="",a=!1,f=!1;for(var l=1;l<7;l++){r+="<tr>";for(var c=0;c<7;c++){var s=new Date(y,m,i);if(s.getDay()==c&&i<=MonthLengths[m]){if(s.getDate()==sd&&s.getMonth()==sm&&s.getFullYear()==sy){u="cellSelected";a=!0}else if(s.getDate()==nd&&s.getMonth()==nm&&s.getFullYear()==ny&&HighlightToday){u="cellToday";a=!0}else{u="cellDay";a=!1;rangeExists&&s.valueOf()>=range_start.valueOf()&&s.valueOf()<=range_end.valueOf()&&(u="cellRange")}f=now>s&&!DisablePast||now<=s||a;if(f&&restrictFuture!=""){if(parseInt(restrictFuture)==restrictFuture)var h=new Date(now.getTime()+parseInt(restrictFuture,10)*24*60*60*1e3);else var h=ParseFromattedDate(restrictFuture);h.setHours(23,59,59,999);f=s.getTime()<h.getTime()}f?r=r+'<td class="'+u+'"><a href="javascript: ReturnDay('+i+');">'+i+"</a></td>":r=r+'<td class="'+u+'">'+i+"</td>";i++}else r+='<td class="unused"></td>'}r+="</tr>"}if(DisableNoDateButton)r+='<tr><td colspan="4" class="unused"></td>';else{r+='<tr><td colspan="3" class="cellCancel"><a href="javascript: ReturnDay(0);">No Date</a></td>';r+='<td colspan="1" class="unused"></td>'}r+='<td colspan="3" class="cellCancel"><a href="javascript: DestroyCalendar();">Cancel</a></td></tr></table>';n.innerHTML=r;n.style.display="inline"}function ShowHideCalendar(e){eCal=document.getElementById("dpCalendar");arguments[0]==null?eCal.style.display==""||eCal.style.display=="inline"?eCal.style.display="none":eCal.style.display="inline":e?eCal.style.display="inline":eCal.style.display="none"}function RepositionCalendar(e,t){eCal.style.left=e+"px";eCal.style.top=t+"px"}function PrevMonth(){m--;if(m==-1){m=11;y--}DrawCalendar()}function NextMonth(){m++;if(m==12){m=0;y++}DrawCalendar()}function ReturnDay(e){sy=y;sm=m;sd=e;if(e==0)dest.value="";else{m++;year=""+y;sOutput=dateFormat;sOutput=sOutput.replace(/j/,e);sOutput=sOutput.replace(/d/,(e<10?"0":"")+e);sOutput=sOutput.replace(/Y/,year);sOutput=sOutput.replace(/y/,year.substring(y.length-2));sOutput=sOutput.replace(/n/,m);sOutput=sOutput.replace(/m/,(m<10?"0":"")+m);sOutputBefore=sOutput;sOutput=sOutput.replace(/F/,MonthNames[m-1]);sOutputBefore==sOutput&&(sOutput=sOutput.replace(/M/,MonthNames[m-1].substring(3,0)));dest.value=sOutput}DestroyCalendar();fireOnChange&&typeof dest.onchange=="function"&&dest.onchange()}function EnsureCalendarExists(){if(document.getElementById("dpCalendar")==null){var e=document.createElement("div");e.setAttribute("id","dpCalendar");document.body.appendChild(e)}}function isLeapYear(e){var t=e.getYear(),n=!1;t%4==0&&(t%100!=0?n=!0:t%400==0&&(n=!0));return n}function getPosition(e){var t=new Object;t.x=Position_getPageOffsetLeft(e);t.y=Position_getPageOffsetTop(e);t.w=e.offsetWidth;t.h=e.offsetHeight;return t}function Position_getPageOffsetLeft(e){var t=e.offsetLeft;while((e=e.offsetParent)!=null)t+=e.offsetLeft;return t}function Position_getPageOffsetTop(e){var t=e.offsetTop;while((e=e.offsetParent)!=null)t+=e.offsetTop;return t}function ParseFromattedDate(e){var t=dateFormat.charAt(1),n=dateFormat.split(t),r,i,s;for(var o=0;o<3;o++)n[o]=="Y"||n[o]=="y"?s=o:n[o]=="d"||n[o]=="j"?i=o:r=o;var u=e.split(t),a=new Date(Date.parse(u[r]+" "+u[i]+" "+u[s]));return a}var HighlightToday=!0,DisablePast=!0,MonthNames=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),DisableNoDateButton=!1,dateFormat="n/j/Y",range_start=null,range_end=null,fireOnChange=!1,restrictFuture="",now=new Date,dest=null,ny=now.getFullYear(),nm=now.getMonth(),nd=now.getDate(),sy=0,sm=0,sd=0,y=now.getFullYear(),m=now.getMonth(),d=now.getDate(),MonthLengths=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
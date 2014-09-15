/* =========================================================
 * bootstrap-datepicker.js 
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */!function(e){var t=function(t,r){this.element=e(t);this.format=n.parseFormat(r.format||this.element.data("date-format")||"mm/dd/yyyy");this.picker=e(n.template).appendTo("body").on({click:e.proxy(this.click,this),mousedown:e.proxy(this.mousedown,this)});this.isInput=this.element.is("input");this.component=this.element.is(".date")?this.element.find(".add-on"):!1;this.isInput?this.element.on({focus:e.proxy(this.show,this),blur:e.proxy(this.hide,this),keyup:e.proxy(this.update,this)}):this.component?this.component.on("click",e.proxy(this.show,this)):this.element.on("click",e.proxy(this.show,this));this.minViewMode=r.minViewMode||this.element.data("date-minviewmode")||0;if(typeof this.minViewMode=="string")switch(this.minViewMode){case"months":this.minViewMode=1;break;case"years":this.minViewMode=2;break;default:this.minViewMode=0}this.viewMode=r.viewMode||this.element.data("date-viewmode")||0;if(typeof this.viewMode=="string")switch(this.viewMode){case"months":this.viewMode=1;break;case"years":this.viewMode=2;break;default:this.viewMode=0}this.startViewMode=this.viewMode;this.weekStart=r.weekStart||this.element.data("date-weekstart")||0;this.weekEnd=this.weekStart===0?6:this.weekStart-1;this.fillDow();this.fillMonths();this.update();this.showMode()};t.prototype={constructor:t,show:function(t){this.picker.show();this.height=this.component?this.component.outerHeight():this.element.outerHeight();this.place();e(window).on("resize",e.proxy(this.place,this));if(t){t.stopPropagation();t.preventDefault()}this.isInput||e(document).on("mousedown",e.proxy(this.hide,this));this.element.trigger({type:"show",date:this.date})},hide:function(){this.picker.hide();e(window).off("resize",this.place);this.viewMode=this.startViewMode;this.showMode();this.isInput||e(document).off("mousedown",this.hide);this.set();this.element.trigger({type:"hide",date:this.date})},set:function(){var e=n.formatDate(this.date,this.format);if(!this.isInput){this.component&&this.element.find("input").prop("value",e);this.element.data("date",e)}else this.element.prop("value",e)},setValue:function(e){typeof e=="string"?this.date=n.parseDate(e,this.format):this.date=new Date(e);this.set();this.viewDate=new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0);this.fill()},place:function(){var e=this.component?this.component.offset():this.element.offset();this.picker.css({top:e.top+this.height,left:e.left})},update:function(e){this.date=n.parseDate(typeof e=="string"?e:this.isInput?this.element.prop("value"):this.element.data("date"),this.format);this.viewDate=new Date(this.date.getFullYear(),this.date.getMonth(),1,0,0,0,0);this.fill()},fillDow:function(){var e=this.weekStart,t="<tr>";while(e<this.weekStart+7)t+='<th class="dow">'+n.dates.daysMin[e++%7]+"</th>";t+="</tr>";this.picker.find(".datepicker-days thead").append(t)},fillMonths:function(){var e="",t=0;while(t<12)e+='<span class="month">'+n.dates.monthsShort[t++]+"</span>";this.picker.find(".datepicker-months td").append(e)},fill:function(){var e=new Date(this.viewDate),t=e.getFullYear(),r=e.getMonth(),i=this.date.valueOf();this.picker.find(".datepicker-days th:eq(1)").text(n.dates.months[r]+" "+t);var s=new Date(t,r-1,28,0,0,0,0),o=n.getDaysInMonth(s.getFullYear(),s.getMonth());s.setDate(o);s.setDate(o-(s.getDay()-this.weekStart+7)%7);var u=new Date(s);u.setDate(u.getDate()+42);u=u.valueOf();html=[];var a;while(s.valueOf()<u){s.getDay()===this.weekStart&&html.push("<tr>");a="";s.getMonth()<r?a+=" old":s.getMonth()>r&&(a+=" new");s.valueOf()===i&&(a+=" active");html.push('<td class="day'+a+'">'+s.getDate()+"</td>");s.getDay()===this.weekEnd&&html.push("</tr>");s.setDate(s.getDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(html.join(""));var f=this.date.getFullYear(),l=this.picker.find(".datepicker-months").find("th:eq(1)").text(t).end().find("span").removeClass("active");f===t&&l.eq(this.date.getMonth()).addClass("active");html="";t=parseInt(t/10,10)*10;var c=this.picker.find(".datepicker-years").find("th:eq(1)").text(t+"-"+(t+9)).end().find("td");t-=1;for(var h=-1;h<11;h++){html+='<span class="year'+(h===-1||h===10?" old":"")+(f===t?" active":"")+'">'+t+"</span>";t+=1}c.html(html)},click:function(t){t.stopPropagation();t.preventDefault();var r=e(t.target).closest("span, td, th");if(r.length===1)switch(r[0].nodeName.toLowerCase()){case"th":switch(r[0].className){case"switch":this.showMode(1);break;case"prev":case"next":this.viewDate["set"+n.modes[this.viewMode].navFnc].call(this.viewDate,this.viewDate["get"+n.modes[this.viewMode].navFnc].call(this.viewDate)+n.modes[this.viewMode].navStep*(r[0].className==="prev"?-1:1));this.fill();this.set()}break;case"span":if(r.is(".month")){var i=r.parent().find("span").index(r);this.viewDate.setMonth(i)}else{var s=parseInt(r.text(),10)||0;this.viewDate.setFullYear(s)}if(this.viewMode!==0){this.date=new Date(this.viewDate);this.element.trigger({type:"changeDate",date:this.date,viewMode:n.modes[this.viewMode].clsName})}this.showMode(-1);this.fill();this.set();break;case"td":if(r.is(".day")){var o=parseInt(r.text(),10)||1,i=this.viewDate.getMonth();r.is(".old")?i-=1:r.is(".new")&&(i+=1);var s=this.viewDate.getFullYear();this.date=new Date(s,i,o,0,0,0,0);this.viewDate=new Date(s,i,Math.min(28,o),0,0,0,0);this.fill();this.set();this.element.trigger({type:"changeDate",date:this.date,viewMode:n.modes[this.viewMode].clsName})}}},mousedown:function(e){e.stopPropagation();e.preventDefault()},showMode:function(e){e&&(this.viewMode=Math.max(this.minViewMode,Math.min(2,this.viewMode+e)));this.picker.find(">div").hide().filter(".datepicker-"+n.modes[this.viewMode].clsName).show()}};e.fn.datepicker=function(n,r){return this.each(function(){var i=e(this),s=i.data("datepicker"),o=typeof n=="object"&&n;s||i.data("datepicker",s=new t(this,e.extend({},e.fn.datepicker.defaults,o)));typeof n=="string"&&s[n](r)})};e.fn.datepicker.defaults={};e.fn.datepicker.Constructor=t;var n={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],dates:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},isLeapYear:function(e){return e%4===0&&e%100!==0||e%400===0},getDaysInMonth:function(e,t){return[31,n.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},parseFormat:function(e){var t=e.match(/[.\/\-\s].*?/),n=e.split(/\W+/);if(!t||!n||n.length===0)throw new Error("Invalid date format.");return{separator:t,parts:n}},parseDate:function(e,t){var n=e.split(t.separator),e=new Date,r;e.setHours(0);e.setMinutes(0);e.setSeconds(0);e.setMilliseconds(0);if(n.length===t.parts.length)for(var i=0,s=t.parts.length;i<s;i++){r=parseInt(n[i],10)||1;switch(t.parts[i]){case"dd":case"d":e.setDate(r);break;case"mm":case"m":e.setMonth(r-1);break;case"yy":e.setFullYear(2e3+r);break;case"yyyy":e.setFullYear(r)}}return e},formatDate:function(e,t){var n={d:e.getDate(),m:e.getMonth()+1,yy:e.getFullYear().toString().substring(2),yyyy:e.getFullYear()};n.dd=(n.d<10?"0":"")+n.d;n.mm=(n.m<10?"0":"")+n.m;var e=[];for(var r=0,i=t.parts.length;r<i;r++)e.push(n[t.parts[r]]);return e.join(t.separator)},headTemplate:'<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>'};n.template='<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">'+n.headTemplate+"<tbody></tbody>"+"</table>"+"</div>"+'<div class="datepicker-months">'+'<table class="table-condensed">'+n.headTemplate+n.contTemplate+"</table>"+"</div>"+'<div class="datepicker-years">'+'<table class="table-condensed">'+n.headTemplate+n.contTemplate+"</table>"+"</div>"+"</div>"}(window.jQuery);
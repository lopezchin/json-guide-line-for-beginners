(function(e){e.widget("metro.dropdown",{version:"1.0.1",options:{effect:"slide",toggleElement:!1},_create:function(){var t=this,n=this.element,r=this.name,i=this.element.parent(),s=this.options.toggleElement||i.children(".dropdown-toggle");n.data("effect")!=undefined&&(this.options.effect=n.data("effect"));s.on("click."+r,function(r){r.preventDefault();r.stopPropagation();if(n.css("display")=="block"&&!n.hasClass("keep-open"))t._close(n);else{e(".dropdown-menu").each(function(r,i){!n.parents(".dropdown-menu").is(i)&&!e(i).hasClass("keep-open")&&e(i).css("display")=="block"&&t._close(i)});t._open(n)}});e(n).find("li.disabled a").on("click",function(e){e.preventDefault()})},_open:function(t){switch(this.options.effect){case"fade":e(t).fadeIn("fast");break;case"slide":e(t).slideDown("fast");break;default:e(t).hide()}this._trigger("onOpen",null,t)},_close:function(t){switch(this.options.effect){case"fade":e(t).fadeOut("fast");break;case"slide":e(t).slideUp("fast");break;default:e(t).hide()}this._trigger("onClose",null,t)},_destroy:function(){},_setOption:function(e,t){this._super("_setOption",e,t)}})})(jQuery);
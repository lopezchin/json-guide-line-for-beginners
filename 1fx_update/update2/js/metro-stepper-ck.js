(function(e){e.widget("metro.stepper",{version:"1.0.0",options:{steps:3,start:1,onStep:function(e,t){}},_create:function(){var e=this.element,t=this.options;e.data("steps")!=undefined&&(t.steps=e.data("steps"));e.data("start")!=undefined&&(t.start=e.data("start"));this._createStepper();this._positioningSteps();this._stepTo(t.start)},_createStepper:function(){var t=this.element,n=this.options,r,i,s;i=e("<ul/>");for(r=0;r<n.steps;r++)s=e("<li/>").appendTo(i);i.appendTo(t)},_positioningSteps:function(){var t=this,n=this.element,r=this.options,i=n.find("li"),s=n.width(),o=i.length-1,u=e(i[0]).width();e.each(i,function(t,n){var r=t==0?0:(s-u)/o*t;e(n).animate({left:r})})},_stepTo:function(t){var n=this.element,r=this.options,i=n.find("li");i.removeClass("current").removeClass("complete");e.each(i,function(n,i){n<t-1&&e(i).addClass("complete");if(n==t-1){e(i).addClass("current");r.onStep(n+1,i)}})},first:function(){var e=this.options;e.start=1;this._stepTo(e.start)},last:function(){var e=this.element,t=this.options,n=e.find("li");t.start=n.length;this._stepTo(t.start)},next:function(){var e=this.element,t=this.options,n=e.find("li");if(t.start+1>n.length)return;t.start++;this._stepTo(t.start)},prior:function(){var e=this.options;if(e.start-1==0)return;e.start--;this._stepTo(e.start)},_destroy:function(){},_setOption:function(e,t){this._super("_setOption",e,t)}})})(jQuery);
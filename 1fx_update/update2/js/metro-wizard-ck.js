(function(e){e.widget("metro.wizard",{version:"1.0.0",options:{stepper:!0,stepperType:"default",locale:e.Metro.currentLocale,finishStep:"default",buttons:{cancel:!0,help:!1,prior:!0,next:!0,finish:!0},onCancel:function(e,t){},onHelp:function(e,t){},onPrior:function(e,t){return!0},onNext:function(e,t){return!0},onFinish:function(e,t){},onPage:function(e,t){}},_stepper:undefined,_currentStep:0,_steps:undefined,_create:function(){var e=this,t=this.element,n=this.options,r=t.find(".step");this._steps=r;n.stepper&&(this._stepper=this._createStepper(r.length).insertBefore(t.find(".steps")));t.data("locale")!=undefined&&(n.locale=t.data("locale"));this._createEvents();this.options.onPage(this._currentStep+1,t)},_createStepper:function(t){var n,r=this.options;n=e("<div/>").addClass("stepper").attr("data-role","stepper").attr("data-steps",t);r.stepperType!="default"&&n.addClass(r.stepperType);return n},_createEvents:function(){var t=this,n=this.element,r=this.options;if(r.buttons){var i=e("<div/>").addClass("actions").appendTo(n),s=e("<div/>").addClass("group-left").appendTo(i),o=e("<div/>").addClass("group-right").appendTo(i);r.buttons.cancel&&e("<button type='button'/>").addClass("btn-cancel").html(e.Metro.Locale[r.locale].buttons[2]).appendTo(s).on("click",function(){r.onCancel(t._currentStep+1,n)});r.buttons.help&&e("<button type='button'/>").addClass("btn-help").html(e.Metro.Locale[r.locale].buttons[3]).appendTo(o).on("click",function(){r.onHelp(t._currentStep+1,n)});r.buttons.prior&&e("<button type='button'/>").addClass("btn-prior").html(e.Metro.Locale[r.locale].buttons[4]).appendTo(o).on("click",function(){r.onPrior(t._currentStep+1,n)&&t.prior()});r.buttons.next&&e("<button type='button'/>").addClass("btn-next").html(e.Metro.Locale[r.locale].buttons[5]).appendTo(o).on("click",function(){r.onNext(t._currentStep+1,n)&&t.next()});r.buttons.finish&&e("<button type='button' disabled/>").addClass("btn-finish").html(e.Metro.Locale[r.locale].buttons[6]).appendTo(o).on("click",function(){r.onFinish(t._currentStep+1,n)})}},next:function(){var t=this._currentStep+1;if(t==this._steps.length)return!1;this._currentStep=t;this._steps.hide();e(this._steps[t]).show();this.options.onPage(this._currentStep+1,this.element);this._stepper.stepper("next");var n=parseInt(this.options.finishStep=="default"?this._steps.length-1:this.options.finishStep);t==n?this.element.find(".btn-finish").attr("disabled",!1):this.element.find(".btn-finish").attr("disabled",!0);return!0},prior:function(){var t=this._currentStep-1;if(t<0)return!1;this._currentStep=t;this._steps.hide();e(this._steps[t]).show();this.options.onPage(this._currentStep+1,this.element);this._stepper.stepper("prior");var n=parseInt(this.options.finishStep=="default"?this._steps.length-1:this.options.finishStep);t==n?this.element.find(".btn-finish").attr("disabled",!1):this.element.find(".btn-finish").attr("disabled",!0);return!0},_destroy:function(){},_setOption:function(e,t){this._super("_setOption",e,t)}})})(jQuery);
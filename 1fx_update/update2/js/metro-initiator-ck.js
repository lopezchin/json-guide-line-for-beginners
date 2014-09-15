(function(e){e.Metro.initAccordions=function(t){t!=undefined?e(t).find("[data-role=accordion]").accordion():e("[data-role=accordion]").accordion()};e.Metro.initButtonSets=function(t){if(t!=undefined){e(t).find("[data-role=button-set]").buttonset();e(t).find("[data-role=button-group]").buttongroup()}else{e("[data-role=button-set]").buttonset();e("[data-role=button-group]").buttongroup()}};e.Metro.initCalendars=function(t){t!=undefined?e(t).find("[data-role=calendar]").calendar():e("[data-role=calendar]").calendar()};e.Metro.initCarousels=function(t){t!=undefined?e(t).find("[data-role=carousel]").carousel():e("[data-role=carousel]").carousel()};e.Metro.initCountdowns=function(t){t!=undefined?e(t).find("[data-role=countdown]").countdown():e("[data-role=countdown]").countdown()};e.Metro.initDatepickers=function(t){t!=undefined?e(t).find("[data-role=datepicker]").datepicker():e("[data-role=datepicker]").datepicker()};e.Metro.initDropdowns=function(t){t!=undefined?e(t).find("[data-role=dropdown]").dropdown():e("[data-role=dropdown]").dropdown()};e.Metro.initFluentMenus=function(t){t!=undefined?e(t).find("[data-role=fluentmenu]").fluentmenu():e("[data-role=fluentmenu]").fluentmenu()};e.Metro.initHints=function(t){t!=undefined?e(t).find("[data-hint]").hint():e("[data-hint]").hint()};e.Metro.initInputs=function(t){t!=undefined?e(t).find("[data-role=input-control], .input-control").inputControl():e("[data-role=input-control], .input-control").inputControl()};e.Metro.transformInputs=function(t){t!=undefined?e(t).find("[data-transform=input-control]").inputTransform():e("[data-transform=input-control]").inputTransform()};e.Metro.initListViews=function(t){t!=undefined?e(t).find("[data-role=listview]").listview():e("[data-role=listview]").listview()};e.Metro.initLives=function(t){t!=undefined?e(t).find("[data-role=live-tile], [data-role=live]").livetile():e("[data-role=live-tile], [data-role=live]").livetile()};e.Metro.initProgreeBars=function(t){t!=undefined?e(t).find("[data-role=progress-bar]").progressbar():e("[data-role=progress-bar]").progressbar()};e.Metro.initRatings=function(t){t!=undefined?e(t).find("[data-role=rating]").rating():e("[data-role=rating]").rating()};e.Metro.initScrolls=function(t){t!=undefined?e(t).find("[data-role=scrollbox]").scrollbar():e("[data-role=scrollbox]").scrollbar()};e.Metro.initSliders=function(t){t!=undefined?e(t).find("[data-role=slider]").slider():e("[data-role=slider]").slider()};e.Metro.initTabs=function(t){t!=undefined?e(t).find("[data-role=tab-control]").tabcontrol():e("[data-role=tab-control]").tabcontrol()};e.Metro.initTimes=function(t){t!=undefined?e(t).find("[data-role=times]").times():e("[data-role=times]").times()};e.Metro.initTrees=function(t){t!=undefined?e(t).find("[data-role=treeview]").treeview():e("[data-role=treeview]").treeview()};e.Metro.initSteppers=function(t){t!=undefined?e(t).find("[data-role=stepper]").stepper():e("[data-role=stepper]").stepper()};e.Metro.initStreamers=function(t){t!=undefined?e(t).find("[data-role=streamer]").streamer():e("[data-role=streamer]").streamer()};e.Metro.initDragTiles=function(t){t!=undefined?e(t).find("[data-role=drag-drop]").dragtile():e("[data-role=drag-drop]").dragtile()};e.Metro.initPulls=function(t){t!=undefined&&e(t).find("[data-role=pull-menu], .pull-menu").pullmenu();e("[data-role=pull-menu], .pull-menu").pullmenu()};e.Metro.initPanels=function(t){t!=undefined&&e(t).find("[data-role=panel]").panel();e("[data-role=panel]").panel()};e.Metro.initTileTransform=function(t){t!=undefined&&e(t).find("[data-click=transform]").tileTransform();e("[data-click=transform]").tileTransform()};e.Metro.initAll=function(t){e.Metro.initAccordions(t);e.Metro.initButtonSets(t);e.Metro.initCalendars(t);e.Metro.initCarousels(t);e.Metro.initCountdowns(t);e.Metro.initDatepickers(t);e.Metro.initDropdowns(t);e.Metro.initFluentMenus(t);e.Metro.initHints(t);e.Metro.initInputs(t);e.Metro.transformInputs(t);e.Metro.initListViews(t);e.Metro.initLives(t);e.Metro.initProgreeBars(t);e.Metro.initRatings(t);e.Metro.initScrolls(t);e.Metro.initSliders(t);e.Metro.initTabs(t);e.Metro.initTimes(t);e.Metro.initTrees(t);e.Metro.initSteppers(t);e.Metro.initStreamers(t);e.Metro.initDragTiles(t);e.Metro.initPulls(t);e.Metro.initPanels(t);e.Metro.initTileTransform(t)}})(jQuery);$(function(){$.Metro.initAll()});$(function(){if(METRO_AUTO_REINIT){var e=$(".metro").html(),t;setInterval(function(){t=$(".metro").html();if(e!==t){e=t;$.Metro.initAll()}},500)}});
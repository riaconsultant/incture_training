jQuery.sap.require('pft.utils.util');
jQuery.sap.require('pft.utils.service');
sap.ui.controller("pft.feedbackResponse", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf pft.feedbackResponse
*/
	onInit: function() {
		var feedbackId = pft.utils.util.getValFromQueryString("feedbackId");
		if(feedbackId[0]){
			//alert(feedbackId[0]);
			oModel=pft.utils.service.getData("getFeedbackDetail/"+feedbackId[0],"GET","");
			this.getView().setModel(oModel);
		}else{
			
		}
	},
	cancelRes:function(){
		
	},
	reset:function(){
		
	},
	submitRes:function(){
		var msg=pft.utils.service.getData("updateFeedback","POST",oModel.getData());
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf pft.feedbackResponse
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf pft.feedbackResponse
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf pft.feedbackResponse
*/
//	onExit: function() {
//
//	}

});
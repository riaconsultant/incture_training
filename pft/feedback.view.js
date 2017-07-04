sap.ui.jsview("pft.feedback", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf epfs.feedback
	*/ 
	getControllerName : function() {
		return "pft.feedback";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf epfs.feedback
	*/ 
	createContent : function(oController) {
		
		var oTable=new sap.m.Table({
			
		});
		
 		var oPage= new sap.m.Page({
			title: "FeedBack Details",
			showNavButton:true,
			navButtonPress:oController.back,
			content: [oTable]
		});
 		return oPage;
	}

});
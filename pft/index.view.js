sap.ui.jsview("pft.index", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf epfs.index
	*/ 
	getControllerName : function() {
		return "pft.index";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf epfs.index
	*/ 
	createContent : function(oController) {
		
		var oReqTile=new sap.m.StandardTile({
			id:"oReqTile",
			title:"Request Feedback",
			info:"Employee Request to Project Manager",
			icon:"sap-icon://create",
			//infoState:"Success",
			//number:"1",
			//numberUnit:"EURO",
			press:oController.requestFeedback
			//type : "",
		});
		
		var oViewTile=new sap.m.StandardTile({
			id:"oViewTile",
			title:"View Feedback",
			info:"PM feedback for employee",
			icon:"sap-icon://work-history",
			//type : "Create",
			//infoState:"Warning",
			//number:"2",
			//numberUnit:"Doller",
			press:oController.viewFeedback
		});
		
		var oTileContainer=new sap.m.TileContainer({
			id:"oTileContainer",
			tiles:[oReqTile,oViewTile]
		});
		
		var oPage=new sap.m.Page({
			//title: "Project Feedback Tool",
			content: [oTileContainer]
		});
		
 		return oTileContainer;
	}

});
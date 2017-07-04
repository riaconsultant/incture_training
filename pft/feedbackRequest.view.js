sap.ui.jsview("pft.feedbackRequest", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf pft.feedbackRequest
	*/ 
	getControllerName : function() {
		return "pft.feedbackRequest";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf pft.feedbackRequest
	*/ 
	createContent : function(oController) {
		var ofooter=new sap.m.Toolbar({
			content:[
			         new sap.m.ToolbarSpacer(),
			         new sap.m.Button({text:"Cancel",type:sap.m.ButtonType.Reject,press:oController.back}),
			         new sap.m.Button({text:"Reset",press:oController.reset}),
			         new sap.m.Button({text:"Submit",type:sap.m.ButtonType.Accept,press:oController.submitReq})]
		});
		
		var oForm= new sap.ui.layout.form.SimpleForm({
			title:"Request form",
			maxContainerCols:2,
			layout:"ResponsiveGridLayout",
			labelSpanL:3,
	        labelSpanM:3,
	        emptySpanL:4,
	        emptySpanM:4,
			columnsL:1,
			columnsM:1,
			editable:true,
			content:[
			         new sap.m.Label({text:"Employee Id"}),new sap.m.Input({id:"empId"}).bindValue("/empId"),
			         new sap.m.Label({text:"Your Email"}),new sap.m.Input({id:"requestEmail",type:"Email"}).bindValue("/requestEmail"),
			         new sap.m.Label({text:"PM Email"}),new sap.m.Input({id:"responseEmail",type:"Email"}).bindValue("/responseEmail"),
			         new sap.m.Label({text:"Project"}),new sap.m.Input({id:"project"}).bindValue("/project"),
			         new sap.m.Label({text:"Start Date"}),new sap.m.DatePicker({id:"startDate",displayFormat:"short"}).bindValue("/startDate"),
			         new sap.m.Label({text:"End Date"}),new sap.m.DatePicker({id:"endDate",displayFormat:"short"}).bindValue("/endDate"),
			         new sap.m.Label({text:"Notes"}),new sap.m.TextArea({id:"notes"}).bindValue("/notes")
			         ]
		});
		
		var oGrid=new sap.ui.layout.Grid({
			defaultSpan:"L12 M12 S12",
			width:"auto",
			content:[oForm]
		});
		
 		 var feedbackPage=new sap.m.Page({
			title: "Feedback Request Form",
			showHeader:true,
			enableScrolling:true,
			showNavButton:true,
			showfooter:true,
			footer:ofooter,
			content: [oGrid],
			navButtonPress:oController.back
		});
 		return feedbackPage;
	}

});
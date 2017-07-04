sap.ui.jsview("pft.feedbackResponse", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf pft.feedbackResponse
	*/ 
	getControllerName : function() {
		return "pft.feedbackResponse";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf pft.feedbackResponse
	*/ 
	createContent : function(oController) {
		var ofooter=new sap.m.Toolbar({
			content:[
			         new sap.m.ToolbarSpacer(),
			         new sap.m.Button({text:"Cancel",type:sap.m.ButtonType.Reject,press:oController.cancelRes}),
			         new sap.m.Button({text:"Reset",press:oController.reset}),
			         new sap.m.Button({text:"Submit",type:sap.m.ButtonType.Accept,press:oController.submitRes})]
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
			         new sap.m.Label({text:"Employee Id"}),new sap.m.Input({}).bindValue("/empId"),
			         new sap.m.Label({text:"Your Email"}),new sap.m.Input({type:"Email"}),
			         new sap.m.Label({text:"PM Email"}),new sap.m.Input({type:"Email"}),
			         new sap.m.Label({text:"Project"}),new sap.m.Input({}),
			         new sap.m.Label({text:"Start Date"}),new sap.m.DatePicker({}),
			         new sap.m.Label({text:"End Date"}),new sap.m.DatePicker({}),
			         new sap.m.Label({text:"Notes"}),new sap.m.TextArea({})
			         ]
		});
		
		var oGrid=new sap.ui.layout.Grid({
			defaultSpan:"L12 M12 S12",
			width:"auto",
			content:[oForm]
		});
//		var oId= new sap.m.Text({});
//		var oLabel=new sap.m.Input({id:"empId"}).bindValue("/empId");
//		var oLayout = new sap.m.FlexBox({
//			items: [oId,oLabel]
//		});
 		var oPage= new sap.m.Page({
			title: "Project Feedback Response",
			showFooter:true,
			footer:ofooter,
			content: [oGrid]
		});
 		return oPage;
	}

});
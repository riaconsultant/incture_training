jQuery.sap.declare("pft.utils.service");
pft.utils.service = (function(){
	return{
		_url:"rest/myservice/",
		getData:function(url,method,oParam){
		   var oHeader={"Content-Type":"application/json; charset=utf-8"};
	       var oModel = new sap.ui.model.json.JSONModel(); 
	       oModel.loadData(this._url+url, JSON.stringify(oParam), false,method,false,false,oHeader);
	        oModel.attachRequestCompleted(function(){
	    	   //$("#ajaxloader").fadeOut(10);
	        });
            return oModel;
		    
		},
	};
})();
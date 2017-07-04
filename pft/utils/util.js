jQuery.sap.declare("pft.utils.util");
pft.utils.util=(function(){
	return {
		_id:"",
		getValFromQueryString:function(key){
			   var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
			   var r=[], m;
			   while ((m=re.exec(document.location.search)) != null) r.push(m[1]);
			   return r;
			 },
	}
})();
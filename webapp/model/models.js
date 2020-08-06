sap.ui.define([
	"sap/ui/model/json/JSONModel"
	
], function (JSONModel) {
	"use strict";
	return {

		createRecipient: function () {
			var oData = {
				recipient: {
					name: "Escribe Aca"
				}
			};
			//var oModel = new JSONModel(oData);
			return new JSONModel(oData);
		}
	};

});
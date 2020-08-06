sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	],
	function (Controller, MessageToast){
	"user strict";
	return 	Controller.extend("ProyectoN1.Customers.controller.App", {
	onMHola : function () {
		/*eslint-disable no-alert*/
	/*	alert("Hola Mundo");*/
		/*eslint-enable no-alert*/ 
			MessageToast.show("Mensaje Hola");
	}
		
	});
	});
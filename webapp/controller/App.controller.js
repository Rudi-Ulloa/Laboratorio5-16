sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"ProyectoN1/Customers/model/models"

], function (Controller, MessageToast, models) {
	"use strict";
	return Controller.extend("ProyectoN1.Customers.controller.App", {
			onInit: function () {
				this.getView().setModel(models.createRecipient());
				},

		onMHola: function () {
			MessageToast.show("Mensaje Hola");
		}
	});
});
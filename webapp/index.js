sap.ui.define([
		"sap/ui/core/mvc/XMLView"
	],
	function (XMLView) {
		XMLView.create({
			viewName: "ProyectoN1.Customers.view.App"
		}).then(function (oView) {
			oView.placeAt("content");
		});

	});	
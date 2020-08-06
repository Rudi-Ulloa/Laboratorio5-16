sap.ui.define([
	"sap/ui/core/UIComponent",
	"ProyectoN1/Customers/model/models",
	"sap/ui/model/resource/ResourceModel"

], function (UIComponent, models, ResourceModel) {

	return UIComponent.extend("ProyectoN1.Customers.Component", {

		metadata :{
			manifest : "json"
		},

		init: function () {
			// llamada a funcion del padre
			UIComponent.prototype.init.apply(this, arguments);

			//Mostrar Modelo en la Vista View
			this.setModel(models.createRecipient());

			//ver i18n en la vista view
			var i18nModel = new ResourceModel({
				bundleName: "ProyectoN1.Customers.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
		}

	});
});
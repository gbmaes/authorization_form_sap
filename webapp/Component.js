sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ZBF_APP/model/models"
], function(UIComponent, Device, models) {
	"use strict";
	jQuery.sap.declare("ui.Component");
	return UIComponent.extend("ZBF_APP.Component", {

		metadata: {
			manifest: "json"
		},
		dependencies : {
        libs : ["sap.m"]
    },
	
		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});
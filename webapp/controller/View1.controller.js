sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZBF_APP.controller.View1", {

		/*	onInit: function(){
				var that = this;
				
			}*/
		genPDF: function(oEvent) {
			debugger;
			
				window.print();
			
		},

		onOssSelect: function() {

			if (this.getView().byId("ossCheck").getSelected() == true) {
				this.getView().byId("ossUser").setEnabled(true);
			} else {
				this.getView().byId("ossUser").setValue("");
				this.getView().byId("ossUser").setEnabled(false);
			}

		}
	});
});
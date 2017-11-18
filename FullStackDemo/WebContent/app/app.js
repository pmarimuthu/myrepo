Ext.application({
    name: 'App',    
	models: [ 'MotherTongueModel', 'CasteModel', 'SubcasteModel', 'GowthramModel' ],
	stores: [ 'MotherTongueStore', 'CasteStore', 'SubcasteStore', 'GowthramStore' ],
    views: [ 'Viewport' ],
    
    autoCreateViewport: true,

    launch: function () {
    }
});
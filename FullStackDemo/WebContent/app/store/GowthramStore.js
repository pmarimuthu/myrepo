Ext.define('App.store.GowthramStore', {
    extend: 'Ext.data.Store',
    model: 'App.model.GowthramModel',
    autoLoad: true,
	proxy: {
            type: 'ajax', //'jsonp',
            url : 'app/jsondata/gowthram.json',
            reader: {
                //type: 'json',
                root: 'data'
            }
        },

        fields: [
            {name: 'id', mapping: 'id', type: 'int'},
            {name: 'name', mapping: 'name'},
            {name: 'godname', mapping: 'godname'},
            {name: 'location', mapping: 'location'}
        ]
});
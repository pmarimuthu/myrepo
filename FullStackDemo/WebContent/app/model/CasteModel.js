Ext.define('App.model.CasteModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'godname', type: 'string' },
        { name: 'location', type: 'string' }
    ]
});
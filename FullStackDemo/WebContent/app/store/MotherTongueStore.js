Ext.define('App.store.MotherTongueStore', {
    extend: 'Ext.data.Store',
    model: 'App.model.MotherTongueModel',
    data: [
        { 'id': 1, 'name': 'Tamil' },
	    { 'id': 2, 'name': 'Telugu' },
	    { 'id': 3, 'name': 'Kannada' },
	    { 'id': 4, 'name': 'Hindi' },
        { 'id': 5, 'name': 'English' },
        { 'id': 6, 'name': 'Others' }
    ]
});

Ext.define('App.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ['Ext.form.FormPanel','Ext.form.field.ComboBox'],
    style: 'padding:25px',
    layout: 'vbox',
    items: [
       {
           xtype: 'form',
           title: 'User Login',
           //width: 500,
           bodyPadding: 10,
           border: true,
           //glyph: 62,
           
           url: 'UserLogin',
           
           tools: [
                   { 
                	   xtype: 'button',
                	   glyph: 61
                   }
                   //,{ type: 'pin' }
           ],

           items: [
		            {
						xtype: 'fieldset',
						title: 'Email or Phone',
						collapsible: false,
						bodyPadding: 5,
						
						items: [
							{
								xtype: 'textfield',
								name: 'userId',
								id: 'userId',
								fieldLabel: 'UserID',
								vtype: 'alphanum',
								maxLength: 64,
								value: 'Anil'
							},
							{
								xtype: 'textfield',
								name: 'email',
								id: 'email',
								fieldLabel: 'Email Address',
								vtype: 'email',
								maxLength: 64,
								value: 'Anil@test.com'
							},
							{
								xtype: 'numberfield',
								name: 'mobileNumber',
								id: 'mobileNumber',
								fieldLabel: 'Mobile Number',
								allowNegative: false,
								allowDecimals : false,
								hideTrigger: true,
								allowBlank: false,
								maxLength: 10,
								value: 12345
							},
							{
								xtype: 'textfield',
								inputType: 'password',
								name: 'password',
								id: 'password',
								fieldLabel: 'Password',
								allowBlank: false,
								value: 'abcd1234'
							},
							{
								xtype: 'button',
								text: 'Log In',
								name: 'login',
								align: '->',
								formBind: true,
								disabled: true,
								handler: function() {
									var form = this.up('form').getForm();
									if (form.isValid()) {
										console.log(Ext.JSON.encode(form.getValues()));
										alert(Ext.JSON.encode(form.getValues()));
										
										Ext.Ajax.request({
											url: 'serviceapi/user/auth',
											method:'POST', 
											headers: {
												'Content-Type': 'application/json'
											},
											params: Ext.JSON.encode(form.getValues()),
										})
									}
								}
							}
							]
					}
           ]
       }
    ]
});
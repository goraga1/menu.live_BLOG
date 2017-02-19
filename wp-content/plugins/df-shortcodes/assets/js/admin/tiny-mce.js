
// =============================================================================
// JS/ADMIN/TINYMCE.JS
// -----------------------------------------------------------------------------
// TinyMCE specific functions.
// =============================================================================

(function() {

tinymce.PluginManager.add('DahzThemeShortcodes', function( editor, url ) {
	editor.addButton( 'DahzThemeShortcodes', {
		title: 'Insert Shortcode',
		icon: false,
		type: 'menubutton',
		menu: [
			{ // begin Columns
				text: 'Columns',
				onclick: function() {
					editor.windowManager.open({
						title: 'Columns Shortcode',
	                    style: 'overflow-y:auto;overflow-x:hidden;max-height:60%;',
	                    body: [
	                    	{
	                    		type: 'listbox',
	                    		name: 'columnListboxName',
	                    		label: 'Add Columns',
	                    		'values' : [
	                    			{text: 'Two Column', value:'two_col'},
	                    			{text: 'Three Column', value:'three_col'},
	                    		]
	                    	},
	                    ],
	                    onsubmit: function( e ){
	                    	if ( e.data.columnListboxName == 'two_col' ) {
	                    		editor.insertContent('[df_row][col-md-6] your content [/col-md-6][col-md-6_last] your content [/col-md-6_last][/df_row]')
	                    	} else if ( e.data.columnListboxName == 'three_col' ) {
	                    		editor.insertContent('[df_row][col-md-4] your content [/col-md-4][col-md-4] your content [/col-md-4][col-md-4_last] your content [/col-md-4_last][/df_row]')
	                    	}
	                    }
					});
				}
			}, // Columns
			{ // begin Divider
				text : 'Divider',
				onclick: function() {
					editor.windowManager.open({
						title: 'Divider Shortcode',
	                    style: 'overflow-y:auto;overflow-x:hidden;max-height:60%;',
						body: [
							{
								type: 'listbox',
								name: 'border_style',
								label: 'Border Style',
								'values':[
									{text: 'Solid', value: 'solid'},
									{text: 'Double', value: 'double'},
								]
							},
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Choose border style";}
							},
							{
								type: 'textbox',
								name: 'border_color',
								label: 'Border Color',
								value: '#EEEEEE',
							},
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Set border color.";}
							},
							{
								type: 'listbox',
								name: 'border_width',
								label: 'Border Width',
								'values': [
									{text: '100%', value: '100'},
									{text: '90%', value: '90'},
									{text: '80%', value: '80'},
									{text: '70%', value: '70'},
									{text: '60%', value: '60'},
									{text: '50%', value: '50'},
									{text: '40%', value: '40'},
									{text: '30%', value: '30'},
									{text: '20%', value: '20'},
									{text: '10%', value: '10'},
								]
							},
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Choose border width.";}
							},
							{
								type: 'textbox',
								name: 'border_t_width',
								label: 'Border Size',
								value: '2px',
							},
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Set the border size in px. e.g: 2px.";}
							},
							{
								type: 'listbox',
								name: 'border_position',
								label: 'Border Alignment',
								'values' : [
									{text: 'Center', value: 'align_center'},
									{text: 'Left', value: 'align_left'},
									{text: 'Right', value: 'align_right'},
								]
							},
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Choose the divider position.";}
							},
							{
								type: 'textbox',
								name: 'padding',
								label: 'Padding',
								value: '20px 0'
							},
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Add padding. Learn about padding properties <a href='http://www.w3schools.com/cssref/pr_padding.asp' target='_blank' style='font-size: 11px;color: #0073aa;'>here</a>";}
							},
							{
								type: 'textbox',
								name: 'extra_class',
								label: 'Extra Class',
							},
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your css file.";}
							},
						],
						onsubmit: function( e ) {
		                    editor.insertContent( '[df_divider el_width="'+ e.data.border_width +'" style="'+ e.data.border_style +'" accent_color="'+ e.data.border_color +'" border_t_width="'+ e.data.border_t_width +'" padding="'+ e.data.padding +'" position="'+ e.data.border_position +'" el_class="'+ e.data.extra_class +'"]' );
						}
					});
				}
			}, // Divider
			{ // begin Divider With Text
				text: 'Divider With Text',
				onclick: function() {
					editor.windowManager.open({
						title: 'Divider With Text Shortcode',
                      	style: 'overflow-y:auto;overflow-x:hidden;max-height:60%;',
                      	body: [
                      		{
                      			type: 'listbox',
                      			name: 'border_style',
                      			label: 'Border Style',
								'values':[
									{text: 'Solid', value: 'solid'},
									{text: 'Double', value: 'double'},
								]
                      		},
            				{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Choose border style";}
							},
                      		{
                      			type: 'textbox',
								name: 'border_color',
								label: 'Border Color',
								value: '#EEEEEE'
                      		},
            				{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Set border color.";}
							},
							{
								type: 'listbox',
								name: 'border_width',
								label: 'Border Width',
								'values': [
									{text: '100%', value: '100'},
									{text: '90%', value: '90'},
									{text: '80%', value: '80'},
									{text: '70%', value: '70'},
									{text: '60%', value: '60'},
									{text: '50%', value: '50'},
									{text: '40%', value: '40'},
									{text: '30%', value: '30'},
									{text: '20%', value: '20'},
									{text: '10%', value: '10'},
								]
							},
            				{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Choose border width.";}
							},
							{
								type: 'listbox',
								name: 'border_position',
								label: 'Border Alignment',
								'values' : [
									{text: 'Center', value: 'align_center'},
									{text: 'Left', value: 'align_left'},
									{text: 'Right', value: 'align_right'},
								]
							},
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Choose the divider position.";}
							},
							{
								type: 'textbox',
								name: 'border_t_width',
								label: 'Border Size',
								value: '2px',
							},
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Set the border height in px. e.g: 1px.";}
							},
							{
								type: 'textbox',
								name: 'padding',
								label: 'Padding',
								value: '20px 0'
							},
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Add padding. Learn about padding properties <a href='http://www.w3schools.com/cssref/pr_padding.asp' target='_blank' style='font-size: 11px;color: #0073aa;'>here</a>";}
							},
							{
								type: 'textbox',
								name: 'title',
								label: 'Divider Text',
								value: 'DIVIDER',
							},
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Write the divider text.";}
							},
							{
								type: 'listbox',
								name: 'title_align',
								label: 'Text Alignment',
								'values': [
									{text: 'Center', value: 'separator_align_center'},
									{text: 'Left', value: 'separator_align_left'},
									{text: 'Right', value: 'separator_align_right'},
								]
							},
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Choose the text alignment position.";}
							},
							{
								type: 'textbox',
								name: 'extra_class',
								label: 'Extra Class',
							},
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your CSS file.";}
							},
                      	],
                      	onsubmit: function( e ){
		                    editor.insertContent( '[df_divider_text title="'+ e.data.title +'" title_align="'+ e.data.title_align +'" el_width="'+ e.data.border_width +'" style="'+ e.data.border_style +'" accent_color="'+ e.data.border_color +'"  padding="'+ e.data.padding +'" position="'+ e.data.border_position +'" el_class="'+ e.data.extra_class +'" border_t_width="'+e.data.border_t_width+'"]' );
                      	}
					});
				}
			}, // Divider With Text
			{ // begin Text Divider With Link
				text: 'Text Divider With Link',
				onclick: function(){
					editor.windowManager.open({
						title: 'Text Divider With Link Shortcode',
                      	style: 'overflow-y:auto;overflow-x:hidden;max-height:60%;',
						body: [
							{
                      			type: 'listbox',
                      			name: 'border_style',
                      			label: 'Border Style',
								'values':[
									{text: 'Solid', value: 'solid'},
									{text: 'Double', value: 'double'},
								]
                      		}, // border_style (Divider Style)
                      		{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Choose border style";}
							},
                      		{
                      			type: 'textbox',
								name: 'border_color',
								label: 'Border Color',
								value: '#EEEEEE'
                      		}, // border_color (Divider Color)
                      		{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Set border color.";}
							},
                      		{
								type: 'listbox',
								name: 'border_width',
								label: 'Border Width',
								'values': [
									{text: '100%', value: '100'},
									{text: '90%', value: '90'},
									{text: '80%', value: '80'},
									{text: '70%', value: '70'},
									{text: '60%', value: '60'},
									{text: '50%', value: '50'},
									{text: '40%', value: '40'},
									{text: '30%', value: '30'},
									{text: '20%', value: '20'},
									{text: '10%', value: '10'},
								]
							}, // border_width (Divider Width)
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Choose border width.";}
							},
							{
								type: 'textbox',
								name: 'border_t_width',
								label: 'Border Size',
								value: '2px',
							}, // border_size (Divider Size)
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Set the border size in px. e.g: 2px.";}
							},
							{
								type: 'listbox',
								name: 'border_position',
								label: 'Border Alignment',
								'values' : [
									{text: 'Center', value: 'align_center'},
									{text: 'Left', value: 'align_left'},
									{text: 'Right', value: 'align_right'},
								]
							}, // border_position (Border Alignment)
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Choose the divider position.";}
							},
							{
								type: 'textbox',
								name: 'height',
								label: 'Height',
								value: '1px',
							}, // height
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Set the divider line height.";}
							},
							{
								type: 'textbox',
								name: 'padding',
								label: 'Padding',
								value: '20px 0'
							}, // padding (Top & Bottom padding and set left right padding to 0 )
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Add padding. Learn about padding properties <a href='http://www.w3schools.com/cssref/pr_padding.asp' target='_blank' style='font-size: 11px;color: #0073aa;'>here</a>";}
							},
							{
								type: 'textbox',
								name: 'title',
								label: 'Divider Text',
								value: 'DIVIDER',
							}, // Divider Text
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Write the divider text.";}
							},
							{
								type: 'textbox',
								name: 'url_link',
								label: 'Link URL',
								value: 'http://'
							}, // Link URL
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Set the link URL.";}
							},
							{
								type: 'listbox',
								name: 'target_link',
								label: 'Target Link',
								'values' : [
									{text: 'New Tab', value: '_blank'},
									{text: 'Current Tab', value: '_self'},
								]
							}, // Link target
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Choose the link target.";}
							},
							{
								type: 'textbox',
								name: 'title_link',
								label: 'Link\'s tooltip Text',
								Value: ''
							}, // Link Tooltip Text
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Set the link's tooltip text.";}
							},
							{
								type: 'textbox',
								name: 'text_link',
								label: 'Link Text',
								value: 'Link'
							}, // Link Text
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Set the link text.";}
							},
							{
								type: 'textbox',
								name: 'link_extra_class',
								label: 'Link Extra Class',
							}, // Link Extra Class
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "If you wish to style particular link element differently, then use this field to add a class name and then refer to it in your CSS file.";}
							},
							{
								type: 'textbox',
								name: 'extra_class',
								label: 'Extra Class',
							}, // Extra Class
							{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your CSS file.";}
							},
                      	],
						onsubmit: function( e ){
							editor.insertContent('[df_divider_text_link title="'+ e.data.title +'" el_width="'+ e.data.border_width +'" style="'+ e.data.border_style +'" height="'+ e.data.height +'" accent_color="'+ e.data.border_color +'" border_t_width="'+ e.data.border_t_width +'" padding="'+ e.data.padding +'" position="'+ e.data.border_position +'" el_class="'+ e.data.extra_class +'" url_link="'+ e.data.url_link +'" target_link="'+ e.data.target_link +'" title_link="'+ e.data.title_link +'" text_link="'+ e.data.text_link +'" link_el_class="'+ e.data.link_extra_class +'" ]');
						}
					});
				}
			}, // Text Divider With Link
			{ // begin Banner
				text: 'Banner',
				onclick: function(){
					editor.windowManager.open({
						title: 'Banner Shortcode',
                      	style: 'overflow-y:auto;overflow-x:hidden;max-height:60%;',
                      	body: [
                      		{
                      			type: 'textbox',
                      			name: 'title',
                      			label: 'Banner Title',
                      			value: 'This Is Banner Title',
                      		}, // Banner Title
                      		{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Write the banner title.";}
							},
                      		{
                      			type: 'listbox',
                      			name: 'typo_type',
                      			label: 'Title Typography',
                      			'values' : [
                      				{text: 'Paragraph', value: 'p'},
                      				{text: 'Heading 1', value: 'h1'},
                      				{text: 'Heading 2', value: 'h2'},
                      				{text: 'Heading 3', value: 'h3'},
                      				{text: 'Heading 4', value: 'h4'},
                      				{text: 'Heading 5', value: 'h5'},
                      				{text: 'Heading 6', value: 'h6'},
                      			]
                      		}, // Typography
                      		{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Choose the title typography.";}
							},
                      		{
                      			type: 'textbox',
                      			name: 'subtitle',
                      			label: 'Banner Subtitle',
                      			value: 'Subtitle',
                      		}, // Subtitle
                      		{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Write the banner subtitle.";}
							},
                      		{
                      			type: 'textbox',
                      			name: 'back_image',
                      			label: 'Background Image URL',
                      		}, // Background Image URL
                      		{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Set the background image URL.";}
							},
                      		{
                      			type: 'textbox',
                      			name: 'link_url',
                      			label: 'Link URL',
                      		}, // Link URL
                      		{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Set the link URL.";}
							},
                      		{
                      			type: 'listbox',
                      			name: 'link_target',
                      			label: 'Link Target',
                      			'values' : [
                      				{text:'New Tab', value: '_blank'},
                      				{text:'Current Tab', value: '_self'},
                      			]
                      		}, // Link Target
                      		{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Choose the link target.";}
							},
                      		{
                      			type: 'textbox',
                      			name: 'height',
                      			label: 'Banner Height (px)',
                      			value: '100'
                      		}, // Banner Height
                      		{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "Set the banner height.";}
							},
                      		{
                      			type: 'textbox',
                      			name: 'el_class',
                      			label: 'Extra Class',
                      		}, // Extra
                      		{
							  type: 'label',
							  name: 'someHelpText',
							  multiline: true,
							  style: 'padding: 5px 0;font-size: 11px;font-style: italic;color: #999;left:auto;text-align:right;',
							  text: "",
							  onPostRender : function() {
							    this.getEl().innerHTML =
							        "If you wish to style particular content element differently, then use this field to add a class name and then refer to it in your CSS file.";}
							},
                      	],
                      	onsubmit: function( e ){
                      		editor.insertContent('[df_banner_sc title="'+ e.data.title +'" typo_type="'+ e.data.typo_type +'" subtitle="'+ e.data.subtitle +'" back_image="'+ e.data.back_image +'" link_url="'+ e.data.link_url +'" link_target="'+ e.data.link_target +'" height="'+ e.data.height +'" el_class="'+ e.data.el_class +'"]');
                      	}
					});
				}
			}, // Banner
		]
	}); // editor.addButton
}); // tinymce.PluginManager.add

})(jQuery);
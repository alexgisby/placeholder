
//
// jQuery Placeholder plugin
//	by Alex Gisby
// 
// Quick little plugin for replicating the placeholder attribute in HTML5 for all browsers.
//
// This software is licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
//
// Enjoy!
//


jQuery.fn.placeholder = function()
{
	// Support bits: (thanks to Dive into HTML 5 (http://diveintohtml5.org/))
	var i = document.createElement('input');
	jQuery.support.placeholder = ('placeholder' in i);
	
	jQuery.each(this, function()
	{
		if(jQuery(this).attr('placeholder'))
		{
			if((jQuery(this).val() == '' && !jQuery.support.placeholder) || jQuery(this).val() == jQuery(this).attr('placeholder'))
			{
				if(!jQuery.support.placeholder){ jQuery(this).val(jQuery(this).attr('placeholder')); }
				jQuery(this).addClass('placeholder-active');
			}
			else if(jQuery.support.placeholder && jQuery(this).val() == '')
			{
				jQuery(this).addClass('placeholder-active');
			}
			
			jQuery(this).focus(function()
			{
				if(jQuery(this).val() == jQuery(this).attr('placeholder') || jQuery.support.placeholder)
				{
					if(!jQuery.support.placeholder){ $(this).val(''); }
					jQuery(this).removeClass('placeholder-active');
				}
			});
			
			jQuery(this).blur(function()
			{
				if(jQuery(this).val() == '')
				{
					if(!jQuery.support.placeholder){ jQuery(this).val(jQuery(this).attr('placeholder')); }
					jQuery(this).addClass('placeholder-active');
				}
			});
			
			// Go and add a submit callback for this form to erase the data
			jQuery(this).parents('form').bind('submit', { placeholderElement: jQuery(this) }, function(event)
			{
				var element = event.data.placeholderElement;
				if(element.val() == element.attr('placeholder'))
				{
					element.val('');
				}
			});
		}
	});
}
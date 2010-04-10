
jQuery.fn.placeholder = function()
{
	// Support list: (thanks to )
	var i = document.createElement('input');
	jQuery.support.placeholder = ('placeholder' in i);
	
	// placeholder attribute
	// Webkit is the only one who supports this property so far.
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
		}
	});
}
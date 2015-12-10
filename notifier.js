/**
 * Simple jQuery Notification Messages.
 * @param  Notofication Text, Notification Class
 * @param  Default: success,
 *         all classes : success, error, info
 * 
 */
jQuery(document).ready(function () {
	jQuery.fn.notify = function(notificationText, notificationType='success') {
		var notificationClassName = 'notifier notifier-'+notificationType;
		var styleHeight = '';
		if ($('.notifier').length > 0) {
			/** calculate bottom height if any notification exists, not prevent overlaping */
			var styleHeight = 'margin-bottom: '+($('.notifier').length*70)+'px';
		}
		var div = '<div onclick="hideThis(this)" id="notify-main" style="'+styleHeight+'" class="'+notificationClassName+'">'+ notificationText +'</div>';
		jQuery('body').append(div);
	}

	setTimeout(function () {
		$('.notifier').remove().fadeOut('slow');
	}, 5000);

	
	hideThis = function ($this)
	{
		$($this).remove().fadeOut('slow');
	}
});

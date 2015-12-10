/**
 * Simple jQuery Notification Messages.
 * @param  Notofication Text, Notification Class
 * @param  					  Default: success,
 *                			  all classes : success, error, info
 * @author Manoj TM (ibeingmj@gmail.com)
 */
jQuery(document).ready(function () {
	jQuery.fn.notify = function(notificationText, notificationType='success') {
		var notificationClassName = 'notifier notifier-'+notificationType;
		var div = '<div onclick="hideThis(this)" id="notify-main" class="'+notificationClassName+'">'+ notificationText +'</div>';
		jQuery('body').append(div);
	}

	setTimeout(function () {
		$('.notifier').fadeOut('slow');
	}, 5000);
	// $('#notify-main').click(function() { $(this).fadeOut('fast') });
	hideThis = function ($this)
	{
		$($this).fadeOut('fast');
	}
});

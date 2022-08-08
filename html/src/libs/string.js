String.prototype.getParam = function(defaultValue) {
	return document.getUrlVars()[this] || defaultValue;
}

String.prototype.toDatetime = function() {
	var s = this.replace(/[T-\s:]/g, '');
	var d = new Date(
		parseInt(s.substring(0, 4)),
		parseInt(s.substring(4, 6)) - 1,
		parseInt(s.substring(6, 8)),
		parseInt(s.substring(8, 10)) || 0,
		parseInt(s.substring(10, 12)) || 0,
		0,
	)
	if (isNaN(d.getTime())) d = new Date(2000, 1, 1)
	return d;
}

String.prototype.toDate = function() {
	var s = this.replace(/-/g, '');
	var d = new Date(
		parseInt(s.substring(0, 4)),
		parseInt(s.substring(4, 6)) - 1,
		parseInt(s.substring(6, 8) || 1),
	)
	if (isNaN(d.getTime())) d = new Date()
	return d;
}

String.prototype.sex = function() {
	return this == 'mens' ? '男性' : '女性';
}

String.prototype.error = function() {
	return document.ERRORS[this] || document.ERRORS.internal_server_error;
}

String.prototype.param = function() {
	const searchParams = new URLSearchParams(window.location.search);
 	return searchParams.get(this) || '';
}

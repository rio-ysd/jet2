document.weekdays = ['日','月','火','水','木','金','土']

Date.prototype.getDispDay = function() {
	return document.weekdays[this.getDay()];
}

Date.prototype.format = function(format) {
	format = format.replace(/yyyy/g, this.getFullYear())
	format = format.replace(/mm/g, ('0' + (this.getMonth() + 1)).slice(-2))
	format = format.replace(/m/g, ('0' + (this.getMonth() + 1)).slice(-1))
	format = format.replace(/dd/g, ('0' + this.getDate()).slice(-2))
	format = format.replace(/d/g, ('0' + this.getDate()).slice(-1))
	format = format.replace(/hh/g, ('0' + this.getHours()).slice(-2))
	format = format.replace(/h/g, ('0' + this.getHours()).slice(-1))
	format = format.replace(/ii/g, ('0' + this.getMinutes()).slice(-2))
	format = format.replace(/i/g, ('0' + this.getMinutes()).slice(-1))
	format = format.replace(/ss/g, ('0' + this.getSeconds()).slice(-2))
	format = format.replace(/s/g, ('0' + this.getSeconds()).slice(-1))
	format = format.replace(/w/g, this.getDispDay())
	return format
}

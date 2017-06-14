var die = {
	size : 4 ,
	count : 1,
	roll : function() {
		var result = Math.ceil(this.size * Math.random());
		return result ;
	}
}

exports.die = die ;
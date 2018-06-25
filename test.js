var Book = require('./models/book');
//console.log("1")

Book.count({}, function cb(err, data){
	if(err) console.log("!!!")
	else {
				
		console.log(data)
		console.log("11")
	}
});
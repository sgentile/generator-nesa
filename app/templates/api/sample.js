function Sample(io){
    this.get = function(req, res){
        var data = {
            test: "sample data"
        }

        io.sockets.emit('getcalled', {test: "sample socket data"});
        //io.emit('an event sent to all connected clients 2');
        res.json(data);
    }

    return {
        get : get
    }
};
module.exports = Sample;

/*function Sample(io){
    Sample.get = function(req, res){
        var data = {
			test: "sample data"
		}
        io.sockets.emit('getcalled', {test: "sample socket data"});
        //io.emit('an event sent to all connected clients 2');
		res.json(data);
	}
	return Sample;
}
module.exports = Sample;
}*/
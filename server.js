//Reynaldo Almanza 
//A00820045

const express = require('express');
const app = express();

app.use(express.json());

// settings
app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () =>{
	console.log(`server on port ${app.get('port')}`);
})

app.get('/', function(req, res) {
	res.send('You are on the homepage');
});

app.post('/post', function (req, res) {
	response = {
		user: "User",
		password: "psw"
	}
	console.log(`Welcome ${response.user}`);
	res.json(response);
});

app.delete('/delete', function (req, res) {
	response = {
		delete: "true"
	}
	res.json(response);
});

app.put('/put/:id', function (req, res) {
	res.send(`Task ${req.params.id} has been updated`);
});
/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	patito:function(req, res){
		console.log('Entre al formulario');
		res.view('user/pagina1');
		/*res.json({
			Name: 'Kevin',
			Age: 20,
			LastName: 'Herrera'
		});*/
	},

	insert:function(req, res){
		console.log('Inserté');

		var userObj = {
			name: req.param('name'),
			lastname: req.param('lastname'),
			username: req.param('username'),
			email: req.param('email')
		}

		console.log(userObj);
		User.create(userObj, function(err, user){
		if (err){
			console.log(err);
			return res.redirect('user/patito');
		}

		res.redirect('user');
		});
	},

	viewList: function(req, res)
 	{
 		//res.view('user/list');
 		/*res.view('user/user_list');
 		var datos ={
 		"name": "Iparra",
 		"age": 34,
 		"profession": "developer"
 		};*/

 		User.find(function userFounded(err, users){

			if (err){
				console.log(err);
				return next(err);
			}
			//console.log(users[0].name);
			//console.log('Users: ' + users.length);*/
			res.json(users);
		});
 	}

};


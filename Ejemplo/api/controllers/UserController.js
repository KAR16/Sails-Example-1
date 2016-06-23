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

		console.log(user);
		res.redirect('user/show/' + user.id);
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
 	},
 	show:function(req, res, next){
		User.findOne(req.param('id'), function userFounded(err, user){
			//.find().limit(1)
			if (err){
				console.log(user);
				return next(err);
			}

			console.log(user);
			res.view({user});		
		});
	}/*, 
 	edit:function(req, res, next){
		User.findOne(req.param('id'), function userFounded(err, user){
			if (err){
				return next(err);
			}
			if (!user){
				return next();
			}
			console.log(user);
			res.view({
				user:user
			});
		});
	}, 

	update:function(req, res, next){
		console.log('Update');

		var userObj = {
			name: req.param('name'),
			lastname: req.param('lastname'),
			username: req.param('username'),
			email: req.param('email')
		}

		console.log(userObj);
		User.update(req.param('id'), userObj, function userUpdated(err, user){
		if (err){
			console.log(err);
			req.session.flash={
				err:err
			}
			return res.redirect('user//' + req.param('id'));
		}

		res.redirect('user/table_user');
		});
	}*/
};


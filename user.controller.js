import UserModel from '../models/user.model';

export function createNewUser(req,res) {
    var data = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        phone : req.body.phone,
        image : req.file.filename
    }
    const userReqData = new UserModel(data);

    if(req.body.constructor === Object && Object(req.body).length === 0){
        res.send(400).send({message:'fill the data'});
    }else{
        console.log('valid data');
        UserModel.createUser(userReqData,(err,user)=> {
            if(err)
            res.send(err);
            res.json({message:'User Create successfully',data:user.insertId})
        })
    }
}
export function updateUser(req,res) {
    const userReqData = new UserModel(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({message:'fill the data'});
    }else{
        console.log('valid data');
        UserModel.updateUser(req.params.id,userReqData,(err,user)=> {
            if(err)
            res.send(err);
            res.json({message:'User Update successfully'})
        })
    }
}

export function getUserList(req,res) {
    UserModel.getAllUsers((err,users) => {
        console.log("here");
        if(err)
        res.send(err);
        console.log('Users',users);
        res.send(users);
    })
}

export function getUserById(req,res) {
    UserModel.getUserById(req.params.id,(err,user) => {
        if(err)
        res.send(err);
        console.log('User single Data.',user);
        res.send(user);
    })
}

export function deleteUser(req,res) {
    UserModel.deleteUser(req.params.id,(err,user) => {
        if(err)
        res.send(err);
        res.json({message:'User delete successfully.'})
    })
}
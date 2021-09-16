import { query } from '../../src/config/db.config';

class User {
    constructor(user) {
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.email = user.email;
        this.phone = user.phone;
        this.created_at = new Date();
        this.image = user.image;
    }
    static getAllUsers(result) {
        query('SELECT * FROM user', (err, res) => {
            if (!err) {
                console.log("users fetched successfully.");
                result(null, res);
            } else {
                console.log("error", err);
                result(null, err);
            }
        });
    }
    static getUserById(id, result) {
        query('SELECT * FROM user WHERE id = ?', id, (err, res) => {
            if (!err) {
                console.log("user by id success");
                result(null, res);
            } else {
                console.log("error", err);
                result(null, err);
            }
        });
    }
    static createUser(userReqData, result) {
        query('INSERT INTO user SET ?', userReqData, (err, res) => {
            if (!err) {
                console.log('user created successfully');
                result(null, res);
            } else {
                console.log(err);
                result(null, err);
            }
        });
    }
    static updateUser(id, userReqData, result) {
        query('UPDATE user SET first_name = ?, last_name = ?, email =?, phone= ? WHERE id = ? ',
            [userReqData.first_name, userReqData.last_name, userReqData.email, userReqData.phone, id], (err, res) => {
                if (!err) {
                    result(null, res);
                } else {
                    result(null, err);
                }
            });
    }
    static deleteUser(id, result) {
        query('DELETE FROM user WHERE id = ?', [id], (err, res) => {
            if (!err) {
                result(null, res);
            } else {
                result(null, err);
            }
        });
    }
}   
export default User;
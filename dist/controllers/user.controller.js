"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_model_1 = require("../models/user.model");
class UserController {
    getAll(req, res) {
        user_model_1.UserModel.find({}).sort({ id: 1 }).then((data) => res.json(data), (error) => res.status(400).json({ error: error }));
    }
    createUser(req, res) {
        const newUser = new user_model_1.UserModel(req.body);
        newUser.save().then((data) => res.json(data), (error) => res.status(400).json({ error: error }));
    }
    getUserByEmail(req, res) {
        user_model_1.UserModel.find({ email: req.params.email }).sort({ id: 1 }).then((data) => res.json(data), (error) => res.status(400).json({ error: error }));
    }
    getUserById(req, res) {
        user_model_1.UserModel.find({ _id: req.params.id }).sort({ id: 1 }).then((data) => res.json(data), (error) => res.status(400).json({ error: error }));
    }
    deleteUser(req, res) {
        user_model_1.UserModel.deleteOne({ _id: req.params.id }).then((data) => res.json(data), (error) => res.status(400).json({ error: error }));
    }
}
exports.UserController = UserController;

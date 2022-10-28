"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
class UserRoutes {
    constructor() {
        this.userController = new user_controller_1.UserController();
    }
    routes() {
        const router = (0, express_1.Router)();
        router.get('/users', this.userController.getAll);
        router.post('/users', this.userController.createUser);
        router.get('/users/:id', this.userController.getUserById);
        // router.get('/users/:email', this.userController.getUserByEmail);
        router.delete('/users/:id', this.userController.deleteUser);
        return router;
    }
}
exports.UserRoutes = UserRoutes;

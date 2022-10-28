import { Router } from "express";
import { UserController } from "../controllers/user.controller";

  
  export class UserRoutes {

    userController: UserController = new UserController();

    routes() {

      const router = Router();
     
      router.get('/users', this.userController.getAll);
      
      router.post('/users', this.userController.createUser);

      router.get('/users/:id', this.userController.getUserById);
      
     // router.get('/users/:email', this.userController.getUserByEmail);

      router.delete('/users/:id', this.userController.deleteUser);

      return router;
    }
  }
 
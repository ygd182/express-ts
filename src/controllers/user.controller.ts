import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';

export class UserController {
 getAll (req: Request, res: Response) {
    UserModel.find({}).sort({ id: 1 }).then(
      (data) =>  res.json(data),
      (error) => res.status(400).json({error: error})
    );
  }
  
  createUser (req: Request, res: Response) {
    const newUser = new UserModel(req.body);
    newUser.save().then(
      (data) =>  res.json(data),
      (error) => res.status(400).json({error: error})
    );
  }
  
  getUserByEmail (req: Request, res: Response) {
    UserModel.find({email: req.params.email}).sort({ id: 1 }).then(
      (data) =>  res.json(data),
      (error) => res.status(400).json({error: error})
    );
  }

  getUserById (req: Request, res: Response) {
    UserModel.find({_id: req.params.id}).sort({ id: 1 }).then(
      (data) =>  res.json(data),
      (error) => res.status(400).json({error: error})
    );
  }

  deleteUser (req: Request, res: Response) {
    UserModel.deleteOne({_id: req.params.id}).then(
      (data) =>  res.json(data),
      (error) => res.status(400).json({error: error})
    );
  }
}
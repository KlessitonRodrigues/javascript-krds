import { UserModel } from '../schemas/user.schema';

export class UserService {
  async findAll() {
    return UserModel.find().exec();
  }

  async findOne(id: string) {
    return UserModel.findById(id).exec();
  }

  async create(user: any) {
    const newUser = new UserModel(user);
    return newUser.save();
  }

  async update(id: string, user: any) {
    return UserModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string) {
    return UserModel.findByIdAndDelete(id).exec();
  }
}

import { dbConnect, dbDisconnect } from '../../../../config/mongoDB';
import { UserService } from '../../../services/user.service';
import { handler as createUser } from './index';

describe('Create user lambda', () => {
  test('Should create an user on database', async () => {
    const user = {
      name: 'testUser',
      email: 'test@email.com',
    };

    const result = await createUser({ body: JSON.stringify(user) });
    const newUser = JSON.parse(result.body);
    expect(newUser).toMatchObject(user);

    await dbConnect();
    const userService = new UserService();
    const dbUser = await userService.findOne(newUser.id);
    expect(dbUser).toMatchObject(newUser);

    await userService.delete(newUser.id);
    await dbDisconnect();
  });
});

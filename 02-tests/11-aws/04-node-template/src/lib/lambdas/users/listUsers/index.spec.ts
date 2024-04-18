import { dbConnect, dbDisconnect } from '../../../../config/mongoDB';
import { UserService } from '../../../services/user.service';
import { handler as listUser } from './index';

describe('List users lambda', () => {
  test('Should list users from database', async () => {
    const user = {
      name: 'testUserList',
      email: 'testUserList@email.com',
    };

    await dbConnect();
    const userService = new UserService();
    await userService.create(user);

    const result = await listUser({});
    const userList = JSON.parse(result.body);
    expect(userList).toBeInstanceOf(Array);

    const newUser = userList.find((item: any) => item.email === user.email);
    expect(newUser).toMatchObject(user);

    await dbConnect();
    await userService.delete(newUser.id);
    await dbDisconnect();
  });
});

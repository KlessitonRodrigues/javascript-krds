import Text from 'src/lib/base/Text';

const UserForm = () => {
  return (
    <form className="column gap-8">
      <Text path="userform" tag="h2" />
      <label>
        <b>Name</b>
        <input type="text" placeholder="Joden Muller" />
      </label>
      <label>
        <b>Phone</b>
        <input type="text" placeholder="+55 89994009646" />
      </label>
      <label>
        <b>Email</b>
        <input type="text" placeholder="jmuller@outlook.com" />
      </label>

      <button className="main-btn">Send</button>
    </form>
  );
};

export default UserForm;

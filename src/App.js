import { withUser } from "./withUser";
import { UserInfo } from "./UserInfo";

function App() {
  const UserInfoWrapper = withUser(UserInfo, "123");

  return (
    <>
      <h1>Base Create React App</h1>
      <UserInfoWrapper />
    </>
  );
}

export default App;

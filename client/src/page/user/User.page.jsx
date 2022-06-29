import { useState } from "react";
import { userLookUp } from "../../services/twitter/userLookUp.service";

const User = () => {
  const [username, setUsername] = useState("");
  const handleInputChange = (e) => {
    const { value } = e.target;
    setUsername(value);
  };
  const handleSearchBtnClick = async () => {
    try {
      const data = await userLookUp(username);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Lookup for any twitter user</h1>
      <div>
        <input
          type="text"
          name="username"
          placeholder="@username"
          onChange={handleInputChange}
          value={username}
        />
        <button onClick={handleSearchBtnClick}>search</button>
      </div>
    </div>
  );
};

export default User;

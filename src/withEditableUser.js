import axios from "axios";
import { useEffect, useState } from "react";

export const withEditableUser = (Component, userId) => {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setOriginalUser(response.data);
        setUser(response.data);
      })();
    }, []);

    const onResetUser = () => {
      setUser(originalUser);
    };

    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes });
    };

    const onSaveUser = async () => {
      const response = await axios.post(`/users/${userId}`, { user });
      setOriginalUser(response.data);
      setUser(response.data);
    };

    return (
      <Component
        {...props}
        user={user}
        onReset={onResetUser}
        onChangeUser={onChangeUser}
        onSave={onSaveUser}
      />
    );
  };
};

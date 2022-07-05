import axios from "axios";
import React, { useEffect, useState } from "react";

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setuser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setuser(response.data);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
};

import { React, useContext, useEffect, useState } from "react";
import { contextHandel } from "../Context";

function Users() {
  const [user, setUser] = useState([]);
  const {mode} = useContext(contextHandel);

  const dataUser = async () => {
    const users = await fetch(" http://localhost:8000/blogs");
    const users2 = await users.json();
    setUser(users2);
  };

  useEffect(() => {
    dataUser();
  },[]);
  return (
    <div className={mode ? "w-100 vh-100" : "w-100 vh-100 dark-mode" }>
      <table>
        <tr>
          <th>Users</th>
        </tr>
        {user.map((item, key) => (
            <>
          <tr className={mode ? "elements" : "dark"} key={key}>
            <td>{item.username}</td>
          </tr>
          </>
        ))}
      </table>
    </div>
  );
}

export default Users;

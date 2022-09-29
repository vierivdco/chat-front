import { useState, useEffect } from "react";
import { ModalRegister, DrawerList } from "../../components";
import { get } from "../../service"

const Chat = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await get ("/user");
    console.log(response);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.length > 0 && <DrawerList users={users} />}
      <ModalRegister fetchUsers={fetchUsers} />
    </div>
  );
};

export default Chat;

import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import axios from "axios";
import User from '../User/User';
import styled from 'styled-components';

const URL = "http://localhost:5000/users";

const Style1 = styled.h1`
  color:green;
`;

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users || []));
  }, []);

  return (
    <div>
      <Nav />
      <Style1>Course Details</Style1>
      <div>
        {users && users.map((user, i) => (
          <div key={i}>
            <User user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;

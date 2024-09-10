import React from 'react';
import './App.css';
import Home from "./Component/Home/Home";
import { Route, Routes } from "react-router-dom";
import AddUsers from './Component/AddUser/AddUser';
import Users from './Component/UserDetails/Users';
import UpdateUsers from './Component/UpdateUser/UpdateUser';
import Sem1 from './Component/Home/CSyear1/Sem1';
import Semester2 from './Component/Home/CSyear1/Semester2';
import Sem2_1 from './Component/Home/CSyear2/Sem2_1';
import Semester2_2 from './Component/Home/CSyear2/Semester2_2';
import Sem3_1 from './Component/Home/CSyear3/Sem3_1';
import Semester3_2 from './Component/Home/CSyear3/Semester3_2';
import Sem4_1 from './Component/Home/CSyear4/Sem4_1';
import Semester4_2 from './Component/Home/CSyear4/Semester4_2';
import Sem1_1 from './Component/Home/ISyear1/Sem1_1';
import Semester1_1 from './Component/Home/ISyear1/Semester1_1';
import Sem2_2_1 from './Component/Home/ISyear2/Sem2_2_1';
import Semester2_2_2 from './Component/Home/ISyear2/Semester2_2_2';
import Sem3_3_1 from './Component/Home/ISyear3/Sem3_3_1';
import Semester3_3_2 from './Component/Home/ISyear3/Semester3_3_2';
import Sem4_4_1 from './Component/Home/ISyear4/Sem4_4_1';
import Semester4_4_2 from './Component/Home/ISyear4/Semester4_4_2';



function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/adduser" element={<AddUsers />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UpdateUsers />} />
          <Route path="/Sem1" element={<Sem1 />} />
          <Route path="/Semester2" element={<Semester2 />} />
          <Route path="/Sem2_1" element={<Sem2_1 />} />
          <Route path="/Semester2_2" element={<Semester2_2 />} />
          <Route path="/Sem3_1" element={<Sem3_1 />} />
          <Route path="/Semester3_2" element={<Semester3_2 />} />
          <Route path="/Sem4_1" element={<Sem4_1 />} />
          <Route path="/Semester4_2" element={<Semester4_2 />} />
          <Route path="/Sem1_1" element={<Sem1_1 />} />
          <Route path="/Semester1_1" element={<Semester1_1 />} />
          <Route path="/Sem2_2_1" element={<Sem2_2_1 />} />
          <Route path="/Semester2_2_2" element={<Semester2_2_2 />} />
          <Route path="/Sem3_3_1" element={<Sem3_3_1 />} />
          <Route path="/Semester3_3_2" element={<Semester3_3_2 />} />
          <Route path="/Sem4_4_1" element={<Sem4_4_1/>} />
          <Route path="/Semester4_4_2" element={<Semester4_4_2 />} />


        </Routes>
        {}
        
      </React.Fragment>
    </div>
  );
}

export default App;

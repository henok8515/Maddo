import { useEffect, useState } from "react";
import Employee from "./components/Employee";
import { Route, Routes } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import SignIn from "./components/signin";

function App() {
  const [users, setUsers] = useState([]);
  const userCollection = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollection);
      setUsers(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getUsers();
  }, []);

  return (
    <div className="flex w-full ">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/home"
          element={<Employee setUsers={setUsers} users={users} />}
        />
      </Routes>
    </div>
  );
}

export default App;

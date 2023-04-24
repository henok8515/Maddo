import { useEffect, useState } from "react";
import Employee from "./components/Employee";
import { Route, Routes } from "react-router-dom";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase-config";

function App() {
  const [users, setUsers] = useState([]);
  const userCollection = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollection);
      setUsers(
        data.docs.map((doc: { data: () => any; id: any }) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      console.log(data, "dta");
    };
    getUsers();
  }, []);
  console.log(users, "users");

  return (
    <div className="flex w-full ">
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route
          path="/"
          element={<Employee setUsers={setUsers} users={users} />}
        />
      </Routes>
    </div>
  );
}

export default App;

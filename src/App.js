
import styles from './App.module.css';
import FormUser from './Components/Users/FormUser';
import { useState } from 'react';
import UserList from './Components/Users/UserList';

// const DATA=[];
function App() {
  const [users,SetUsers]=useState([])
  // const users=DATA;
  const addDataHandler=(newUser)=>{
    // console.log(e);
    SetUsers((oldUsers)=>{
      console.log(oldUsers);
      console.log(newUser);
      return [...oldUsers,newUser];
    })
  }
  
  // console.log(users);
  return (
    <div >
      <div className={styles['justify-content-center']}>
        <FormUser onAddData={addDataHandler}/>
      </div>
      {users[0] ? <UserList users={users}/> : ''}
    </div>
  );
}

export default App;

import React,{useState} from 'react';
import styles from './UserList.module.css';

const UserList = (props) => {
    const users=props.users
  return (
    <div className={`${styles['b-white']} ${styles.users}`}>
        <ul >
        {users.map(user=><li key={user.id}>{user.name.toUpperCase()} ({user.age} years old)</li>)}
        </ul>
    </div>
    )
}

export default UserList
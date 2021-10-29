import React, {useEffect} from 'react'
import UserListItems from './UserListItems'
import axios from 'axios';

const UserList: React.FC  = () => {
  let page = 0;
  let size = 10;

  let userList:any
  const initilize = async() => {
    const { data } = (await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`)).data
    console.log('data :>>', data)
    userList = data.map((user:any, index:number) => {
      return (
        <UserListItems className="list-group-item"
          key={index} user={user} index={index} 
        />
      );
    });
  }
  initilize()
  useEffect(() => {
    // 마운트 하지 않아도 실행 하는 소스
  }, [userList])

  return (
    <>
      <ul className="list-group"> {userList} </ul>
    </>
  );
}

export default UserList
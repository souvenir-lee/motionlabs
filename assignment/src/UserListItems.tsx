import React from 'react';

type UserListItemsProps = {
  className: string
  key: number
  user: [any]
  index: number
};

const UserListItems = (props:UserListItemsProps) => {
  console.log('userListItme', props)
  return (
    <li className="list-group-item">
      <div className="userList">
        {props.user}
      </div>
    </li >
  );
}

export default UserListItems
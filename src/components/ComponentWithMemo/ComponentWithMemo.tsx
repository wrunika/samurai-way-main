import React, {useState} from "react";

export const ComponentWithMemo = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState<Array<string>>(['cat', 'dog', 'mouse'])
    const addCount = () => {
      setCount(count + 1)
    }
  return(
      <div>
          <h4>Component With Memo</h4>
          {count}
          <div>
              <button onClick={addCount}>+</button>
          </div>
          {/*<Users users={users} />*/}
          <UsersMemoContainer users={users} />
      </div>
  )
}

type UsersPropsType = {
    users: Array<string>
}
const Users = (props: UsersPropsType) => {
    console.log('users')
  return (
      <div>
          {props.users.map( (u, i) => {
              return(
                  <div key={i}>{u}</div>
              )
          } )}
      </div>
  )
}

export const UsersMemoContainer = React.memo(Users);
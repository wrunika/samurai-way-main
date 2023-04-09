import React, {useMemo, useState} from "react";
import {UsersMemoContainer} from "../ComponentWithMemo/ComponentWithMemo";

export const HelpsToReactMemo = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState<Array<string>>(['cat', 'dog', 'mouse'])

    const addCount = () => {
        setCount(count + 1)
    }
    const filteredUsers = useMemo(()=>{
        return users.filter(u=> u.includes('o'))
    }, [users])
    return(
        <div>
            <h4>Component With React.memo and useMemo</h4>
            {count}
            <div>
                <button onClick={addCount}>+</button>
            </div>
            {/*<Users users={users} />*/}
            <UsersMemoContainer users={filteredUsers} />
        </div>
    )
}


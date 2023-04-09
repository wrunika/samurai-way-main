import React, {useCallback, useMemo, useState} from 'react';
import {SelectM} from "../Select/Select";

export const SelectWithMemo = () => {


    const [selectedUser, setSelectedUsers] = useState('1');
    const [selectedUserE, setSelectedUsersE] = useState('6');

    const users = [
        {sex: 'f', value: '1', title: 'Kate'},
        {sex: 'm', value: '2', title: 'Max'},
        {sex: 'f', value: '3', title: 'Eva'},
        {sex: 'f', value: '4', title: 'Helen'},
        {sex: 'm', value: '5', title: 'Bob'},
        {sex: 'm', value: '6', title: 'Greg'},
    ];
    const usersE = [
        {value: '1', title: 'Kate'},
        {value: '2', title: 'Max'},
        {value: '3', title: 'Eva'},
        {value: '4', title: 'Helen'},
        {value: '5', title: 'Bob'},
        {value: '6', title: 'Greg'},
    ];


    const onClickSelect = useMemo(() => (value: any) => {
        setSelectedUsers(value)
    }, [selectedUser])

    const onClickSelectE = useMemo( () => (value: any) => {
        //debugger
        setSelectedUsersE(value)
    }, [selectedUserE])


    const usersByE = useMemo(()=>{
        //debugger
        return usersE.filter(u=> u.title.toLowerCase().includes('e'));
    }, [usersE])

    const usersS = useMemo(()=>{
        return users.filter(u=> u.sex === 'f');
    }, [ users])
    const usersAll = useMemo(()=>{
        return users.filter(u=> u);
    }, [users])

    return (
        <div>
           <Count/>
          <SelectM value={selectedUser} onClickSelect={onClickSelect} items={usersAll} />
          <SelectM value={selectedUserE} onClickSelect={onClickSelectE} items={usersByE} />
          <SelectM value={selectedUser} onClickSelect={onClickSelect} items={usersS} />
        </div>
    );
};

const Count = () => {
    const [count, setCount] = useState(0);
    const addCount = () => {
        setCount(count + 1)
    }
    return <>
        <h4>Select with useMemo</h4>
        {count}
        <div>
            <button onClick={addCount}>+</button>
        </div>
    </>
}
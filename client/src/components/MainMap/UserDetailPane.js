import React from 'react'

const UserDetailPane = ((props) => {
    if(props.currentUser){
        return (
            <div>
                Current User: {props.currentUser.user_name}
            </div>
        )
    }else{
        return(
            <p>No user</p>
        )
    }
});

export default UserDetailPane;
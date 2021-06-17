import React from 'react'
import {Paper, LinearProgress} from "@material-ui/core";

const List = (props) => {
    const contacts = props.contacts;
    const loading = props.loading;
    return (
      <Paper
        elevation={20}
        className="main"
        style={{backgroundColor: "#D3E0EA", color: "#293B5F"}}
        >

      {loading ? <LinearProgress /> : (
        contacts.data.map((user) => {
          return <div style={{display: "flex"}}>
            <img className="profile-pic" src={user.picture} alt="picture" />
            <div class="profile-info">
            <h4 className="name">{user.firstName} {user.lastName}</h4>
            <p className="email">{user.email}</p>
            </div>
          </div>
        })
      )}

       </Paper>
    )
}

export default List

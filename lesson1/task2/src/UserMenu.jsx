import React from "react";
import { UserDataContext } from './user-context';

class UserMenu extends React.Component {
    const { avatar_url, name } = this.context;
render() {
    console.log(this.context);
    return <div className="menu">
        <span className="menu__greeting">
            {name}
        </span>
        <img
            alt="User Avatar"
            src={avatar_url}
            className="menu__avatar"
        />
    </div>
}
}

UserMenu.contextType = UserDataContext;

export default UserMenu;
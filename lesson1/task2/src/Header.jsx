import React from "react";
import UserMenu from "./UserMenu";

const Header = ({ user }) => {
    return (
        <header className='header'>
            <UserMenu user={user} />
        </header>
    )
}

export default Header;
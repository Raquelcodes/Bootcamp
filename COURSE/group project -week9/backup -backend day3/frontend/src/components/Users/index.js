import React, {Component} from 'react';
import Search from '../Search';
import CreateUsers from './createUsers/index';
import './index.css'

class Users extends Component {
    render() {
        return (
            <div>
                <Search/>
                <div className="Create-users-section1">
                    <div className="Create-users-section2">
                            <CreateUsers/>
                            <CreateUsers/>
                            <CreateUsers/>
                            <CreateUsers/>
                            <CreateUsers/>
                            <CreateUsers/>
                            <CreateUsers/>
                            <CreateUsers/>
                            <CreateUsers/>
                            <CreateUsers/>
                            <CreateUsers/>
                            <CreateUsers/>
                    </div>
                 </div>
            </div>
        );
    }
}

export default Users;
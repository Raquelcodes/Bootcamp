import React, {Component} from 'react';
import Search from '../Search/index';
import CreateComments from './createComments/index';
import './index.css';

class Comments extends Component {
    render() {
        return (
            <div>
                <Search/>
                <div className="Create-comments-section1">
                    <div className="Create-comments-section2">
                        <CreateComments/>
                        <CreateComments/>
                        <CreateComments/>
                        <CreateComments/>
                        <CreateComments/>
                        <CreateComments/>
                    </div>
                 </div>
            </div>
        );
    }
}

export default Comments;
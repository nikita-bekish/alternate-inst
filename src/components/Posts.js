import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="https://www.9skips.com/wp-content/uploads/2017/10/forests.jpg" />
                <Post alt="nature1" src="https://www.nature.com/polopoly_fs/7.44180.1495028629!/image/WEB_GettyImages-494098244.jpg_gen/derivatives/landscape_630/WEB_GettyImages-494098244.jpg" />
                <Post alt="nature2" src="https://www.visitportugal.com/sites/www.visitportugal.com/files/mediateca/23_660x371.jpg" />
            </div>
        );
    }
}

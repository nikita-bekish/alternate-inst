import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component {
    InstaService = new InstaService();

    state = {
        users: [],
        error: false
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllUsers().then(this.onUsersLoaded).catch(this.onError);
    }

    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false
        });
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {name, altname, photo} = item;

            return(
                <a href="#" className="user min">
                    <img alt={altname} src={photo}></img>
                    <div>{name}</div>
                </a>
            )
        })
    }

    render() {
        const {error, users} = this.state;

        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(users);

        return (
            <div>
                <div className="user">
                    <User 

                    src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
                    alt="prince"
                    name="Harry, the prince"
                    />
                </div>  
                <div className="right">
                    {items}
                </div>
            </div>
        )
    }
}


/*export default function Users() {
    return (
        <div className="right">
             <User 
                src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
                alt="prince"
                name="Harry, the prince" />

            <div className="users__block">
                <User 
                    src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
                    alt="prince"
                    name="Harry, the prince"
                    min />
                <User 
                    src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
                    alt="prince"
                    name="Harry, the prince"
                    min />
                <User 
                    src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
                    alt="prince"
                    name="Harry, the prince"
                    min />
                <User 
                    src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
                    alt="prince"
                    name="Harry, the prince"
                    min />
            </div>
        </div>
    )
}*/
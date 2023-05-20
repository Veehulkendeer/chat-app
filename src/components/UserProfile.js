import React from 'react';
import './UserProfile.css';
import firebase from '../firebase.js';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }

  componentDidMount() {
    // Retrieve the current user's username from Firebase Authentication
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      // Assuming you have a 'users' collection in Firestore where user information is stored
      const userRef = firebase.firestore().collection('users').doc(currentUser.uid);
      userRef.get().then((doc) => {
        if (doc.exists) {
          // Update the state with the username
          this.setState({ username: doc.data().username });
        }
      });
    }
  }

  render() {
    const { username } = this.state;

    return (
      <div>
        <h1>Welcome, {username || 'Guest'}</h1>
      </div>
    );
  }
}

export default UserProfile;
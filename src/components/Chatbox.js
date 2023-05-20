import React from 'react';
import './Chatbox.css';
import firebase from '../firebase';

class Chatbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chats: [],
        usernameColors: {} // Store the generated colors here
      };
    }
  
    // Function to generate a color for each username
    generateUsernameColor = (username) => {
      // Check if a color has already been assigned to the username
      if (this.state.usernameColors[username]) {
        return this.state.usernameColors[username]; // Return the assigned color
      }
  
      // Generate a new color
      const hue = Math.floor(Math.random() * 361);
      const color = `hsl(${hue}, 80%, 50%)`;
  
      // Store the generated color in the state
      this.setState(prevState => ({
        usernameColors: {
          ...prevState.usernameColors,
          [username]: color
        }
      }));
  
      return color;
    }
    componentDidMount(){
        const chatRef = firebase.database().ref('general');
        chatRef.on('value', snapshot => {
            const getChats = snapshot.val();
            let ascChats = [];
            for(let chat in getChats){
                if(getChats[chat].message !== ''){
                    ascChats.push({
                        id: chat,
                        message: getChats[chat].message,
                        user: getChats[chat].user,
                        date: getChats[chat].timestamp
                    });
                }
            }
            const chats = ascChats.reverse();
            this.setState({chats});
        });
    }
    render() {
        return(
            <div className="container">
                <div className="chatbox">
                    <ul className="chat-list">
                        {this.state.chats.map(chat => {
                            const postDate = new Date(chat.date);
                            // Generate a color for the username
                            const usernameColor = this.generateUsernameColor(chat.user);
                            return(
                                <li key={chat.id} className="chat-item">
                                    <em className="chat-date">{"24" + '/' + "7"}</em>
                                    <strong className="chat-user" style={{ color: usernameColor }}>{chat.user}:</strong>
                                    <span className="chat-message">{chat.message}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Chatbox;
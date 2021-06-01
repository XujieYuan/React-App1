import { ChatEngine } from "react-chat-engine";

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import "./App.css";

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="be762530-d765-4949-92e9-ee87cd2d4c57"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;

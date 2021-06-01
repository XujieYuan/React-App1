import { ChatEngine } from "react-chat-engine";

import ChatFeed from './components/ChatFeed';

import "./App.css";

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="be762530-d765-4949-92e9-ee87cd2d4c57"
            userName="Faker"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;

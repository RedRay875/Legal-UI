import { useState } from "react";

const Chat = ({ setPage }) => {
    const [messages, setMessages] = useState([
        { sender: "ai", text: "Hello 👋 Ask me anything about your legal document." }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;

        setMessages([...messages,
        { sender: "user", text: input },
        { sender: "ai", text: "This is a placeholder AI response." }
        ]);

        setInput("");
    };

    return (
        <div className="dashboard-layout">
            {/* Sidebar */}
            <aside className="sidebar">
                <h3>Legal AI</h3>
                <p onClick={() => setPage("dashboard")}>🏠 Dashboard</p>
                <p onClick={() => setPage("upload")}>📄 Upload Document</p>
            </aside>

            {/* Chat Area */}
            <main className="chat-main">
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`chat-bubble ${msg.sender}`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        placeholder="Ask about your legal documents..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="send-btn" onClick={sendMessage}>
                        ➤
                    </button>
                </div>

            </main>
        </div>
    );
};

export default Chat;

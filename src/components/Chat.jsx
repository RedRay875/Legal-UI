const Chat = ({ setPage }) => {
    return (
        <div className="container">
            <div className="card">
                <h1>Legal Chatbot</h1>

                <p className="subtitle">Ask questions about your document</p>

                <input type="text" placeholder="Type your question..." />
                <button>Send</button>

                <p className="link" onClick={() => setPage("dashboard")}>
                    Back to Dashboard
                </p>
            </div>
        </div>
    );
};

export default Chat;

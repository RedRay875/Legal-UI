const Dashboard = ({ setPage }) => {
    return (
        <div className="container">
            <div className="card">
                <h1>Dashboard</h1>

                <button onClick={() => setPage("upload")}>
                    Upload Legal Document
                </button>
                <br /><br />
                <button onClick={() => setPage("chat")}>
                    Open Legal Chatbot
                </button>
            </div>
        </div>
    );
};

export default Dashboard;

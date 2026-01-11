const Dashboard = ({ setPage }) => {
    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <h3>Legal AI</h3>

                <p onClick={() => setPage("upload")}>📄 Upload Document</p>
                <p onClick={() => setPage("chat")}>💬 Legal Chatbot</p>
            </aside>

            <main className="dashboard-main">
                <h1>Welcome 👋</h1>
                <p>Select an option from the sidebar to begin.</p>
            </main>
        </div>
    );
};

export default Dashboard;

const AuthLanding = ({ setPage }) => {
    return (
        <div className="welcome-container">
            {/* Header */}
            <header className="app-header">
                <div className="logo">
                    ⚖️ <span>AI Legal Assistant</span>
                </div>

                <div className="auth-buttons">
                    <button className="outline" onClick={() => setPage("login")}>
                        Login
                    </button>
                    <button onClick={() => setPage("signup")}>
                        Sign Up
                    </button>
                </div>
            </header>

            {/* Hero */}
            <div className="welcome-content">
                <h1>Understand Legal Documents Instantly</h1>
                <p>
                    Upload legal documents, detect risks, and ask questions using AI.
                </p>
            </div>
        </div>
    );
};

export default AuthLanding;

const AuthLanding = ({ setPage }) => {
    return (
        <div className="container">
            <div className="card">
                <h1>AI Legal Assistant</h1>
                <p className="subtitle">AI-powered legal document analysis</p>

                <button onClick={() => setPage("login")}>Sign In</button>
                <br /><br />
                <button onClick={() => setPage("signup")}>Create Account</button>
            </div>
        </div>
    );
};

export default AuthLanding;

const Login = ({ setPage }) => {
    return (
        <div className="container">
            <div className="card">
                <h1>Sign In</h1>

                <input type="text" placeholder="Email or Username" />
                <input type="password" placeholder="Password" />

                <button onClick={() => setPage("dashboard")}>Login</button>

                <p className="link" onClick={() => setPage("signup")}>
                    Create a new account
                </p>
            </div>
        </div>
    );
};

export default Login;

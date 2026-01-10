const Signup = ({ setPage }) => {
    return (
        <div className="container">
            <div className="card">
                <h1>Create Account</h1>

                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />

                <button>Create Account</button>

                <p className="link" onClick={() => setPage("login")}>
                    Already have an account? Sign In
                </p>
            </div>
        </div>
    );
};

export default Signup;

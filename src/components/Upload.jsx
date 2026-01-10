const Upload = ({ setPage }) => {
    return (
        <div className="container">
            <div className="card">
                <h1>Upload Document</h1>

                <input type="file" />

                <button>Upload</button>

                <p className="link" onClick={() => setPage("dashboard")}>
                    Back to Dashboard
                </p>
            </div>
        </div>
    );
};

export default Upload;

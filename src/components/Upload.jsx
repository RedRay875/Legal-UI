const Upload = ({ setPage }) => {
    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <h3>Legal AI</h3>
                <p onClick={() => setPage("dashboard")}>🏠 Dashboard</p>
                <p onClick={() => setPage("chat")}>💬 Legal Chatbot</p>
            </aside>

            <main className="dashboard-main center">
                <h1>Upload Legal Document</h1>
                <p className="subtitle">
                    Upload a PDF, DOCX, or TXT file for AI analysis.
                </p>

                <div className="upload-box">
                    <div className="upload-icon">☁️</div>
                    <p>Drag & drop your document here</p>
                    <span>or</span>
                    <button>Select File</button>
                    <small>Supported formats: PDF, DOCX, TXT</small>
                </div>
            </main>
        </div>
    );
};

export default Upload;

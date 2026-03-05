import './App.css';

function App() {
    return (
        <div className="app">
            <header className="hero">
                <h1>Minions Audiences</h1>
                <p className="tagline">Ideal customer profiles, niche definitions, market segments, and target audience personas</p>
                <div className="cta-buttons">
                    <a href="https://audiences.minions.help" className="btn btn-primary">
                        Documentation
                    </a>
                    <a href="https://github.com/mxn2020/minions-audiences" className="btn btn-secondary">
                        GitHub
                    </a>
                </div>
            </header>

            <main className="content">
                <section className="features">
                    <div className="feature-card">
                        <h3>TypeScript SDK</h3>
                        <code>npm install @minions-audiences/sdk</code>
                    </div>
                    <div className="feature-card">
                        <h3>Python SDK</h3>
                        <code>pip install minions-audiences</code>
                    </div>
                    <div className="feature-card">
                        <h3>CLI Tool</h3>
                        <code>npm install -g @minions-audiences/cli</code>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>
                    Built on the{' '}
                    <a href="https://github.com/mxn2020/minions">Minions SDK</a>
                </p>
            </footer>
        </div>
    );
}

export default App;

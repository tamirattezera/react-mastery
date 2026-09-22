function Header() {
  return (
    <header>
      <h1>AI Product Dashboard</h1>
      <p>Monitor your intelligent systems</p>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h2>Dashboard Overview</h2>
      <p>Your system activity will appear here.</p>
    </main>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;

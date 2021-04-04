import CounterApp from './components/01-useState/CounterApp';

const App = () => {
  return (
    <section className="container">
      <header>
        <h1 className="text-center mt-4">React Hooks</h1>
      </header>
      <hr />
      <main>
        <CounterApp />
      </main>
    </section>
  );
}

export default App;
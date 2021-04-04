import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';

const App = () => {
  return (
    <section className="container">
      <header>
        <h1 className="text-center mt-4">React Hooks</h1>
      </header>
      <hr />
      <main>
        <CounterWithCustomHook />
      </main>
    </section>
  );
}

export default App;
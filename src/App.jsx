
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';

const App = () => {
  return (
    <section className="container">
      <header>
        <h1 className="text-center mt-4">React Hooks</h1>
      </header>
      <hr />
      <main>
        <FormWithCustomHook />
      </main>
    </section>
  );
}

export default App;
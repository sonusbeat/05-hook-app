import useFetch from '../../hooks/useFetch';

const MultipleCustomHooks = () => {
  const url = "https://www.breakingbadapi.com/api/quotes/1";

  const state = useFetch(url);

  console.log(state);

  return (
    <section>
      <h2 className="text-center">Custom Hooks</h2>
    </section>
  );
};

export default MultipleCustomHooks;

import { useEffect, useState } from "react";

const useFetch = (url) => {
  const initialState = {
    data: null,
    loading: true,
    error: null
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    fetch(url)
      .then( response => response.json() )
      .then( data => {
        setState({
          loading: false,
          error: null,
          data
        });
      });
  }, [ url ]);

  return state;
};

export default useFetch;

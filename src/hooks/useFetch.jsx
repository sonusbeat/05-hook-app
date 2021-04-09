import { useEffect, useState, useRef } from "react";

const useFetch = (url) => {
  const isMounted = useRef(true)

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    return () => isMounted.current = false;
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then( response => response.json() )
      .then( data => {

        // setTimeout(() => {
          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              data
            });
          }
          // else {
          //   console.log("setState no se llamó");
          // }
        // }, 4000);

      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: "¡ No se pudo cargar la información del API !"
        });
      });

  }, [ url ]);

  return state;
};

export default useFetch;

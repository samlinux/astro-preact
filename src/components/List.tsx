import { useState, useEffect } from 'preact/hooks';
import ListElement from './ListElement';
import type { Data } from '../interfaces/ListItem';


export default function List({apiUrl}:{apiUrl:string}) {

  /**
   useState: This hook is used to declare state variables. data is initialized as null and will later hold the fetched data. isLoading is a boolean that indicates whether the data is currently being fetched.
   */
  const [data, setData] = useState<Array<Data> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   useEffect: This hook runs after the first render and every time the dependencies (specified in the array) change. In this case, it has no dependencies, so it runs only after the first render. It fetches the data from the server and stores it in data.
   */
  useEffect(() => {

    /**
     fetchData: This is an asynchronous function that fetches data from the server. It first sets isLoading to true, then fetches the data, parses the response as JSON, and stores the result in data. Finally, it sets isLoading to false.
     */
    const fetchData = async () => {
      console.log(apiUrl)
      if (apiUrl === null) {
        console.error('API URL is null');
        return;
      }
      setIsLoading(true);

      const response = await fetch(apiUrl);
      const data:[] = await response.json();

      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  /**
   This is what gets rendered by the component. If isLoading is true, it renders "Loading...". If data is not null, it renders the ListElement component and passes data as a prop. If data is null, it renders "No data".
   */
  return (

      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
            <ListElement apiUrl={apiUrl} items={data} />
        ) : (
          <div>No data ?</div>
        )}
      </div>
   
  );
}
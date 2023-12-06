import { useState, useEffect } from 'preact/hooks';
import type { Data } from '../interfaces/ListItem';
import type { DataDetail } from '../interfaces/ListDetail';

/**
 This is a TypeScript interface that defines the props that ListDetail expects. item is the data of the item that should be displayed in detail. setShowDetail is a function that's used to hide the detail view.
 */
interface ListDetailProps {
  apiUrl: string;
  item: Data;
  setShowDetail: (item: Data | null) => void;
}

/** This is a functional component that receives item and setShowDetail as props. */
const ListDetail = (
  { apiUrl, item, setShowDetail }: ListDetailProps ) => {
  
    const [loadedData, setLoadedData] = useState<DataDetail | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   This function is called when the back button is clicked. It calls setShowDetail with null as the argument, which sets showDetail to null in the parent component and hides the detail view.
   */
  function backToList(): void {
    setShowDetail(null);
  }

  /**
   This function is used when the component is rendered. It fetches the data of the item that should be displayed in detail.
   */
  async function getDetailData(): Promise<DataDetail> {
    const response = await fetch(apiUrl+'/'+item.id);
    const data: DataDetail = await response.json();
    //console.log(data)
    return data;
  }

  /**
   This hook runs after the first render and every time the dependencies (specified in the array) change. In this case, it has no dependencies, so it runs only after the first render. It fetches the data from the server and stores it in data.
   */
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data: DataDetail = await getDetailData();
      setLoadedData(data);
      setIsLoading(false);
    };
    fetchData();
  }
  , []);
  
  /**
    The return statement: This is what gets rendered by the component. It displays the details of item and a back button. When the back button is clicked, it calls backToList, which hides the detail view.
   */
  return (
   <>
    {isLoading ? (
        <div>Loading...</div>
      ) : loadedData ? (
        <div style="border:1px solid blue">
          <h1>Detail component</h1>
          <div>
            {loadedData?.id} - {loadedData?.name} - {loadedData?.email}
          </div>
          <div>
            {loadedData?.comment}
          </div>
          <div>
            <button onClick={() => backToList()}>back</button>
          </div>
        </div>
      ) : (
        <div>No data ?</div>
      )}
   </>

  );
};

export default ListDetail;




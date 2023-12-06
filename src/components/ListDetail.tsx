import type { Data } from '../interfaces/ListItem';

/**
 This is a TypeScript interface that defines the props that ListDetail expects. item is the data of the item that should be displayed in detail. setShowDetail is a function that's used to hide the detail view.
 */
interface ListDetailProps {
  item: Data;
  setShowDetail: (item: Data | null) => void;
}

/** This is a functional component that receives item and setShowDetail as props. */
const ListDetail = (
  { item, setShowDetail }: ListDetailProps ) => {
  
  /**
   This function is called when the back button is clicked. It calls setShowDetail with null as the argument, which sets showDetail to null in the parent component and hides the detail view.
   */
  function backToList(): void {
    setShowDetail(null);
  }

  /**
    The return statement: This is what gets rendered by the component. It displays the details of item and a back button. When the back button is clicked, it calls backToList, which hides the detail view.
   */
  return (
    <div style="border:1px solid blue">
      <h1>Detail component</h1>
      <div>
        {item.id} - {item.name} - {item.email}
      </div>
      <div>
        <button onClick={() => backToList()}>back</button>
      </div>
    </div>
  );
};

export default ListDetail;




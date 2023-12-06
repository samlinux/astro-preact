import type { Data } from '../interfaces/ListItem';

/**
 This is a TypeScript interface that defines the props that ListItem expects. item is the data of the item that should be displayed. showDetail is a boolean that indicates whether the detail view of this item should be displayed. setShowDetail is a function that's used to toggle the display of the detail view.
 */
interface ListItemProps {
  item: Data;
  showDetail: boolean;
  setShowDetail: (item:Data | null ) => void;
}

/**
 This is a functional component that receives item, showDetail, and setShowDetail as props.
 */
const ListItem = ({ item, showDetail, setShowDetail }: ListItemProps) => {
  /**
    This function is called when the "show detail" button is clicked. It calls setShowDetail with item as the argument if showDetail is false, and with null as the argument if showDetail is true. This effectively toggles the display of the detail view of item.
   */
  const handleShowDetail = () => {
    setShowDetail(showDetail ? null : item);
  };

  /**
   This is what gets rendered by the component. It displays the id, name, and email of item and a "show detail" button. When the "show detail" button is clicked, it calls handleShowDetail, which toggles the display of the detail view.
   */
  return (
      <>
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td> 
        <td><button onClick={handleShowDetail}>show detail</button></td>  
      </tr>
      </>
  );
};

export default ListItem;
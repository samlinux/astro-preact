import type { Data } from '../interfaces/ListItem';
import ListItem from './ListItem';

/**
  This is a TypeScript interface that defines the props that ListTable expects. items is an array of data that should be displayed. showDetail is a number or null that indicates the ID of the item whose detail view should be displayed. setShowDetail is a function that's used to toggle the display of the detail view.
 */
interface ListTableProps {
  items: Array<Data>;
  showDetail: number | null;
  setShowDetail: (item:Data | null ) => void;
}

/**
  This is a functional component that receives items, showDetail, and setShowDetail as props.
 */
const ListTable = ({ items, showDetail, setShowDetail }: ListTableProps) => {
  /**
    This function is called when a list item is clicked. It calls setShowDetail with the clicked item as the argument if showDetail is not the ID of the clicked item, and with null as the argument if showDetail is the ID of the clicked item. This effectively toggles the display of the detail view of the clicked item.
   */
  const handleShowDetail = (selectedItem: Data) => {
    setShowDetail(showDetail ? null : selectedItem);
  };

  /**
   This is what gets rendered by the component. It displays a table with a row for each item in items. Each row is a ListItem component that receives item, showDetail, and setShowDetail as props. When a list item is clicked, it calls handleShowDetail with the clicked item as the argument, which toggles the display of the detail view.
   */
  return (
      <>
      <table>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>E-Mail</td> 
          <td></td>
        </tr>
        {
        items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            showDetail={showDetail === item.id}
            setShowDetail={() => handleShowDetail(item)}
          />
        ))
        }
      </table>
      </>
  );
};

export default ListTable;
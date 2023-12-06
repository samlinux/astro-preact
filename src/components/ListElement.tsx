import { useState } from 'preact/hooks';
import type { Data } from '../interfaces/ListItem';
import ListTable from './ListTable';
import ListDetail from './ListDetail';

/**
 This is a TypeScript interface that defines the props that ListElement expects. items is an array of data that should be displayed.
 */
interface ParentComponentProps {
  items: Data[];
}

/**
  This is a functional component that receives items as a prop.
 */
const ListElement = ({ items }:ParentComponentProps) => {

  /**
   useState: Two state variables are declared, showDetail and selectedItem. showDetail is initialized as null and will later hold the ID of the item that should be displayed in detail. selectedItem is also initialized as null and will later hold the data of the item that should be displayed in detail.
   */
  const [showDetail, setShowDetail] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<Data | null>(null);

  /**
   This function is called when a list item is clicked. It sets selectedItem to the clicked item and showDetail to the ID of the clicked item. If null is passed to handleShowDetail, it sets both selectedItem and showDetail to null. This effectively toggles the display of the detail view.
   */
  const handleShowDetail = (item: Data | null) => {
    setSelectedItem(item);
    setShowDetail(item ? item.id : null);
  };
 
  return (
     <div>
      {showDetail && selectedItem  ? (
        
        // ListDetail: This is a child component that receives selectedItem and handleShowDetail as props. 
        // It's responsible for rendering the details of the selected item. 
        // When the back button in ListDetail is clicked, it calls handleShowDetail with null 
        // as the argument, which hides the detail view.
        <ListDetail item={selectedItem} setShowDetail={handleShowDetail} />
      ) : (

        // ListTable: This is a child component that receives items, showDetail, 
        // and handleShowDetail as props. 
        // It's responsible for rendering the list of items. When a list item is clicked, 
        // it calls handleShowDetail with the clicked item as the argument, which displays 
        // the detail view of the clicked item.
        <ListTable items={items} showDetail={showDetail} setShowDetail={handleShowDetail} />        
      )}
    </div>
  );
};

export default ListElement;
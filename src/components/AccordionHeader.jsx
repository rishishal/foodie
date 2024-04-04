import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AccordionItems from "./AccordionItems";

const AccordionHeader = ({ data, resInfo, showItem, setShowItem }) => {
  const handleClick = () => {
    setShowItem(showItem);
  };

  return (
    <div>
      <div className="m-5">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={handleClick}
        >
          <h3 className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </h3>
          {showItem ? (
            <IoIosArrowUp className="h-5 w-5" />
          ) : (
            <IoIosArrowDown className="h-5 w-5" />
          )}
        </div>
        {showItem && (
          <AccordionItems resInfo={resInfo} items={data.itemCards} />
        )}
      </div>
    </div>
  );
};

export default AccordionHeader;

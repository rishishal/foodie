import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AccordionItems from "./AccordionItems";
const AccordionHeader = ({ data, showItem, setShowItem }) => {
  const handleClick = () => {
    setShowItem(!showItem);
  };

  return (
    <div className='flex justify-center mt-5'>
      <div className='mb-5 w-6/12'>
        <div
          className='flex items-center justify-between cursor-pointer'
          onClick={handleClick}
        >
          <h3 className=' text-lg font-semibold'>
            {data.title} ({data.itemCards.length})
          </h3>
          {showItem ? (
            <IoIosArrowUp className='h-5 w-5' />
          ) : (
            <IoIosArrowDown className='h-5 w-5' />
          )}
        </div>
        {showItem && <AccordionItems items={data.itemCards} />}
      </div>
    </div>
  );
};

export default AccordionHeader;

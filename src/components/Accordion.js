import { useState } from "react"
import { FaAngleLeft, FaAngleDown } from 'react-icons/fa'


function Accordion({ items }) {
    const [isExpand, setIsExpand] = useState(-1);

    const handleClick = (index) => {
        setIsExpand(index)
        if (isExpand === index) {
            setIsExpand(-1)
        }
        else {
            setIsExpand(index)
        }
    }
    const renderedItems = items.map((item, index) => {
        const content = isExpand === index;
        const icon = <span className="text-2xl">{content ? <FaAngleDown /> : <FaAngleLeft />}</span>
        return (<div className="w-80" key={item.id}>
            <div className="flex justify-between items-center p-3 border-b bg-gray-50 cursor-pointer" onClick={() => handleClick(index)}>{item.label}{icon}</div>
            {content && <div className="p-5 border-b ">{item.content}</div>}

        </div>)
    })

    return (<div className="border-x border-t rounded m-10">
        {renderedItems}
    </div>)
}

export default Accordion
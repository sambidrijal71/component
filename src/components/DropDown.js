import { useState, useEffect, useRef } from "react"
import { FaAngleDown } from 'react-icons/fa'
import Panel from './Panel'


function DropDown({ options, value, onChange }) {

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handler);
        return (() => {
            document.removeEventListener('click', handler);
        })
    }, [])

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option)
    }

    const renderedOptions = options.map((option) => {
        return (<div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => { handleOptionClick(option) }} key={option.label}>
            {option.value}
        </div>)
    })

    return (<div ref={divEl} className="w-48 relative">
        <Panel className="flex justify-between cursor-pointer items-center" onClick={handleClick}>{value || 'Select Your Choice'}<FaAngleDown className="text-xl" /></Panel>
        {isOpen && <Panel className=" absolute top-full">{renderedOptions}</Panel>}
    </div>)
}

export default DropDown

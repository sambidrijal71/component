import { useState } from 'react'
import DropDown from '../components/DropDown'

function DropDownPage() {

    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option.value)
    }
    const options = [
        { label: 'Extra Mild', value: 'Extra Mild Curry' },
        { label: 'Mild', value: 'Mild Curry' },
        { label: 'Spicy', value: 'Spicy Curry' },
        { label: 'Extra Spicy', value: 'Extra Spicy Curry' }
    ]
    return (<div className="flex">
        <DropDown options={options} value={selection} onChange={handleSelect} />
    </div>)
}

export default DropDownPage

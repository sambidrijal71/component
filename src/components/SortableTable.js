import Table from "./Table"
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import useSort from "../hooks/use-sort";

function SortableTable(props) {
    const { config, data } = props;
    const { sortOrder, sortBy, sortedData, handleClick } = useSort(data, config)

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () =>
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => { handleClick(column.label) }}>
                    <div className="flex items-center">{getIcons(column.label, sortBy, sortOrder)}
                        {column.label}</div>
                </th>

        }
    })



    return <Table {...props} config={updatedConfig} data={sortedData} />
}
const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
        return <div><FaAngleUp /> <FaAngleDown /></div>
    }
    if (sortOrder === null) {
        return <div><FaAngleUp /> <FaAngleDown /></div>
    }
    else if (sortOrder === 'asc') {
        return <div><FaAngleUp /> </div>
    }
    else {
        return <div><FaAngleDown /></div>
    }

}

export default SortableTable
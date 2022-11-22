import React, {useState, useEffect, useContext} from 'react'
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const Table = ({value}) => {
    const [rows, setRows] = useState([]);

    const requestStats = async () => {

        fetch("http://localhost:3001/getStats")
            .then((response) => response.json())
            .then((data) => setRows(data))
    }
    useEffect(() => {
        requestStats();
    },[value])

    const handleField = () => {
        if(value > 3)
            return "timeToComplete"
        else
            return "wordsTyped"
    }
    const handleHeader = () => {
        if(value > 3)
            return "Time To Complete (s)"
        else
            return "Words Typed"
    }
    const columns = [
        { field: 'user_email', headerName: 'Email', width: 220 },
        {
            field: 'percentError',
            headerName: 'Error (%)',
            type: 'number',
            width: 130,
        },
        {
            field: 'wordsPerMinute',
            headerName: 'Speed (WpM)',
            type: 'number',
            width: 170,
        },
        {
            field: handleField(),
            headerName: handleHeader(),
            type: 'number',
            width: 220,
        }   
    ];
    return (
        <Box className='table'>
            <DataGrid
                rows={rows.filter(row => row.gamemodeID == value)}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[7]}
                getRowId={(row) => row._id}
                initialState={{
                    sorting: {
                        sortModel: [{ field: 'wordsPerMinute', sort: 'desc' }],
                    },
                }}
            />
        </Box>
    )
}

export default Table
import React from 'react'
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './ModeBasedStats.css'

const ModeBasedStats = (props) => {
    const handleField = () => {
        if(props.idx > 3)
            return "timeToComplete"
        else
            return "wordsTyped"
    }
    const handleHeader = () => {
        if(props.idx > 3)
            return "Time To Complete (s)"
        else
            return "Words Typed"
    }
    const columns = [
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
        <div>
            <div className='gameModeTitle'>{props.gameMode}</div>
            <Box className='userStats'>
                <DataGrid
                    rows={props.rows.filter(row => row.gamemodeID == props.idx)}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    rowHeight={35}
                    getRowId={(row) => row._id}
                    initialState={{
                        sorting: {
                            sortModel: [{ field: 'wordsPerMinute', sort: 'desc' }],
                        },
                    }}
                />
            </Box>
        </div>
    )
}

export default ModeBasedStats
import * as React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'

const columns: GridColDef[] = [
  {
    field: 'collection',
    headerName: 'Collection',
    minWidth: 200,
    flex: 1,
    renderCell: params => (
      <div className="flex items-center">
        <div className="flex-shrink-0 h-9 w-9">
          <img className="h-9 w-9 border-zinc-800 rounded-full  object-cover" src={params.row.avatar} alt="" />
        </div>
        <div className="ml-4">
          <div className=" font-bold">{params.row.collection}</div>
        </div>
      </div>
    ),
  },
  {
    field: 'top_bid',
    headerName: 'Top Bid',
    type: 'number',
    width: 185,
    renderCell: params => (
      <div className="flex items-center">
        <div className="ml-4">
          <div className=" font-medium">{params.row.floor_price} ◎</div>
        </div>
      </div>
    ),
  },
  {
    field: 'floor_price',
    headerName: 'Floor Price',
    type: 'number',
    width: 185,
    renderCell: params => (
      <div className="flex items-center">
        <div className="ml-4">
          <div className=" font-bold">{params.row.floor_price} ◎</div>
        </div>
      </div>
    ),
  },
  {
    field: '1d_change',
    headerName: '1D Change',
    type: 'number',
    width: 130,
    renderCell: params => (
      <div className="flex items-center font-bold">
        {params.row['1d_change'] > 0 ? (
          <div className="ml-4 text-emerald-400 text-shadow-lg shadow-emerald-800">
            <div className=" font-medium">{params.row['1d_change']}%</div>
          </div>
        ) : (
          <div className="ml-4 text-pink-400 text-shadow-lg shadow-pink-800">
            <div className=" font-medium">{params.row['1d_change']}%</div>
          </div>
        )}
      </div>
    ),
  },
  {
    field: '7d_change',
    headerName: '7D Change',
    type: 'number',
    width: 130,
    renderCell: params => (
      <div className="flex items-center font-bold">
        {params.row['7d_change'] > 0 ? (
          <div className="ml-4 text-emerald-400 text-shadow-lg shadow-emerald-800">
            <div className=" font-medium">{params.row['7d_change']}%</div>
          </div>
        ) : (
          <div className="ml-4 text-pink-400 text-shadow-lg shadow-pink-800">
            <div className=" font-medium">{params.row['7d_change']}%</div>
          </div>
        )}
      </div>
    ),
  },
  {
    field: '1d_volume',
    headerName: '1 Day Volume',
    description: 'This column has a value getter and is not sortable.',
    type: 'number',
    renderCell: params => (
      <div className="flex items-center">
        <div className="ml-4 text-white text-shadow-lg shadow-white/10">
          <div className=" font-medium">{params.row['1d_volume']} ◎</div>
        </div>
      </div>
    ),
    width: 130, // valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: '7d_volume',
    headerName: '7 Day Volume',
    sortable: false,
    type: 'number',
    renderCell: params => (
      <div className="flex items-center">
        <div className="ml-4 text-white text-shadow-lg shadow-white/10">
          <div className=" font-medium">{params.row['7d_volume']} ◎</div>
        </div>
      </div>
    ),
    width: 130, // valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'listed',
    headerName: 'Listed',
    type: 'number',
    width: 130,
  },
  {
    field: 'supply',
    headerName: 'Supply',
    type: 'number',
    width: 130,
  },
]

let a1 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/3405.png'
let a2 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/3381.png'
let a3 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/1657.png'

const rows = [
  {
    id: 1,
    collection: 'SMB #2342',
    avatar: a1,
    floor_price: 0.2,
    '1d_change': 4.52,
    '7d_change': -10.22,
    '1d_volume': 34,
    '7d_volume': 234,
    listed: 123,
    supply: 10000,
  },
  {
    id: 2,
    collection: 'SMB #3381',
    avatar: a2,
    floor_price: 0.34,
    '1d_change': 2.02,
    '7d_change': 10.22,
    '1d_volume': 14,
    '7d_volume': 104,
    listed: 23,
    supply: 600,
  },
  {
    id: 3,
    collection: 'SMB #1657',
    avatar: a3,
    floor_price: 1.2,
    '1d_change': -2.32,
    '7d_change': -9.99,
    '1d_volume': 4,
    '7d_volume': 89,
    listed: 12,
    supply: 140,
  },
  {
    id: 1,
    collection: 'SMB #2342',
    avatar: a1,
    floor_price: 0.2,
    '1d_change': 4.52,
    '7d_change': -10.22,
    '1d_volume': 34,
    '7d_volume': 234,
    listed: 123,
    supply: 10000,
  },
  {
    id: 2,
    collection: 'SMB #3381',
    avatar: a2,
    floor_price: 0.34,
    '1d_change': 2.02,
    '7d_change': 10.22,
    '1d_volume': 14,
    '7d_volume': 104,
    listed: 23,
    supply: 600,
  },
  {
    id: 3,
    collection: 'SMB #1657',
    avatar: a3,
    floor_price: 1.2,
    '1d_change': -2.32,
    '7d_change': -9.99,
    '1d_volume': 4,
    '7d_volume': 89,
    listed: 12,
    supply: 140,
  },
  {
    id: 4,
    collection: 'SMB #2342',
    avatar: a1,
    floor_price: 0.2,
    '1d_change': 4.52,
    '7d_change': -10.22,
    '1d_volume': 34,
    '7d_volume': 234,
    listed: 123,
    supply: 10000,
  },
  {
    id: 5,
    collection: 'SMB #3381',
    avatar: a2,
    floor_price: 0.34,
    '1d_change': 2.02,
    '7d_change': 10.22,
    '1d_volume': 14,
    '7d_volume': 104,
    listed: 23,
    supply: 600,
  },
  {
    id: 6,
    collection: 'SMB #1657',
    avatar: a3,
    floor_price: 1.2,
    '1d_change': -2.32,
    '7d_change': -9.99,
    '1d_volume': 4,
    '7d_volume': 89,
    listed: 12,
    supply: 140,
  },
  {
    id: 7,
    collection: 'SMB #2342',
    avatar: a1,
    floor_price: 0.2,
    '1d_change': 4.52,
    '7d_change': -10.22,
    '1d_volume': 34,
    '7d_volume': 234,
    listed: 123,
    supply: 10000,
  },
  {
    id: 9,
    collection: 'SMB #3381',
    avatar: a2,
    floor_price: 0.34,
    '1d_change': 2.02,
    '7d_change': 10.22,
    '1d_volume': 14,
    '7d_volume': 104,
    listed: 23,
    supply: 600,
  },
  {
    id: 8,
    collection: 'SMB #1657',
    avatar: a3,
    floor_price: 1.2,
    '1d_change': -2.32,
    '7d_change': -9.99,
    '1d_volume': 4,
    '7d_volume': 89,
    listed: 12,
    supply: 140,
  },
  {
    id: 10,
    collection: 'SMB #2342',
    avatar: a1,
    floor_price: 0.2,
    '1d_change': 4.52,
    '7d_change': -10.22,
    '1d_volume': 34,
    '7d_volume': 234,
    listed: 123,
    supply: 10000,
  },
  {
    id: 12,
    collection: 'SMB #3381',
    avatar: a2,
    floor_price: 0.34,
    '1d_change': 2.02,
    '7d_change': 10.22,
    '1d_volume': 14,
    '7d_volume': 104,
    listed: 23,
    supply: 600,
  },
  {
    id: 13,
    collection: 'SMB #1657',
    avatar: a3,
    floor_price: 1.2,
    '1d_change': -2.32,
    '7d_change': -9.99,
    '1d_volume': 4,
    '7d_volume': 89,
    listed: 12,
    supply: 140,
  },
]

export default function CollectionTable(props: any) {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/collection/monke')
  }

  return (
    /* eslint-disable */
    <Box
      sx={{
        height: props.fullWidth ? '100%' : 'calc(100vh - 64px)',
        width: '100%',
        '& .app-theme': {
          border: 'none',
          hover: {
            backgroundColor: 'transparent',
          },
          borderBottom: 0,
        },
      }}
      className={`w-full ${props.fullWidth ? '' : 'max-w-8xl'}`}
    >
      <DataGrid
        sx={{
          boxShadow: 0,
        }}
        className="bg-transparent border-transparent font-bold"
        rows={rows}
        rowHeight={55}
        getRowClassName={params => `app-theme`}
        getCellClassName={params => `app-theme`}
        columns={columns}
        // go to collection page
        onRowClick={params => {
          handleClick()
        }}
        componentsProps={props}
        pageSize={100}
        disableSelectionOnClick={true}
        disableColumnSelector={true}
        rowsPerPageOptions={[5]}
      />
    </Box>
    /* eslint-enable */
  )
}

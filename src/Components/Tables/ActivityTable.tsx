import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { BsClock } from 'react-icons/bs'

const columns: GridColDef[] = [
  {
    field: 'time',
    headerName: 'time',
    width: 20,
    renderHeader: () => (
      <div className="flex items-center justify-center text-xs">
        <div className="">
          <BsClock />
        </div>
      </div>
    ),
    renderCell: params => (
      <div className="flex items-center justify-center text-center">
        <div style={{ fontSize: 12 }}> 4m</div>
      </div>
    ),
  },
  {
    field: 'item',
    headerName: 'item,',
    type: 'number',
    width: 50,
    renderHeader: () => (
      <div className="flex items-center text-xs">
        <div className="">
          <div className=" font-bold" style={{ fontSize: 11 }}>
            Item
          </div>
        </div>
      </div>
    ),
    renderCell: params => (
      <div className="flex items-center justify-center w-full">
        <div className="flex w-full">
          <img className="h-5 w-5 border-zinc-800 rounded object-cover" src={params.row.image} alt="" />
        </div>
      </div>
    ),
  },
  {
    field: 'price',
    headerName: 'price',
    type: 'number',
    renderHeader: () => (
      <div className="flex items-center text-xs">
        <div className="ml-4">
          <div className=" font-bold" style={{ fontSize: 11 }}>
            price
          </div>
        </div>
      </div>
    ),
    width: 80,
    renderCell: params => (
      <div className="flex items-center">
        <div className="ml-4">
          <div className=" font-bold" style={{ fontSize: 11 }}>
            {params.row.last_sale} SOL
          </div>
        </div>
      </div>
    ),
  },
  {
    field: 'seller',
    renderHeader: () => (
      <div className="flex items-center" style={{ fontSize: 11 }}>
        <div className="ml-4">
          <div className=" font-bold">seller</div>
        </div>
      </div>
    ),
    headerName: 'buyer',
    type: 'number',
    width: 70,
    renderCell: params => (
      <div className="flex items-center">
        <div className="ml-4">
          <div className=" font-bold" style={{ fontSize: 11 }}>
            {params.row.owner + 'x'}
          </div>
        </div>
      </div>
    ),
  },
  {
    field: 'buyer',
    renderHeader: () => (
      <div className="flex items-center" style={{ fontSize: 11 }}>
        <div className="ml-4">
          <div className=" font-bold">Buyer</div>
        </div>
      </div>
    ),
    headerName: 'buyer',
    type: 'number',
    width: 70,
    renderCell: params => (
      <div className="flex items-center">
        <div className="ml-4">
          <div className=" font-bold" style={{ fontSize: 11 }}>
            {params.row.owner}
          </div>
        </div>
      </div>
    ),
  },
]

let a1 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/3405.png'
let a2 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/3381.png'
let a3 = 'https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https://cdn.solanamonkey.business/gen2/1657.png'

const rows = [
  {
    id: 1,
    image: a1,
    collection: 'SMB #2342',
    edition: 1900,
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x1234',
    '#_held': 1,
  },
  {
    id: 2,
    image: a1,
    edition: 1344,

    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x6234',
    '#_held': 5,
  },
  {
    id: 990,
    image: a1,
    edition: 990,
    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x434',
    '#_held': 2,
  },
  {
    id: 3,
    image: a1,
    edition: 1344,
    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x6234',
    '#_held': 5,
  },
  {
    id: 12,
    image: a1,
    collection: 'SMB #2342',
    edition: 100,
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x1214',
    '#_held': 1,
  },
  {
    id: 23,
    image: a1,
    edition: 1344,

    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x6234',
    '#_held': 5,
  },
  {
    id: 9904,
    image: a1,
    edition: 190,
    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x4334',
    '#_held': 5,
  },
  {
    id: 3331,
    image: a1,
    edition: 1144,
    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x0234',
    '#_held': 6,
  },
  {
    id: 232,
    image: a1,
    edition: 44,
    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x0234',
    '#_held': 10,
  },
  {
    id: 2364,
    image: a1,
    edition: 1000,
    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x1334',
    '#_held': 5,
  },
  {
    id: 312,
    image: a1,
    edition: 34,
    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x0214',
    '#_held': 16,
  },
]

export default function ActivityTable() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/collection/monke')
  }

  return (
    <div className="w-full ">
      <div className="w-full px-5 pt-5 border-[#303030] text-sm font-bold text-shadow shadow-pink-600/20">
        {' '}
        Activity
      </div>
      <Box
        sx={{
          height: 300,
          width: '100%',
          '& .app-theme': {
            border: 'none',
            hover: {
              backgroundColor: 'transparent',
            },
            borderBottom: 0,
          },
        }}
        className="px-4"
      >
        <DataGrid
          sx={{
            boxShadow: 0,
          }}
          className="bg-transparent border-transparent font-bold  overflow-y-scroll"
          rows={rows}
          rowHeight={35}
          getRowClassName={params => `app-theme`}
          getCellClassName={params => `app-theme`}
          columns={columns}
          disableSelectionOnClick
          onRowClick={params => {
            handleClick()
          }}
          pageSize={100}
        />
      </Box>
    </div>
  )
}

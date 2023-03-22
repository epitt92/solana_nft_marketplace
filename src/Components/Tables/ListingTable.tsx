import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { BiAddToQueue, BiGrid, BiLayer, BiListUl } from 'react-icons/bi'
import { BsViewStacked } from 'react-icons/bs'

const columns: GridColDef[] = [
  {
    field: 'collection',
    headerName: 'Listed',
    width: 200,
    renderCell: params => (
      <div className="flex items-center">
        <div className="flex-shrink-0 h-9 w-9">
          <img className="h-9 w-9 border-zinc-800 rounded  object-cover" src={params.row.image} alt="" />
        </div>
        <div className="ml-4">
          <div className=" font-bold">{params.row.collection}</div>
          <div className=" font-medium text-xs mt-0.5">#{params.row.edition}</div>
        </div>
      </div>
    ),
  },
  {
    field: 'floor_price',
    headerName: 'Buy Now',
    type: 'number',
    width: 130,
    renderHeader: () => (
      <div className="flex items-center text-xs">
        <div className="ml-4">
          <div className=" font-bold">Buy Now</div>
        </div>
      </div>
    ),
    renderCell: params => (
      <div className="flex items-center">
        <div className="ml-4">
          <div className=" font-medium">{params.row.floor_price} SOL</div>
        </div>
      </div>
    ),
  },
  {
    field: 'last_sale',
    headerName: 'last sale',
    type: 'number',
    renderHeader: () => (
      <div className="flex items-center text-xs">
        <div className="ml-4">
          <div className=" font-bold">Last Sale</div>
        </div>
      </div>
    ),
    width: 130,
    renderCell: params => (
      <div className="flex items-center">
        <div className="ml-4">
          <div className=" font-medium">{params.row.last_sale} SOL</div>
        </div>
      </div>
    ),
  },
  {
    field: 'top_bid',
    renderHeader: () => (
      <div className="flex items-center text-xs">
        <div className="ml-4">
          <div className=" font-bold">Top Bid</div>
        </div>
      </div>
    ),
    headerName: 'top bid',
    type: 'number',
    width: 130,
    renderCell: params => (
      <div className="flex items-center">
        <div className="ml-4">
          <div className=" font-medium">{params.row.top_bid} SOL</div>
        </div>
      </div>
    ),
  },
  {
    field: 'owner',
    headerName: 'owner',
    description: 'This column has a value getter and is not sortable.',
    type: 'number',
    renderHeader: () => (
      <div className="flex items-center text-xs">
        <div className="ml-4">
          <div className=" font-bold">Owner</div>
        </div>
      </div>
    ),
    renderCell: params => (
      <div className="flex items-center">
        <div className="ml-4 text-white text-shadow-lg shadow-white/10">
          <div className=" font-medium">{params.row.owner}</div>
        </div>
      </div>
    ),
    width: 100, // valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: '#_held',
    headerName: '# Held',
    sortable: false,
    type: 'number',
    renderHeader: () => (
      <div className="flex items-center text-xs">
        <div className="ml-4">
          <div className=" font-bold"># Held</div>
        </div>
      </div>
    ),
    renderCell: params => (
      <div className="flex items-center">
        <div className="ml-4 text-white text-shadow-lg shadow-white/10">
          <div className=" font-medium">{params.row['#_held']}</div>
        </div>
      </div>
    ),
    width: 100, // valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
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
  {
    id: 5312,
    image: a1,
    edition: 34,
    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x0214',
    '#_held': 16,
  },
  {
    id: 3512,
    image: a1,
    edition: 34,
    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x0214',
    '#_held': 16,
  },
  {
    id: 3452,
    image: a1,
    edition: 34,
    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x0214',
    '#_held': 16,
  },
  {
    id: 442,
    image: a1,
    edition: 34,
    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x0214',
    '#_held': 16,
  },
  {
    id: 546,
    image: a1,
    edition: 34,
    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x0214',
    '#_held': 16,
  },
  {
    id: 3958,
    image: a1,
    edition: 34,
    collection: 'SMB #2342',
    floor_price: 0.24,
    last_sale: 0.22,
    top_bid: 0.25,
    owner: '0x0214',
    '#_held': 16,
  },
  {
    id: 952,
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

export default function ListingTable() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/collection/monke')
  }

  return (
    <div className="w-full ">
      <div className="w-full p-4 border-b  flex justify-between items-center border-[#303030] font-bold text-pink-400 text-shadow shadow-pink-600/20">
        {' '}
        <span className="inline-flex items-center space-x-2 text-shadow-lg shadow-pink-400/50">
          {' '}
          <BiLayer className="mr-2 shadow-xl text-shadow shadow-pink-400/50" /> Listings
        </span>
        <div>
          <span className="text-white">
            {' '}
            <span className="isolate inline-flex rounded-md shadow-sm">
              <button type="button" className="relative inline-flex items-center  px-2 ">
                <BiGrid className="w-5 h-5" />
              </button>
              <button type="button" className="relative inline-flex items-center px-2   ">
                <BiListUl className="w-7 h-7" />
              </button>
            </span>
          </span>
        </div>
      </div>
      <Box
        sx={{
          height: 'calc(100vh - 20px)',
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
          rowHeight={55}
          getRowClassName={params => `app-theme`}
          getCellClassName={params => `app-theme`}
          columns={columns}
          checkboxSelection
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

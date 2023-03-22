import React from 'react'
import CollectionTable from '../../../Components/Tables/CollectionTable'
import CollectionsHeader from '../../../Components/Headers/CollectionsHeader'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { BsStack } from 'react-icons/bs'
import { BiTrendingUp } from 'react-icons/bi'

export default function Collections() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div className="h-screen w-full flex-col items-center justify-center flex">
      <div className="fixed w-full">
        <div className="w-full border-b border-[#303030] h-18  ">
          <Tabs className="h-18" value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab icon={<BsStack />} iconPosition="start" label="Collections" {...a11yProps(0)} />
            <Tab icon={<BiTrendingUp />} iconPosition="start" label="Trending" {...a11yProps(1)} />
          </Tabs>
        </div>{' '}
        <TabPanel value={value} index={0}>
          <CollectionTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {' '}
          <CollectionTable />
        </TabPanel>
      </div>
    </div>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      className="w-full h-full"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

import React from 'react'
import { useSelector } from 'react-redux'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

export default function UserTabs() {
    const albums = useSelector((state) => state.users.usersAlbums)
    const todos = useSelector((state) => state.users.usersTodos)
    const posts = useSelector((state) => state.users.usersPosts)

    const [selectedTab, setSelectedTab] = React.useState(0)


    const tabNameToIndex = {
        0:'albums',
        1:'todos',
        2:'about',
    }

    // const indexToTabName = {
    //     albums:0,
    //     todos:1,
    //     about:2,
    // }

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue)
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="Albums" component={Link} to={tabNameToIndex[0]}/>
                    <Tab label="Todo" component={Link} to={tabNameToIndex[1]} />
                    <Tab label="Posts" component={Link} to={tabNameToIndex[2]} />
                </Tabs>
            </Box>
            <TabPanel value={selectedTab} index={0}>
                {albums.map((album) => (
                    <div key={album.id}>
                        <p>{album.title}</p>
                    </div>
                ))}
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            readOnly
                        />
                        <span>{todo.title}</span>
                    </div>
                ))}
            </TabPanel>
            <TabPanel value={selectedTab} index={2}>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </TabPanel>
        </Box>
    )
}

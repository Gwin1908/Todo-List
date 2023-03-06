import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LanguageIcon from '@mui/icons-material/Language'
import HomeIcon from '@mui/icons-material/Home'
import BusinessIcon from '@mui/icons-material/Business'
import UserTabs from './UserTabs'
import styles from './UserDetails.module.css'

export default function UserDetails({
    email,
    website,
    phone,
    address: { street, city, suite, zipcode },
    company: { bs, catchPhrase, name },
}) {
    return (
        <>
            <div className={styles.details}>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} secondary="Email" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LanguageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={website} secondary="Website" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <PhoneIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={phone} secondary="Phone" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <HomeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={(city, street, suite, zipcode)}
                            secondary="Address"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BusinessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={(bs, catchPhrase, name)}
                            secondary="Company"
                        />
                    </ListItem>
                </List>
            </div>
            <UserTabs />
        </>
    )
}

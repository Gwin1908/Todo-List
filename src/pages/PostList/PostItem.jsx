import React from 'react'
import Grid from '@mui/material/Grid'

export default function PostItem({ id, title, body }) {
    return (
        <Grid item xs="12" md="6">
            <div key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </Grid>
    )
}

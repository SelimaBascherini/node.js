import express from 'express'

const app = express()
const port = 3000

import * as album from './route.mjs'

app.delete('/album/:id', album.deleteAlbum)
app.post('/album', album.createAlbum)
app.post('/album/${albumId}/photos', album.addPhotoToAlbum)
app.delete('album/${albumId}/photos/${photoId}', album.removePhotoFromAlbum)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
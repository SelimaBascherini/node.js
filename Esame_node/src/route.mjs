import axios from 'axios'
import fs from 'fs/promises
import album from '../db/album.json' assert { type: 'json' }

export async function createAlbum(nome, hashtags) {
  try {
    const album = {
      nome: nome,
      fotografie: [],
      hashtags: hashtags,
      dataCreazione: new Date().toISOString(),
      dataModifica: new Date().toISOString()
    };

    const res = await axios.post('http://localhost:3000/album', album);
    console.log('Album creato:', res.data);
  } catch (error) {
    console.error('Errore durante la creazione dell\'album:', error);
  }
}

export async function createAlbum(req, res) {
  try {
    const duplicateAlbum = ids.some(id => albums[id].nome === req.body.nome);

    if (duplicateAlbum) {
      return res.status(200).send({
        message: `Esiste già un album con il nome: ${req.body.nome}`,
      });
    }
  } catch (error) {
    return res.status(500).send({
      error: true,
      message: 'errore',
    });
  }
}
export async function deleteAlbum(albumId) {
  try {
    const res = await axios.delete(`http://localhost:3000/album/${albumId}`);
    console.log('Album cancellato:', res.status);
  } catch (error) {
    console.error('Errore durante la cancellazione:', error);
  }
}

// export async function addPhotoToAlbum(albumId, photoData) {
//   try {
//     const photo = {
//       nome: photoData.nome,
//       dataCreazione: new Date().toISOString(),
//       dataModifica: new Date().toISOString(),
//       hashtags: photoData.hashtags
//     };

//     const res = await axios.post(`http://localhost:3000/album/${albumId}/photos`, photo);
//     console.log('Foto aggiunta all\'album:', res.data);
//   } catch (error) {
//     console.error('Errore durante l\'aggiunta della foto all\'album:', error);
//   }
// }

export const addPhotoToAlbum = async (req, res) => {
  const idAlbum = req.params.id;

  if (!albums[idAlbum] || albums[idAlbum].deleted) {
    return res.status(404).json({
      error: true,
      message: 'Album not found',
    });
  }

  const newPhoto = {
    name: '',
    hashtags: [],
    ...req.body,
    
  };

  albums[idAlbum].photos.push(newPhoto);

  try {
    await fs.writeFile(DB_PATH_ALBUM, JSON.stringify(albums, null, 2));
    return res.status(201).json({
      message: 'Photo created',
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: 'Internal server error',
    });
  }
};

 export async function removePhotoFromAlbum(albumId, photoId) {
   try {
     const res = await axios.delete(`http://localhost:3000/album/${albumId}/photos/${photoId}`);
     console.log('Foto rimossa dall\'album:', res.status);
   } catch (error) {
    console.error('Errore durante la rimozione della foto dall\'album:', error);
   }
 }

//  export const deleteAlbum = async (req, res) => {
//   const albumName = req.body.nome;
//   const albumIds = Object.keys(albums);

//   for (let i = 0; i < albumIds.length; i++) {
//     const album = albums[albumIds[i]];

//     if (album.nome === albumName) {
//       delete albums[albumIds[i]];

//       try {
//         await fs.writeFile(DB_ALBUMS, JSON.stringify(albums, null, '  '));

//         return res.status(200).send({
//           message: 'Album ' + albumName + ' eliminato con successo'
//         });
//       } catch (error) {
//         return res.status(500).send({
//           message: 'Errore durante la scrittura del file',
//           error: true
//         });
//       }
//     }
//   }

//   res.status(200).send({
//     message: 'Non esiste un album con il nome: ' + albumName
//   });
// };
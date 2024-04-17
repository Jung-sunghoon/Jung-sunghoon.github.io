import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListSubheader from '@mui/material/ListSubheader'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'

// upload button
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import axios from 'axios'
import * as gh from '../githublibrary.js'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const Test = () => {
  const [itemData, setItemData] = useState([])

  const fileLoad = async () => {
    let result = await gh.fileRead('images')
    let fileList = result.data.map(item => item.path)

    let temp = []
    let count = 1
    for (let path of fileList) {
      let obj = {
        img: `https://github.com/bloodstrawberry/auto-test/raw/main/${path}`,
        title: `image_${count++}`,
        author: 'bloodstrawberry',
      }

      temp.push(obj)
    }

    setItemData(temp)
  }

  useEffect(() => {
    fileLoad()
  }, [])

  // const githubUpload = (image) => {
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     const base64encoded = reader.result.split(",")[1];
  //     const apiURL = `https://api.github.com/repos/bloodstrawberry/auto-test/contents/images/${image.name}`;
  //     const accessToken = process.env.REACT_APP_MY_TOKEN;

  //     fetch(apiURL, {
  //       method: "PUT",
  //       headers: {
  //         Authorization: `token ${accessToken}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         message: "Add image",
  //         content: base64encoded,
  //         branch: "main",
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Image uploaded successfully:", data.content.name);
  //       })
  //       .catch((error) => {
  //         console.error("Error uploading image:", error);
  //       });
  //   };

  //   reader.readAsDataURL(image);
  // };

  const githubUpload = async (image: any) => {
    const reader = new FileReader()

    reader.onloadend = async () => {
      const base64encoded: string = reader?.result?.split(',')[1]
      const apiURL = `https://api.github.com/repos/Jung-sunghoon/portfolio_img/contents/images/${image.name}`
      const accessToken = process.env.REACT_APP_MY_TOKEN

      try {
        const response = await axios.put(
          apiURL,
          {
            message: 'Add image',
            content: base64encoded,
            branch: 'main',
          },
          {
            headers: {
              Authorization: `token ${accessToken}`,
              'Content-Type': 'application/json',
            },
          },
        )

        console.log('Image uploaded successfully:', response.data.content.name)
      } catch (error) {
        console.error('Error uploading image:', error)
      }
    }

    reader.readAsDataURL(image)
  }

  const handleFileUpload = e => {
    const selectedImages = e.target.files

    const uploadImageWithDelay = async () => {
      githubUpload(selectedImages[0])
      for (let i = 1; i < selectedImages.length; i++) {
        await new Promise<void>(resolve => {
          setTimeout(() => {
            githubUpload(selectedImages[i])
            resolve()
          }, 5000) // 5초 delay
        })
      }
    }

    uploadImageWithDelay()
  }

  return (
    <Box sx={{ m: 3 }}>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        onChange={handleFileUpload}
      >
        Upload file
        <VisuallyHiddenInput type="file" accept="image/*" multiple />
      </Button>
      <ImageList sx={{ width: 248 * 3 }} cols={3}>
        <ImageListItem key="Subheader" cols={3}>
          <ListSubheader component="div">GitHub Images Directory</ListSubheader>
        </ImageListItem>
        {itemData.map(item => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default Test

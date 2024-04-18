import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../../pages/Blog/blogs.module.css'

const ImgUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [imageUrls, setImageUrls] = useState<string[]>([])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  useEffect(() => {
    const fetchRepoContents = async () => {
      try {
        if (location.pathname.includes('/create')) {
          setImageUrls([])
        } else {
          const response = await axios.get(
            `https://api.github.com/repos/Jung-sunghoon/portfolio_img/contents/images`,
          )
          const images = response.data.filter(
            (content: any) =>
              content.type === 'file' &&
              content.name.match(/\.(jpeg|jpg|gif|png)$/i),
          )
          const urls = images.map((image: any) => image.download_url)
          setImageUrls(urls)
        }
      } catch (error) {
        console.error('Error fetching repo contents:', error)
      }
    }
    fetchRepoContents()
  }, [selectedFile])

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const reader = new FileReader()
        reader.onloadend = async () => {
          if (reader.result) {
            const base64encoded = reader.result.toString().split(',')[1]
            const apiURL = `https://api.github.com/repos/Jung-sunghoon/portfolio_img/contents/images/${selectedFile.name}`
            const accessToken = import.meta.env.VITE_GITHUB_KEY

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

            console.log(
              'Image uploaded successfully:',
              response.data.content.name,
            )

            // 이미지가 성공적으로 업로드된 후에 이미지 URL을 업데이트
            setImageUrls(prevUrls => [
              ...prevUrls,
              response.data.content.download_url,
            ])
          }
        }
        reader.readAsDataURL(selectedFile)
      } catch (error) {
        console.error('Error uploading image:', error)
      }
    }
  }

  return (
    <div>
      <div className={styles.thumbnailLoad}>
        {imageUrls.length > 0 && (
          <img
            src={imageUrls[imageUrls.length - 1]}
            style={{ maxHeight: '180px' }}
          />
        )}
        <div>미리보기</div>
      </div>
      <div style={{ display: 'flex' }}>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  )
}

export default ImgUpload

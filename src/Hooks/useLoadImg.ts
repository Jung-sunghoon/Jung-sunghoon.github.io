import { useEffect, useState } from 'react'
import axios from 'axios'

const useLoadImg = (imgURL: string) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(imgURL)
        const data = response.data.body
        const regexURL = /\(([^)] + )\)/
        const splitImgData = data.split(regexURL)

        const result = splitImgData.filter((str: string) =>
          str.startsWith('https'),
        )
        setImages(result)
        console.log(response, 'response')
      } catch (error) {
        console.log('error: ', error)
      }
    }
    fetchData()
  }, [])
  return images
}

export default useLoadImg

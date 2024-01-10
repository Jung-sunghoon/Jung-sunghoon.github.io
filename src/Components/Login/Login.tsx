// GoogleLoginButton.tsx
import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'

const GoogleLoginButton: React.FC = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID // 여기에 Google Developer Console에서 발급받은 클라이언트 ID를 입력하세요

  const googleLoginInfo = async (credentialResponse: string) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/auth/verify-google-id-token`,
        { credentialResponse: credentialResponse },
      )
      console.log(response.data)
    } catch (error) {
      console.error('Error sending data to server:')
    }
  }

  return (
    <React.Fragment>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            if (credentialResponse !== undefined) {
              googleLoginInfo(credentialResponse.credential as string)
              console.log(
                jwtDecode(credentialResponse.credential as string),
                'login',
              )
            }
          }}
          onError={() => {
            console.log('login Failed')
          }}
        />
      </GoogleOAuthProvider>
    </React.Fragment>
  )
}

export default GoogleLoginButton

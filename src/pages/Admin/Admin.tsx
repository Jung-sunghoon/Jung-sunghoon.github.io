import GoogleLoginButton from '@src/Components/Googlelogin/GoogleLoginButton'

const Admin = () => {
  return (
    <div id="admin" style={{ margin: '100px' }}>
      <div style={{ marginBottom: '20px' }}>관리자 로그인을 위한 화면</div>
      <div style={{ width: '700px' }}>
        <GoogleLoginButton />
      </div>
    </div>
  )
}

export default Admin

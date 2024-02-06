import GoogleLoginButton from '@src/Components/Googlelogin/Googlelogin'

const Admin = () => {
  return (
    <div id="admin" style={{ margin: '100px' }}>
      <div style={{ marginBottom: '20px' }}>관리자 로그인을 위한 화면</div>
      <GoogleLoginButton />
    </div>
  )
}

export default Admin

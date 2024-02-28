import GoogleLoginButton from '@src/Components/Googlelogin/GoogleLoginButton'
import './admin.css'

// 구글 로그인을 위한 페이지

const Admin = () => {
  return (
    <div id="admin" className="admin">
      <div className="adminTitle">관리자 로그인을 위한 화면</div>
      <div>
        <GoogleLoginButton />
      </div>
    </div>
  )
}

export default Admin

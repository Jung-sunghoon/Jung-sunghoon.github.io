import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'

const { darkAlgorithm } = theme

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{
      algorithm: darkAlgorithm, // 다크 알고리즘 강제 적용
      token: {
        colorBgContainer: '#141414', // 카드 배경색
        colorText: 'rgba(255, 255, 255, 0.85)', // 기본 텍스트
        colorBorder: '#303030', // 테두리 색상
        colorPrimary: '#202020', // 기본 액센트 색상
      },
      components: {
        Card: {
          colorBgContainer: '#141414', // 카드 배경 오버라이드
        },
        Pagination: {
          colorBgContainer: '#141414', // 페이지네이션 배경
          colorText: 'rgba(255, 255, 255, 0.85)', // 페이지 번호
        },
      },
    }}
  >
    <Router>
      <App />
    </Router>
  </ConfigProvider>,
)

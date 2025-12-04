import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Home />} />

                  {/* Các trang sau bạn có thể thêm dần */}
                  <Route path="/products" element={<div style={{padding: '100px', textAlign: 'center', fontSize: '32px'}}>Trang Products (sắp ra mắt)</div>} />
                  <Route path="/promotions" element={<div style={{padding: '100px', textAlign: 'center', fontSize: '32px'}}>Khuyến mãi HOT!</div>} />
                  <Route path="/about" element={<div style={{padding: '100px', textAlign: 'center', fontSize: '32px'}}>Về SocolaShop</div>} />
                  <Route path="/contact" element={<div style={{padding: '100px', textAlign: 'center', fontSize: '32px'}}>Liên hệ</div>} />

                  {/* 404 */}
                  <Route path="*" element={
                      <div style={{padding: '100px', textAlign: 'center'}}>
                          <h1>404 - Không tìm thấy trang</h1>
                          <p><a href="/">Quay về trang chủ</a></p>
                      </div>
                  } />
              </Routes>
          </div>
      </Router>
  );
}
export default App;

import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Layout() {
  return (
    <div className="app-fixed-layout">
      <Navbar />
      <main className="scrollable-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


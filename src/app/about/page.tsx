import Sidebar from '@/components/common/Sidebar';
import About from '@/components/about/About';
import Footer  from '@/components/common/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-6 md:pt-24 md:px-32 overflow-y-auto bg-[#191919] md:ml-64 flex justify-center items-center min-h-screen">
        <div className="w-full max-w-4xl">
          <About />
          <Footer />
        </div>
        <ToastContainer position="top-right" autoClose={2500} />
      </main>
    </div>
  );
}

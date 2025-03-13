import Sidebar from '@/components/common/Sidebar';
import Projects from '@/components/projects/Project';
import Contact from '@/components/common/Contact';
import Footer  from '@/components/common/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-6 md:pt-24 md:px-32 overflow-y-auto bg-[#191919] md:ml-64 flex justify-center items-center min-h-screen">
        <div className="w-full max-w-4xl">
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}

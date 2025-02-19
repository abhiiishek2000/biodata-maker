import BiodataForm from '@/components/BiodataForm';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Biodata Maker</h1>
        <BiodataForm />
      </div>
    </main>
  );
}
const TestHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center gap-4">
        <img 
          src="/logo-normalitec.png" 
          alt="Normalitec Logo" 
          className="h-10 w-auto"
        />
        <h1 className="text-2xl font-bold text-primary">Test Psicométrico</h1>
      </div>
    </header>
  );
};

export default TestHeader;

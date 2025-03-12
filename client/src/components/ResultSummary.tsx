interface ResultSummaryProps {
  part1ScoreA: number;
  part1ScoreB: number;
  part2ScoreA: number;
  part2ScoreB: number;
  totalScoreA: number;
  totalScoreB: number;
  onSubmit: () => void;
}

const ResultSummary = ({
  part1ScoreA,
  part1ScoreB,
  part2ScoreA,
  part2ScoreB,
  totalScoreA,
  totalScoreB,
  onSubmit
}: ResultSummaryProps) => {
  return (
    <div className="bg-white shadow rounded-lg mb-6">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Resultados del Test</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Primera Parte</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded">
              <p className="text-gray-700 font-medium">Puntuación A</p>
              <p className="text-2xl font-bold text-primary">{part1ScoreA}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <p className="text-gray-700 font-medium">Puntuación B</p>
              <p className="text-2xl font-bold text-primary">{part1ScoreB}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Segunda Parte</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded">
              <p className="text-gray-700 font-medium">Puntuación A</p>
              <p className="text-2xl font-bold text-primary">{part2ScoreA}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <p className="text-gray-700 font-medium">Puntuación B</p>
              <p className="text-2xl font-bold text-primary">{part2ScoreB}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Puntuación Total</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 rounded border-l-4 border-primary">
              <p className="text-gray-700 font-medium">Total A</p>
              <p className="text-3xl font-bold text-primary">{totalScoreA}</p>
            </div>
            <div className="p-4 bg-gray-100 rounded border-l-4 border-primary">
              <p className="text-gray-700 font-medium">Total B</p>
              <p className="text-3xl font-bold text-primary">{totalScoreB}</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <button 
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            onClick={onSubmit}
          >
            Enviar Resultados
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultSummary;

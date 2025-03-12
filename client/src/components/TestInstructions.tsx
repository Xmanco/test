interface TestInstructionsProps {
  currentPart: number;
  onStart: () => void;
}

const TestInstructions = ({ currentPart, onStart }: TestInstructionsProps) => {
  return (
    <div className="bg-white shadow rounded-lg mb-6 p-6">
      <h2 className="text-xl font-semibold mb-4">
        Test Psicométrico - {currentPart === 1 ? 'Primera Parte' : 'Segunda Parte'}
      </h2>
      
      {currentPart === 1 ? (
        <p className="mb-4">
          Por favor marque cero, uno, dos o tres puntos en las casillas del centro, 
          según la importancia que usted le da a cada frase en su vida personal.
        </p>
      ) : (
        <p className="mb-4">
          Por favor marque cero, uno, dos o tres puntos en las casillas del centro para
          la frase más inaceptable, según su juicio. El puntaje más alto será para
          la frase que indique lo peor.
        </p>
      )}
      
      <p className="mb-2">Las únicas opciones de respuesta son:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Totalmente de acuerdo con A: 3 puntos a A y 0 puntos a B</li>
        <li>Ligeramente de acuerdo con A: 2 puntos a A y 1 punto a B</li>
        <li>Ligeramente de acuerdo con B: 1 punto a A y 2 puntos a B</li>
        <li>Totalmente de acuerdo con B: 0 puntos a A y 3 puntos a B</li>
      </ul>
      
      <p className="font-medium text-gray-700">
        Siempre la suma de puntos de las dos casillas debe ser 3.
      </p>
      
      <button 
        className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        onClick={onStart}
      >
        {currentPart === 1 ? 'Comenzar' : 'Comenzar Segunda Parte'}
      </button>
    </div>
  );
};

export default TestInstructions;

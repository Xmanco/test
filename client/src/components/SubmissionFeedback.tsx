import { CheckIcon } from "lucide-react";

interface SubmissionFeedbackProps {
  onRestart: () => void;
}

const SubmissionFeedback = ({ onRestart }: SubmissionFeedbackProps) => {
  return (
    <div className="bg-white shadow rounded-lg mb-6">
      <div className="p-6 text-center">
        <div className="w-16 h-16 bg-success rounded-full mx-auto flex items-center justify-center mb-4">
          <CheckIcon className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-xl font-semibold mb-2">¡Resultados Enviados!</h2>
        <p className="text-gray-600 mb-6">Gracias por completar el Test Psicométrico.</p>
        <button 
          className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          onClick={onRestart}
        >
          Realizar otro test
        </button>
      </div>
    </div>
  );
};

export default SubmissionFeedback;

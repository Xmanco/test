interface ProgressIndicatorProps {
  currentPart: number;
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressIndicator = ({ 
  currentPart, 
  currentQuestion, 
  totalQuestions 
}: ProgressIndicatorProps) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          {currentPart === 1 ? 'Primera Parte' : 'Segunda Parte'}
        </span>
        <span className="text-sm font-medium text-gray-700">
          {currentQuestion}/{totalQuestions}
        </span>
      </div>
      <div className="overflow-hidden h-2 rounded-full bg-gray-200">
        <div 
          className="h-2 rounded-full bg-primary" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;

import { Question, scoringOptions } from "../data/questions";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface QuestionCardProps {
  currentPart: number;
  currentQuestion: number;
  question: Question;
  onPrev: () => void;
  onNext: () => void;
  onSelectOption: (value: string) => void;
  selectedValue: string | null;
  validationError: boolean;
  isFirstQuestion: boolean;
}

const QuestionCard = ({
  currentPart,
  currentQuestion,
  question,
  onPrev,
  onNext,
  onSelectOption,
  selectedValue,
  validationError,
  isFirstQuestion
}: QuestionCardProps) => {
  return (
    <div className="bg-white shadow rounded-lg mb-6">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-6">
          Pregunta {currentQuestion}
          {currentPart === 2 && " - Seleccione la frase más inaceptable"}
        </h2>
        
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-800 font-medium">A: {question.optionA}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-800 font-medium">B: {question.optionB}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-gray-700 mb-3 font-medium">Seleccione su respuesta:</p>
            <RadioGroup
              value={selectedValue || ""}
              onValueChange={onSelectOption}
              className="flex flex-col space-y-3"
            >
              <div className="flex items-center space-x-2 p-2 bg-white border rounded hover:bg-gray-50">
                <RadioGroupItem value="3-0" id="r1" />
                <Label htmlFor="r1" className="flex-grow">
                  Totalmente de acuerdo con A <span className="text-sm text-gray-500 ml-2">(3 puntos a A - 0 puntos a B)</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-white border rounded hover:bg-gray-50">
                <RadioGroupItem value="2-1" id="r2" />
                <Label htmlFor="r2" className="flex-grow">
                  Ligeramente de acuerdo con A <span className="text-sm text-gray-500 ml-2">(2 puntos a A - 1 punto a B)</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-white border rounded hover:bg-gray-50">
                <RadioGroupItem value="1-2" id="r3" />
                <Label htmlFor="r3" className="flex-grow">
                  Ligeramente de acuerdo con B <span className="text-sm text-gray-500 ml-2">(1 punto a A - 2 puntos a B)</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-white border rounded hover:bg-gray-50">
                <RadioGroupItem value="0-3" id="r4" />
                <Label htmlFor="r4" className="flex-grow">
                  Totalmente de acuerdo con B <span className="text-sm text-gray-500 ml-2">(0 puntos a A - 3 puntos a B)</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        
        {validationError && (
          <div className="text-red-600 text-sm mb-4 font-medium">
            Por favor seleccione una opción para continuar.
          </div>
        )}
        
        <div className="flex justify-between mt-6">
          <button 
            className="px-4 py-2 border border-gray-300 rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 disabled:opacity-50"
            onClick={onPrev}
            disabled={isFirstQuestion}
          >
            Anterior
          </button>
          <button 
            className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            onClick={onNext}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;

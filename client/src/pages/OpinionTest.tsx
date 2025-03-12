import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import TestHeader from "@/components/TestHeader";
import ProgressIndicator from "@/components/ProgressIndicator";
import TestInstructions from "@/components/TestInstructions";
import QuestionCard from "@/components/QuestionCard";
import ResultSummary from "@/components/ResultSummary";
import SubmissionFeedback from "@/components/SubmissionFeedback";
import PersonalDataForm from "@/components/PersonalDataForm";
import { part1Questions, part2Questions } from "@/data/questions";

const OpinionTest = () => {
  // State for test flow
  const [showPersonalDataForm, setShowPersonalDataForm] = useState(true);
  const [currentPart, setCurrentPart] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [validationError, setValidationError] = useState(false);
  
  // Personal data state
  const [personalData, setPersonalData] = useState({
    nombre: "",
    edad: "",
    sexo: ""
  });

  // State for scores
  const [part1Scores, setPart1Scores] = useState<(string | null)[]>(
    Array(part1Questions.length).fill(null)
  );
  const [part2Scores, setPart2Scores] = useState<(string | null)[]>(
    Array(part2Questions.length).fill(null)
  );

  // Calculated scores
  const [calculatedScores, setCalculatedScores] = useState({
    part1ScoreA: 0,
    part1ScoreB: 0,
    part2ScoreA: 0,
    part2ScoreB: 0,
    totalScoreA: 0,
    totalScoreB: 0,
  });

  const { toast } = useToast();

  // Calculate scores whenever part1Scores or part2Scores change
  useEffect(() => {
    calculateScores();
  }, [part1Scores, part2Scores]);

  // Calculate all scores
  const calculateScores = () => {
    let part1A = 0;
    let part1B = 0;
    let part2A = 0;
    let part2B = 0;

    part1Scores.forEach(score => {
      if (score) {
        const [scoreA, scoreB] = score.split('-').map(Number);
        part1A += scoreA;
        part1B += scoreB;
      }
    });

    part2Scores.forEach(score => {
      if (score) {
        const [scoreA, scoreB] = score.split('-').map(Number);
        part2A += scoreA;
        part2B += scoreB;
      }
    });

    const totalA = part1A + part2A;
    const totalB = part1B + part2B;

    setCalculatedScores({
      part1ScoreA: part1A,
      part1ScoreB: part1B,
      part2ScoreA: part2A,
      part2ScoreB: part2B,
      totalScoreA: totalA,
      totalScoreB: totalB,
    });
  };

  // Handler para datos personales
  const handlePersonalDataSubmit = (data: { nombre: string; edad: string; sexo: string }) => {
    setPersonalData(data);
    setShowPersonalDataForm(false);
    setShowInstructions(true);
  };
  
  // Start the test (hide instructions, show questions)
  const startTest = () => {
    setShowInstructions(false);
  };

  // Handle selecting an option for current question
  const handleSelectOption = (value: string) => {
    if (currentPart === 1) {
      const newScores = [...part1Scores];
      newScores[currentQuestion - 1] = value;
      setPart1Scores(newScores);
    } else {
      const newScores = [...part2Scores];
      newScores[currentQuestion - 1] = value;
      setPart2Scores(newScores);
    }
    setValidationError(false);
  };

  // Go to previous question
  const handlePrevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setValidationError(false);
    }
  };

  // Go to next question
  const handleNextQuestion = () => {
    const currentIndex = currentQuestion - 1;
    const currentScores = currentPart === 1 ? part1Scores : part2Scores;

    // Check if current question has been answered
    if (!currentScores[currentIndex]) {
      setValidationError(true);
      return;
    }

    const totalQuestions = currentPart === 1 
      ? part1Questions.length 
      : part2Questions.length;

    // If not the last question, go to next
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // If last question of part 1, go to part 2
      if (currentPart === 1) {
        setCurrentPart(2);
        setCurrentQuestion(1);
        setShowInstructions(true);
      } else {
        // Si es la última pregunta de la parte 2, enviar directamente los resultados sin mostrarlos
        handleSubmitResults();
      }
    }
    
    setValidationError(false);
  };

  // Submit results mutation
  const submitMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", "/api/evaluaciones", {
        // Información personal
        informacion_personal: {
          ...personalData,
          createdAt: new Date().toISOString(),
        },
        // Respuestas parte 1
        parte1: {
          respuestas: part1Scores,
          scoreA: calculatedScores.part1ScoreA,
          scoreB: calculatedScores.part1ScoreB,
        },
        // Respuestas parte 2
        parte2: {
          respuestas: part2Scores,
          scoreA: calculatedScores.part2ScoreA,
          scoreB: calculatedScores.part2ScoreB,
        },
      });
    },
    onSuccess: () => {
      setSubmissionComplete(true);
    },
    onError: (error) => {
      console.error("Error submitting:", error);
      toast({
        title: "Error al enviar resultados",
        description: "Hubo un problema al guardar la evaluación. Por favor intente nuevamente.",
        variant: "destructive",
      });
    },
  });

  // Handle submit results
  const handleSubmitResults = () => {
    submitMutation.mutate();
  };

  // Restart the test
  const handleRestartTest = () => {
    setShowPersonalDataForm(true);
    setCurrentPart(1);
    setCurrentQuestion(1);
    setShowInstructions(false);
    setShowResults(false);
    setSubmissionComplete(false);
    setValidationError(false);
    setPersonalData({
      nombre: "",
      edad: "",
      sexo: ""
    });
    setPart1Scores(Array(part1Questions.length).fill(null));
    setPart2Scores(Array(part2Questions.length).fill(null));
  };

  // Get current question data
  const currentQuestionData = currentPart === 1
    ? part1Questions[currentQuestion - 1]
    : part2Questions[currentQuestion - 1];

  // Get total questions for current part
  const totalQuestions = currentPart === 1
    ? part1Questions.length
    : part2Questions.length;

  // Get current selected value
  const currentSelectedValue = currentPart === 1
    ? part1Scores[currentQuestion - 1]
    : part2Scores[currentQuestion - 1];

  return (
    <div className="min-h-screen flex flex-col">
      <TestHeader />

      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {!showPersonalDataForm && !showResults && !submissionComplete && (
            <ProgressIndicator
              currentPart={currentPart}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
          )}

          {showPersonalDataForm && (
            <PersonalDataForm onSubmit={handlePersonalDataSubmit} />
          )}

          {showInstructions && !showPersonalDataForm && (
            <TestInstructions
              currentPart={currentPart}
              onStart={startTest}
            />
          )}

          {!showInstructions && !showPersonalDataForm && !showResults && !submissionComplete && (
            <QuestionCard
              currentPart={currentPart}
              currentQuestion={currentQuestion}
              question={currentQuestionData}
              onPrev={handlePrevQuestion}
              onNext={handleNextQuestion}
              onSelectOption={handleSelectOption}
              selectedValue={currentSelectedValue}
              validationError={validationError}
              isFirstQuestion={currentQuestion === 1}
            />
          )}

          {showResults && !submissionComplete && (
            <ResultSummary
              part1ScoreA={calculatedScores.part1ScoreA}
              part1ScoreB={calculatedScores.part1ScoreB}
              part2ScoreA={calculatedScores.part2ScoreA}
              part2ScoreB={calculatedScores.part2ScoreB}
              totalScoreA={calculatedScores.totalScoreA}
              totalScoreB={calculatedScores.totalScoreB}
              onSubmit={handleSubmitResults}
            />
          )}

          {submissionComplete && (
            <SubmissionFeedback onRestart={handleRestartTest} />
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Normalitec - Test Psicométrico - Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OpinionTest;

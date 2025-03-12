// Define the question structure
export interface Question {
  optionA: string;
  optionB: string;
}

// Part 1 questions data
export const part1Questions: Question[] = [
  { optionA: "Muestro dedicación a las personas que amo", optionB: "Actúo con perseverancia" },
  { optionA: "Soy tolerante", optionB: "Prefiero actuar con ética" },
  { optionA: "Al pensar, utilizo mi intuición o \"sexto sentido\"", optionB: "Me siento una persona digna" },
  { optionA: "Logro buena concentración mental", optionB: "Perdono todas las ofensas de cualquier persona" },
  { optionA: "Normalmente razono mucho", optionB: "Me destaco por el liderazgo en mis acciones" },
  { optionA: "Pienso con integridad", optionB: "Me coloco objetivos y metas en mi vida personal" },
  { optionA: "Soy una persona de iniciativa", optionB: "En mi trabajo normalmente soy curioso" },
  { optionA: "Doy amor", optionB: "Para pensar hago síntesis de las distintas ideas" },
  { optionA: "Me siento en calma", optionB: "Pienso con veracidad" }
];

// Part 2 questions data
export const part2Questions: Question[] = [
  { optionA: "Irrespetar la propiedad", optionB: "Sentir inquietud" },
  { optionA: "Ser irresponsable", optionB: "Ser desconsiderado hacia cualquier persona" },
  { optionA: "Cae en contradicciones al pensar", optionB: "Sentir intolerancia" },
  { optionA: "Ser violento", optionB: "Actuar con cobardía" },
  { optionA: "Sentirse presumido", optionB: "Generar divisiones y discordia entre los seres humanos" },
  { optionA: "Ser cruel", optionB: "Sentir ira" },
  { optionA: "Pensar con confusión", optionB: "Tener odio en el corazón" },
  { optionA: "Decir blasfemias", optionB: "Ser escandaloso" },
  { optionA: "Crear desigualdades entre los seres humanos", optionB: "Apasionarse por una idea" },
  { optionA: "Sentirse inconstante", optionB: "Crear rivalidad hacia otros" },
  { optionA: "Pensamientos irracionales", optionB: "Traicionar a un desconocido" },
  { optionA: "Ostentar las riquezas materiales", optionB: "Sentirse infeliz" },
  { optionA: "Entorpecer la cooperación entre los seres humanos", optionB: "La maldad" },
  { optionA: "Odiar a cualquier ser de la naturaleza", optionB: "Hacerse distinciones entre las personas" },
  { optionA: "Sentirse intranquilo", optionB: "Ser infiel" },
  { optionA: "Tener la mente dispersa", optionB: "Mostrar apatía al pensar" },
  { optionA: "La injusticia", optionB: "Sentirse angustiado" },
  { optionA: "Vengarse de los que odian a todo el mundo", optionB: "Vengarse del que hace daño a un familiar" },
  { optionA: "Usar abusivamente el poder", optionB: "Distraerse" },
  { optionA: "Ser desagradecido con los que ayudan", optionB: "Ser egoísta con todos" }
];

// Scoring options
export const scoringOptions = [
  { value: "3-0", label: "3-0" },
  { value: "2-1", label: "2-1" },
  { value: "1-2", label: "1-2" },
  { value: "0-3", label: "0-3" }
];

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PersonalDataFormProps {
  onSubmit: (data: { nombre: string; edad: string; sexo: string }) => void;
}

const PersonalDataForm = ({ onSubmit }: PersonalDataFormProps) => {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    sexo: ""
  });
  
  const [errors, setErrors] = useState({
    nombre: false,
    edad: false,
    sexo: false
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: false });
  };

  const validateForm = () => {
    const newErrors = {
      nombre: formData.nombre.trim() === "",
      edad: formData.edad.trim() === "" || isNaN(Number(formData.edad)) || Number(formData.edad) <= 0,
      sexo: formData.sexo === ""
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg mb-6">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Test Psicométrico - Información Personal</h2>
        <p className="text-gray-600 mb-6">
          Por favor complete sus datos personales antes de comenzar el test psicométrico.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <Label htmlFor="nombre" className="text-base">
                Nombre completo
              </Label>
              <Input
                id="nombre"
                type="text"
                value={formData.nombre}
                onChange={(e) => handleChange("nombre", e.target.value)}
                className={`mt-1 ${errors.nombre ? "border-red-500" : ""}`}
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm mt-1">Por favor ingrese su nombre</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="edad" className="text-base">
                Edad
              </Label>
              <Input
                id="edad"
                type="number"
                min="1"
                max="120"
                value={formData.edad}
                onChange={(e) => handleChange("edad", e.target.value)}
                className={`mt-1 ${errors.edad ? "border-red-500" : ""}`}
              />
              {errors.edad && (
                <p className="text-red-500 text-sm mt-1">Por favor ingrese una edad válida</p>
              )}
            </div>
            
            <div>
              <Label className="text-base">
                Sexo
              </Label>
              <RadioGroup
                value={formData.sexo}
                onValueChange={(value) => handleChange("sexo", value)}
                className="flex flex-col space-y-2 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Masculino" id="sexo-m" />
                  <Label htmlFor="sexo-m">Masculino</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Femenino" id="sexo-f" />
                  <Label htmlFor="sexo-f">Femenino</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Otro" id="sexo-o" />
                  <Label htmlFor="sexo-o">Prefiero no decir / Otro</Label>
                </div>
              </RadioGroup>
              {errors.sexo && (
                <p className="text-red-500 text-sm mt-1">Por favor seleccione una opción</p>
              )}
            </div>
          </div>
          
          <div className="mt-8">
            <button 
              type="submit"
              className="w-full px-4 py-2 bg-primary text-white rounded hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDataForm;
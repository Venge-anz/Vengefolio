export const Education = () => {
  return (
    <div className="bg-gray-200 p-6 sm:p-10 w-100 rounded-xl border border-gray-300 mt-15">
      <h2 className="text-center text-xl sm:text-2xl font-bold border-b-2 border-purple-400 pb-2 mb-4">
        EDUCATION
      </h2>
      <ul className="list-disc list-inside space-y-4 text-md sm:text-lg font-light">
        <li>
          <p className="font-bold">Autodidacta en programación web</p>
          <p className="italic">2024 - Actualidad</p>
        </li>
        <li>
          <p className="font-bold">
            Ciclo Superior de Administración y Finanzas – I.E.S Leonardo Da
            Vinci
          </p>
          <p className="italic">2016 - 2017</p>
        </li>
        <li>
          <p className="font-bold">
            FP de Gestión Administrativa – C Santa Faz
          </p>
          <p className="italic">2013 - 2014</p>
        </li>
      </ul>
    </div>
  );
};

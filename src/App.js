import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import OnClick from './OnClick';

function App() {
  // 1) Reemplaza estas variables por useState, puedes utilizar los valores iniciales que ya traen las variables

  // 2) Agregar las funciones para manejar los eventos de Click a los botones para que
  //     cuando se presionen se incremente o decremente el valor de la temperatura.

  // 3) Agrega una lógica para que al momento de que el valor sea >= 20 grados, la variable 'temperatureColor' cambie a 'hot'
  //    De igual manera si la temperatura baja a <20 grados, la variable cambie a 'cold'

  // Para fines prácticos, agrega una regla que evite que los valores suban arriba de 30. Es decir al llegar a 30, no se podrá incrementar más.
  // De igual manera al llegar los valores a 0 no se podrá decrementas más.

  return (
    <div>
      <OnClick />
    </div>
  );
}

export default App;

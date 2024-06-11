import Banner from './components/Banner';
import FieldText from './components/FieldText';

function App() {
  return (
    <div className="App">
      <Banner />
      <FieldText label="Nome" placeholder="Digite seu nome"/>
      <FieldText label="Cargo" placeholder="Digite seu cargo"/>
      <FieldText label="Imagem"placeholder="Digite o endereço da imagem" />
    </div>

  );
}

export default App;

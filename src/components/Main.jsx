import itens from '../datasets/Carrosel';
import servicos from '../datasets/Servico';
import AnimaisTable from './AnimaisTable';
import Carrosel from './Carrosel';
import ServicoCard from './ServicoCard';
import animais from '../datasets/Animal';

const Main = () => {


  return (
    <main>
        <Carrosel itens={itens} />
        <ServicoCard servicos={servicos}></ServicoCard>
        <AnimaisTable animais = {animais}></AnimaisTable>
    </main>
  );
};

export default Main;

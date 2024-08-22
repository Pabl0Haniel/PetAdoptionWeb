import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const AnimaisTable = ({ animais = [] }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Raça</th>
          <th>Especie</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {animais.map((animal) => {
          return (
            <tr key={animal.id}>
              <td>{animal.id}</td>
              <td>{animal.especie}</td>
              <td>{animal.raca}</td>
              <td>{animal.descricao}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

AnimaisTable.propTypes = {
  animais: PropTypes.array,
};

export default AnimaisTable;
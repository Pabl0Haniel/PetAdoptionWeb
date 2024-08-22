import { Card, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ServicoCard = ({ servicos = [] }) => {
    return (
        <Row className='p-2'>
            {servicos.map((servico, i) => {
                return (
                    <Col key={i}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{servico.titulo}</Card.Title>
                                <Card.Text>
                                    {servico.descricao}
                                </Card.Text>
                                <Card.Link href={servico.link}>Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}

        </Row>
    );
};

ServicoCard.propTypes = {
    servicos: PropTypes.array,
};

export default ServicoCard;
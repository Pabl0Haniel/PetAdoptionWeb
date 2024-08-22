import {
    MDBCol,
    MDBContainer,
    MDBFooter,
    MDBIcon,
    MDBRow,
} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <footer className="mt-5">
            <MDBFooter
                bgColor="light"
                className="text-center text-lg-start text-muted"
            >
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Conecte as nossas redes sociais:</span>
                    </div>

                    <div>
                        <a href="" className="me-4 text-reset">
                            <MDBIcon color="secondary" fab icon="twitter" />
                            
                        </a>
                        <a href="" className="me-4 text-reset">
                            <MDBIcon color="secondary" fab icon="instagram" />
                        </a>
                    </div>
                </section>

                <section className="">
                    <MDBContainer className="text-center text-md-start mt-5">
                        <MDBRow className="mt-3">
                            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <img
                                        alt=""
                                        src="https://img.freepik.com/free-vector/red-heart-paw-print-outline_78370-2364.jpg?size=626&ext=jpg"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />{' '}
                                    PetAdoption
                                </h6>
                                <p>
                                    PetAdoptioné um programa criado para estreitar laços entre pessoas que têm o sonho de adotar um pet. Vamos juntos incentivar a adoção, conscientizar sobre a posse responsável e fomentar a cultura de doação em prol do bem-estar animal.

                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
                                <p>
                                    <MDBIcon color="secondary" icon="home" className="me-2" />
                                    Sapé, Paraiba, Brasil
                                </p>
                                <p>
                                    <MDBIcon color="secondary" icon="envelope" className="me-3" />
                                    pablohaniel@gmail.com
                                </p>
                                <p>
                                    <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                                    55 83 99315-5455
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div
                    className="text-center p-4"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                >
                    © 2024 PetAdoption.
                </div>
            </MDBFooter>
        </footer>
    );
};

export default Footer;

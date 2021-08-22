import { RouteComponentProps } from '@reach/router';
import Container from '../../components/Container';
import Board from '../../components/Board';

interface HomeProps extends RouteComponentProps {}

const Home = (_: HomeProps) => {
    return (
        <div>
            <Container style={{ paddingTop: '2rem' }}>
                {/* The padding above is completely arbitrary :) */}
                <Board />
            </Container>
        </div>
    );
};

export default Home;

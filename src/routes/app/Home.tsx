import { RouteComponentProps } from '@reach/router';
import Container from '../../components/Container';
import Board from '../../components/Board';

interface HomeProps extends RouteComponentProps {}

const Home = (_: HomeProps) => {
    return (
        <div>
            <Container>
                <Board />
            </Container>
        </div>
    );
};

export default Home;

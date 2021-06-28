import { RouteComponentProps } from '@reach/router';
import React from 'react';
import Container from '../../components/Container';
import HomeGrid from '../../components/HomeGrid';
import NewBoardButton from '../../components/NewBoardButton';

interface HomeProps extends RouteComponentProps {}

const Home = (_: HomeProps) => {
    return (
        <div>
            <Container>
                <HomeGrid>
                    <NewBoardButton>New Board</NewBoardButton>
                    <div
                        style={{ height: 100, backgroundColor: 'black' }}
                    ></div>
                    <div
                        style={{ height: 100, backgroundColor: 'black' }}
                    ></div>
                    <div
                        style={{ height: 100, backgroundColor: 'black' }}
                    ></div>
                    <div
                        style={{ height: 100, backgroundColor: 'black' }}
                    ></div>
                </HomeGrid>
            </Container>
        </div>
    );
};

export default Home;

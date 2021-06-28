import { RouteComponentProps } from '@reach/router';
import React from 'react';
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
import NavTitle from '../../components/NavTitle';

interface AppIndexProps extends RouteComponentProps {
    children?: any;
}

const AppIndex = (props: AppIndexProps) => {
    return (
        <div>
            <Navbar>
                <Container
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <NavTitle>
                        I <i role="img">❤️</i> Kanban Boards
                    </NavTitle>
                </Container>
            </Navbar>
            {props.children}
        </div>
    );
};

export default AppIndex;

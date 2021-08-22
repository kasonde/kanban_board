import styled from 'styled-components';

export default styled.button`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border: none;
    font-size: 0.9em;
    outline: none;
    color: #374151;
    background-color: #eee;
    width: 100%;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.2s ease;
    &:active {
        background-color: #6b7280;
        color: white;
    }
    &:hover {
        background-color: #6b7280;
        color: white;
    }
`;

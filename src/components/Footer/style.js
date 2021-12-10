import styled from "styled-components";

export const Content = styled.div`
    background-color: var(--background);
    border-top: 0.5px solid rgba(41, 41, 46, 1);
    margin-top: 3rem;

    header {
        display: flex;
        align-items: center;
        padding: 1rem;
        flex-wrap: wrap;
        justify-content: space-between;

        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
        @media (min-width: 768px) {
            width: 750px;
        }
        @media (min-width: 992px) {
            width: 970px;
        }
        
        @media (min-width: 1200px) {
            width: 1170px;
        }
    }

    h2 {
        color: var(--yellow);
    }

    p {
        color: var(--titulos);
    }
`
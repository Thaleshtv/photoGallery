import styled from "styled-components";

export const Content = styled.div`
    background-color: var(--background);
    border-bottom: 0.5px solid rgba(41, 41, 46, 1) ; 

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

        button {
            color: var(--titulos);
            background-color: var(--shape);
            padding: 1rem;
            border-radius: 6.25rem;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;

            transition: filter 0.2s;
            &:hover {
                filter: brightness(0.8);
            }
        }

        .searchGroup {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        input {
            color: var(--shape);
            background-color: var(--titulos);
            padding: 0.75rem;
            border-radius: 6.25rem;
            border: none;
        }
    }

        a { 
            text-decoration: none;
            color: var(--yellow);
        }
`
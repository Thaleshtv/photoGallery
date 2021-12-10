import styled from "styled-components";

export const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    min-height: 90vh;

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
        align-items: center;
        justify-content: center;
        gap: 0.75rem;

        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.8);
        }
    }

    .buttonGroup {
        display: flex;
        gap: 0.25rem;
        align-items: center;
        justify-content: center;
        margin-top: 1.75rem;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;

    flex: 1 0 auto;
`


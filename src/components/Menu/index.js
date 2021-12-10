import * as Styled from './style'

export default function Menu({ onClick, onBlur }) {
    return(
            <Styled.Content>
                <header>
                    <h1><a href="./">MyGallery</a></h1>
                    <div className="searchGroup">
                        <input type="text" onBlur={onBlur}/>
                        <button onClick={onClick}>Pesquisar</button>
                    </div>
                </header>
            </Styled.Content>
    )
}
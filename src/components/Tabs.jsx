// Wrapper component to provide structure for the Examples section of the website
export default function Tabs({children, buttons, ButtonsContainer = 'menu'}) {
    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}
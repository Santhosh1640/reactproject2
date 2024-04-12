export default function Tabs({children, buttons, buttonsContainer}) {
    //Must starts with upper case character
    const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
}
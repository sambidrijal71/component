import Button from "../components/Button"
function ButtonPage() {

    const handleClick = () => {
        console.log("Primary Button Clicked");
    }

    const handleMouseEnter = () => {
        console.log("Secondary Button MouseEnter");
    }

    const handleDoubleClick = () => {
        console.log("Success Button DoubleClick ");
    }

    const handleMouseLeave = () => {
        console.log("Warning Button MouseLeave");
    }
    const handleMouseOver = () => {
        console.log("Danger Button MouseOver");
    }
    return (<div className="flex flex-column justify-around mt-10">
        <div>
            <Button primary onClick={handleClick}>Primary</Button>
            <Button secondary onMouseEnter={handleMouseEnter}>Secondary</Button>
            <Button success onDoubleClick={handleDoubleClick}>Success</Button>
            <Button warning onMouseLeave={handleMouseLeave}>Warning</Button>
            <Button danger onMouseOver={handleMouseOver}>Danger</Button>
        </div>
        <div>
            <Button primary outline>Primary</Button>
            <Button secondary outline>Secondary</Button>
            <Button success outline>Success</Button>
            <Button warning outline>Warning</Button>
            <Button danger outline>Danger</Button>
        </div>
        <div>
            <Button primary rounded>Primary</Button>
            <Button secondary rounded>Secondary</Button>
            <Button success rounded>Success</Button>
            <Button warning rounded>Warning</Button>
            <Button danger rounded>Danger</Button>
        </div>
        <div>
            <Button primary outline rounded>Primary</Button>
            <Button secondary outline rounded>Secondary</Button>
            <Button success outline rounded>Success</Button>
            <Button warning outline rounded>Warning</Button>
            <Button danger outline rounded>Danger</Button>
        </div>
    </div>
    )
}

export default ButtonPage
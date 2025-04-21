export default function TabButton({ children }) {

    function handleClick() {
        console.log(`You clicked on ${children}`);
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}
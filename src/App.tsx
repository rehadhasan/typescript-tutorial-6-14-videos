import Button from "./components/Button.tsx";
import Input from "./components/Input.tsx";
import Container from "./components/Container.tsx";
import Login from "./state/Login.tsx";
import User from "./state/User.tsx";
import Counter from "./state/Counter.tsx";
import ThemeContextProvider from "./state/Context.tsx";
import Box from "./state/Box.tsx";

const App = () => {
    return (
        <div>
            {/*Event props*/}
            <Button handleClick={(event, id) => {
                console.log("Button Clicked", event, id)
            }}/>

            <Input value='' handleChange={() => {
            }}/>

            {/*Style props*/}
            <Container style={{border: '1px solid black', padding: '1rem'}}/>

            {/*React useState best practice*/}
            <Login/>

            <User/>

            {/*React useReducer best practice*/}
            <Counter/>

            {/*React useContext children props best practice*/}
            <ThemeContextProvider>
                <Box/>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
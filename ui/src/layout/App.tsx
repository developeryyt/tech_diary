import Header from "./header/Header.tsx";
import Container from "./container/Container.tsx";
import './layout.module.scss'

const App = () => {

    return (
        <div className='layout'>
            <Header />
            <Container />
        </div>
    );
};

export default App;
import './App.css';
import Child from './Child';
import {TransactionProvider} from './context/transContext';

function App() {
    return (
        <TransactionProvider>
            <Child />
        </TransactionProvider>
    );
}

export default App;

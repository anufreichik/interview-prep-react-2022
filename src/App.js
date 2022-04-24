import TodoList from "./components/Todo/TodoList";
import AlgoQuestionsSummary from "./components/AlgoQuestions/AlgoQuestionsSummary";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import DebounceInput from "./components/Debounce/Debounce";
import Autocomplete from "./components/Autocomplete/Autocomplete";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<AlgoQuestionsSummary />} />
                <Route path="algoquestions" element={<AlgoQuestionsSummary />} />
                <Route path="todo" element={<TodoList />} />
                <Route path="debounce" element={<DebounceInput />} />
                <Route path="autocomplete" element={<Autocomplete />} />
            </Route>
        </Routes>
    );
}

export default App;

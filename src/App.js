import TodoList from "./components/Todo/TodoList";
import AlgoQuestionsSummary from "./components/AlgoQuestions/AlgoQuestionsSummary";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import DebounceInput from "./components/Debounce/Debounce";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import ProjectsList from "./components/Jobs/ProjectsList";
import Office from "./components/Office/Office";
import ShoppingStore from "./components/ShoppingCart/ShoppingStore";
import MovieBooking from "./components/MovieBooking/MovieBooking";
import Widgets from "./components/Widgets/Widgets";
import BlogPosts from "./components/Posts/BlogPosts";
import TicTacToe from "./components/TicTacToe/TicTacToe";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<AlgoQuestionsSummary />} />
                <Route path="algoquestions" element={<AlgoQuestionsSummary />} />
                <Route path="todo" element={<TodoList />} />
                <Route path="debounce" element={<DebounceInput />} />
                <Route path="autocomplete" element={<Autocomplete />} />
                <Route path="marketplace" element={<ProjectsList />} />
                <Route path="office" element={<Office />} />
                <Route path="shoppping" element={<ShoppingStore />} />
                <Route path="moviebooking" element={<MovieBooking />} />
                <Route path="widgets" element={<Widgets />} />
                <Route path='posts' element={<BlogPosts/>} />
                <Route path='tictactoe' element={<TicTacToe/>} />
            </Route>
        </Routes>
    );
}

export default App;

import { Routes, Route} from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Todo from "./pages/Todo";
import Layout from "./components/Layout";
import CounterRedux from "./pages/counterRedux";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/counterRedux" element={<CounterRedux />} />
            </Route>
        </Routes>
    );
}
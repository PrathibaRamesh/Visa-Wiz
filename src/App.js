import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prathiba1 from "./Prathiba1";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Prathiba1 />} />
                </Routes>
            </Router>
        );
    }
}
export default App;
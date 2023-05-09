import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import USState from "./USState";
import Employer from "./Employer";
import Wage from "./Wage";
import Salary from "./Salary";
import Occupation from "./Occupation";
import YearCount from "./YearCount";
import Homepage from "./Homepage";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/USState" element={<USState />} />
                    <Route path="/Occupation" element={<Occupation />} />
                    <Route path="/YearCount" element={<YearCount />} />
                    <Route path="/Salary" element={<Salary />} />
                    <Route path="/Wage" element={<Wage />} />
                    <Route path="/Employer" element={<Employer />} />
                </Routes>
            </Router>
        );
    }
}
export default App;
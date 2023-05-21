import React, { useMemo, useState } from "react";
// import { Hello }  from "./components/greeting/HelloWorld";
import { Welcome } from "./components/greeting/Welcome";
import { Counter } from "./components/clockNCounter/Counter";
import { Clock } from "./components/clockNCounter/clock";
// import { MyForm } from "./components/form/Myfrom";
// import { MyUncontrolledForm } from "./components/form/MyUncontrolledForm";
// import { MyList } from "./components/list/MyList";
import { MyTodos } from "./components/list/MyTodos";
import { Container } from "./components/container/Container";
import EnhanceMousePositionViewer from "./components/mouseTracker/MousePositionViewer";
import { MouseTracker } from "./components/mouseTracker/MouseTracker";
import { LanguageContext } from "./components/contextAPI/LanguageCountext";
import { HookCounter } from "./components/hooks/HooksCounter";
import { LoginForm } from "./components/hooks/LoginForm";
import { GithubUser } from "./components/GithubUser";
import { Link, Route, Routes } from "react-router-dom";
import { Catalogue } from "./components/Catalogue";
import { Product } from "./components/Product";
import { GithubUsers } from "./components/GithubUsers";

const todos = [
    { id: 1, title: "Buy Milk", completed: false},
    { id: 2, title: "Buy Go to the movies", completed: false},
    { id: 3, title: "Water the plant", completed: true},
    { id: 4, title: "Sleep", completed: true},
]

// class App extends React.Component {
//     state = {
//         language: "en",
//     }

//     handleLanguageChange = (event) => {
//         this.setState({
//             language: event.target.value
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <select value={this.state.language} onChange={this.handleLanguageChange}>
//                         <option value="en">ENGLISH</option>
//                         <option value="it">ITALIANO</option>
//                 </select>
//                 <LanguageContext.Provider value={this.state.language}>
//                     <Container title="My Awesome Application">
//                         <Welcome name="Jimmy"/>
//                         <Counter />
//                         <HookCounter initialValue={12}/>
//                         <LoginForm />
//                         <Clock />
//                         <MouseTracker>
//                             {(position) => {
//                                 const [x, y] = position
//                                 return (
//                                     <div>The current position is {x}, {y}</div>
//                                 )
//                             }}
//                         </MouseTracker>
//                     </Container>
//                 </LanguageContext.Provider>
//             </div>
//         )
//     }
// }


function App() {
    const [showCounter, setShowCounter] = useState(true)
    const [username, setUsername] = useState("")
    const [language, setLanguage] = useState("en")

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value)
    }

    const handleToggleCounter = () => {
        setShowCounter(s => !s)
    }

    const newGithubUser = (user) => {
        setUsername((user.target.value))
    }

    function computeExpensiveValue() {
        for (let i = 6; i < 10e2; i++);

        return 42
    }

    const result = computeExpensiveValue()

    console.log(result)

    return (
        <Container title={<div>
            <h1>My Awesome Application</h1>
            <div>
                <Link to="/">Home</Link> | <Link to="products">Products</Link> | <Link to="users">Users</Link>
            </div>
        </div>}>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="products" element={<Catalogue />}>
                    <Route index element={<p>Please select a product</p>} />
                    <Route path=":id" element={<Product />} />
                </Route>
                <Route path="users" element={<GithubUsers />}>
                    <Route path=":username" element={<GithubUser />} />
                </Route>
                <Route path="*" element={<div><h1>Content not found</h1>
                        <Link to="/">Home</Link>
                    </div>} />
            </Routes>
        </Container>
    )
}

export default App;

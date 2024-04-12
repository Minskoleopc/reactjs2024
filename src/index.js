import React from "react"
import ReactDOM from "react-dom/client"


let data = [
    {
        name: "pizza spinach",
        price: 120,
        size: "medium"
    },
    {
        name: "pizza mushroom",
        price: 155,
        size: "medium"
    }
    ,
    {
        name: "pizza paneer",
        price: 155,
        size: "large"
    },
    {
        name: "pizza onion",
        price: 166,
        size: "medium"
    }


]



// functional component ----> render
function App() {
    return (
        <div>
            <Header></Header>
            <Menu></Menu>
            <Footer></Footer>
        </div>
    )
}


function Menu() {

    let style = { color: 'red', fontSize: "48px", textTransform: "uppercase" }
    // data , logic , apperance
    //  api    js     html css
    // JSX
    return (
        <div>
            <h1 style={style}>Menu</h1>
            <Pizza></Pizza>
            <Pizza></Pizza>
            <Pizza></Pizza>
            <Pizza></Pizza>
        </div>
    )
}

function Pizza() {
    let style = { color: "green" }
    return (
        <div>
            <h1 style={style}>{data[0].name}</h1>
            <p style={style}>{data[0].price}</p>
            <p style={style}>{data[0].size}</p>
        </div>
    )

}

function Header() {
    // data , logic , apperance
    //  api    js     html css
    return <h1>Header</h1>

}

function Footer() {
    // data , logic , apperance
    //  api    js     html css
    return <h1>Footer</h1>

}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App />)
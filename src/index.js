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
        price: 170,
        size: "large"
    },
    {
        name: "pizza onion",
        price: 167,
        size: "medium"
    }


]



// functional component ----> render
function App() {
    return (
        <div>
            {/* <Header></Header> */}
            <Menu ></Menu>
            {/* <Footer></Footer> */}
            {
                //explanation
            }
            {/* <DummyComponentP course = "python" duration = "1week"></DummyComponentP>
            <DummyComponentP course = "js" duration = "2Week"></DummyComponentP> */}
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
            {/* <Pizza></Pizza>
            <Pizza ></Pizza>
            <Pizza></Pizza> */}
            <ul>
                {data.map((pizza) => {
                    <Pizza pizzaObj={pizza} ></Pizza>
                })
                }
            </ul>

            {/* <Pizza pizzaObj = {data[0]}></Pizza>
            <Pizza pizzaObj = {data[1]}></Pizza>
            <Pizza pizzaObj = {data[2]}></Pizza>
            <Pizza pizzaObj = {data[3]}></Pizza> */}
        </div>
    )
}

function Pizza({ pizzaObj }) {
    //let style = { color: "green" }
    return (
        <div>
            <li>
                <h1>{pizzaObj.name}</h1>
                <p>{pizzaObj.price}</p>
                <p>{pizzaObj.size}</p>
            </li>
        </div>
    )

}


// Header component
// function Header() {
//     // data , logic , apperance
//     //  api    js     html css
//     return <h1>Header</h1>

// }

// footer component
// function Footer() {
//     // data , logic , apperance
//     //  api    js     html css
//     return <h1>Footer</h1>

// }


// function DummyComponentP(props){
//     console.log()
//      return <h1>I am learning {props.course} and duration is {props.duration} </h1>
// }


const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App />)

// component
// component within component
// component styling
// component call with sending properties


// compoenet
// component within component 
// props 
// list render
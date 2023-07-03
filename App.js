const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"This is nested react element creation"),
        React.createElement("h3",{},"This is nested react element creation")
    )
)


const heading=React.createElement("h1",{id:"heading"},"HELLO WORLD FROM REACT")
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

console.log(parent)
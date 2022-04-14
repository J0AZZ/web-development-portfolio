import ReactDOM from "react-dom"

const Render = (component, root_cont) => {
    root_cont.unmount()
    const root = ReactDOM.createRoot(document.getElementById('root')) 
    root.render(component)
}

export default Render
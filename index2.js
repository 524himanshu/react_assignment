function Test()
{
const bla=()=>alert("test")
return <button onClick={bla}>Click me </button>
}
class Hello extends React.Component {
render()
{
return <div>Hello React with Code <Test/></div>
}
}
ReactDOM.render (<Hello />, document.getElementById('root'));
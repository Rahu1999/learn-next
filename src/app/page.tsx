import Link from "next/link";

const App = ()=>{
    return (
        <div>

        <h1>App component</h1>
        <Link href="/about">About</Link>
        <Link href="/products">products</Link>
        </div>
    )
}
export default App;
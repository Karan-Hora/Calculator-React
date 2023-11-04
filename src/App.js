import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className=" w-screen h-screen  text-center p-[10%] bg-slate-700">
      <p className=" font-mono text-white text-4xl font-bold mb-4">Calculator</p>
      <Calculator/>
    </div>
  );
}

export default App;

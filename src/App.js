import Post from './Components/Post';
import Get from './Components/Get';
import Patch from './Components/Patch';
import Delete from './Components/Delete';
import './App.css';

function App() {
  return (
    <div className="App">
      <Post />
      <Get />
      <Delete />
      <Patch />
    </div>
  );
}

export default App;

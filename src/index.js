import ReactDOM from 'react-dom/client';
function App() {
 return <h1>Rick and Morty</h1>;
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

// The last line of code mounts the App component to an element with the root ID 
// selector in your document, which is the entry point of the application.
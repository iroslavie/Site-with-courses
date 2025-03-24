import Page1 from '../src/App/Pages/Page1'; // Импортируем Page1.tsx
import './App.scss'; // Импортируем стили (если они нужны)

function App() {
  return (
    <div className="App">
      <Page1 /> {/* Отображаем компонент Page1 */}
    </div>
  );
}

export default App;
import FirstComponent from './components/FirstComponent';
import Events from './components/Events';
//images
import logo from './logo.svg';
//styles
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  const name = 'Samuel'
  return (
    <div className="App">
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
    </div>
  );
}

export default App;

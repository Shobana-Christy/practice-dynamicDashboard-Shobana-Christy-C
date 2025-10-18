import './App.css';
import DynamicDashboard from './DynamicDashboard';

const App = () => {
  const userName = "Andrea";
  const isPremiumUser = false;

  return (
    <div>
      <h1>{new Date().toLocaleDateString()}</h1>
      <DynamicDashboard userName={userName} isPremiumUser={isPremiumUser} />
    </div>
  );
};

export default App;

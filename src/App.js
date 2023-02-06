import './App.css';
import Greeting, { GreetingNextLevel } from './components/greeting';
import StudentInfo from './components/StudentInfo';

const student1 = {
  firstName: 'Cacoq',
  lastName: 'Jean',
  email: 'jeanCacoq@gmail.com',
  age: 22
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is props</h1>
        <Greeting firstName = "Varlince" emoji = "👋🏽 "/>
        <GreetingNextLevel lastName="Meran" arrow="------->"/>
        <StudentInfo  student={student1}/>
        <StudentInfo 
          student ={{
            firstName:"Pipo",
            lastName:"Klass",
            email:"pipok@gmail.com",
            age: 56
          }}/>
      </header>
    </div>
  );
}

export default App;

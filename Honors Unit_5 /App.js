import {UserProvider} from './UserContext';
import ComponentC from './components/ComponentC';

const App = () => {
  return(
    <UserProvider value='Sagar'>
    <ComponentC/>
    </UserProvider>
  )
}

export default App;

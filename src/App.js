import { useSelector } from "react-redux";
import FormRegistration from "./components/FormRegistration/FormRegistration";
import GlobalStyle from "./globalStyles";
import { getUsers } from "./redux";

const App = () => {
  const users = useSelector(getUsers);
  return (
    <div className="App">
      <GlobalStyle />
      <FormRegistration />
    </div>
  );
};

export default App;

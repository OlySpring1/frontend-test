import { useSelector } from "react-redux";
import FormRegistration from "./components/FormRegistration/FormRegistration";
import UsersTable from "./components/UsersTable/UsersTable";
import GlobalStyle from "./globalStyles";
import { getUsers } from "./redux/users";
import { Container } from "./styles/styles";

const App = () => {
  const users = useSelector(getUsers);
  return (
    <Container>
      <GlobalStyle />
      <FormRegistration />
      {!!users?.length && <UsersTable />}
    </Container>
  );
};

export default App;

import { useSelector } from "react-redux";
import { getUsers } from "../../redux/users";
import { TableStyled, TableWrapper } from "./styles";

const UsersTable = () => {
  const users = useSelector(getUsers);
  return (
    <TableWrapper>
      <TableStyled>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last </th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Sex</th>
        </tr>

        <tbody>
          {users.map(function (item, key) {
            return (
              <tr key={key}>
                <td>{key + 1} </td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.sex}</td>
              </tr>
            );
          })}
        </tbody>
      </TableStyled>
    </TableWrapper>
  );
};

export default UsersTable;

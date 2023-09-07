interface User {
  id: string;
  username: string;
  email: string;
}

interface UsersListProps {
  users: User[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <ul>
      {users.map((u) => <li key={u.id}>{u.username}</li>)}
    </ul>
  );
}

export default UsersList;

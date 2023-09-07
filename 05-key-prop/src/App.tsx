import UsersList from "./UsersList";

const users = [
  {
    id: "1",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: "2",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: "3",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: "4",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: "5",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: "6",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: "7",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: "8",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: "9",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: "10",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  }
];

const App = () => {
  return (
    <UsersList users={users} />
  );
};

export default App;

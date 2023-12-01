import './App.css';
import { UserCard } from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';

function App() {
  const { getUsers, userProfile, loading, error } = useAllUsers();

  const onClickFetchData = () => {
    getUsers();
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>Fetch Data</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>Failed to fetch data</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfile.map((user) =>
          (
            <UserCard
              key={user.id}
              user={user}
            />
          ))}
        </>)
      }

    </div>
  );
}

export default App;

import Counter from "../components/Counter";

const Page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);

  return (
    <>
      <h1>Cabins</h1>
      <Counter users={users} />

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Page;

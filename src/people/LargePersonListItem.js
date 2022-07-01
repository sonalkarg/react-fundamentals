export const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <>
      <h3>Name: {name}</h3>
      <p>Age: {age} years</p>
      <h3>Hair color: {hairColor}</h3>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => {
          return <li key={hobby}>{hobby}</li>;
        })}
      </ul>
    </>
  );
};

import { withEditableUser } from "./withEditableUser";

export const UserInfoForm = withEditableUser(
  ({ user, onReset, onChangeUser, onSave }) => {
    const { name, age, hairColor } = user || {};

    return user ? (
      <>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
          />
        </label>
        <label>
          Hair Color:
          <input
            type="text"
            value={hairColor}
            onChange={(e) => onChangeUser({ hairColor: e.target.value })}
          />
        </label>
        <button onClick={onSave}>Save</button>
        <button onClick={onReset}>Reset</button>
      </>
    ) : (
      <p>Loading...</p>
    );
  },
  "123"
);

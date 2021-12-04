import usersReducer, { ADD_USERS } from "./users";
test("should return the initial state users", () => {
  expect(usersReducer(undefined, {})).toEqual([]);
});

test("should added user to an empty list", () => {
  const previousState = [];
  expect(
    usersReducer(previousState, {
      type: ADD_USERS,
      user: {
        sex: "male",
        acceptTerms: true,
        firstName: "Tom",
        lastName: "Williams",
        phone: "1234567",
        email: "Tom@email.com",
        address: "Address Tom",
      },
    })
  ).toEqual([
    {
      sex: "male",
      acceptTerms: true,
      firstName: "Tom",
      lastName: "Williams",
      phone: "1234567",
      email: "Tom@email.com",
      address: "Address Tom",
    },
  ]);
});

test("should added user to an existing list", () => {
  const previousState = [
    {
      sex: "male",
      acceptTerms: true,
      firstName: "Tom",
      lastName: "Williams",
      phone: "1234567",
      email: "Tom@email.com",
      address: "Address Tom",
    },
  ];
  expect(
    usersReducer(previousState, {
      type: ADD_USERS,
      user: {
        sex: "female",
        acceptTerms: true,
        firstName: "Hanna",
        lastName: "Scott",
        phone: "12345678",
        email: "Hanna@email.com",
        address: "Address Hanna",
      },
    })
  ).toEqual([
    {
      sex: "male",
      acceptTerms: true,
      firstName: "Tom",
      lastName: "Williams",
      phone: "1234567",
      email: "Tom@email.com",
      address: "Address Tom",
    },
    {
      sex: "female",
      acceptTerms: true,
      firstName: "Hanna",
      lastName: "Scott",
      phone: "12345678",
      email: "Hanna@email.com",
      address: "Address Hanna",
    },
  ]);
});

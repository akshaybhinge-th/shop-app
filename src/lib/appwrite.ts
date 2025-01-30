import { Client, Account, ID } from "appwrite";

// Init your Web SDK
const client = new Client();

try {
  client
    .setEndpoint(import.meta.env.VITE_API_ENDPOINT) // endpoint app write
    .setProject(import.meta.env.VITE_PROJECT_ID); // project id
} catch (error) {
  console.error("Error setting up Appwrite client:", error);
  throw error;
}
export const account = new Account(client);

/**
 * Creates a new user account with the given data.
 * @param {Record<string, string>} userData - An object with the user's data.
 * @returns {Promise<void>} - A promise that resolves when the account is created.
 */
export async function createAccountByEmail(userData: Record<string, string>) {
  await account
    .create(
      ID.unique(),
      userData["email-address"],
      userData["phone-number"],
      userData["password"],
      userData["username"]
    )
    .then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.error(error);
      }
    );
}

/**
 * Logs in a user by creating a session with their email and password.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<void>} - A promise that resolves when the login is successful.
 */
export async function loginByEmail(email: string, password: string) {
  try {
    const response = await account.createEmailPasswordSession(email, password);
    return response;
  } catch (error) {
    console.log("error while logging in", error); // Failure
  }
}

/**
 * Logs out the user by deleting the current session.
 * @returns {Promise<string>} - A promise that resolves with a success message when the logout is successful.
 */
export async function logoutBySessionDelete(): Promise<string> {
  try {
    await account.deleteSession("current");
    return "Logged out!";
  } catch (error: { message: string }) {
    console.error("error while logging out!", error);
    throw error.message;
  }
}

export async function getProductsByCategory(category: string) {
  try {
    const products = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    ).then((res) => res.json());
    return products;
  } catch (error) {
    console.error(error);
  }
}

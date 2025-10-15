import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

/**
 * Home page component with user information form.
 *
 * This component renders a form that collects user data (name, age, email) and submits it
 * to the `/api/user` endpoint. It leverages React 19's form action feature for handling
 * form submissions without traditional event handlers.
 *
 * @param {Route.ComponentProps} props - Component props from React Router
 * @param {Object} props.loaderData - Data loaded from the loader function
 * @param {string} props.loaderData.message - Message from Cloudflare environment
 * @returns {JSX.Element} The rendered home page with user form
 *
 * @example
 * // Form submission flow:
 * // 1. User fills out name, age, and email fields
 * // 2. On submit, formSubmit function is called with FormData
 * // 3. Data is sent to /api/user endpoint via POST request
 * // 4. Server response is logged to console
 */
export default function Home({ loaderData }: Route.ComponentProps) {
  console.log(loaderData.message);

  const formSubmit = async (formData: FormData) => {
    const name = formData.get("name");

    const age = Number(formData.get("age"));

    const email = formData.get("email");

    const sendDataToServer = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, age: age, email: email }),
    });

    const response = await sendDataToServer.json();

    console.log(response);
  };
  return (
    <>
      <form
        action={formSubmit}
        className="max-w-md mx-auto mt-16 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 space-y-5 transition-colors duration-300"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
          Submit Your Info
        </h2>

        <div className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition"
          />

          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-transform"
        >
          Submit
        </button>
      </form>
    </>
  );
}

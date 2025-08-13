export default function Support() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Support</h1>
      <p className="mb-4 text-lg text-center max-w-xl">
        Need help or have questions? We're here to assist you!
      </p>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Your email"
          className="border rounded px-3 py-2"
          required
        />
        <textarea
          placeholder="Describe your issue..."
          className="border rounded px-3 py-2"
          rows={5}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export function Head() {
  return (
    <>
      <link rel="icon" href="/supportLogo.png" />
      <title>Support - Intern App</title>
      <meta name="description" content="Get support for the Intern App." />

    </>
  );
}
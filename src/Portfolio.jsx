export default function Portfolio() {
  return (
    <div className="p-6 font-raleway bg-gradient-to-tr from-fuchsia-100 via-rose-50 to-sky-100 text-gray-900 max-w-4xl mx-auto rounded-xl shadow-xl border border-fuchsia-200">
      <header className="text-center mb-10">
        <img src="/profile.jpg" alt="Forum Modi" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-rose-300 shadow-md" />
        <h1 className="text-4xl font-bold text-rose-800">Forum Modi</h1>
        <p className="text-lg italic text-fuchsia-700">Digital Marketing & Media Professional</p>
        <p className="text-sm text-gray-600">
          Surrey, BC | forumavlani88@gmail.com |{' '}
          <a
            href="https://linkedin.com/in/forum-avlani-modi-38656b30"
            target="_blank"
            className="underline text-blue-600"
          >
            LinkedIn
          </a>
        </p>
      </header>
      ...
    </div>
  );
}
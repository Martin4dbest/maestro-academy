export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-gray-300 mt-12">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">

        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} TECH Maestro Academy
        </p>

        <p className="mt-2 sm:mt-0 text-center sm:text-right">
          Empowering Young Innovators 🚀
        </p>

      </div>

    </footer>
  );
}

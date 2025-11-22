import { Outlet } from "react-router-dom";
function Catalogo({ children }) {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="min-h-screen bg-linear-to-br bg-green-300 flex flex-col items-center justify-center p-8"
    >
      <section aria-labelledby="main-section-title" className="w-full max-w7xl text-center">
        {children}
      </section>
      <Outlet />
    </main>
  );
}

export default Catalogo;
import Nav from "./Nav";

function Header() {

  return (
    <header className="w-full bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="font-heading-h3 text-header">
          FUTBOL MANIAC
        </h1>
      <Nav></Nav>

      </div>

    </header>
  );
}

export default Header;
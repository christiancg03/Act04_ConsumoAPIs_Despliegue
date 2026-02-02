import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./components/Router";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Router />
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
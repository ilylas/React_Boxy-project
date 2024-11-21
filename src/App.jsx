import Header from "./components/header";
import Footer from "./components/footer";
import Leftcontainer from "./Layouts/Leftcontainer";
import Visualisation from "./Layouts/Visualisation/Visualisation";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>

      <main className="flex flex-wrap justify-center items-center flex-grow 
      bg-gray-100 px-10 mb:flex-nowrap">
        <Leftcontainer></Leftcontainer>

        <Visualisation/>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

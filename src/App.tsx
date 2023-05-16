import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      <div className="flex  justify-around items-center min-h-screen mx-6">
        <UserForm />
        <div className="hidden sm:block">
          <img src="./public/photo1.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;

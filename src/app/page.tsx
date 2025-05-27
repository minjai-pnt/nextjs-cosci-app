import AppWelcome from "./components/appwelcome";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <hr />
      <AppWelcome headTitle="SWU" isShow={true}/>
    </>
    
  );
}

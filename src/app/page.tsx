import Footer from "@/components/Footer/Footer";
import Login from "@/components/Login/Login";
import SignWidget from "@/components/SignWidget/SignWidget";
import Signup from "@/components/Signup/Signup";

type Props = {};

export default function page({}: Props) {
  const loggedIn = false;

  return (
    <div className="App">
      {/* <Sidebar /> */}
      <SignWidget />

      {/* <Feed /> */}

      {/* <Widget /> */}
      <Login />
      {/* <Signup /> */}
      {!loggedIn && <Footer />}
    </div>
  );
}

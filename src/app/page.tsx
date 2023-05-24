import Footer from "@/components/Footer/Footer";

type Props = {};

export default function page({}: Props) {
  const loggedIn = false;
  return (
    <div className="App">
      {/* <Sidebar /> */}

      {/* <Feed /> */}

      {/* <Widget /> */}
      {!loggedIn && <Footer />}
    </div>
  );
}

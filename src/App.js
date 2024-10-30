import { useState } from "react";
import Accordian from "./components/Accordian";
import Header from "./components/Header";
import Textform from "./components/Textform";
import "bootstrap/dist/css/bootstrap.min.css";
import Alerts from "./components/Alerts";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/Footer";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>;

function App() {
  // USESTATE
  const [mode, setMode] = useState("success");

  const [alert, setAlert] = useState(null);

  //FUCNTIONS
  const toggleMode = () => {
    if (mode === "success") {
      setMode("dark");
      document.body.style.backgroundColor = "#9e9e9e";
      showAlert("Darkmode Enabled", "Successfully");
    } else {
      setMode("success");
      document.body.style.backgroundColor = "white";
      showAlert("LightMode Enabled", "Successfully");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <Header mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} mode={mode} />

        <Routes>
          <Route
            exact
            path="/home"
            element={
              <div className="container my-5">
                <Textform
                  showAlert={showAlert}
                  heading="Enter text to analyze"
                  mode={mode}
                  toggleMode={toggleMode}
                />
              </div>
            }
          />
          <Route
            exact
            path="/"
            element={
              <div className="container my-5">
                <Textform
                  showAlert={showAlert}
                  heading="Enter text to analyze"
                  mode={mode}
                  toggleMode={toggleMode}
                />
              </div>
            }
          />

          <Route exact path="/about" element={<Accordian mode={mode} />} />
        </Routes>

            <Footer mode={mode}/>

      </Router>
    </>
  );
}

export default App;

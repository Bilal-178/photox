
import Home from "./Component/Home"
import About from "./Component/About"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import BecomeProfessional from "./Component/BecomeProfessional"
import Blog from "./Component/Blog"
import Contact from "./Component/Contact"
import Navbar from "./Component/SubComponent/Navbar"
import { Switch, Route, Redirect } from "react-router-dom"
import VideoMaker from "./Component/VideoMaker"


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/videomaker" component={VideoMaker} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/videomaker" component={VideoMaker} />


        <Redirect to="/" />

      </Switch>

    </div>
  )
}

export default App

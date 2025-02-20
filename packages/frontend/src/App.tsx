import { Route, Switch } from "wouter";
import "./App.css";
import Layout from "./Layout";
import Info from "./pages/Info";
import Mitigation from "./pages/Mitigation";
import Survey from "./pages/Survey";
import Testing from "./pages/Testing";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Info} />
        <Route path="/mitigation-strategies" component={Mitigation} />
        <Route path="/test" component={Testing} />
        <Route path="/survey" component={Survey} />
      </Switch>
    </Layout>
  );
}

export default App;

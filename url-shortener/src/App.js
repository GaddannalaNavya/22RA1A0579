

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShortenerPage from "./pages/ShortenerPage";
import StatsPage from "./pages/StatsPage";
import RedirectPage from "./pages/RedirectPage"; 
import { Container, AppBar, Toolbar, Button } from "@mui/material";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Shortener</Button>
          <Button color="inherit" component={Link} to="/stats">Statistics</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: "2rem" }}>
        <Routes>
          <Route path="/" element={<ShortenerPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/:shortCode" element={<RedirectPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;


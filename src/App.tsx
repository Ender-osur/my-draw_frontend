import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

import { store } from "./store/store";
import { RootState } from "./store/store";

import { Header } from "./components/Header";
import AppRoutes from "./routes";

const AppContent = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  return (
    <Router>
      <div
        className={`min-h-screen ${
          isDark ? "dark bg-gray-900" : "bg-gray-100"
        }`}
      >
        <Header />
        <AppRoutes />
      </div>
      <Toaster position="top-right" />
    </Router>
  );
};

const App = () => {
  return (
    <Auth0Provider
      domain="YOUR_AUTH0_DOMAIN"
      clientId="YOUR_AUTH0_CLIENT_ID"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <AppContent />
      </Provider>
    </Auth0Provider>
  );
};

export default App;

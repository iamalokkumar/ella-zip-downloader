
import { useNavigate } from "react-router-dom";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security } from "@okta/okta-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from './AppRouter';

const queryClient = new QueryClient();
const oktaAuth = new OktaAuth({
  issuer: import.meta.env.VITE_APP_OKTA_ISSUER,
  clientId: import.meta.env.VITE_APP_OKTA_CLIENT_ID,
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["profile", "email", "openid", "offline_access"],
  tokenManager: {
    autoRenew: true,
    // autoRemove: true,
    // syncStorage: true,
    // expireEarlySeconds: 240
  },
  // devMode: true
});
if (import.meta.env.NODE_ENV === "production") {
  console.log = () => {};
  console.debug = () => {};
}
function App() {
const navigate = useNavigate();
const restoreOriginalUri = async (_oktaAuth, originalUri) => {
  navigate(toRelativeUrl(originalUri || "/", window.location.origin), {
    replace: true,
  });
};
  return (
  <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
  <QueryClientProvider client={queryClient}>           
  <AppRouter/>
  </QueryClientProvider>
   </Security>
  )
}
export default App

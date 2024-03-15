
import PowerSettingsNewSharpIcon from '@mui/icons-material/PowerSettingsNewSharp';
import { IconButton } from '@mui/material';
import { useOktaAuth } from '@okta/okta-react';
import '../ZipDownloader.css'
const Navbar = () => {
    const { oktaAuth } = useOktaAuth();
    const handleLogout = () => {
        // Add your logout logic here
        oktaAuth.tokenManager.clear();
        window.location.reload();
      };
  return (
    <nav className="navbar">
    <div className="navbar-brand">Zip Downloader</div>
    <IconButton  onClick={handleLogout}>
      <PowerSettingsNewSharpIcon className="logout-button"/>
    </IconButton>
  </nav>
  )
}

export default Navbar
import Keycloak from "keycloak-js";

class KeycloakInstance {
  constructor() {
    this.keycloak = new Keycloak({
      url: "http://localhost:8087/",
      realm: "MyRealm",
      clientId: "TaskHub",
    });
    this.initialized = false;
    this.roles = [];
  }

  getInstance() {
    return this.keycloak;
  }

  async initialize() {
    if (!this.initialized) {
      try {
        const authenticated = await this.keycloak.init({
          onLoad: 'login-required',
          silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
          checkLoginIframe: false,
        });
        this.initialized = true;
        return authenticated;
      } catch (error) {
        console.error('Keycloak initialization failed', error);
        return false;
      }
    }
    return Promise.resolve(this.keycloak.authenticated);
  }

  isAuthenticated() {
    return this.keycloak.authenticated !== undefined;
  }
  
  // Function to get user roles
  getUserRoles() {
    if (this.keycloak && this.keycloak.tokenParsed) {
        // Parse the token
        const token = this.keycloak.tokenParsed;
        
        // Log token to see its structure (optional)
        console.log('Token:', token);
    
        // Retrieve roles from resource_access for a specific client (e.g., TaskHub)
        if (token.resource_access && token.resource_access.TaskHub) {
          const roles = token.resource_access.TaskHub.roles;
          console.log("User Roles:", roles); // Log the roles
          return roles;
        }
      }
    
    return [];
  }

  setUserRoles(roles) {
    this.roles = roles;
  }

  getRoles(){
    console.log("This is get roles function");
    return this.roles;
  }
}

const keycloakInstance = new KeycloakInstance();

export default keycloakInstance;

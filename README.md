# LAYER_2
# We create a layer for authentication in angular2

To run client application:
1. Install Node.js platform, npm command should be available after that
2. From project root directory run "npm install" command to install Node.js packages
3. Install server.crt certificate
4. Run "ng serve --ssl true --ssl-key key.pem --ssl-cert server.crt"
5. Navigate to https://localhost:4200
6. Input into login form username "admin" password "qwerty123", this user will be created automatically

You can configure backend address in environment.ts (dev), environment.prod.ts (prod)
If you want to change frontend address you need to configure it on the backend side

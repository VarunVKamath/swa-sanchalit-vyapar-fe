import { getState } from "../../store/configure/configureStore";
import { globals } from "../../store/globals";
// import decode from "jwt-decode";

// class Auth {
//   constructor() {
//     this.authenticated = true;
//   }

//   isAuthenticated() {
//   if (!globals.store.getState().auth.token) {
//   this.authenticated = false;
// } else {
//   let decodedData = decode(
//     JSON.parse(window.localStorage.getItem("token"))
//   );
//   let current_time = Date.now() / 1000;
//   if (decodedData.exp - 3600 < current_time) {
//     this.authenticated = false;
//   } else {
//     this.authenticated = true;
//   }
// }

//   }
// }

// export default new Auth();

class Auth {
  constructor() {
    this.authenticated = true;
  }

  isAuthenticated() {
    // if (!localStorage.getItem("temp_token") ) {
    if (!getState().auth.accessToken) {
      this.authenticated = false;
    } else {
      this.authenticated = true;
    }

    return this.authenticated;
  }
}

export default new Auth();

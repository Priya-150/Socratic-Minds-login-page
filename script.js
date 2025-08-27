// script.js

import { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  signOut, 
  RecaptchaVerifier, 
  signInWithPhoneNumber, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "./firebase.js";

// ========== GOOGLE LOGIN ==========
document.getElementById("googleLogin")?.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Google Login Success:", result.user);
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Google login failed: " + error.message);
  }
});

// ========== EMAIL SIGNUP ==========
document.getElementById("emailSignup")?.addEventListener("click", async () => {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful! Please log in.");
    window.location.href = "index.html";
  } catch (error) {
    alert("Signup failed: " + error.message);
  }
});

// ========== EMAIL LOGIN ==========
document.getElementById("emailLogin")?.addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});

// ========== PHONE LOGIN ==========
function setupRecaptcha() {
  window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "invisible",
    callback: (response) => {
      console.log("Recaptcha verified");
    },
  });
}

document.getElementById("sendOTP")?.addEventListener("click", async () => {
  const phoneNumber = document.getElementById("phoneNumber").value;
  setupRecaptcha();
  try {
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
    window.confirmationResult = confirmationResult;
    alert("OTP sent! Enter it below.");
  } catch (error) {
    alert("Error sending OTP: " + error.message);
  }
});

document.getElementById("verifyOTP")?.addEventListener("click", async () => {
  const otp = document.getElementById("otpCode").value;
  try {
    await window.confirmationResult.confirm(otp);
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Invalid OTP: " + error.message);
  }
});

// ========== LOGOUT ==========
document.getElementById("logoutBtn")?.addEventListener("click", async () => {
  try {
    await signOut(auth);
    window.location.href = "logout.html";
  } catch (error) {
    alert("Logout failed: " + error.message);
  }
});

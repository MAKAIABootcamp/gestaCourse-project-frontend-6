import React, { useEffect } from 'react';

const Funct = () => {
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    const sign_in_btn2 = document.querySelector("#sign-in-btn2");
    const sign_up_btn2 = document.querySelector("#sign-up-btn2");

    const handleSignUpClick = () => {
      container.classList.add("sign-up-mode");
    };

    const handleSignInClick = () => {
      container.classList.remove("sign-up-mode");
    };

    const handleSignUpClick2 = () => {
      container.classList.add("sign-up-mode2");
    };

    const handleSignInClick2 = () => {
      container.classList.remove("sign-up-mode2");
    };

    sign_up_btn.addEventListener("click", handleSignUpClick);
    sign_in_btn.addEventListener("click", handleSignInClick);
    sign_up_btn2.addEventListener("click", handleSignUpClick2);
    sign_in_btn2.addEventListener("click", handleSignInClick2);

    return () => {
      // Limpiar los event listeners al desmontar el componente
      sign_up_btn.removeEventListener("click", handleSignUpClick);
      sign_in_btn.removeEventListener("click", handleSignInClick);
      sign_up_btn2.removeEventListener("click", handleSignUpClick2);
      sign_in_btn2.removeEventListener("click", handleSignInClick2);
    };
  }, []);

  return null;
};

export default Funct;

import React, { useEffect } from "react";

const DonateButton = () => {
  useEffect(() => {
    const rzpPaymentForm = document.getElementById("rzp_payment_form");

    if (!rzpPaymentForm.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_KqA8As25sK710i";
      rzpPaymentForm.appendChild(script);
    }
  });

  return <form id="rzp_payment_form" className="pt-2"></form>;
};

export default DonateButton;


const DeliveryAddress = () => {
  const [selectedCountry, setSelectedCountry] = useState(""); // New state to store the selected country

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  
  };

  return (
    <li>
      <h3>Delivery Address</h3>
      {/* Add a dropdown for selecting the country */}
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        <option value="Country 1">Country 1</option>
        <option value="Country 2">Country 2</option>
        {/* Add more country options as needed */}
      </select>
      <input type="text" placeholder="City" />
      <input type="text" placeholder="Street Address" />
      <input type="text" placeholder="Special Request" />
    </li>
  );
};

const SignupLoginForm = () => {
  const [step, setStep] = useState(1);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [existingUser, setExistingUser] = useState({
    emailOrUsername: "",
    password: "",
  });

  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    city: "",
    address: "",
    location: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // New state to store the phone number

  const handleNewUserChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleExistingUserChange = (event) => {
    const { name, value } = event.target;
    setExistingUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleDeliveryInfoChange = (event) => {
    const { name, value } = event.target;
    setDeliveryInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleNewUserSubmit = (event) => {
    event.preventDefault();
    
    // submission for new users
    console.log("New User Data:", newUser);
    setStep(2);
  };

  const handleExistingUserSubmit = (event) => {
    event.preventDefault();
    // submission for existing users
    console.log("Existing User Data:", existingUser);
    setStep(2);
  };

  const handleDeliveryInfoSubmit = (event) => {
    event.preventDefault();
    // submission for delivery information 
    console.log("Delivery Info:", deliveryInfo);
    setStep(3); 
  };

  const handleConfirmPayment = () => {
    // Save the phone number to state
    const phoneNumberInput = document.getElementById("phoneNumber");
    setPhoneNumber(phoneNumberInput.value);
    setStep(4);
  };

  return (
    <div id="forms">
      {step === 1 && (
        <div className="new">
          <h5 style={{ color: "white" }}>New User?</h5>
          <form onSubmit={handleNewUserSubmit}>
            <label htmlFor="name">Name</label><br />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={newUser.name}
              onChange={handleNewUserChange}
            /><br />
            <label htmlFor="email">Email</label><br />
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              value={newUser.email}
              onChange={handleNewUserChange}
            /><br />
            <label htmlFor="password">Password</label><br />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={newUser.password}
              onChange={handleNewUserChange}
            /><br />
            <label htmlFor="confirmPassword">Confirm Password</label><br />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={newUser.confirmPassword}
              onChange={handleNewUserChange}
            /><br />
            <button type="submit" className="btn">
              Continue
            </button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="exits">
          <h5 style={{ color: "white" }}>Existing User?</h5>
          <form onSubmit={handleExistingUserSubmit}>
            
           
          </form>
          {/* Delivery Information */}
          <form onSubmit={handleDeliveryInfoSubmit}>
            <label htmlFor="name">Name</label><br />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={deliveryInfo.name}
              onChange={handleDeliveryInfoChange}
            />
            
            {/* Insert the DeliveryAddress component here */}
            <DeliveryAddress />

            <button type="submit" className="btn">
              Continue
            </button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div>
          {/* Payment Method  */}
          <form>
            <p>Please select your payment option</p>
            <label>
              <input
                type="radio"
                name="payment"
                value="Mpesa"
                checked={paymentMethod === "Mpesa"}
                onChange={handlePaymentMethodChange}
              />
              M-PESA
            </label>
            <br /><br />
            <input
              type="text"
              id="phoneNumber"
              placeholder="Enter your Mpesa phone number"
            />
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
            />
            <br /><br />
            <button type="button" className="btn" onClick={handleConfirmPayment}>
              Confirm Payment
            </button>
          </form>
        </div>
      )}

      {step === 4 && (
        <div>
          <h1>Thank you for shopping with us.</h1>
          <p>
            You will receive an SMS with instructions to complete the payment
            using M-PESA on your mobile phone.
          </p>
          <p>Phone Number: {phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

export default SignupLoginForm;
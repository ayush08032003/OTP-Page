

# OTP Verification App

This is a simple OTP (One-Time Password) verification application built with React. It features a dynamic OTP input field, a countdown timer, and a "Verify" button to check the OTP entered by the user.

## Features

- **OTP Input**: Users can enter a 6-digit OTP in separate input fields.
- **Countdown Timer**: A countdown timer is displayed, which resets upon clicking the "Resend" link.
- **OTP Verification**: After entering the OTP, the user can click the "Verify" button to check the OTP.
- **Resend OTP**: If the user can't find the OTP email, they can resend the OTP and restart the countdown timer.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **JavaScript (ES6)**: Modern JavaScript for clean, maintainable code.

## Installation

To get started with this project, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/otp-verification-app.git
cd otp-verification-app
```

### 2. Install dependencies

Ensure you have [Node.js](https://nodejs.org/) installed, then install the required dependencies by running:

```bash
npm install
```

### 3. Run the application

To start the development server and view the application in your browser, run:

```bash
npm start
```

This will open the app in your default browser at `http://localhost:3000`.

## Project Structure

The project is structured as follows:

```
otp-verification-app/
│
├── src/
│   ├── components/
│   │   ├── Button.jsx           # Reusable Button component
│   │   ├── Countdown.jsx        # Countdown Timer component
│   │   ├── OTP.jsx              # OTP Input component
│   │   └── index.js             # Exports all components
│   │
│   ├── App.jsx                  # Main application logic and UI
│   └── index.js                 # Entry point for React application
│
├── public/
│   └── index.html               # Basic HTML file for the app
│
├── package.json                 # Project dependencies and scripts
└── tailwind.config.js           # Tailwind CSS configuration
```

### Component Breakdown

#### 1. `Button.jsx`

A reusable button component that accepts the following props:

- `onClick`: A function to handle button click events.
- `children`: The content of the button (usually text or other components).
- `className`: Optional CSS class to apply custom styles.

#### 2. `Countdown.jsx`

A countdown timer component that displays the remaining time in minutes and seconds. It accepts the following props:

- `time`: The initial countdown time in seconds.
- `reset`: A flag to trigger the reset of the countdown timer.
- `textColor`: Custom CSS class for the text color.
- `className`: Additional CSS classes for styling.

#### 3. `OTP.jsx`

An OTP input component that renders multiple OTP input fields dynamically based on the `number` prop. It accepts the following props:

- `number`: The number of OTP input fields to render.
- `values`: An array of current OTP input values.
- `setValues`: A function to update the OTP values.
- `className`: Custom CSS classes for styling.

#### 4. `App.jsx`

The main component that brings everything together:

- Displays a title and instructions.
- Renders the `OTP`, `Countdown`, and `Button` components.
- Handles OTP submission and countdown reset logic.

## Usage

### OTP Input

The OTP component accepts `number` of fields, which in this case is set to 6. You can enter each digit in the respective field, and the input automatically focuses on the next field as you type.

### Countdown Timer

The countdown timer starts at 10 minutes (600 seconds) and decreases every second. The timer is reset when the "Resend" link is clicked.

### Resend OTP

If you can't find the OTP email, you can click the "here" link to reset the timer and trigger the resend logic.

### Verify Button

After entering the OTP, clicking the "Verify" button will log the OTP value and trigger any additional verification logic (you can add your server-side verification here).

## Customization

### Styling with Tailwind CSS

The app uses **Tailwind CSS** for styling, which allows you to easily customize the appearance of the components by modifying the `className` prop in the component usage. For example, you can change the button color or size by modifying the `className`:

```jsx
<Button className="text-white bg-red-500 rounded-md w-80 py-3 font-bold mt-10">
  Verify
</Button>
```

### Modifying Timer

You can adjust the initial countdown time by modifying the `timer` state in `App.jsx`. Currently, it is set to 600 seconds (10 minutes), but you can change it to any value.

```jsx
const [timer, setTimer] = useState(600); // Change 600 to your desired time in seconds
```

### Handling OTP Submission

The `onClick` function in the `Button` component handles OTP submission. Here, you can replace the `console.log(otpValue)` with your verification logic, such as sending the OTP to a server.

```jsx
onClick={() => {
  const otpValue = String(values.join("")).trim();
  if (otpValue.length === 6) {
    // Replace with actual verification logic
    console.log("Verify button clicked with OTP:", otpValue);
  }
}}
```


## Acknowledgements

- **React**: For creating a powerful and flexible UI framework.
- **Tailwind CSS**: For providing an easy-to-use utility-first CSS framework for rapid UI development.


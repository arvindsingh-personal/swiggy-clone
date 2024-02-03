import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should render Header component with Cart itens", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart - (0 items)");
  expect(cartItems).toBeInTheDocument();
});

test("should render Header component with Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

test("Should change Login button to Logout ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logoutButton = screen.getByRole("button", { name: "Logout" });
  fireEvent.click(logoutButton);

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

// import { fireEvent, render, screen } from "@testing-library/react";
// import Header from "../Header";
// import "@testing-library/jest-dom";
// import { Provider } from "react-redux";
// import appStore from "../../utils/appStore";
// import { BrowserRouter } from "react-router-dom";

// test("Should render Header Component with a Cart items 0", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const cartItems = screen.getByText("Cart - (0 items)");
//   expect(cartItems).toBeInTheDocument();
// });

// test("Should render Header Component with a Cart items 0", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const cartItems = screen.getByText(/Cart/);
//   expect(cartItems).toBeInTheDocument();
// });

// test("Should change Login button to Logout button on click", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );

//   const loginButton = screen.getByRole("button", { name: "Login" });

//   fireEvent.click(loginButton);

//   const logoutButton = screen.getByRole("button", { name: "Logout" });

//   expect(logoutButton).toBeInTheDocument();
// });

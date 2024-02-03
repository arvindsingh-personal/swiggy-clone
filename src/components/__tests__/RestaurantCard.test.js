import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import Mock_Data from "../../utils/RestaurantCardMock.json";
import "@testing-library/jest-dom";

test("Render Restaurant Card Component with its props", () => {
  render(<RestaurantCard {...Mock_Data?.info} />);

  let name = screen.getByText("Rominus Pizza And Burger");

  expect(name).toBeInTheDocument();
});

test("Render withPromotedLabel HOC Component", () => {
  const RestaurantCardPromoted = withPromotedLabel();
  render(<RestaurantCardPromoted {...Mock_Data?.info} />);
  //   render(withPromotedLabel({ ...Mock_Data?.info }));

  const name = screen.getByText("Rominus Pizza And Burger");
  expect(name).toBeInTheDocument();
});

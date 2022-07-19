import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Badge from "../../components/Badge";
import { restaurantList } from "../../utils/consts";

test("Badge", () => {
  render(
    <>
      {restaurantList.map(() => (
        <Badge />
      ))}
    </>
  );

  restaurantList.forEach((_, idx) => {
    const badgeText = "Sushi";
    const badgeImg = "https://via.placeholder.com/12x12";

    const badgeTextElement = screen.getAllByTestId(`badge-${badgeText}-name`)[
      idx
    ];
    const badgeImgElement = screen.getAllByTestId(`badge-${badgeText}-image`)[
      idx
    ];

    expect(badgeTextElement.textContent).toBe(badgeText);
    expect(badgeImgElement.getAttribute("src")).toBe(badgeImg);
  });
});

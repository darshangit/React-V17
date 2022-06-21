/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Carousal from "../Carousal";

test("lets use click on thumbnail to make them the hero image", async () => {
  const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
  const carousal = render(<Carousal images={images} />);
  const hero = await carousal.findByTestId("hero");
  expect(hero.src).toContain(images[0]);

  for (let i = 0; i < images.length; i++) {
    const image = images[i];

    const thumb = await carousal.findByTestId(`thumbnails${i}`);
    thumb.click();

    expect(hero.src).toContain(image);
    expect(thumb.classList).toContain("active");
  }
});

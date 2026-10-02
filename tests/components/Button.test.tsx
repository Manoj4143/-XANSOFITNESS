import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@/components/ui/Button";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

describe("UI Primitives Component Testing", () => {
  describe("<Button />", () => {
    it("renders with rounded-full pill profile and primary terracotta background", () => {
      render(<Button variant="primary">Begin Practice</Button>);

      const button = screen.getByRole("button", { name: /begin practice/i });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("rounded-full");
      expect(button).toHaveClass("bg-primary");
      expect(button).toHaveClass("text-white");
    });

    it("applies warm border styling for secondary variant", () => {
      render(<Button variant="secondary">Explore Sanctuary</Button>);

      const button = screen.getByRole("button", { name: /explore sanctuary/i });
      expect(button).toHaveClass("rounded-full");
      expect(button).toHaveClass("border-border");
      expect(button).toHaveClass("text-text-main");
    });

    it("applies subtle transparent styling for ghost variant", () => {
      render(<Button variant="ghost">View Details</Button>);

      const button = screen.getByRole("button", { name: /view details/i });
      expect(button).toHaveClass("bg-transparent");
      expect(button).toHaveClass("text-text-muted");
    });

    it("fires click callback when clicked", () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Join Live Flow</Button>);

      const button = screen.getByRole("button", { name: /join live flow/i });
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("disables pointer events and lowers opacity when disabled", () => {
      render(<Button disabled>Class Full</Button>);

      const button = screen.getByRole("button", { name: /class full/i });
      expect(button).toBeDisabled();
      expect(button).toHaveClass("disabled:opacity-50");
    });
  });

  describe("<SurfaceCard />", () => {
    it("renders with pure white surface, organic 24px radius, and soft shadow", () => {
      render(
        <SurfaceCard data-testid="practice-card">
          <h3>Vinyasa Architecture</h3>
          <p>45 mins of fluid dynamic movement.</p>
        </SurfaceCard>
      );

      const card = screen.getByTestId("practice-card");
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass("bg-surface");
      expect(card).toHaveClass("rounded-2xl");
      expect(card).toHaveClass("shadow-soft");
    });
  });
});

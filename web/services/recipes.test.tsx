import { axios } from "@/lib/axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IRecipes } from "./recipes";

// Arrange
jest.mock("@/lib/axios", () => ({
  axios: { get: jest.fn() },
}));

const mockAxiosGetFn = jest.mocked(axios.get);

const setUpTanStack = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 0 } },
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return { queryClient, wrapper };
};

const mockRecipeList: IRecipes = {
  total: 1,
  results: [
    {
      id: 1,
      name: "RECIPE_NAME",
      description: "RECIPE_DESCRIPTION",
      imageUrl: "https://example.image",
      difficulty: { id: "1", name: "EASY" },
      duration: { id: "1", name: "HALF_HOUR" },
      ingredients: [{ id: "1", description: "RECIPE_INGREDIENT_01" }],
      instructions: [{ id: "1", description: "RECIPE_INSTRUCTION_01" }],
      creator: { id: "1", name: "DEV_POOL" },
      isFavorite: false,
      rating: { average: 5, total: 200 },
      createdAt: "2026-08-20T10:00:00Z",
      updatedAt: "2026-08-20T10:00:00Z",
    },
  ],
};

describe("Validate use get recipe from API", () => {
  it("Should get recipe response success", () => {
    // Arrange
    mockAxiosGetFn.mockResolvedValue({ data: mockRecipeList });
  });
});

import { axios } from "@/lib/axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

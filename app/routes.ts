import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("news", "routes/news.tsx"),
  route("typescript-learning", "routes/typescript-learning.tsx"),
  route("ruby-algorithm-learning", "routes/ruby-algorithm-learning.tsx"),
  route("network-learning", "routes/network-learning.tsx"),
  route("react-router-guide", "routes/react-router-guide.tsx"),
] satisfies RouteConfig;

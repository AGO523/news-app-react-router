import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("news", "routes/news.tsx"),
  route("typescript-learning", "routes/typescript-learning.tsx"),
] satisfies RouteConfig;

import { createProxyMiddleware } from "http-proxy-middleware";
export const userProxy = createProxyMiddleware({
  target: "http://localhost:3001",
  changeOrigin: true,
});

export const authProxy = createProxyMiddleware({
  target: "http://localhost:3002",
  changeOrigin: true,
});
export const paymentProxy = createProxyMiddleware({
  target: "http://localhost:3003",
  changeOrigin: true,
});

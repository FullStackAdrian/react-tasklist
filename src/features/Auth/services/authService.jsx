const authService = {
  async login({ email, password }) {
    await new Promise((r) => setTimeout(r, 400));
    if (email === "user@example.com" && password === "password") {
      return {
        user: { id: 1, name: "Usuario Demo", email },
        accessToken: "mock-access-token-123",
        refreshToken: "mock-refresh-token-abc",
      };
    }
    const err = new Error("Credenciales inválidas");
    err.status = 401;
    throw err;
  },

  async refresh(refreshToken) {
    await new Promise((r) => setTimeout(r, 300));
    if (refreshToken === "mock-refresh-token-abc") {
      return { accessToken: "mock-access-token-456", refreshToken: refreshToken };
    }
    const err = new Error("Refresh token inválido");
    err.status = 401;
    throw err;
  },

  async logout() {
    await new Promise((r) => setTimeout(r, 150));
    return;
  },
};

export default authService;
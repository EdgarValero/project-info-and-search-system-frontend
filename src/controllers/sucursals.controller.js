class sucursalController {
  constructor() {
    this.URI = "/api/sucursals";
  }
  async getSucursals() {
    const response = await fetch(this.URI);
    const sucursal = await response.json();
    return sucursal;
  }
  async addSucursal(input) {
    const response = await fetch(`${this.URI}/add-sucursal`, {
      method: "POST",
      body: input
    });
    const data = await response.json();
    return data;
  }
  async deleteSucursal(id) {
    const response = await fetch(`${this.URI}/delete-sucursal/${id}`, {
      method: "DELETE"
    });
    const data = await response.json();
    return data;
  }
  async getSucursal(id) {
    const response = await fetch(`${this.URI}/${id}`);
    const sucursal = await response.json();
    return sucursal;
  }
  async sendEditSucursal(id, input) {
    const response = await fetch(`${this.URI}/edit-sucursal/${id}`, {
      method: "PUT",
      body: input
    });
    const data = await response.json();
    return data;
  }
}

export default new sucursalController();

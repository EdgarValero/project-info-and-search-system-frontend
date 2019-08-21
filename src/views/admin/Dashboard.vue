<template>
  <div class="dashboard">
    <!-- Alert Message -->
    <transition name="slide-fade">
      <div v-if="message.value">
        <div class="row">
          <div class="col-10 col-md-6 mt-3 fixed-top ml-auto">
            <div :class="['alert p-2 text-center', message.class]" role="alert">
              <strong
                ><font-awesome-icon
                  :icon="[message.iconPrefix, message.icon]"
                  class="mr-2"
                />
                {{ message.content }}</strong
              >
              <button type="button" class="close" @click="closeMessage">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-3 col-lg-3 col-xl-2 p-3 bg-dark text-white">
          <div class="d-inline-block">
            <button
              class="btn btn-success d-md-none mb-2 collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#NavDashboard"
              aria-controls="NavDashboard"
              aria-expanded="true"
              aria-label="Toggle Dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                role="img"
                focusable="false"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M4 7h22M4 15h22M4 23h22"
                ></path>
              </svg>
            </button>
          </div>
          <div class="d-inline-flex ml-3">
            <font-awesome-icon icon="tachometer-alt" style="font-size:25px;" />
            <h4>Admin</h4>
            <strong>Dashboard</strong>
          </div>
          <nav class="bd-links collapse p-3" id="NavDashboard">
            <ul class="navbar-nav">
              <li class="nav-item">
                <button
                  type="button"
                  class="btn btn-success btn-block text-white"
                  data-toggle="collapse"
                  data-target="#productsOptions"
                  aria-expanded="false"
                  aria-controls="productsOptions"
                >
                  Productos <font-awesome-icon icon="angle-down" />
                </button>
                <div class="collapse" id="productsOptions">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a
                        class="nav-link text-center cursor-pointer"
                        @click="showFormAddProduct"
                        >Agregar Producto <font-awesome-icon icon="plus"
                      /></a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link text-center cursor-pointer"
                        @click="showTableProducts"
                        >Productos <font-awesome-icon icon="list-alt"
                      /></a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item mt-2">
                <button
                  type="button"
                  class="btn btn-success btn-block text-white"
                  data-toggle="collapse"
                  data-target="#categoryOptions"
                  aria-expanded="false"
                  aria-controls="categoryOptions"
                >
                  Categorias <font-awesome-icon icon="angle-down" />
                </button>
                <div class="collapse" id="categoryOptions">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a
                        class="nav-link text-center cursor-pointer"
                        @click="showFormAddCategory"
                        >Agregar Categoria <font-awesome-icon icon="plus"
                      /></a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link text-center cursor-pointer"
                        @click="showTableCategory"
                        >Categorias <font-awesome-icon icon="list-alt"
                      /></a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item mt-2">
                <button
                  type="button"
                  class="btn btn-success btn-block text-white"
                  data-toggle="collapse"
                  data-target="#sucursalOptions"
                  aria-expanded="false"
                  aria-controls="sucursalOptions"
                >
                  Sucursales <font-awesome-icon icon="angle-down" />
                </button>
                <div class="collapse" id="sucursalOptions">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a
                        class="nav-link text-center cursor-pointer"
                        @click="showFormAddSucursal"
                        >Agregar Sucursal <font-awesome-icon icon="plus"
                      /></a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link text-center cursor-pointer"
                        @click="showTableSucursals"
                        >Sucursales <font-awesome-icon icon="list-alt"
                      /></a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <main
          role="main"
          class="col-12 col-md-9 col-lg-9 col-xl-10 ml-sm-auto px-4 pb-5"
        >
          <div v-if="loading">
            <h2>
              Esta cargando la informacion de los productos en el dashboard....
            </h2>
          </div>
          <div v-else>
            <div
              class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
            >
              <h1 class="h2">
                <font-awesome-icon
                  icon="tachometer-alt"
                  style="font-size:30px;"
                />
                Dashboard
              </h1>
            </div>
            <!--FORM ADD PRODUCT-->
            <transition name="slide-fade">
              <div v-if="varShowFormAddProduct">
                <div class="row">
                  <div class="col-12 col-md-10 col-lg-10 px-4 py-3 mx-auto">
                    <div class="card">
                      <div
                        class="card-header bg-primary text-white text-center"
                      >
                        <h3>Agregar Producto</h3>
                      </div>
                      <div class="card-body">
                        <form @submit.prevent="addProduct">
                          <div class="form-row">
                            <div class="form-group col-12 col-md-6">
                              <label for="product.productName"
                                >Nombre del Producto</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Harina Pan"
                                v-model="product.productName"
                              />
                            </div>
                            <div class="form-group col-12 col-md-6">
                              <label for="product.productType"
                                >Tipo de Producto</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Harina"
                                v-model="product.productType"
                              />
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-12 col-md-6">
                              <label for="product.productCategory"
                                >Categoria del Producto</label
                              >
                              <select
                                v-model="product.productCategory"
                                class="form-control"
                              >
                                <option selected="selected" value="" disabled>
                                  Seleccionar categoria del producto
                                </option>
                                <option value="alimentos basicos" selected
                                  >Alimentos Básicos</option
                                >
                                <option value="bebidas en polvo"
                                  >Bebidas en Polvo</option
                                >
                                <option value="bebidas liquidas"
                                  >Bebidas Líquidas</option
                                >
                                <option value="bebidas gaseosas"
                                  >Bebidas Gaseosas</option
                                >
                                <option value="cereales">Cereales</option>
                                <option value="helados">Helados</option>
                                <option value="yogurts">Yogurts</option>
                                <option value="sopas, salasas y aderezos"
                                  >Sopas, Salsas y Aderezos</option
                                >
                                <option value="dulces y snacks"
                                  >Dulces y Snacks</option
                                >
                                <option value="charcuteria">Charcuteria</option>
                                <option value="cuidado personal"
                                  >Cuidado Personal</option
                                >
                              </select>
                            </div>
                            <div class="form-group col-12 col-md-6">
                              <label for="product.salePrice"
                                >Precio de Venta Producto</label
                              >
                              <input
                                type="number"
                                class="form-control"
                                placeholder="Sale Price"
                                v-model="product.salePrice"
                              />
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-12 col-md-6">
                              <label for="product.disponibility"
                                >Disponibilidad del Producto</label
                              >
                              <select
                                v-model="product.disponibility"
                                class="form-control"
                              >
                                <option selected="selected" value="" disabled>
                                  Seleccionar disponibilidad del producto
                                </option>
                                <option value="disponible" selected
                                  >Disponible</option
                                >
                                <option value="poca disponibilidad" selected
                                  >Poca Disponibilidad</option
                                >
                                <option value="no disponible"
                                  >No Disponible</option
                                >
                              </select>
                            </div>
                            <div class="form-group col-12 col-md-6">
                              <label for="product.image"
                                >Subir Imagen del Producto</label
                              >
                              <div class="input-group">
                                <div class="custom-file">
                                  <input
                                    type="file"
                                    class="custom-file-input"
                                    id="img"
                                    aria-describedby="inputGroupFileAddon01"
                                    @change="onFileImg"
                                  />
                                  <label
                                    class="custom-file-label"
                                    for="inputGroupFile01"
                                    >Subir Imagen</label
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <label for="product.productDescription"
                            >Descripcion del Producto</label
                          >
                          <div class="form-group">
                            <textarea
                              class="form-control textarea-form-admin"
                              placeholder="Descripcion del Producto"
                              v-model="product.productDescription"
                            >
                            </textarea>
                          </div>
                          <div class="form-group mt-2">
                            <button
                              type="submit"
                              class="btn btn-primary btn-block"
                            >
                              Agregar Producto <font-awesome-icon icon="plus" />
                            </button>
                            <button
                              type="button"
                              class="btn btn-danger btn-block"
                              @click="cancelFormAddProduct"
                            >
                              Cancelar <font-awesome-icon icon="ban" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <!--FORM EDIT PRODUCT-->
            <transition name="slide-fade">
              <div v-if="varShowFormEditProduct">
                <div class="row">
                  <div class="col-12 col-md-10 col-lg-10 px-4 py-3 mx-auto">
                    <div class="card">
                      <div
                        class="card-header bg-primary text-white text-center"
                      >
                        <h3>Editar Producto</h3>
                      </div>
                      <div class="card-body">
                        <form @submit.prevent="sendEditProduct">
                          <div class="form-row">
                            <div class="form-group col-12 col-md-6">
                              <label for="product.productName"
                                >Nombre del Producto</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Harina Pan"
                                v-model="product.productName"
                              />
                            </div>
                            <div class="form-group col-12 col-md-6">
                              <label for="product.productType"
                                >Tipo del Producto</label
                              >
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Harina"
                                v-model="product.productType"
                              />
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-12 col-md-6">
                              <label for="product.productCategory"
                                >Categoria del Producto</label
                              >
                              <select
                                v-model="product.productCategory"
                                class="form-control"
                              >
                                <option selected="selected" value="" disabled>
                                  Seleccionar categoria del producto
                                </option>
                                <option value="alimentos basicos" selected
                                  >Alimentos Básicos</option
                                >
                                <option value="bebidas en polvo"
                                  >Bebidas en Polvo</option
                                >
                                <option value="bebidas liquidas"
                                  >Bebidas Líquidas</option
                                >
                                <option value="bebidas gaseosas"
                                  >Bebidas Gaseosas</option
                                >
                                <option value="cereales">Cereales</option>
                                <option value="helados">Helados</option>
                                <option value="yogurts">Yogurts</option>
                                <option value="sopas, salasas y aderezos"
                                  >Sopas, Salsas y Aderezos</option
                                >
                                <option value="dulces y snacks"
                                  >Dulces y Snacks</option
                                >
                                <option value="charcuteria">Charcuteria</option>
                                <option value="cuidado personal"
                                  >Cuidado Personal</option
                                >
                              </select>
                            </div>
                            <div class="form-group col-12 col-md-6">
                              <label for="product.salePrice"
                                >Precio de Venta Producto</label
                              >
                              <input
                                type="number"
                                class="form-control"
                                placeholder="Sale Price"
                                v-model="product.salePrice"
                              />
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="form-group col-12 col-md-6">
                              <label for="product.disponibility"
                                >Disponibilidad del Producto</label
                              >
                              <select
                                v-model="product.disponibility"
                                class="form-control"
                              >
                                <option selected="selected" value="" disabled>
                                  Seleccional disponibilidad del producto
                                </option>
                                <option value="disponible" selected
                                  >Disponible</option
                                >
                                <option value="poca disponibilidad" selected
                                  >Poca Disponibilidad</option
                                >
                                <option value="no disponible"
                                  >No Disponible</option
                                >
                              </select>
                            </div>
                            <div class="form-group col-12 col-md-6">
                              <label for="product.image"
                                >Subir Imagen del Producto</label
                              >
                              <div class="input-group">
                                <div class="custom-file">
                                  <input
                                    type="file"
                                    class="custom-file-input"
                                    id="img"
                                    aria-describedby="inputGroupFileAddon01"
                                    @change="onFileImg"
                                  />
                                  <label
                                    class="custom-file-label"
                                    for="inputGroupFile01"
                                    >Subir Imagen</label
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                          <label for="product.productDescription"
                            >Descripcion del Producto</label
                          >
                          <div class="form-group">
                            <textarea
                              class="form-control textarea-form-admin"
                              placeholder="Descripcion del Producto"
                              v-model="product.productDescription"
                            >
                            </textarea>
                          </div>
                          <div class="form-group mt-2">
                            <button
                              type="submit"
                              class="btn btn-primary btn-block"
                            >
                              Editar Producto
                              <font-awesome-icon icon="sync-alt" />
                            </button>
                            <button
                              type="button"
                              class="btn btn-danger btn-block"
                              @click="cancelFormEditProduct"
                            >
                              Cancelar <font-awesome-icon icon="ban" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <!--PRODUCT TABLE-->
            <transition name="slide-fade">
              <div v-if="varShowTableProducts">
                <h2>Tabla de Productos</h2>
                <div class="table-responsive">
                  <table class="table table-bordered table-sm text-center">
                    <thead class="bg-primary text-white">
                      <tr>
                        <th scope="col">Nombre del Producto</th>
                        <th scope="col">Categoria del Producto</th>
                        <th scope="col">Tipo del Producto</th>
                        <th scope="col">Precio de Venta</th>
                        <th scope="col">Disponibilidad</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Accion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in products" :key="product.id">
                        <td>{{ product.productName }}</td>
                        <td>{{ product.productCategory }}</td>
                        <td>{{ product.productType }}</td>
                        <td>{{ product.salePrice }}</td>
                        <td>{{ product.disponibility }}</td>
                        <td>{{ product.productDescription }}</td>
                        <td class="p-2">
                          <button
                            type="button"
                            class="btn btn-danger my-1 mx-1"
                            @click="deleteProduct(product._id)"
                          >
                            <font-awesome-icon icon="trash" />
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary my-1 mx-1"
                            @click="editProduct(product._id)"
                          >
                            <font-awesome-icon icon="sync-alt" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </transition>
            <!--FORM ADD CATEGORY-->
            <transition name="slide-fade">
              <div v-if="varShowFormAddCategory">
                <div class="row">
                  <div class="col-12 col-md-10 col-lg-8 px-4 py-3 mx-auto">
                    <div class="card">
                      <div
                        class="card-header bg-primary text-white text-center"
                      >
                        <h3>Agregar Categoria</h3>
                      </div>
                      <div class="card-body">
                        <form @submit.prevent="addCategory">
                          <div class="form-group">
                            <label for="category.categoryName"
                              >Nombre de la Categoria</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Alimentos Basicos"
                              v-model="category.categoryName"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label for="category.categoryDescription"
                              >Descripcion de la Categoria</label
                            >
                            <textarea
                              class="form-control textarea-form-admin"
                              placeholder="Category Description"
                              v-model="category.categoryDescription"
                              required
                            >
                            </textarea>
                          </div>
                          <div class="form-group">
                            <label for="category.categoryUrl"
                              >Url de la Categoria</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="/categoria/alimento-y-bebidas"
                              v-model="category.categoryUrl"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <div class="input-group">
                              <div class="custom-file">
                                <input
                                  type="file"
                                  class="custom-file-input"
                                  aria-describedby="inputGroupFileAddon01"
                                  @change="onFileImgCategory"
                                />
                                <label
                                  class="custom-file-label"
                                  for="inputGroupFile01"
                                  >Subir Imagen</label
                                >
                              </div>
                            </div>
                          </div>
                          <div class="form-group mt-2">
                            <button
                              type="submit"
                              class="btn btn-primary btn-block"
                            >
                              Agregar Categoria
                              <font-awesome-icon icon="plus" />
                            </button>
                            <button
                              type="button"
                              class="btn btn-danger btn-block"
                              @click="cancelFormAddCategory"
                            >
                              Cancelar <font-awesome-icon icon="ban" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <!--FORM EDIT CATEGORY-->
            <transition name="slide-fade">
              <div v-if="varShowFormEditCategory">
                <div class="row">
                  <div class="col-12 col-md-10 col-lg-8 px-4 py-3 mx-auto">
                    <div class="card">
                      <div
                        class="card-header bg-primary text-white text-center"
                      >
                        <h3>Editar Categoria</h3>
                      </div>
                      <div class="card-body">
                        <form @submit.prevent="sendEditCategory">
                          <div class="form-group">
                            <label for="category.categoryName"
                              >Nombre de la Categoria</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Alimentos Basicos"
                              v-model="category.categoryName"
                            />
                          </div>
                          <div class="form-group">
                            <label for="category.categoryDescription"
                              >Descripcion de la Categoria</label
                            >
                            <textarea
                              class="form-control"
                              placeholder="Category Description"
                              v-model="category.categoryDescription"
                            >
                            </textarea>
                          </div>
                          <div class="form-group">
                            <label for="category.categoryUrl"
                              >Url de la Categoria</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="/categoria/alimento-y-bebidas"
                              v-model="category.categoryUrl"
                            />
                          </div>
                          <div class="input-group">
                            <div class="custom-file">
                              <input
                                type="file"
                                class="custom-file-input"
                                aria-describedby="inputGroupFileAddon01"
                                @change="onFileImgCategory"
                              />
                              <label
                                class="custom-file-label"
                                for="inputGroupFile01"
                                >Subir Imagen</label
                              >
                            </div>
                          </div>
                          <div class="form-group mt-2">
                            <button
                              type="submit"
                              class="btn btn-primary btn-block"
                            >
                              Editar Categoria
                              <font-awesome-icon icon="sync-alt" />
                            </button>
                            <button
                              type="button"
                              class="btn btn-danger btn-block"
                              @click="cancelFormEditCategory"
                            >
                              Cancelar <font-awesome-icon icon="ban" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <!--CATEGORIES TABLE-->
            <transition name="slide-fade">
              <div v-if="varShowTableCategory">
                <h2>Tabla de Categorias de Productos</h2>
                <div class="table-responsive">
                  <table class="table table-bordered table-sm text-center">
                    <thead class="bg-primary text-center text-white">
                      <tr>
                        <th scope="col">Nombre de la Categoria</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Url de la Categoria</th>
                        <th scope="col">Accion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="category in categories" :key="category._id">
                        <td>{{ category.categoryName }}</td>
                        <td>{{ category.categoryDescription }}</td>
                        <td>{{ category.categoryUrl }}</td>
                        <td class="p-2">
                          <button
                            type="button"
                            class="btn btn-danger my-1 mx-1"
                            @click="deleteCategory(category._id)"
                          >
                            <font-awesome-icon icon="trash" />
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary my-1 mx-1"
                            @click="editCategory(category._id)"
                          >
                            <font-awesome-icon icon="sync-alt" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </transition>
            <!--FORM ADD SUCURSAL-->
            <transition name="slide-fade">
              <div v-if="varShowFormAddSucursal">
                <div class="row">
                  <div class="col-12 col-md-10 col-lg-8 px-4 py-3 mx-auto">
                    <div class="card">
                      <div
                        class="card-header bg-primary text-white text-center"
                      >
                        <h3>Agregar Sucursal</h3>
                      </div>
                      <div class="card-body">
                        <form @submit.prevent="addSucursal">
                          <div class="form-group">
                            <label for="sucursal.direction"
                              >Direccion de la Sucursal</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Centro Comercial Plaza, Av.Principal, Calle 13, Valera, Trujillo"
                              v-model="sucursal.direction"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label for="sucursal.numberContact"
                              >Numero de Contacto</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="0800-6749141"
                              v-model="sucursal.numberContact"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label for="sucursal.sucursal.googleMaps"
                              >iFrame Google Maps</label
                            >
                            <textarea
                              class="form-control textarea-form-admin"
                              placeholder="iFrame Google Maps"
                              v-model="sucursal.googleMaps"
                              required
                            >
                            </textarea>
                          </div>
                          <div class="form-group mt-2">
                            <button
                              type="submit"
                              class="btn btn-primary btn-block"
                            >
                              Agregar Sucursal <font-awesome-icon icon="plus" />
                            </button>
                            <button
                              type="button"
                              class="btn btn-danger btn-block"
                              @click="cancelFormAddSucursal"
                            >
                              Cancelar <font-awesome-icon icon="ban" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <!--FORM EDIT SUCURSAL-->
            <transition name="slide-fade">
              <div v-if="varShowFormEditSucursal">
                <div class="row">
                  <div class="col-12 col-md-10 col-lg-8 px-4 py-3 mx-auto">
                    <div class="card">
                      <div
                        class="card-header bg-primary text-white text-center"
                      >
                        <h3>Editar Sucursal</h3>
                      </div>
                      <div class="card-body">
                        <form @submit.prevent="sendEditSucursal">
                          <div class="form-group">
                            <label for="sucursal.direction"
                              >Direccion de la Sucursal</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Centro Comercial Plaza, Av.Principal, Calle 13, Valera, Trujillo"
                              v-model="sucursal.direction"
                            />
                          </div>
                          <div class="form-group">
                            <label for="sucursal.numberContact"
                              >Numero de Contacto</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="0800-6749141"
                              v-model="sucursal.numberContact"
                            />
                          </div>
                          <div class="form-group">
                            <label for="sucursal.googleMaps"
                              >iFrame Google Maps</label
                            >
                            <textarea
                              class="form-control textarea-form-admin"
                              placeholder="iFrame Google Maps"
                              v-model="sucursal.googleMaps"
                            >
                            </textarea>
                          </div>
                          <div class="form-group mt-2">
                            <button
                              type="submit"
                              class="btn btn-primary btn-block"
                            >
                              Editar Sucursal
                              <font-awesome-icon icon="sync-alt" />
                            </button>
                            <button
                              type="button"
                              class="btn btn-danger btn-block"
                              @click="calcelFormEditSucursal"
                            >
                              Cancelar <font-awesome-icon icon="ban" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <!--SUCURSALS TABLE-->
            <transition name="slide-fade">
              <div v-if="varShowTableSucursals">
                <h2>Tabla de Sucursales</h2>
                <div class="table-responsive">
                  <table class="table table-bordered table-sm text-center">
                    <thead class="bg-primary text-center text-white">
                      <tr>
                        <th scope="col">Direccion de la Sucursal</th>
                        <th scope="col">Numero de Contacto</th>
                        <th scope="col">Accion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="sucursal in sucursals" :key="sucursal._id">
                        <td>{{ sucursal.direction }}</td>
                        <td>{{ sucursal.numberContact }}</td>
                        <td class="p-2">
                          <button
                            type="button"
                            class="btn btn-danger my-1 mx-1"
                            @click="deleteSucursal(sucursal._id)"
                          >
                            <font-awesome-icon icon="trash" />
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary my-1 mx-1"
                            @click="editSucursal(sucursal._id)"
                          >
                            <font-awesome-icon icon="sync-alt" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </transition>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import productController from "../../controllers/products.controller";
import categoryController from "../../controllers/categories.controller";
import sucursalController from "../../controllers/sucursals.controller";

class Product {
  constructor(
    productName,
    productType,
    productCategory,
    productDescription,
    salePrice,
    disponibility
  ) {
    this.productName = productName;
    this.productType = productType;
    this.productCategory = productCategory;
    this.productDescription = productDescription;
    this.salePrice = salePrice;
    this.disponibility = disponibility;
  }
}

class Category {
  constructor(categoryName, categoryDescription, categoryUrl) {
    this.categoryName = categoryName;
    this.categoryDescription = categoryDescription;
    this.categoryUrl = categoryUrl;
  }
}

class Sucursal {
  constructor(direction, numberContact, googleMaps) {
    this.direction = direction;
    this.numberContact = numberContact;
    this.googleMaps = googleMaps;
  }
}

export default {
  data() {
    return {
      loading: true,
      message: {
        value: false,
        content: "",
        class: "",
        icon: "",
        iconPrefix: ""
      },
      product: {
        productName: "",
        productCategory: "",
        productType: "",
        productDescription: "",
        salePrice: "",
        disponibility: "",
        image: null
      },
      products: [],
      productToEdit: "",
      varShowFormAddProduct: false,
      varShowTableProducts: true,
      varShowFormEditProduct: false,
      category: {
        categoryName: "",
        categoryDescription: "",
        categoryUrl: "",
        image: null
      },
      categories: [],
      categoryToEdit: "",
      varShowTableCategory: false,
      varShowFormAddCategory: false,
      varShowFormEditCategory: false,
      sucursal: {
        direction: "",
        numberContact: "",
        googleMaps: ""
      },
      sucursals: [],
      sucursalToEdit: "",
      varShowFormAddSucursal: false,
      varShowFormEditSucursal: false,
      varShowTableSucursals: false
    };
  },
  created() {
    this.getProducts();
    this.getCategories();
    this.getSucursals();
  },
  methods: {
    /////// Close Alert Message ////////////////////////
    closeMessage() {
      this.message.value = false;
    },
    ///////   Products   ////////////////////////////////////////////
    async getProducts() {
      const products = await productController.getProducts();
      this.loading = false;
      this.products = products;
    },
    async addProduct() {
      if (
        !this.product.productName ||
        !this.product.productCategory ||
        !this.product.productType ||
        !this.product.productDescription ||
        !this.product.salePrice ||
        !this.product.disponibility ||
        !this.product.image
      ) {
        return (this.message = {
          content: "Llene Todos los campos del formulario",
          class: "custom-alert-danger",
          icon: "exclamation-triangle",
          iconPrefix: "fas",
          value: true
        });
      }
      const fd = new FormData();
      fd.append("productName", this.product.productName);
      fd.append("productType", this.product.productType);
      fd.append("productCategory", this.product.productCategory);
      fd.append("productDescription", this.product.productDescription);
      fd.append("salePrice", this.product.salePrice);
      fd.append("disponibility", this.product.disponibility);
      fd.append("image", this.product.image);

      const res = await productController.addProduct(fd);
      if (res.msg == "product_saved") {
        this.getProducts();
        this.product = new Product();
        this.varShowFormAddProduct = false;
        this.varShowTableProducts = true;
        return (this.message = {
          content: "El producto fue agregado con éxito!",
          class: "custom-success-danger",
          icon: "thumbs-up",
          iconPrefix: "far",
          value: true
        });
      }
      return (this.message = {
        content: "Hubo un error al agregar el producto",
        class: "custom-alert-danger",
        icon: "exclamation-triangle",
        iconPrefix: "fas",
        value: true
      });
    },
    async onFileImg(event) {
      this.product.image = event.target.files[0];
    },
    async deleteProduct(id) {
      const res = await productController.deleteProduct(id);
      if (res.msg == "product_deleted") {
        this.getProducts();
        return (this.message = {
          content: "El producto fue eliminado con éxito!",
          class: "custom-success-danger",
          icon: "thumbs-up",
          iconPrefix: "far",
          value: true
        });
      }
      return (this.message = {
        content: "Hubo un error al agregar el producto",
        class: "custom-alert-danger",
        icon: "exclamation-triangle",
        iconPrefix: "fas",
        value: true
      });
    },
    async editProduct(id) {
      const data = await productController.getProduct(id);
      this.product = new Product(
        data.productName,
        data.productType,
        data.productCategory,
        data.productDescription,
        data.salePrice,
        data.disponibility
      );
      this.productToEdit = data._id;
      this.showFormEditProduct();
    },
    async sendEditProduct() {
      const fd = new FormData();
      fd.append("productName", this.product.productName);
      fd.append("productType", this.product.productType);
      fd.append("productCategory", this.product.productCategory);
      fd.append("productDescription", this.product.productDescription);
      fd.append("salePrice", this.product.salePrice);
      fd.append("disponibility", this.product.disponibility);
      fd.append("image", this.product.image);

      const res = await productController.sendEditProduct(
        this.productToEdit,
        fd
      );
      if (res.msg == "product_updated") {
        this.getProducts();
        this.product = new Product();
        this.varShowFormEditProduct = false;
        this.varShowTableProducts = true;
        return (this.message = {
          content: "El producto fue actualizado con éxito!",
          class: "custom-success-danger",
          icon: "thumbs-up",
          iconPrefix: "far",
          value: true
        });
      }
      return (this.message = {
        content: "Hubo un error al agregar el producto",
        class: "custom-alert-danger",
        icon: "exclamation-triangle",
        iconPrefix: "fas",
        value: true
      });
    },
    showFormAddProduct() {
      this.varShowFormAddProduct = true;
      this.varShowTableProducts = false;
      this.varShowFormEditProduct = false;
      this.varShowFormAddCategory = false;
      this.varShowTableCategory = false;
      this.varShowFormEditCategory = false;
      this.varShowTableSucursals = false;
      this.varShowFormAddSucursal = false;
      this.varShowFormEditSucursal = false;
    },
    cancelFormAddProduct() {
      this.varShowFormAddProduct = false;
      this.varShowTableProducts = true;
      this.product = new Product();
    },
    showFormEditProduct() {
      this.varShowFormEditProduct = true;
      this.varShowFormAddProduct = false;
      this.varShowTableProducts = false;
      this.varShowFormAddCategory = false;
      this.varShowTableCategory = false;
      this.varShowFormEditCategory = false;
      this.varShowTableSucursals = false;
      this.varShowFormAddSucursal = false;
      this.varShowFormEditSucursal = false;
    },
    cancelFormEditProduct() {
      this.varShowFormEditProduct = false;
      this.varShowTableProducts = true;
      this.product = new Product();
    },
    showTableProducts() {
      this.varShowTableProducts = true;
      this.varShowFormEditProduct = false;
      this.varShowFormAddProduct = false;
      this.varShowFormAddCategory = false;
      this.varShowTableCategory = false;
      this.varShowFormEditCategory = false;
      this.varShowTableSucursals = false;
      this.varShowFormAddSucursal = false;
      this.varShowFormEditSucursal = false;
    },
    ///////   CATEGORIES  ////////////////////////////////////////////
    async getCategories() {
      const categories = await categoryController.getCategories();
      this.loading = false;
      this.categories = categories;
    },
    async addCategory() {
      const fd = new FormData();
      fd.append("categoryName", this.category.categoryName);
      fd.append("categoryDescription", this.category.categoryDescription);
      fd.append("categoryUrl", this.category.categoryUrl);
      fd.append("image", this.category.image);

      await categoryController.addCategory(fd);
      this.getCategories();
      this.category = new Category();
      this.varShowFormAddCategory = false;
      this.varShowTableCategory = true;
    },
    async deleteCategory(id) {
      await categoryController.deleteCategory(id);
      this.getCategories();
    },
    async editCategory(id) {
      const data = await categoryController.getCategory(id);
      this.category = new Category(
        data.categoryName,
        data.categoryDescription,
        data.categoryUrl
      );
      this.categoryToEdit = data._id;
      this.showFormEditCategory();
    },
    async onFileImgCategory(event) {
      this.category.image = event.target.files[0];
    },
    showTableCategory() {
      this.varShowTableCategory = true;
      this.varShowTableProducts = false;
      this.varShowFormEditProduct = false;
      this.varShowFormAddProduct = false;
      this.varShowFormAddCategory = false;
      this.varShowFormEditCategory = false;
      this.varShowTableSucursals = false;
      this.varShowFormAddSucursal = false;
      this.varShowFormEditSucursal = false;
    },
    showFormAddCategory() {
      this.varShowFormAddCategory = true;
      this.varShowTableProducts = false;
      this.varShowFormEditProduct = false;
      this.varShowFormAddProduct = false;
      this.varShowTableCategory = false;
      this.varShowFormEditCategory = false;
      this.varShowTableSucursals = false;
      this.varShowFormAddSucursal = false;
      this.varShowFormEditSucursal = false;
    },
    cancelFormAddCategory() {
      this.varShowFormAddCategory = false;
      this.varShowTableCategory = true;
      this.category = new Category();
    },
    showFormEditCategory() {
      this.varShowFormEditCategory = true;
      this.varShowTableProducts = false;
      this.varShowFormEditProduct = false;
      this.varShowFormAddProduct = false;
      this.varShowFormAddCategory = false;
      this.varShowTableCategory = false;
      this.varShowTableSucursals = false;
      this.varShowFormAddSucursal = false;
      this.varShowFormEditSucursal = false;
    },
    cancelFormEditCategory() {
      this.varShowFormEditCategory = false;
      this.varShowTableCategory = true;
      this.category = new Category();
    },
    async sendEditCategory() {
      const fd = new FormData();
      fd.append("categoryName", this.category.categoryName);
      fd.append("categoryDescription", this.category.categoryDescription);
      fd.append("categoryUrl", this.category.categoryUrl);
      fd.append("image", this.category.image);

      await categoryController.sendEditCategory(this.categoryToEdit, fd);
      this.getCategories();
      this.category = new Category();
      this.varShowFormEditCategory = false;
      this.varShowTableCategory = true;
    },
    ///////// SUCURSALS //////////////////////////////////////
    async getSucursals() {
      const sucursals = await sucursalController.getSucursals();
      this.loading = false;
      this.sucursals = sucursals;
    },
    async addSucursal() {
      const fd = new FormData();
      fd.append("direction", this.sucursal.direction);
      fd.append("numberContact", this.sucursal.numberContact);
      fd.append("googleMaps", this.sucursal.googleMaps);

      await sucursalController.addSucursal(fd);
      this.getSucursals();
      this.sucursal = new Sucursal();
      this.varShowFormAddSucursal = false;
      this.varShowTableSucursals = true;
    },
    async deleteSucursal(id) {
      await sucursalController.deleteSucursal(id);
      this.getSucursals();
    },
    async editSucursal(id) {
      const data = await sucursalController.getSucursal(id);
      this.sucursal = new Sucursal(
        data.direction,
        data.numberContact,
        data.googleMaps
      );
      this.sucursalToEdit = data._id;
      this.showFormEditSucursal();
    },
    async sendEditSucursal() {
      const fd = new FormData();
      fd.append("direction", this.sucursal.direction);
      fd.append("numberContact", this.sucursal.numberContact);
      fd.append("googleMaps", this.sucursal.googleMaps);

      await sucursalController.sendEditSucursal(this.sucursalToEdit, fd);
      this.getSucursals();
      this.sucursal = new Sucursal();
      this.varShowFormEditSucursal = false;
      this.varShowTableSucursals = true;
    },
    showFormAddSucursal() {
      this.varShowFormAddSucursal = true;
      this.varShowTableSucursals = false;
      this.varShowFormEditCategory = false;
      this.varShowFormAddProduct = false;
      this.varShowTableProducts = false;
      this.varShowFormEditProduct = false;
      this.varShowFormAddCategory = false;
      this.varShowTableCategory = false;
      this.varShowFormEditSucursal = false;
    },
    cancelFormAddSucursal() {
      this.varShowFormAddSucursal = false;
      this.varShowTableSucursals = true;
      this.sucursal = new Sucursal();
    },
    showTableSucursals() {
      this.varShowTableSucursals = true;
      this.varShowFormAddSucursal = false;
      this.varShowFormEditSucursal = false;
      this.varShowFormAddProduct = false;
      this.varShowTableProducts = false;
      this.varShowFormEditProduct = false;
      this.varShowFormAddCategory = false;
      this.varShowTableCategory = false;
      this.varShowFormEditCategory = false;
    },
    showFormEditSucursal() {
      this.varShowFormEditSucursal = true;
      this.varShowFormAddSucursal = false;
      this.varShowTableSucursals = false;
      this.varShowFormAddProduct = false;
      this.varShowTableProducts = false;
      this.varShowFormEditProduct = false;
      this.varShowFormAddCategory = false;
      this.varShowTableCategory = false;
      this.varShowFormEditCategory = false;
    },
    calcelFormEditSucursal() {
      this.varShowFormEditSucursal = false;
      this.varShowTableSucursals = true;
      this.sucursal = new Sucursal();
    }
  }
};
</script>

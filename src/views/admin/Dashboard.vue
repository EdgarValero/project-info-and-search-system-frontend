<template>
  <div class="dashboard">
    <!-- Alert Message -->
    <transition name="slide-fade">
      <div v-if="message.value" class="alert-fixed-top">
        <div :class="['alert p-alert', message.class]" role="alert">
          <strong
            ><font-awesome-icon
              :icon="[message.iconPrefix, message.icon]"
              class="mr-2"
            />
            {{ message.content }}
          </strong>
          <button type="button" class="close" @click="closeMessage">
            <span class="m-2" aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </transition>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-3 p-3 bg-dark text-white">
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
          <div class="d-flex justify-content-center">
            <div class="d-inline-flex">
              <font-awesome-icon
                icon="tachometer-alt"
                style="font-size:25px;"
              />
              <h4>Admin</h4>
              <strong>Dashboard</strong>
            </div>
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
          class="col-12 col-md-9 ml-sm-auto px-main-dashboard pb-5"
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
              <router-link to="/" class="text-panel-dashboard">
                <font-awesome-icon icon="home" />
                Home
              </router-link>
              <router-link to="/productos" class="text-panel-dashboard">
                <font-awesome-icon icon="list-alt" />
                Productos
              </router-link>
              <router-link to="/sucursales" class="text-panel-dashboard">
                <font-awesome-icon icon="map-marker-alt" />
                Sucursales
              </router-link>
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
                            <label for="sucursal.address"
                              >Direccion de la Sucursal</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Centro Comercial Plaza, Av.Principal, Calle 13, Valera, Trujillo"
                              v-model="sucursal.address"
                            />
                          </div>
                          <div class="form-group">
                            <label for="sucursal.address"
                              >Horario de Atención</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="8:00am hasta 10:00pm"
                              v-model="sucursal.officeHours"
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
                            <label for="sucursal.sucursal.googleMaps"
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
                            <label for="sucursal.address"
                              >Direccion de la Sucursal</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Centro Comercial Plaza, Av.Principal, Calle 13, Valera, Trujillo"
                              v-model="sucursal.address"
                            />
                          </div>
                          <div class="form-group">
                            <label for="sucursal.address"
                              >Horario de Atención</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="8:00am hasta 10:00pm"
                              v-model="sucursal.officeHours"
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
                        <th scope="col">Horario de Atención</th>
                        <th scope="col">Numero de Contacto</th>
                        <th scope="col">Accion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="sucursal in sucursals" :key="sucursal._id">
                        <td>{{ sucursal.address }}</td>
                        <td>{{ sucursal.numberContact }}</td>
                        <td>{{ sucursal.officeHours }}</td>
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

export default {
  name: "dashboard",
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
        address: "",
        officeHours: "",
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
        this.product = {};
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
      this.product = {
        productName: data.productName,
        productType: data.productType,
        productCategory: data.productCategory,
        productDescription: data.productDescription,
        salePrice: data.salePrice,
        disponibility: data.disponibility
      };
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
        this.product = {};
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
      this.product = {};
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
      this.product = {};
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
      this.product = {};
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
      if (
        !this.category.categoryName ||
        !this.category.categoryDescription ||
        !this.category.categoryUrl ||
        !this.category.image
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
      fd.append("categoryName", this.category.categoryName);
      fd.append("categoryDescription", this.category.categoryDescription);
      fd.append("categoryUrl", this.category.categoryUrl);
      fd.append("image", this.category.image);

      const res = await categoryController.addCategory(fd);
      if (res.msg == "category_saved") {
        this.getCategories();
        this.category = {};
        this.varShowFormAddCategory = false;
        this.varShowTableCategory = true;
        return (this.message = {
          content: "La categoria fue agregada con éxito!",
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
    async deleteCategory(id) {
      const res = await categoryController.deleteCategory(id);
      if (res.msg == "category_deleted") {
        this.getCategories();
        return (this.message = {
          content: "La categoria fue eliminada con éxito!",
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
    async editCategory(id) {
      const data = await categoryController.getCategory(id);
      this.category = {
        categoryName: data.categoryName,
        categoryDescription: data.categoryDescription,
        categoryUrl: data.categoryUrl
      };
      this.categoryToEdit = data._id;
      this.showFormEditCategory();
    },
    async sendEditCategory() {
      const fd = new FormData();
      fd.append("categoryName", this.category.categoryName);
      fd.append("categoryDescription", this.category.categoryDescription);
      fd.append("categoryUrl", this.category.categoryUrl);
      fd.append("image", this.category.image);

      const res = await categoryController.sendEditCategory(
        this.categoryToEdit,
        fd
      );
      if (res.msg == "category_updated") {
        this.getCategories();
        this.category = {};
        this.varShowFormEditCategory = false;
        this.varShowTableCategory = true;
        return (this.message = {
          content: "La categoria fue actulizada con éxito!",
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
      this.category = {};
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
      this.category = {};
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
      this.category = {};
    },
    ///////// SUCURSALS //////////////////////////////////////
    async getSucursals() {
      const sucursals = await sucursalController.getSucursals();
      this.loading = false;
      this.sucursals = sucursals;
    },
    async addSucursal() {
      if (
        !this.sucursal.address ||
        !this.sucursal.officeHours ||
        !this.sucursal.numberContact ||
        !this.sucursal.googleMaps
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
      fd.append("address", this.sucursal.address);
      fd.append("officeHours", this.sucursal.officeHours);
      fd.append("numberContact", this.sucursal.numberContact);
      fd.append("googleMaps", this.sucursal.googleMaps);

      const res = await sucursalController.addSucursal(fd);
      if (res.msg == "sucursal_saved") {
        this.getSucursals();
        this.sucursal = {};
        this.varShowFormAddSucursal = false;
        this.varShowTableSucursals = true;
        return (this.message = {
          content: "La categoria fue agregada con éxito!",
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
    async deleteSucursal(id) {
      const res = await sucursalController.deleteSucursal(id);
      if (res.msg == "sucursal_deleted") {
        this.getSucursals();
        this.varShowFormEditSucursal = false;
        this.varShowTableSucursals = true;
        return (this.message = {
          content: "La categoria fue eliminada con éxito!",
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
    async editSucursal(id) {
      const data = await sucursalController.getSucursal(id);
      this.sucursal = {
        address: data.address,
        officeHours: data.officeHours,
        numberContact: data.numberContact,
        googleMaps: data.googleMaps
      };
      this.sucursalToEdit = data._id;
      this.showFormEditSucursal();
    },
    async sendEditSucursal() {
      const fd = new FormData();
      fd.append("address", this.sucursal.address);
      fd.append("officeHours", this.sucursal.officeHours);
      fd.append("numberContact", this.sucursal.numberContact);
      fd.append("googleMaps", this.sucursal.googleMaps);

      const res = await sucursalController.sendEditSucursal(
        this.sucursalToEdit,
        fd
      );
      if (res.msg == "sucursal_updated") {
        this.getSucursals();
        this.sucursal = {};
        this.varShowFormEditSucursal = false;
        this.varShowTableSucursals = true;
        return (this.message = {
          content: "La categoria fue actulizada con éxito!",
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
    showFormAddSucursal() {
      this.sucursal = {};
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
      this.sucursal = {};
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
      this.sucursal = {};
    }
  }
};
</script>
<style lang="scss">
.alert-fixed-top {
  position: fixed;
  top: 2%;
  right: 1%;
  bottom: auto;
  left: auto;
  z-index: 2000;
  .p-alert {
    padding: 0.75rem;
  }
}
.px-main-dashboard {
  padding-right: 1rem;
  padding-left: 1rem;
}

.text-panel-dashboard {
  font-size: 1.3rem;
  text-decoration: none !important;
}
</style>

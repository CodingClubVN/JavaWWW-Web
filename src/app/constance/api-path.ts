export const APIPath = {
  auth: {
    login: 'auth/login',
    register: 'auth/register',
    changePassword: '/auth/changePassword'
  },
  product: {
    product: 'products',
    list: 'products/list',
    new: 'products/new'
  },
  cookie: {
    ID_KEY: 'auth-token',
    USERNAME_KEY: 'username',
    Refresh_Token: 'refresh',
    CART: 'cart',
    ROLE: 'role'
  },
  image: {
    url: 'https://api.codingclub.codes/cc-car/api/images/'
  },
  brand: {
    brands: 'brands',
    list: 'brands/list',
    new: 'brands/new',
  },
  cartDetial: {
    cart: 'cartdetail',
    list: 'cartdetail/list',
    new: 'cartdetail/new',
    detail: 'cartdetail/detail'
  },
  category:{
    category: 'category',
    list: 'category/list'
  },
  order: {
    order: 'orders',
    list: 'orders/list',
    new: 'orders/new',
    updateStatus: 'orders/updateStatus',
    detail: 'orders/detail',
    me: 'orders/me',
  },
  user: {
    user: 'users',
    me: 'users/me'
  }
}

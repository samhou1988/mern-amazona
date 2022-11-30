import React from 'react';

const configs = [{
  path: '/product/:slug',
  component: React.lazy(() => import('./screens/ProductScreen')),
  protect: false,
  admin: false
}, {
  path: '/cart',
  component: React.lazy(() => import('./screens/CartScreen')),
  protect: false,
  admin: false
}, {
  path: '/search',
  component: React.lazy(() => import('./screens/SearchScreen')),
  protect: false,
  admin: false
}, {
  path: '/signin',
  component: React.lazy(() => import('./screens/SigninScreen')),
  protect: false,
  admin: false
}, {
  path: '/signup',
  component: React.lazy(() => import('./screens/SignupScreen')),
  protect: false,
  admin: false
}, {
  path: '/profile',
  component: React.lazy(() => import('./screens/ProfileScreen')),
  protect: true,
  admin: false
}, {
  path: '/map',
  component: React.lazy(() => import('./screens/MapScreen')),
  protect: true,
  admin: false
}, {
  path: '/placeorder',
  component: React.lazy(() => import('./screens/PlaceOrderScreen')),
  protect: false,
  admin: false
}, {
  path: '/order/:id',
  component: React.lazy(() => import('./screens/OrderScreen')),
  protect: true,
  admin: false
}, {
  path: '/orderhistory',
  component: React.lazy(() => import('./screens/OrderHistoryScreen')),
  protect: true,
  admin: false
}, {
  path: '/shipping',
  component: React.lazy(() => import('./screens/ShippingAddressScreen')),
  protect: true,
  admin: false
}, {
  path: '/payment',
  component: React.lazy(() => import('./screens/PaymentMethodScreen')),
  protect: true,
  admin: false
}, {
  path: '/admin/dashboard',
  component: React.lazy(() => import('./screens/DashboardScreen')),
  protect: true,
  admin: true
}, {
  path: '/admin/orders',
  component: React.lazy(() => import('./screens/OrderListScreen')),
  protect: true,
  admin: true
}, {
  path: '/admin/users',
  component: React.lazy(() => import('./screens/UserListScreen')),
  protect: true,
  admin: true
}, {
  path: '/admin/users/:id',
  component: React.lazy(() => import('./screens/UserEditScreen')),
  protect: true,
  admin: true
}, {
  path: '/admin/products',
  component: React.lazy(() => import('./screens/ProductListScreen')),
  protect: true,
  admin: true
}, {
  path: '/admin/product/:id',
  component: React.lazy(() => import('./screens/ProductEditScreen')),
  protect: true,
  admin: true
}, {
  path: '/',
  component: React.lazy(() => import('./screens/HomeScreen')),
  protect: false,
  admin: false
}]

export default configs;

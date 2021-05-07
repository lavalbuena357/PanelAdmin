const AdminBro = require('admin-bro');
const { property, posts, favorites } = require('../models');

const sidebarGroups = {
  user: {
    name: 'User Management',
    icon: 'User',
  },
  company: {
    name: 'Company Management',
    icon: 'Product'
  }
};

const adminBro = new AdminBro({
  rootPath: '/admin',
  loginPath: '/admin/login',
  resources: [{
    resource: property,
    options: {
      parent: sidebarGroups.user,
    }
  }, {
    resource: property,
    options: {
      parent: sidebarGroups.company,
    }
  }, {
    resource: posts,
    options: {
      parent: sidebarGroups.company,
    }
  }, {
    resource: favorites,
    options: {
      parent: sidebarGroups.company,
    }
  }, {
    resource: posts,
    options: {
      parent: sidebarGroups.company,
    }
  }
],
dashboard: {
  component: AdminBro.bundle('./dashboard.jsx')
},
  branding: {
   companyName: 'My House-App',
   softwareBrothers: false,
  }
});
//prueba
module.exports = adminBro;

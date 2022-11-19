import { Router } from './vaadin-router1.7.4.js';

const routes = [{
		path: '/form-design',
		component: 'pg-form-design'
	},
   {
    	path: '/',
    	component: 'pg-index',
    	children: [{
			path: '',
			redirect: '/home',
		},
			{
				path: 'flow',
				component: 'pg-flow-list',
				action: async () => {
				  await import('./pages/flow/pg-flow-list.js');
				},
				children: [
				   {
						path: 'apply',
						component: 'pg-flow-apply',
						action: async () => {
						  await import('./pages/flow/pg-flow-apply.js');
						},
				   },
				  {
					path: 'flow/about',
					component: 'lit-about2',
					action: async () => {
					  await import('./about2.js');  //:80/log/flow/about  框架内
					},
				  },]

		  },
		 {
				path: 'home',
				component: 'pg-home',
				action: async () => {
				  await import('./pages/pg-home.js');  //:80/about 框架内
				},
		  },
		  {
			 path: 'flow',
				children: [{
					 path: 'apply',
					 component: 'flow-page',
					 action: async () => {
					await import('./pages/flow/apply-page.js');  //:80/flow/apply 框架内
			  },
			  },]
		  },
    ],
  },
];

const outlet = document.getElementById('outlet');
const router = new Router(outlet);debugger
router.setRoutes(routes);
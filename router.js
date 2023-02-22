import { Router } from './vaadin-router1.7.4.js';

const routes = [{
		path: '/form-design',
		component: 'pg-form-design'
	},
	{
		path: '/flow-design',
		component: 'pg-flow-design',
		action: async () => {
			await import('./home/pg-flow-design.js');
		},
	},
	{
		path: '/login',
		component: 'pg-login',
		action: async () => {
			await import('./home/pg-login.js');
		},
	},
	{
		path: '/controls',
		component: 'pg-controls',
		action: async () => {
			await import('./home/pg-controls.js');
		},
	},
   {
    	path: '/',  /*need login*/
    	component: 'pg-index',
    	children: [{
			path: '',
			redirect: '/home',
		},
			{
				path: 'flow',
				/*component: 'pg-flow-list',
				action: async () => {
				  await import('./flow/pg-flow-list.js');
				},*/
				children: [
					{
						path: 'todo',
						component: 'pg-flow-todo',
						action: async () => {
							await import('./flow/pg-flow-todo.js');
						},
					},
				   {
						path: 'apply',
						component: 'pg-flow-apply',
						action: async () => {
						  await import('./flow/pg-flow-apply.js');
						},
				   },/**/
					{
						path: 'approve',
						component: 'approve-page',
						action: async () => {
							await import('./flow/apply-page.js');
						},
					},
					{
						path: 'template',
						component: 'pg-flow-temp',
						action: async () => {
							await import('./flow/pg-flow-temp.js');
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
				path: 'org',
				children: [
					{
						path: 'dept-user',
						component: 'pg-dept-user',
						action: async () => {
							await import('./org/pg-dept-user.js');
						},
					},
					{
						path: 'send-mail',
							component: 'pg-send-mail',
						action: async () => {
							await import('./org/pg-send-mail.js');
						},
					},]
		  },
		 {
				path: 'home',
				component: 'pg-home',
				action: async () => {
				  await import('./home/pg-home.js');  //:80/about 框架内
				},
		  },
		  /*{
			 path: 'flow',
				children: [{
					 path: 'apply',
					 component: 'flow-page',
					 action: async () => {
					await import('./flow/apply-page.js');  //:80/flow/apply 框架内
			  },
			  },]
		  },*/
    ],
  },
];

const outlet = document.getElementById('outlet');
const router = new Router(outlet);debugger
router.setRoutes(routes);
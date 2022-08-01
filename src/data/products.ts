export const productSaleStates = {
	'WORK-IN-PROGRESS': {
		state: 'prod.state.work.in.progress',
		buyButton: 'buy.button.let.us.know.your.interested'
	}, 
	'SOLD': {
		state: 'prod.state.sold',
		buyButton: 'buy.button.i.want.something.like.that'
	},
	'AVAILABLE': {
		state: 'prod.state.available',
		buyButton: 'buy.button.buy'
	},
	'BOOKED': {
		state: 'prod.state.booked',
		buyButton: 'buy.button.let.us.know.your.interested'
	}
}

export const productCategories = [{
  categoryId: 1,
	categoryStringId: 'jeraby',
  categoryName: 'category.jeraby',
  showInNavigation: true,
	routePath: '/jeraby',
	// categoryIntroClass: ['__jeraby']
}]

export interface ProductCategory {
  categoryId: number,
	categoryStringId: string,
  categoryName: string,
  showInNavigation: boolean,
	routePath: string
}

export interface Image {
  path: string,
  name: string
}

export interface ProductType {
  productId: number,
  productCategories: ProductCategory[],
  productName: string,
	state: string,
	buyButton: string,
	size: string,
	main: {
    description: string,
    styleClass: string[]
  },
	images: {
		main: Image[]
  }
}

export interface Route {
  path: string,
  props: {
    products: ProductType[],
    categoryName: string,
    // categoryIntroClass: string[]
  },
  component: unknown
}

export function generateRoutesFromProdCategories() {
	const routes: Route[] = []
	productCategories.forEach(cat => {
		const route = {
			path: cat.routePath,
			props: {
				products: products.filter(prod => prod.productCategories.find(prodCat => prodCat?.categoryId === cat.categoryId)),
				categoryName: cat.categoryName,
				// categoryIntroClass: cat.categoryIntroClass
			},
			// route level code-splitting
			// this generates a separate chunk (categoryName.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			// component: () => import(`/* webpackChunkName: "${cat.categoryName}" */ '../components/products/ProductsList.vue'`)
			component: () => import('../views/Category.vue')
		}
		routes.push(route)
	})
	return routes
}

export function generateRoutesFromProducts() {
	const routeDef = {
		path: '/product/:id',
		props: route => ({ product: products.filter(prod => prod.productId.toString() === route.params.id) }),
		// route level code-splitting
		// this generates a separate chunk (categoryName.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import(`/* webpackChunkName: "${cat.categoryName}" */ '../components/products/ProductsList.vue'`)
		component: () => import('../views/ProductDetail.vue'),
		beforeEnter: (to, from, next) => {
			if (products.findIndex(prod => prod.productId.toString() === to.params.id) === -1) next('/not-found')
			else next()
		}
	}
	return [routeDef]
}

export function prodCatNavigation() {
	return productCategories.filter(cat => cat.showInNavigation).map(cat => {
		return {
			categoryId: cat.categoryId,
			to: cat.routePath,
			name: cat.categoryName
		}
	})
}

const productsConf = [
	{
		productId: 1,
		productCategories: [1],
		productName: 'product.name.jeraby1',
		state: productSaleStates['AVAILABLE'].state,
		buyButton: productSaleStates['AVAILABLE'].buyButton,
		size: '50 cm x 50 cm',
		main: {
			description: 'product.name.jeraby1.description',
      styleClass: ''
			// descStyle: {'background-color': '#ffffff', 'box-shadow': '0px 0px 0px 4px #f7f7f7'}
			// descStyle: {'box-shadow': '0px 0px 0px 4px #f7f7f7'}
		},
		images: {
			main: [{
				path: '/main-1.jpg',
				name: 'jeraby1'
			}, {
				path: '/main-2.jpg',
				name: 'jeraby2'
			}],
			detail: [{
				path: '',
				name: '',
			}]
		}
	}, 
	{
		productId: 2,
		productCategories: [1],
		productName: 'product.name.jeraby2',
		state: productSaleStates['AVAILABLE'].state,
		buyButton: productSaleStates['AVAILABLE'].buyButton,
		size: '50 cm x 50 cm',
		main: {
			description: 'product.name.jeraby2.description',
			styleClass: ''
		},
		images: {
			main: [{
				path: 'main-1.jpg',
				name: 'jeraby1'
			}, {
				path: '/main-2.jpg',
				name: 'jeraby2'
			}], 
			detail: [{
				path: '',
				name: ''
			}]
		}
	},
	{
		productId: 3,
		productCategories: [1],
		productName: 'product.name.jeraby3',
		state: productSaleStates['AVAILABLE'].state,
		buyButton: productSaleStates['AVAILABLE'].buyButton,
		size: '50 cm x 50 cm',
		main: {
			description: 'product.name.jeraby3.description',
			styleClass: ''
		},
		images: {
			main: [{
				path: '/main-1.jpg',
				name: 'jeraby1'
			}, {
				path: '/main-2.jpg',
				name: 'jeraby2'
			}], 
			detail: [{
				path: '',
				name: ''
			}]
		}
	}
]

// export const products = productsConf.map((product, productCategories) => {
export const products = productsConf.map((product) => {
	return {
		...product,
		productCategories: product.productCategories.map(cat => {
			const f = productCategories.find(prodCat => cat === prodCat.categoryId)
			return f
		}) || [productCategories[0]]
	}
})
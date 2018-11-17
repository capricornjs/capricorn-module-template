class Store extends window.Capricorn.Events {
	constructor () {
		super()
	}
	
	data = {}
	
	setData (data) {
		if (!data) {
			return
		}
		this.data = data
	}
	
	getData () {
		return this.data
	}
}

export default new Store

class Store {
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

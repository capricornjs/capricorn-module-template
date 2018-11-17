import React, { Component } from 'react'
import classnames from 'classnames'
import { hot } from 'react-hot-loader'
import store from 'store'
import './index.less'

class Home extends Component {
	constructor () {
		super()
		this.value = store.getData()
		this.isOpen = this.value.isShow.value
	}
	
	open () {
		this.isOpen = !this.isOpen
		this.setState({})
	}
	
	render () {
		return (
			<div onClick={this.open.bind(this)} className={classnames('page-home flex-center', { 'test': true })}>
				<div>{this.value.description.value}</div>
				<If condition={this.isOpen}>
					<div>-demo</div>
				</If>
			</div>
		)
	}
}

/*eslint-disable*/
export default hot(module)(Home)
/*eslint-disable*/

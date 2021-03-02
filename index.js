AFRAME.registerComponent('change-material-on-click', {
	/*schema: {
		target: { type: 'selector' }
	},*/
	init: function () {
		//console.log(this.el)
		//console.log(this.data)
		//console.log(this.data.target)
		this.el.addEventListener('model-loaded', () => this.update());

		/*el.addEventListener('click', () => {

		});*/
	},
	update: function () {
		//let targetEl = this.data.target;  // Target to change material.
		const object = this.el.getObject3D('mesh');
		object.traverse(node => {
			console.log(node);
			if (node.isMesh) {
				node.material = targetEl.material;
				console.log(targetEl.material)
			};
		});
	}
});
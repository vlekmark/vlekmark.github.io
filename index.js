AFRAME.registerComponent('change-material-on-click', {
	schema: {
		target: { type: 'selector' }
	},
	init: function () {
		let el = this.el;  // Element to add click listener.
		el.addEventListener('model-loaded', () => this.update());

		/*el.addEventListener('click', () => {

		});*/
	},
	update: function () {
		let targetEl = this.data.target;  // Target to change material.
		let mesh = targetEl.getObject3D('mesh');
		console.log(targetEl)
		console.log(this.data)
		mesh.traverse(node => {
			if (node.isMesh) {
				node.material = targetEl.material;
				console.log(targetEl.material)
			};
		});
	}
});
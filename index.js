AFRAME.registerComponent('change-material-on-click', {
	schema: {
		target: { type: 'selector' }
	},
	init: function () {
		console.log(this.el)
		console.log(this.data)
		console.log(this.data.target)
		this.data.target.addEventListener('model-loaded', () => this.update());

		/*el.addEventListener('click', () => {

		});*/
	},
	update: function () {
		let targetEl = this.data.target;  // Target to change material.
		const mesh = targetEl.getObject3D('mesh');
		mesh.traverse(node => {
			if (node.isMesh) {
				node.material = targetEl.material;
				console.log(targetEl.material)
			};
		});
	}
});
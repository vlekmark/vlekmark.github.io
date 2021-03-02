AFRAME.registerComponent('change-material-on-click', {
	schema: {
		target: { type: 'selector' }
	},

	init: function () {
		this.el.addEventListener('model-loaded', () => this.update());
	},
	update: function () {
		let targetEl = this.data.target;  // Target to change material.
		console.log(targetEl)
		console.log('further')
		let mesh = targetEl.getObject3D('mesh');
		console.log(mesh)
		mesh.traverse(node => {
			console.log(node)
			if (node.name === "Shoe") {
				console.log(node)
			};
		});
	}
});
AFRAME.registerComponent('change-material-on-click', {
	schema: {
		target: { type: 'selector' }
	},
	init: function () {
		let targetEl = this.data.target;  // Target to change material.
		targetEl.addEventListener('model-loaded', () => this.update(targetEl));

		/*el.addEventListener('click', () => {

		});*/
	},
	update: function (targetEl) {
		let mesh = targetEl.getObject3D('mesh');
		console.log(targetEl)
		console.log(mesh)
		mesh.traverse(node => {
			if (node.isMesh) {
				node.material = targetEl.material;
				console.log(targetEl.material)
			};
		});
	}
});
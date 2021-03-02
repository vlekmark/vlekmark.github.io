AFRAME.registerComponent('change-material-on-click', {
	schema: {
		target: { type: 'selector' }
	},

	init: function () {
		let el = this.el;  // Element to add click listener.
		let targetEl = this.data.target;  // Target to change material.
		console.log(targetEl)
		el.addEventListener('click', function () {
			console.log('further')
			let mesh = targetEl.getObject3D('mesh');
			console.log(mesh)
			mesh.traverse(node => {
				console.log(node)
				if (node.name === "Shoe") {
					console.log(node)
				};
			});
		});
	}
});
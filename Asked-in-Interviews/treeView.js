const treeView = function (array, parent) {
	let tree = [];
	parent = parent ? parent : { id: 0 };

	let children = array.filter(function (child) {
		return child.treeLevel == parent.id;
	});

	if (parent.id == 0) {
		tree = children;
	} else {
		parent["children"] = children;
	}
	for (let i = 0; i < children.length; i++) {
		treeView(array, children[i]);
	}

	return tree;
};

console.log(treeView([
	{ id: 1, treeLevel: 0 },
	{ id: 2, treeLevel: 1 },
	{ id: 3, treeLevel: 1 },
	{ id: 4, treeLevel: 2 },
	{ id: 5, treeLevel: 2 },
	{ id: 6, treeLevel: 3 },
	{ id: 7, treeLevel: 3 },
	{ id: 1, treeLevel: 0 },

]));




var display = ''; // Sets a default value for 'display'

var parents = {
	generated: '\n\t"parent": "item/generated",',
	handheld: '\n\t"parent": "item/handheld",',
	rod: '\n\t"parent": "item/handheld_rod",',
	entity: '\n\t"parent": "builtin/entity",',
}

// Tools object, has all the information for each tool
// This makes it much easier to add tools in the future
var items = {
	bow: {
		durability: 385,
		parent: parents.generated,
		display: `
	"display": {
		"thirdperson_righthand": {
			"rotation": [ -80, 260, -40 ],
			"translation": [ -1, -2, 2.5 ],
			"scale": [ 0.9, 0.9, 0.9 ]
		},
		"thirdperson_lefthand": {
			"rotation": [ -80, -280, 40 ],
			"translation": [ -1, -2, 2.5 ],
			"scale": [ 0.9, 0.9, 0.9 ]
		},
		"firstperson_righthand": {
			"rotation": [ 0, -90, 25 ],
			"translation": [ 1.13, 3.2, 1.13],
			"scale": [ 0.68, 0.68, 0.68 ]
		},
		"firstperson_lefthand": {
			"rotation": [ 0, 90, -25 ],
			"translation": [ 1.13, 3.2, 1.13],
			"scale": [ 0.68, 0.68, 0.68 ]
		}
	},`,
		show: ["unbreakableHide", "bowPulling"],
		check: ["unbreakable", "bowPullingCheck"],
		replace: [/bow/, "bow_standby"]
	},
	carrot_on_a_stick: {
		durability: 26,
		parent: parents.rod,
		show: ["unbreakableHide"],
		check: ["unbreakable"]
	},
	diamond_hoe: {
		durability: 1562,
		parent: parents.handheld,
		show: ["unbreakableHide"],
		check: ["unbreakable"]
	},
	elytra: {
		durability: 433,
		parent: parents.generated,
		show: ["unbreakableHide", "elytraBroken"],
		check: ["unbreakable"]
	},
	fishing_rod: {
		durability: 65,
		parent: parents.rod,
		show: ["unbreakableHide", "rodCast", "newTextureNames"],
		check: ["unbreakable", "rodCastCheck"],
		extra: "cast",
		extraCheck: "rodCastCheck",
		replace: [/rod/, "rod_uncast"]
	},
	flint_and_steel: {
		durability: 65,
		parent: parents.generated,
		show: ["unbreakableHide"],
		check: ["unbreakable"]
	},
	golden_hoe: {
		durability: 33,
		parent: parents.handheld,
		show: ["unbreakableHide", "newTextureNames"],
		check: ["unbreakable"],
		replace: [/en/, ""]
	},
	iron_hoe: {
		durability: 251,
		parent: parents.handheld,
		show: ["unbreakableHide"],
		check: ["unbreakable"]
	},
	trident_in_hand: {
		durability: 251,
		parent: parents.entity,
		display: `
	"display": {
		"thirdperson_righthand": {
			"rotation": [ 0, 60, 0 ],
			"translation": [ 11, 17, -2 ]
		},
		"thirdperson_lefthand": {
			"rotation": [ 0, 60, 0 ],
			"translation": [ 3, 17, 12 ]
		},
		"firstperson_righthand": {
			"rotation": [ 0, -90, 25 ],
			"translation": [ -3, 17, 1 ]
		},
		"firstperson_lefthand": {
			"rotation": [ 0, 90, -25 ],
			"translation": [ 13, 17, 1 ]
		},
		"gui": {
			"rotation": [ 15, -25, -5 ],
			"translation": [ 2, 3, 0 ],
			"scale": [ 0.65, 0.65, 0.65 ]
		},
		"fixed": {
			"rotation": [ 0, 180, 0 ],
			"translation": [ -2, 4, -5],
			"scale":[ 0.5, 0.5, 0.5]
		},
		"ground": {
			"translation": [ 4, 4, 2],
			"scale":[ 0.25, 0.25, 0.25]
		}
	},`,
		show: ["unbreakableHide", "tridentThrown"],
		check: ["unbreakable", "tridentThrownCheck"],
		extra: "throwing",
		extraCheck: "tridentThrownCheck",
		noTexture: true
	},
	shears: {
		durability: 238,
		parent: parents.generated,
		show: ["unbreakableHide"],
		check: ["unbreakable"]
	},
	shield: {
		durability: 337,
		parent: parents.entity,
		display: `
	"display": {
		"thirdperson_righthand": {
			"rotation": [ 0, 90, 0 ],
			"translation": [ 10.51, 6, -4 ]
		},
		"thirdperson_lefthand": {
			"rotation": [ 0, 90, 0 ],
			"translation": [ 10.51, 6, 12 ]
		},
		"firstperson_righthand": {
			"rotation": [ 0, 180, 5 ],
			"translation": [ -10, 2, -10 ],
			"scale": [ 1.25, 1.25, 1.25 ]
		},
		"firstperson_lefthand": {
			"rotation": [ 0, 180, 5 ],
			"translation": [ 10, 0, -10 ],
			"scale": [ 1.25, 1.25, 1.25 ]
		},
		"gui": {
			"rotation": [ 15, -25, -5 ],
			"translation": [ 2, 3, 0 ],
			"scale": [ 0.65, 0.65, 0.65 ]
		},
		"fixed": {
			"rotation": [ 0, 180, 0 ],
			"translation": [ -2, 4, -5],
			"scale":[ 0.5, 0.5, 0.5]
		},
		"ground": {
			"translation": [ 4, 4, 2],
			"scale":[ 0.25, 0.25, 0.25]
		}
	},`,
		show: ["unbreakableHide", "shieldBlock"],
		check: ["unbreakable", "shieldBlockCheck"],
		extra: "blocking",
		extraCheck: "shieldBlockCheck",
		noTexture: true
	},
	stone_hoe: {
		durability: 132,
		parent: parents.handheld,
		show: ["unbreakableHide"],
		check: ["unbreakable"]
	},
	wooden_hoe: {
		durability: 60,
		parent: parents.handheld,
		show: ["unbreakableHide", "newTextureNames"],
		check: ["unbreakable"],
		replace: [/en/, ""]
	},
	clock: {
		durability: 64,
		parent: parents.generated,
		durabilityMsg: 'How many clock models do you want to have?',
		predicate: '"time": '
	},
	compass: {
		durability: 32,
		parent: parents.generated,
		durabilityMsg: 'How many compass models do you want to have?',
		predicate: '"angle": '
	},
	other: {
		durability: 1562,
		parent: parents.generated,
		show: ["unbreakableHide"],
		check: ["unbreakable"],
		durabilityMsg: 'How much maximum durability does your tool have?'
	}
};

// All items to hide initially
var toHide = ["unbreakableHide", "elytraBroken", "shieldBlock", "newTextureNames", "tridentThrown", "rodCast", "bowPulling"];
// All checkboxes are unticked, then re-ticked when needed
var toUncheck = ["unbreakable", "elytraBrokenCheck", "shieldBlockCheck", "newTextureNamesCheck", "tridentThrownCheck", "rodCastCheck", "bowPullingCheck"];

// handle a selection change for tool type
function durabilityInfo() {
	var tool = document.getElementById("tool").value; // get the tool from the dropdown.
	var toolObj = items[tool] // Gets the tool object from the dropdown value
	var durability = toolObj.durability;

	if (toolObj.durabilityMsg) { // custom durability.
		document.getElementById("durabilityInfo").innerHTML = toolObj.durabilityMsg + '<br><input type = "text" value = "' + durability + '" class = "textLine" id = "customDur"/>';
	} else { //existing tool
		document.getElementById("durabilityInfo").innerHTML = 'Your selected tool has a durability of ' + durability + '.';
	}

	document.getElementById("modelLimit").value = durability - 1;

	// Hides all elements ready to be shown for certain options
	toHide.forEach(function(element) {
		document.getElementById(element).hidden = "true";
	});

	// Unchecks all checkboxes ready to be ticked for certain options
	toUncheck.forEach(function(element) {
		document.getElementById(element).checked = "";
	});

	// Shows certain items per tool
	if (toolObj.show) {
		toolObj.show.forEach(function(element) {
			document.getElementById(element).hidden = "";
		});
	}

	// Checks certain checkboxes per tool
	if (toolObj.check) {
		toolObj.check.forEach(function(element) {
			document.getElementById(element).checked = "checked";
		});
	}

	// If there isn't a display in the tool object, then display needs to be reset
	// Otherwise display value would carry onto tools which don't need it
	display = (toolObj.display) ? toolObj.display : "";

	dTex = "item/" + tool;
	document.getElementById("address").value = dTex;
}

function generate() { //calculate all percentages
	var resultant = "";

	document.getElementById("generate").value = "Generating...";
	document.getElementById("result").innerHTML = ""; //clear any previous outputs

	tool = document.getElementById("tool").value;
	toolObj = items[tool];

	maxDur = toolObj.durability;
	maxModels = document.getElementById("modelLimit").value; // Max no of models to create
	address = document.getElementById("address").value; //default model address
	predicateKey = '"damage": '; // Sets the default predicate to "damage"

	var notUnbreakable = toolObj.predicate; // If not unbreakble tool doesn't have a durability, so uses custom predicate

	if (document.getElementById("unbreakable").checked) {
		damaged = '"damaged": 0, ';
	}
	// Doesn't put "damaged": 0/1 in the result if compass or clock is chosen
	else if (notUnbreakable) { // This will only be true when compass or clock is chosen
		damaged = '';
		predicateKey = toolObj.predicate;
	} else {
		damaged = '"damaged": 1, ';
	}

	// Uses a custom durability for certain tools
	if (tool == "other" || notUnbreakable) {
		maxDur = document.getElementById("customDur").value; //update durability from 1 if a custom durability was entered.
	}

	inc = "";

	var pull = document.getElementById("bowPullingCheck").checked; // Gets whether pull predicates checkbox has been ticked
	var pullNum = document.getElementById("bowPullingNum").value - 1; // Gets how many pulling models there wants to be
	var pullPercent;

	for (var i = 0; i <= maxModels && i < maxDur; i++) { // Checks both max amount of models and max durability so no models are only produed for durability values between 0 and 1.
		if (document.getElementById("inc").checked && i > 0) {
			inc = i;
		} // Rising number after model now on all models except 'damage: 0' and 'damaged: 1'
		j = Math.round(((1 / maxDur) * i) * 10 ** 15) / 10 ** 15; // Limits the durability to 15 decimal places

		var extra = (toolObj.extra) ? toolObj.extra : "";
		var extraChecked = false;
		
		if (extra) {
			extraChecked = document.getElementById(toolObj.extraCheck).checked;
		}

		if (j > 0) {
			resultant += '{ "predicate": { ' + damaged + predicateKey + j + ' }, "model": "' + address + inc + '" },\n'; // Added spaces between the { } and predicate values
			// Adds pulling predicates if the checkbox was checked
			if (pull) {
				resultant += '{ "predicate": { ' + damaged + predicateKey + j + ', "pulling": 1 }, "model": "item/bow_pulling' + inc + '_0" },\n';
				for (var k = 1; k <= pullNum; k++) {
					pullPercent = (1 / pullNum) * k;
					resultant += '{ "predicate": { ' + damaged + predicateKey + j + ', "pulling": 1, "pull": ' + pullPercent + ' }, "model": "item/bow_pulling' + inc + '_' + k + '" },\n';
				}
			} else if (extra == "throwing" && extraChecked) {
				resultant += '{ "predicate": { ' + damaged + predicateKey + j + ', "throwing": 1 }, "model": "item/trident_throwing' + inc + '" },\n';
			} else if (extra && extraChecked) {
				resultant += '{ "predicate": { ' + damaged + predicateKey + j + ', "' + extra + '": 1 }, "model": "' + address + '_' + extra + inc + '" },\n';
			}
		} else {
			resultant += '{ "predicate": { ' + predicateKey + j + ' }, "model": "' + address + inc + '" },\n'; // If damage = 0, damaged predicate is unnecessary
			// Adds pulling predicates if the checkbox was checked
			if (pull) {
				resultant += '{ "predicate": { "damage": ' + j + ', "pulling": 1 }, "model": "item/bow_pulling' + inc + '_0" },\n';
				for (var k = 1; k <= pullNum; k++) {
					pullPercent = (1 / pullNum) * k;
					resultant += '{ "predicate": { "damage": ' + j + ', "pulling": 1, "pull": ' + pullPercent + ' }, "model": "item/bow_pulling' + inc + '_' + k + '" },\n';
				}
			} else if (extra == "throwing" && extraChecked) {
				resultant += '{ "predicate": { "damage": ' + j + ', "throwing": 1 }, "model": "item/trident_throwing' + inc + '" },\n';
			} else if (extra && extraChecked) {
				resultant += '{ "predicate": { "damage": ' + j + ', "' + extra + '": 1 }, "model": "' + address + '_' + extra + inc + '" },\n';
			}
		}
	}

	if (document.getElementById("unbreakable").checked) {
		resultant += '{ "predicate": { "damaged": 1 }, "model": "' + address + '" },\n'; // Removed the unnecessary "damage": 0
		// Adds pulling predicates if the checkbox was checked
		if (pull) {
			resultant += '{ "predicate": { "damaged": 1, "pulling": 1 }, "model": "item/bow_pulling_0" },\n';
			for (var k = 1; k <= pullNum; k++) {
				pullPercent = (1 / pullNum) * k;
				resultant += '{ "predicate": { "damaged": 1, "pulling": 1, "pull": ' + pullPercent + ' }, "model": "item/bow_pulling_' + k + '" },\n';
			}
		} else if (extra == "throwing" && extraChecked) {
			resultant += '{ "predicate": { "damaged": 1, "throwing": 1 }, "model": "item/trident_throwing" },\n';
		} else if (extra && extraChecked) {
			resultant += '{ "predicate": { "damaged": 1, "' + extra + '": 1 }, "model": "' + address + '_' + extra + '" },\n';
		}
	}

	if (document.getElementById("elytraBrokenCheck").checked) {
		resultant += '{ "predicate": { "broken": 1 }, "model": "item/broken_elytra" },\n';
	}

	resultant = resultant.substring(0, resultant.length - 2); //remove the last comma from the string.
	if (document.getElementById("model").checked) {
		address = address.replace(/item/, "items"); // Changed default texture path from item to items.

		// Changes texture path if new textures isn't checked.
		if (toolObj.replace && !document.getElementById("newTextureNamesCheck").checked) {
			address = address.replace(...toolObj.replace);
		}

		//generate a model file's JSON around the results.
		resultant = resultant.replace(/\n/g, '\n\t\t'); //tab indent the code by 2
		resultant = resultant.replace(/{  }/, "");

		var texture = (toolObj.noTexture) ? '' : '\n\t"textures": {\n\t\t"layer0": "' + address + '"\n\t},';

		resultant = '{' + toolObj.parent + display + texture + '\n\t"overrides": [\n\t\t' + resultant + '\n\t]\n}'; //add prefix and suffix.
	}

	document.getElementById("result").innerHTML = resultant;
	document.getElementById("generate").value = "Generate Code";
}

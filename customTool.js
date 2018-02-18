var parent = '\n\t"parent": "item/generated",'; // Sets a default value for 'parent'
var display = ''; // Sets a default value for 'display'

// handle a selection change for tool type
function durabilityInfo() {
	durability = document.getElementById("durability").value; //get the value of the durability from the dropdown.
	if (durability == 1) { // 1 means custom durability.
		document.getElementById("durabilityInfo").innerHTML = 'How much maximum durability does your tool have?<br><input type = "text" value = "1562" class = "textLine" id = "customDur"/>';
		document.getElementById("modelLimit").value = 1561; // Sets the default model limit to 1 less than the default durability for custom durability amount
	} else if (durability == 2) { // 2 is used for the clock
		document.getElementById("durabilityInfo").innerHTML = 'How many clock models do you want to have?<br><input type = "text" value = "64" class = "textLine" id = "customDur"/>';
		document.getElementById("modelLimit").value = 63; // 63 is the default number of clock models
	} else if (durability == 3) { // 3 is used for the compass
		document.getElementById("durabilityInfo").innerHTML = 'How many compass models do you want to have?<br><input type = "text" value = "32" class = "textLine" id = "customDur"/>';
		document.getElementById("modelLimit").value = 31; // 32 is the default number of compass models
	} else { //existing tool
		// Flint and steel uses a negative number as fishing rods have the same durability, so Math.abs is used
		document.getElementById("durabilityInfo").innerHTML = 'Your selected tool has a durability of ' + Math.abs(durability) + '.';
		document.getElementById("modelLimit").value = Math.abs(durability) - 1;
	}
	
	// Sets the 'unbreakable' tools to be checked by default
	// This is unchecked for models that don't need it
	document.getElementById("unbreakable").checked = "checked";

	document.getElementById("elytraBroken").hidden = "true"; // Hides the checkbox only used for elytra
	document.getElementById("elytraBrokenCheck").checked = ""; // Unchecks the checkbox for elytra

	document.getElementById("shieldBlock").hidden = "true"; // Hides the checkbox only used for shields
	document.getElementById("shieldBlockCheck").checked = ""; // Unchecks the checkbox for shields

	document.getElementById("unbreakableHide").hidden = ""; // Unhides the checkbox for unbreakbale tools

	document.getElementById("bowPullingCheck").checked = ""; // Unchecks the checkbox for bows
	var bowPulling = document.getElementsByClassName("bowPulling");
	// Hides all the elements with the class 'bowPulling'
	for (var i = 0; i < bowPulling.length; i++) {
		bowPulling[i].hidden = "true";
	}

	document.getElementById("newTextureNames").hidden = "true"; // Hides the checkbox used for wooden and golden tools
	document.getElementById("newTextureNamesCheck").checked = ""; // Unchecks the checkbox for wooden and golden tools

	document.getElementById("tridentThrown").hidden = "true"; // Hides the checkbox only used for tridents
	document.getElementById("tridentThrownCheck").checked = ""; // Unchecks the checkbox for tridents

	document.getElementById("rodCast").hidden = "true"; // Hides the checkbox only used for tridents
	document.getElementById("rodCastCheck").checked = ""; // Unchecks the checkbox for tridents

	display = '';
	parent = '\n\t"parent": "item/'; // Sets the parent value ready for another model to be added to the end
	dTex = "item/diamond_hoe"; //if no default paths can match, default to diamond_hoe.
	switch (durability) {
		case "385":
			dTex = "item/bow";
			parent += 'generated",';
			display = '\n\t"display": {\n\t\t"thirdperson_righthand": {\n\t\t\t"rotation": [ -80, 260, -40 ],\n\t\t\t"translation": [ -1, -2, 2.5 ],\n\t\t\t"scale": [ 0.9, 0.9, 0.9 ]\n\t\t},\n\t\t"thirdperson_lefthand": {\n\t\t\t"rotation": [ -80, -280, 40 ],\n\t\t\t"translation": [ -1, -2, 2.5 ],\n\t\t\t"scale": [ 0.9, 0.9, 0.9 ]\n\t\t},\n\t\t"firstperson_righthand": {\n\t\t\t"rotation": [ 0, -90, 25 ],\n\t\t\t"translation": [ 1.13, 3.2, 1.13],\n\t\t\t"scale": [ 0.68, 0.68, 0.68 ]\n\t\t},\n\t\t"firstperson_lefthand": {\n\t\t\t"rotation": [ 0, 90, -25 ],\n\t\t\t"translation": [ 1.13, 3.2, 1.13],\n\t\t\t"scale": [ 0.68, 0.68, 0.68 ]\n\t\t}\n\t},';
			// Unhides the checkbox and values specific to bows
			for (var i = 0; i < bowPulling.length; i++) {
				bowPulling[i].hidden = "";
			}
			document.getElementById("bowPullingCheck").checked = "checked";
			break;
		case "1562":
			dTex = "item/diamond_hoe";
			parent += 'handheld",';
			break;
		case "65":
			dTex = "item/fishing_rod"; //fishing rod and fint and steel have the same durability, just went for fishing rod as default.
			parent += 'handheld_rod",';
			document.getElementById("rodCast").hidden = ""; // Shows the fishing rod checkbox if fishing rod is chosen
			document.getElementById("rodCastCheck").checked = "checked"; // Checks the fishing rod checkbox by default when the fishing rod is chosen
			break;
		case "-65":
			dTex = "item/flint_and_steel"; // Negative value allows both flint_and_steel and fishing rods to have default textures and models
			parent += 'generated",';
			break;
		case "33":
			dTex = "item/golden_hoe";
			parent += 'handheld",';
			document.getElementById("newTextureNames").hidden = ""; // Shows the checkbox used for golden tools
			break;
		case "251":
			dTex = "item/iron_hoe";
			parent += 'handheld",';
			break;
		case "-251":
			dTex = "item/trident";
			parent = '\n\t"parent": "builtin/entity",'; // Completely replaces 'parent' as shields use a builtin parent by default
			display = '\n\t"display": {\n\t\t"thirdperson_righthand": {\n\t\t\t"rotation": [ 0, 60, 0 ],\n\t\t\t"translation": [ 11, 17, -2 ]\n\t\t},\n\t\t"thirdperson_lefthand": {\n\t\t\t"rotation": [ 0, 60, 0 ],\n\t\t\t"translation": [ 3, 17, 12 ]\n\t\t},\n\t\t"firstperson_righthand": {\n\t\t\t"rotation": [ 0, -90, 25 ],\n\t\t\t"translation": [ -3, 17, 1 ]\n\t\t},\n\t\t"firstperson_lefthand": {\n\t\t\t"rotation": [ 0, 90, -25 ],\n\t\t\t"translation": [ 13, 17, 1 ]\n\t\t},\n\t\t"gui": {\n\t\t\t"rotation": [ 15, -25, -5 ],\n\t\t\t"translation": [ 2, 3, 0 ],\n\t\t\t"scale": [ 0.65, 0.65, 0.65 ]\n\t\t},\n\t\t"fixed": {\n\t\t\t"rotation": [ 0, 180, 0 ],\n\t\t\t"translation": [ -2, 4, -5],\n\t\t\t"scale":[ 0.5, 0.5, 0.5]\n\t\t},\n\t\t"ground": {\n\t\t\t"translation": [ 4, 4, 2],\n\t\t\t"scale":[ 0.25, 0.25, 0.25]\n\t\t}\n\t},';
			document.getElementById("tridentThrown").hidden = ""; // Shows the trident checkbox if trident is chosen
			document.getElementById("tridentThrownCheck").checked = "checked"; // Checks the trident checkbox by default when the trident is chosen
			break;
		case "238":
			dTex = "item/shears";
			parent += 'generated",';
			break;
		case "132":
			dTex = "item/stone_hoe";
			parent += 'handheld",';
			break;
		case "60":
			dTex = "item/wooden_hoe";
			parent += 'handheld",';
			document.getElementById("newTextureNames").hidden = ""; // Shows the checkbox used for wooden tools
			break;
		case "26":
			dTex = "item/carrot_on_a_stick";
			parent += 'handheld_rod",';
			break;
		case "433":
			dTex = "item/elytra";
			parent += 'generated",';
			document.getElementById("elytraBroken").hidden = ""; // Shows the elytra checkbox if elytra is chosen
			break;
		case "337":
			dTex = "item/shield";
			parent = '\n\t"parent": "builtin/entity",'; // Completely replaces 'parent' as shields use a builtin parent by default
			display = '\n\t"display": {\n\t\t"thirdperson_righthand": {\n\t\t\t"rotation": [ 0, 90, 0 ],\n\t\t\t"translation": [ 10.51, 6, -4 ]\n\t\t},\n\t\t"thirdperson_lefthand": {\n\t\t\t"rotation": [ 0, 90, 0 ],\n\t\t\t"translation": [ 10.51, 6, 12 ]\n\t\t},\n\t\t"firstperson_righthand": {\n\t\t\t"rotation": [ 0, 180, 5 ],\n\t\t\t"translation": [ -10, 2, -10 ],\n\t\t\t"scale": [ 1.25, 1.25, 1.25 ]\n\t\t},\n\t\t"firstperson_lefthand": {\n\t\t\t"rotation": [ 0, 180, 5 ],\n\t\t\t"translation": [ 10, 0, -10 ],\n\t\t\t"scale": [ 1.25, 1.25, 1.25 ]\n\t\t},\n\t\t"gui": {\n\t\t\t"rotation": [ 15, -25, -5 ],\n\t\t\t"translation": [ 2, 3, 0 ],\n\t\t\t"scale": [ 0.65, 0.65, 0.65 ]\n\t\t},\n\t\t"fixed": {\n\t\t\t"rotation": [ 0, 180, 0 ],\n\t\t\t"translation": [ -2, 4, -5],\n\t\t\t"scale":[ 0.5, 0.5, 0.5]\n\t\t},\n\t\t"ground": {\n\t\t\t"translation": [ 4, 4, 2],\n\t\t\t"scale":[ 0.25, 0.25, 0.25]\n\t\t}\n\t},';
			document.getElementById("shieldBlock").hidden = ""; // Shows the shield checkbox if shield is chosen
			document.getElementById("shieldBlockCheck").checked = "checked"; // Checks the shield checkbox by default when the shield is chosen
			break;
		case "2":
			dTex = "item/clock";
			parent += 'generated",';
			document.getElementById("unbreakableHide").hidden = "true";
			document.getElementById("unbreakable").checked = "";
			break;
		case "3":
			dTex = "item/compass";
			parent += 'generated",';
			document.getElementById("unbreakableHide").hidden = "true";
			document.getElementById("unbreakable").checked = "";
			break;
		default:
			parent += 'generated",';
	}
	document.getElementById("address").value = dTex;
}

function generate() { //calculate all percentages
	var resultant = "";
	document.getElementById("generate").value = "Generating...";
	document.getElementById("result").innerHTML = ""; //clear any previous outputs
	maxDur = Math.abs(document.getElementById("durability").value); //Math.abs allows flint_and_steel to be chosen
	maxModels = document.getElementById("modelLimit").value;
	address = document.getElementById("address").value; //default model address
	predicateKey = '"damage": '; // Sets the default predicate to "damage"
	var compassClock = document.getElementById("unbreakableHide").hidden;
	if (document.getElementById("unbreakable").checked) {
		damaged = '"damaged": 0, ';
	}

	// Doesn't put "damaged": 0/1 in the result if compass or clock is chosen 
	else if (compassClock) { // This will only be true when compass or clock is chosen

		damaged = '';

		if (maxDur == 2) { //Sets the predicate to "time" rather than "damage" if clocks is chosen
			predicateKey = '"time": ';
		} else {
			predicateKey = '"angle": ';
		}
	} else {
		damaged = '"damaged": 1, ';
	}
	if (maxDur == 1 || compassClock) {
		maxDur = document.getElementById("customDur").value; //update durability from 1 if a custom durability was entered.
	}
	inc = "";

	var pull = document.getElementById("bowPullingCheck").checked; // Gets whether pull predicates checkbox has been ticked
	var pullNum = document.getElementById("bowPullingNum").value - 1; // Gets how many pulling models there wants to be
	var pullPercent;

	var block = document.getElementById("shieldBlockCheck").checked;
	var thrown = document.getElementById("tridentThrownCheck").checked;
	var cast = document.getElementById("rodCastCheck").checked;

	for (var i = 0; i <= maxModels && i < maxDur; i++) { // Checks both max amount of models and max durability so no models are only produed for durability values between 0 and 1.
		if (document.getElementById("inc").checked && i > 0) {
			inc = i;
		} // Rising number after model now on all models except 'damage: 0' and 'damaged: 1'
		j = Math.round(((1 / maxDur) * i) * 10 ** 15) / 10 ** 15; // Limits the durability to 15 decimal places

		var extra;
		if (block) {
			extra = 'blocking'
		} else if (thrown) {
			extra = 'throwing'
		} else {
			extra = 'cast'
		}

		if (j > 0) {
			resultant += '{ "predicate": { ' + damaged + predicateKey + j + ' }, "model": "' + address + inc + '" },\n'; // Added spaces between the { } and predicate values
			// Adds pulling predicates if the checkbox was checked
			if (pull) {
				resultant += '{ "predicate": { ' + damaged + predicateKey + j + ' "pulling": 1 }, "model": item/bow_pulling' + inc + '_1" },\n';
				for (var k = 1; k <= pullNum; k++) {
					pullPercent = (1 / pullNum) * k;
					resultant += '{ "predicate": { ' + damaged + predicateKey + j + ' "pulling": 1, "pull": ' + pullPercent + ' }, "model": item/bow_pulling' + inc + '_' + (k + 1) + '" },\n';
				}
			} else if (block || thrown || cast) {
				resultant += '{ "predicate": { ' + damaged + predicateKey + j + ', "' + extra + '": 1 }, "model": "' + address + '_' + extra + inc + '" },\n';
			}
		} else {
			resultant += '{ "predicate": { ' + predicateKey + j + ' }, "model": "' + address + inc + '" },\n'; // If damage = 0, damaged predicate is unnecessary
			// Adds pulling predicates if the checkbox was checked
			if (pull) {
				resultant += '{ "predicate": { "damage": ' + j + ' "pulling": 1 }, "model": item/bow_pulling' + inc + '_1" },\n';
				for (var k = 1; k <= pullNum; k++) {
					pullPercent = (1 / pullNum) * k;
					resultant += '{ "predicate": { "damage": ' + j + ' "pulling": 1, "pull": ' + pullPercent + ' }, "model": item/bow_pulling' + inc + '_' + (k + 1) + '" },\n';
				}
			} else if (block || thrown || cast) {
				resultant += '{ "predicate": { "damage": ' + j + ', "' + extra + '": 1 }, "model": "' + address + '_' + extra + inc + '" },\n';
			}
		}
	}

	if (document.getElementById("unbreakable").checked && !compassClock) {
		resultant += '{ "predicate": { "damaged": 1 }, "model": "' + address + '" },\n'; // Removed the unnecessary "damage": 0
		// Adds pulling predicates if the checkbox was checked
		if (pull) {
			resultant += '{ "predicate": { "damaged": 1, "pulling": 1 }, "model": item/bow_pulling_1" },\n';
			for (var k = 1; k <= pullNum; k++) {
				pullPercent = (1 / pullNum) * k;
				resultant += '{ "predicate": { "damaged": 1, "pulling": 1, "pull": ' + pullPercent + ' }, "model": item/bow_pulling_' + (k + 1) + '" },\n';
			}
		} else if (block || thrown || cast) {
			resultant += '{ "predicate": { "damaged": 1, "' + extra + '": 1 }, "model": "' + address + '_' + extra + '" },\n';
		}
	}

	if (document.getElementById("elytraBrokenCheck").checked) {
		resultant += '{ "predicate": { "broken": 1 }, "model": "item/broken_elytra" },\n';
	}

	resultant = resultant.substring(0, resultant.length - 2); //remove the last comma from the string.
	if (document.getElementById("model").checked) {
		address = address.replace(/item/, "items"); // Changed default texture path from item to items.
		if (!document.getElementById("newTextureNamesCheck").checked) {
			address = address.replace(/en_/, "_"); // Changes texture path from golden_hoe to gold_hoe and wooden_hoe to wood_hoe if new textures isn't checked.
		}
		address = address.replace(/bow/, "bow_standby"); // Changes texture path from bow to bow_standby.
		address = address.replace(/rod/, "rod_uncast"); // Changes texture path from fishing_rod to fishing_rod_uncast.

		//generate a model file's JSON around the results.
		resultant = resultant.replace(/\n/g, '\n\t\t'); //tab indent the code by 2
		resultant = resultant.replace(/{}/, "");

		var model = address.split("/")[1];
		var texture = (model == "shield" || model == "trident") ? '' : '\n\t"textures": {\n\t\t"layer0": "' + address + '"\n\t},';

		resultant = '{' + parent + display + texture + '\n\t"overrides": [\n\t\t' + resultant + '\n\t]\n}'; //add prefix and suffix.
	}
	document.getElementById("result").innerHTML = resultant;
	document.getElementById("generate").value = "Generate Code";
}
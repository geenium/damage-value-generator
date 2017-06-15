var parent = '\n\t"parent": "item/generated",'; // Sets a default value for 'parent'
var display = ''; // Sets a default value for 'display'

// handle a selection change for tool type
function durabilityInfo(){
	durability = document.getElementById("durability").value; //get the value of the durability from the dropdown.
	if(durability == 1){ // 1 means custom durability.
		document.getElementById("durabilityInfo").innerHTML = 'How much maximum durability does your tool have?<br><input type = "text" value = "1562" class = "textLine" id = "customDur"/>';
        document.getElementById("modelLimit").value = 1561; // Sets the default model limit to 1 less than the default durability for custom durability amount
	}
	else{ //existing tool
        // Flint and steel uses a negative number as fishing rods have the same durability, so Math.abs is used
		document.getElementById("durabilityInfo").innerHTML = 'Your selected tool has a durability of ' + Math.abs(durability) + '.';
        document.getElementById("modelLimit").value = Math.abs(durability) - 1;
	}

    display = '';
    parent = '\n\t"parent": "item/'; // Sets the parent value ready for another model to be added to the end
	dTex = "item/diamond_hoe"; //if no default paths can match, default to diamond_hoe.
	switch(durability){
		case "385":
			dTex = "item/bow";
			parent += 'generated",';
			display = '\n\t"display": {\n\t\t"thirdperson_righthand": {\n\t\t\t"rotation": [ -80, 260, -40 ],\n\t\t\t"translation": [ -1, -2, 2.5 ],\n\t\t\t"scale": [ 0.9, 0.9, 0.9 ]\n\t\t},\n\t\t"thirdperson_lefthand": {\n\t\t\t"rotation": [ -80, -280, 40 ],\n\t\t\t"translation": [ -1, -2, 2.5 ],\n\t\t\t"scale": [ 0.9, 0.9, 0.9 ]\n\t\t},\n\t\t"firstperson_righthand": {\n\t\t\t"rotation": [ 0, -90, 25 ],\n\t\t\t"translation": [ 1.13, 3.2, 1.13],\n\t\t\t"scale": [ 0.68, 0.68, 0.68 ]\n\t\t},\n\t\t"firstperson_lefthand": {\n\t\t\t"rotation": [ 0, 90, -25 ],\n\t\t\t"translation": [ 1.13, 3.2, 1.13],\n\t\t\t"scale": [ 0.68, 0.68, 0.68 ]\n\t\t}\n\t},';
			break;
		case "1562":
			dTex = "item/diamond_hoe";
			parent += 'handheld",';
			break;
		case "65":
			dTex = "item/fishing_rod"; //fishing rod and fint and steel have the same durability, just went for fishing rod as default.
			parent += 'handheld_rod",';
			break;
        	case "-65":
			dTex = "item/flint_and_steel"; // Negative value allows both flint_and_steel and fishing rods to have default textures and models
			parent += 'generated",';
			break;
		case "33":
			dTex = "item/golden_hoe";
			parent += 'handheld",';
			break;
		case "251":
			dTex = "item/iron_hoe";
			parent += 'handheld",';
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
			break;
		case "26":
			dTex = "item/carrot_on_a_stick";
			parent += 'handheld_rod",';
			break;
		case "433":
			dTex = "item/elytra";
			parent += 'generated",';
			break;
		case "337":
			dTex = "item/shield";
			parent = '\n\t"parent": "builtin/entity",'; // Completely replaces 'parent' as shields use a builtin parent by default
			display = '\n\t"display": {\n\t\t"thirdperson_righthand": {\n\t\t\t"rotation": [ 0, 90, 0 ],\n\t\t\t"translation": [ 10.51, 6, -4 ],\n\t\t\},\n\t\t"thirdperson_lefthand": {\n\t\t\t"rotation": [ 0, 90, 0 ],\n\t\t\t"translation": [ 10.51, 6, 12 ],\n\t\t},\n\t\t"firstperson_righthand": {\n\t\t\t"rotation": [ 0, 180, 5 ],\n\t\t\t"translation": [ -10, 2, -10 ],\n\t\t\t"scale": [ 1.25, 1.25, 1.25 ]\n\t\t},\n\t\t"firstperson_lefthand": {\n\t\t\t"rotation": [ 0, 180, 5 ],\n\t\t\t"translation": [ 10, 0, -10 ],\n\t\t\t"scale": [ 1.25, 1.25, 1.25 ]\n\t\t},\n\t\t"gui": {\n\t\t\t"rotation": [ 15, -25, -5 ],\n\t\t\t"translation": [ 2, 3, 0 ],\n\t\t\t"scale": [ 0.65, 0.65, 0.65 ]\n\t\t},\n\t\t"fixed": {\n\t\t\t"rotation": [ 0, 180, 0 ],\n\t\t\t"translation": [ -2, 4, -5],\n\t\t\t"scale":[ 0.5, 0.5, 0.5]\n\t\t},\n\t\t"ground": {\n\t\t\t"translation": [ 4, 4, 2],\n\t\t\t"scale":[ 0.25, 0.25, 0.25]\n\t\t}\n\t},';
			break;
		default:
			parent += 'generated",';
	}
	document.getElementById("address").value = dTex;
}

function generate(){ //calculate all percentages
	var resultant = "";
	document.getElementById("generate").value = "Generating...";
	document.getElementById("result").innerHTML = ""; //clear any previous outputs
	maxDur = Math.abs(document.getElementById("durability").value); //Math.abs allows flint_and_steel to be chosen
	maxModels = document.getElementById("modelLimit").value;
	address = document.getElementById("address").value; //default model address
	if(document.getElementById("unbreakable").checked){
		damaged = 0;
	}
	else{
		damaged = 1;
	}
	if(maxDur == 1){
		maxDur = document.getElementById("customDur").value; //update durability from 1 if a custom durability was entered.
	}
	inc = "";
	for (var i = 0; i <= maxModels && i < maxDur; i++){ // Checks both max amount of models and max durability so no models are only produed for durability values between 0 and 1.
		if(document.getElementById("inc").checked && i > 0){ inc = i;} // Rising number after model now on all models except 'damage: 0' and 'damaged: 1'
		j = Math.round(((1/maxDur)*i) * 10**15) / 10**15; // Limits the durability to 15 decimal places

        if (j > 0) {
            resultant += '{ "predicate": { "damaged": ' + damaged + ', "damage": ' + j + ' }, "model": "' + address + inc + '" },\n'; // Added spaces between the { } and predicate values
        }

        else {
            resultant += '{ "predicate": { "damage": ' + j + ' }, "model": "' + address + inc + '" },\n'; // If damage = 0, damaged predicate is unnecessary
        }
	}
	if(damaged == 0){
		resultant += '{ "predicate": { "damaged": 1 }, "model": "' + address + '" },\n'; // Removed the unnecessary "damage": 0
	}
	resultant = resultant.substring(0, resultant.length - 2); //remove the last comma from the string.
	if(document.getElementById("model").checked){
		address = address.replace(/item/, "items"); // Changed default texture path from item to items.
		address = address.replace(/en_/, "_"); // Changes texture path from golden_hoe to gold_hoe and wooden_hoe to wood_hoe.
		address = address.replace(/bow/, "bow_standby"); // Changes texture path from bow to bow_standby.
		address = address.replace(/rod/, "rod_uncast"); // Changes texture path from fishing_rod to fishing_rod_uncast.

		//generate a model file's JSON around the results.
		resultant = resultant.replace(/\n/g, '\n\t\t'); //tab indent the code by 2
		resultant = resultant.replace(/{}/, "");
		resultant = '{' + parent + display + '\n\t"textures": {\n\t\t"layer0": "' + address + '"\n\t},\n\t"overrides": [\n\t\t' + resultant + '\n\t]\n}'; //add prefix and suffix.
	}
	document.getElementById("result").innerHTML = resultant;
	document.getElementById("generate").value = "Generate Code";
}

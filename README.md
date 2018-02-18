<!-- HTML originally by Sparks accidentalgames.com -->
<script src = "customTool.js"></script>
<p>Damage Value Model Generator</p>
<p>Originally made by Sparks - <a href = "http://accidentalgames.com/media/durabilityModels.php">original</a>.</p>
<p><a href = "https://github.com/geenium/damage-value-generator/blob/master/changes_list.txt" target = "_blank">List of changes made</a></p>
<p>Tool: <select id = 'durability' onchange = 'durabilityInfo()'>
<option value = "385">Bow</option>
<option value = "26">Carrot on a Stick</option>
<option value = "1562">Diamond Tool</option>
<option value = "433">Elytra</option>
<option value = "65">Fishing Rod</option>
<option value = "-65">Flint &amp; Steel</option>
<option value = "33">Golden Tool</option>
<option value = "251">Iron Tool</option>
<option value = "-251">Trident</option>
<option value = "238">Shears</option>
<option value = "337">Shield</option>
<option value = "132">Stone Tool</option>
<option value = "60">Wooden Tool</option>
<option value = "2">Clock</option>
<option value = "3">Compass</option>
<option value = "1">Other</option>
</select>
<span class ='info'>Choose "other" for custom durability</span></p>
<div id = 'durabilityInfo'>Your selected tool has a durability of 385.</div>
<p id = 'unbreakableHide'><input type ='checkbox' id = 'unbreakable' checked = 'checked'/> Generate for "unbreakable" tools.</p>
<p><input type ='checkbox' id = 'model' checked = 'checked'/> Generate model file around result.</p>
<p><input type ='checkbox' id = 'inc' checked = 'checked'/> Add rising number after model placeholder.<span class = 'info'>(e.g. diamond_hoe1, diamond_hoe2, diamond_hoe3...)</span></p>
<p id = 'elytraBroken' hidden = 'true'><input type ='checkbox' id = 'elytraBrokenCheck'/> Create a predicate for when the elytra is broken.</p>
<p id = 'shieldBlock' hidden = 'true'><input type ='checkbox' id = 'shieldBlockCheck'/> Add a blocking model for each durability.</p>
<p class = 'bowPulling'><input type ='checkbox' id = 'bowPullingCheck' checked = 'checked'/> Add pulling predicates for each durability.</p>
<p class = 'bowPulling'>No. of pulling states to have for each bow durability (will always produce at least 1):<br>
<input type = "text" value = '3' class = 'bowPulling' id = 'bowPullingNum'/></p>
<p id = 'tridentThrown' hidden = 'true'><input type ='checkbox' id = 'tridentThrownCheck'/> Add a throwing model for each durability.</p>
<p id = 'rodCast' hidden = 'true'><input type ='checkbox' id = 'rodCastCheck'/> Add a rod cast model for each durability.</p>
<p>Default/placeholder model address:<br>
<input type = 'text' id = 'address' value = 'item/bow'/></p>
<p id = 'newTextureNames' hidden = 'true'><input type ='checkbox' id = 'newTextureNamesCheck'/> Use 1.13 texture names by default.</p>
<p>Max no. of models to produce (excludes 0 damage):<br>
<input type = 'text' id = 'modelLimit' value = '384'/></p>
<p><input type = 'button' value = 'Generate Code' id = 'generate' onclick = 'generate()'/></p>
<textarea readonly id = 'result' class = 'hidden'></textarea>

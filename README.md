<!-- HTML originally by Sparks accidentalgames.com -->
<script src="customTool.js"></script>
<p>Damage Value Model Generator</p>
<p>Originally made by Sparks - <a href="http://accidentalgames.com/media/durabilityModels.php">original</a>.</p>
<p><a href="https://github.com/geenium/damage-value-generator/blob/master/changes_list.txt" target="_blank">List of changes made</a></p>
<p>Tool: <select id="tool" onchange="durabilityInfo()">
<option value="bow">Bow</option>
<option value="carrot_on_a_stick">Carrot on a Stick</option>
<option value="diamond_hoe">Diamond Tool</option>
<option value="elytra">Elytra</option>
<option value="fishing_rod">Fishing Rod</option>
<option value="flint_and_steel">Flint &amp; Steel</option>
<option value="golden_hoe">Golden Tool</option>
<option value="iron_hoe">Iron Tool</option>
<option value="trident_in_hand">Trident</option>
<option value="shears">Shears</option>
<option value="shield">Shield</option>
<option value="stone_hoe">Stone Tool</option>
<option value="wooden_hoe">Wooden Tool</option>
<option value="clock">Clock</option>
<option value="compass">Compass</option>
<option value="other">Other</option>
</select>
<span class ="info">Choose "other" for custom durability</span></p>
<div id="durabilityInfo">Your selected tool has a durability of 385.</div>
<p id="unbreakableHide"><input type ="checkbox" id="unbreakable" checked="checked"/> Generate for "unbreakable" tools.</p>
<p><input type ="checkbox" id="model" checked="checked"/> Generate model file around result.</p>
<p><input type ="checkbox" id="inc" checked="checked"/> Add rising number after model placeholder.<span class="info">(e.g. diamond_hoe1, diamond_hoe2, diamond_hoe3...)</span></p>
<p id="elytraBroken" hidden="true"><input type ="checkbox" id="elytraBrokenCheck"/> Create a predicate for when the elytra is broken.</p>
<p id="shieldBlock" hidden="true"><input type ="checkbox" id="shieldBlockCheck"/> Add a blocking model for each durability.</p>
<p id="bowPulling"><input type ="checkbox" id="bowPullingCheck" checked="checked"/> Add pulling predicates for each durability.<br><br>No. of pulling states to have for each bow durability (will always produce at least 1):<br>
<input type="text" value="3" id="bowPullingNum"/></p>
<p id="tridentThrown" hidden="true"><input type ="checkbox" id="tridentThrownCheck"/> Add a throwing model for each durability.</p>
<p id="rodCast" hidden="true"><input type ="checkbox" id="rodCastCheck"/> Add a rod cast model for each durability.</p>
<p>Default/placeholder model address:<br>
<input type="text" id="address" value="item/bow"/></p>
<p id="newTextureNames" hidden="true"><input type ="checkbox" id="newTextureNamesCheck"/> Use 1.13 texture names by default.</p>
<p>Max no. of models to produce (excludes 0 damage):<br>
<input type="text" id="modelLimit" value="384"/></p>
<p><input type="button" value="Generate Code" id="generate" onclick="generate()"/></p>
<textarea readonly id="result" class="hidden"></textarea>

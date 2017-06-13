<head>
  <meta charset="UTF-8">
  <script src = "customTool.js"></script>
</head>
<body>
  <p>Damage Value Model Generator</p>
  <p>Originally made by Sparks - <a href = "http://accidentalgames.com/media/durabilityModels.php">original</a>.</p>
  <p><a href = "https://github.com/geenium/damage-value-generator/blob/master/changes_list.txt" target = "_blank">List of changes made</a></p>
  <p>Tool: <select id = 'durability' onchange = 'durabilityInfo()'>
    <option value = "385">Bow</option>
    <option value = "1562">Diamond Tool</option>
    <option value = "65">Fishing Rod</option>
    <option value = "65">Flint &amp; Steel</option>
    <option value = "33">Golden Tool</option>
    <option value = "251">Iron Tool</option>
    <option value = "238">Shears</option>
    <option value = "132">Stone Tool</option>
    <option value = "60">Wood Tool</option>
    <option value = "1">Other</option>
  </select>
  <span class ='info'>Choose "other" for custom durability</span></p>
  <div id = 'durabilityInfo'>Your selected tool has a durability of 385.</div>
  <p><input type ='checkbox' id = 'unbreakable' checked = 'checked'/> Generate for "unbreakable" tools.</p>
  <p><input type ='checkbox' id = 'model' checked = 'checked'/> Generate model file around result.</p>
  <p><input type ='checkbox' id = 'inc' checked = 'checked'/> Add rising number after model placeholder.<span class = 'info'>(e.g. diamond_hoe1, diamond_hoe2, diamond_hoe3...)</span></p>
  <p>Default/placeholder model address:<br>
  <input type = 'text' id = 'address' value = 'item/bow'/>
    <p>Max no. of models to produce (excludes 0 damage):<br>
  <input type = 'text' id = 'modelLimit' value = '384'/>
  <p><input type = 'button' value = 'Generate Code' id = 'generate' onclick = 'generate()'/></p>
  <textarea readonly id = 'result' class = 'hidden'></textarea>
</body>

// data
data = {
  costbyfactor: {
  	1: [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 45, 50, 55, 60, 65, 70, 80, 90, 100, 110, 120, 130, 150, 175, 200, 225, 250, 275, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100],
  	2: [1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 90, 100, 110, 120, 130, 140, 160, 180, 200, 220, 240, 260, 300, 350, 400, 450, 500, 550, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200],
   	3: [2, 3, 6, 9, 12, 18, 24, 30, 36, 48, 60, 72, 84, 96, 120, 135, 150, 165, 180, 195, 210, 240, 270, 300, 330, 360, 390, 450, 525, 600, 675, 750, 825, 900, 1050, 1200, 1350, 1500, 1650, 1800, 1950, 2100, 2250, 2400, 2550, 2700, 2850, 3000, 3150, 3300],
  	4: [2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128, 160, 180, 200, 220, 240, 260, 280, 320, 360, 400, 440, 480, 520, 600, 700, 800, 900, 1000, 1100, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200, 4400],
  	5: [3, 5, 10, 15, 20, 30, 40, 50, 60, 80, 100, 120, 140, 160, 200, 225, 250, 275, 300, 325, 350, 400, 450, 500, 550, 600, 650, 750, 875, 1000, 1125, 1250, 1375, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500, 3750, 4000, 4250, 4500, 4750, 5000, 5250, 5500],
  	6: [3, 6, 12, 18, 24, 36, 48, 60, 72, 96, 120, 144, 168, 192, 240, 270, 300, 330, 360, 390, 420, 480, 540, 600, 660, 720, 780, 900, 1050, 1200, 1350, 1500, 1650, 1800, 2100, 2400, 2700, 3000, 3300, 3600, 3900, 4200, 4500, 4800, 5100, 5400, 5700, 6000, 6300, 6600],
  	7: [4, 7, 14, 21, 28, 42, 56, 70, 84, 112, 140, 168, 196, 224, 280, 315, 350, 385, 420, 455, 490, 560, 630, 700, 770, 840, 910, 1050, 1225, 1400, 1575, 1750, 1925, 2100, 2450, 2800, 3150, 3500, 3850, 4200, 4550, 4900, 5250, 5600, 5950, 6300, 6650, 7000, 7350, 7700],
  	8: [4, 8, 16, 24, 32, 48, 64, 80, 96, 128, 160, 192, 224, 256, 320, 360, 400, 440, 480, 520, 560, 640, 720, 800, 880, 960, 1040, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2800, 3200, 3600, 4000, 4400, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 7600, 8000, 8400, 8800],
  	9: [5, 9, 18, 27, 36, 54, 72, 90, 108, 144, 180, 216, 252, 288, 360, 405, 450, 495, 540, 585, 630, 720, 810, 900, 990, 1080, 1170, 1350, 1575, 1800, 2025, 2250, 2475, 2700, 3150, 3600, 4050, 4500, 4950, 5400, 5850, 6300, 6750, 7200, 7650, 8100, 8550, 9000, 9450, 9900],
  	10: [5, 10, 20, 30, 40, 60, 80, 100, 120, 160, 200, 240, 280, 320, 400, 450, 500, 550, 600, 650, 700, 800, 900, 1000, 1100, 1200, 1300, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000],
  	plus: [0.50, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 45, 50, 55, 60, 65, 70, 80, 90, 100, 110, 120, 130, 150, 175, 200, 225, 250, 275, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100]
  },
  powers: [
  	{name: "Acid", link: "Body", base: 15, factor: 3},
  	{name: "Acuity", link: "Int", base: 350, factor: 10},
  	{name: "Adaptation", link: "Int", base: 250, factor: 10},
  	{name: "Adrenaline Surge", link: "Will", base: 50, factor: 6},
  	{name: "Air Animation", link: "Aura", base: 30, factor: 8},
  	{name: "Air Control", link: "Int", base: 20, factor: 9},
  	{name: "Air Walking", link: "Will", base: 5, factor: 2},
  	{name: "Alert", link: "Int", base: 5, factor: 2},
	{name: "Analytical Smell", link: "Int", base: 10, factor: 4},
  	{name: "Anatomical Division", link: "Body", base: 35, factor: 5},
  	{name: "Animal Control", link: "Int", base: 15, factor: 7},
  	{name: "Animal Mimicry", link: "Will", base: 50, factor: 5},
	{name: "Animal Summoning", link: "Int", base: 25, factor: 2},
	{name: "Animate Dead", link: "Aura", base: 25, factor: 6},
  	{name: "Animate Image", link: "Aura", base: 35, factor: 7},
  	{name: "Animate Objects", link: "Aura", base: 30, factor: 6},
  	{name: "Animate Shadows", link: "Aura", base: 25, factor: 8},
  	{name: "Attraction/Repulsion", link: "Mind", base: 15, factor: 4},
  	{name: "Aura of Fear", link: "Will", base: 20, factor: 6},
  	{name: "Awareness", link: "Int", base: 5, factor: 1},
  	{name: "Bomb", link: "Str", base: 20, factor: 3},
  	{name: "Broadcast Empath", link: "Will", base: 20, factor: 5},
  	{name: "Cell Rot", link: "Will", base: 20, factor: 3},
  	{name: "Chameleon", link: "Int", base: 5, factor: 3},
  	{name: "Chemical Attack", link: "Str", base: 20, factor: 4},
  	{name: "Claws", link: "Dex", base: 25, factor: 1},
  	{name: "Cling", link: "Str", base: 10, factor: 2},
  	{name: "Cold Immunity", link: "Body", base: 5, factor: 4},
  	{name: "Color", link: "Int", base: 15, factor: 2},
  	{name: "Coma", link: "Will", base: 50, factor: 8},
  	{name: "Comprehend Languages", link: "Mind", base: 5, factor: 2},
  	{name: "Continuum Control", link: "Will", base: 550, factor: 10},
  	{name: "Control", link: "Will", base: 50, factor: 7},
  	{name: "Damage Transference", link: "Will", base: 15, factor: 5},
  	{name: "Danger Sense", link: "Int", base: 25, factor: 3},
  	{name: "Darkness", link: "Str", base: 5, factor: 7},
  	{name: "Defensive Adaptation", link: "Body", base: 150, factor: 7},
  	{name: "Density Increase", link: "Will", base: 10, factor: 5},
	{name: "Detect", link: "Int", base: 10, factor: 3},
	{name: "Digging", link: "Str", base: 5, factor: 2},
	{name: "Dimensional Anchor", link: "Will", base: 35, factor: 5},
	{name: "Dimension Travel", link: "Will", base: 500, factor: 6},
	{name: "Diminution", link: "Mind", base: 20, factor: 8},
	{name: "Directional Hearing", link: "Int", base: 5, factor: 3},
	{name: "Disintegration", link: "Str", base: 100, factor: 4},
	{name: "Dismember", link: "Infl", base: 60, factor: 7},
	{name: "Dispersal", link: "Will", base: 10, factor: 6},
	{name: "Drain Resistance", link: "Mind", base: 20, factor: 5},
	{name: "Dumb Luck", link: "Infl", base: 200, factor: 7},
	{name: "Earth Animation", link: "Aura", base: 25, factor: 8},
	{name: "Earth Control", link: "Int", base: 20, factor: 7},
	{name: "Electrical Being", link: "Str", base: 10, factor: 6},
	{name: "Electrical Control", link: "Int", base: 15, factor: 8},
	{name: "Empathy", link: "Will", base: 10, factor: 3},
	{name: "Enchantment", link: "Will", base: 200, factor: 10},
	{name: "Energy Absorption", link: "Body", base: 25, factor: 5},
	{name: "Energy Blast", link: "Body", base: 15, factor: 3},
	{name: "Enlarge", link: "Mind", base: 20, factor: 8},
	{name: "Exorcism", link: "Mind", base: 5, factor: 3},
	{name: "Extended Hearing", link: "Int", base: 5, factor: 1},
	{name: "Extra Limb", link: "Str", base: 5, factor: 4},
	{name: "Eye of the Cat", link: "Will", base: 10, factor: 2},
	{name: "Fabricate", link: "Aura", base: 50, factor: 7},
	{name: "Flame Animation", link: "Aura", base: 25, factor: 8},
	{name: "Flame Being", link: "Str", base: 10, factor: 6},
	{name: "Flame Control", link: "Int", base: 10, factor: 6},
	{name: "Flame Immunity", link: "Body", base: 5, factor: 4},
	{name: "Flame Project", link: "Str", base: 15, factor: 3},
	{name: "Flash", link: "Str", base: 20, factor: 4},
	{name: "Flight", link: "Dex", base: 10, factor: 3},
	{name: "Fluid Form", link: "Body", base: 75, factor: 7},
	{name: "Fog", link: "Str", base: 5, factor: 3},
	{name: "Force Field", link: "Str", base: 30, factor: 6},
	{name: "Force Manipulation", link: "Will", base: 75, factor: 10},
	{name: "Force Shield", link: "Str", base: 10, factor: 5},
	{name: "Friction Control", link: "Int", base: 25, factor: 7},
	{name: "Frostbite", link: "Str", base: 10, factor: 6},
	{name: "Full Vision", link: "Int", base: 5, factor: 1},
	{name: "Gliding", link: "Dex", base: 5, factor: 2},
	{name: "Glue", link: "Str", base: 20, factor: 4},
	{name: "Gravity Decrease", link: "Int", base: 75, factor: 4},
	{name: "Gravity Increase", link: "Int", base: 20, factor: 4},
	{name: "Growth", link: "Str", base: 35, factor: 10},
	{name: "Heat Vision", link: "Int", base: 15, factor: 3},
	{name: "Hypersensitive Touch", link: "Dex", base: 5, factor: 2},
	{name: "Hypnotism", link: "Will", base: 50, factor: 6},
	{name: "Ice Animation", link: "Aura", base: 25, factor: 8},
	{name: "Ice Control", link: "Int", base: 5, factor: 8},
	{name: "Ice Production", link: "Str", base: 20, factor: 10},
	{name: "Icing", link: "Str", base: 5, factor: 5},
	{name: "Illusion", link: "Will", base: 50, factor: 10},
	{name: "Interface", link: "Int", base: 35, factor: 6},
	{name: "Invisibility", link: "Dex", base: 45, factor: 4},
	{name: "Invulnerability", link: "Body", base: 5, factor: 7},
	{name: "Iron Will", link: "Will", base: 5, factor: 3},
	{name: "Joined", link: "Aura", base: 5, factor: 1},
	{name: "Jumping", link: "Str", base: 5, factor: 2},
	{name: "Kinetic Absorption", link: "Dex", base: 35, factor: 6},
	{name: "Knockout Gas", link: "Body", base: 20, factor: 4},
	{name: "Laser Beam", link: "Int", base: 20, factor: 3},
	{name: "Life Sense", link: "Will", base: 35, factor: 4},
	{name: "Lightning", link: "Str", base: 15, factor: 3},
	{name: "Magic Blast", link: "Aura", base: 20, factor: 3},
	{name: "Magic Field", link: "Aura", base: 20, factor: 6},
	{name: "Magic Sense", link: "Infl", base: 5, factor: 1},
	{name: "Magic Shield", link: "Aura", base: 10, factor: 5},
	{name: "Magnetic Control", link: "Will", base: 15, factor: 10},
	{name: "Matter Manipulation", link: "Int", base: 100, factor: 10},
	{name: "Mental Blast", link: "Will", base: 15, factor: 3},
	{name: "Mental Freeze", link: "Will", base: 20, factor: 5},
	{name: "Mental Illusion", link: "Will", base: 50, factor: 6},
	{name: "Metal Manipulation", link: "Will", base: 50, factor: 7},
	{name: "Microscopic Vision", link: "Int", base: 5, factor: 1},
	{name: "Mimic", link: "Dex", base: 50, factor: 10},
	{name: "Mind Blank", link: "Mind", base: 5, factor: 4},
	{name: "Mind Blast", link: "Will", base: 20, factor: 3},
	{name: "Mind Drain", link: "Will", base: 20, factor: 8},
	{name: "Mind Field", link: "Will", base: 20, factor: 6},
	{name: "Mind Over Matter", link: "Mind", base: 15, factor: 4},
	{name: "Mind Probe", link: "Will", base: 20, factor: 3},
	{name: "Mind Shield", link: "Will", base: 10, factor: 5},
	{name: "Molecular Chameleon", link: "Will", base: 75, factor: 10},
	{name: "Mutation", link: "Str", base: 200, factor: 10},
	{name: "Mystic Blast", link: "Aura", base: 25, factor: 3},
	{name: "Mystic Freeze", link: "Aura", base: 25, factor: 5},
	{name: "Neutralize", link: "Will", base: 25, factor: 4},
	{name: "Object Awareness", link: "Will", base: 20, factor: 1},
	{name: "Obscure", link: "Will", base: 5, factor: 4},
	{name: "Omni-Arm", link: "Str", base: 10, factor: 5},
	{name: "Omni-Power", link: "Special", base: 500, factor: 10},
	{name: "Paralysis", link: "Str", base: 15, factor: 3},
	{name: "Personality Transfer", link: "Will", base: 30, factor: 8},
	{name: "Petrification", link: "Dex", base: 20, factor: 8},
	{name: "Phobia", link: "Will", base: 15, factor: 4},
	{name: "Plant Control", link: "Will", base: 20, factor: 6},
	{name: "Plant Growth", link: "Will", base: 10, factor: 5},
	{name: "Poison Touch", link: "Str", base: 30, factor: 3},
	{name: "Postcognition", link: "Int", base: 15, factor: 2},
	{name: "Power Drain", link: "Will", base: 40, factor: 9},
	{name: "Power Reserve", link: "Will", base: 150, factor: 10},
	{name: "Precognition", link: "Will", base: 75, factor: 3},
	{name: "Probability Control", link: "Infl", base: 300, factor: 9},
	{name: "Projectile Weapons", link: "Str", base: 15, factor: 2},
	{name: "Pyrotechnics", link: "Will", base: 15, factor: 3},
	{name: "Radar Sense", link: "Int", base: 5, factor: 1},
	{name: "Radio Communication", link: "Int", base: 10, factor: 3},
	{name: "Recall", link: "Mind", base: 5, factor: 1},
	{name: "Reflection/Deflection", link: "Will", base: 40, factor: 5},
	{name: "Regeneration", link: "Will", base: 25, factor: 8},
	{name: "Remote Sensing", link: "Int", base: 35, factor: 4},
	{name: "Running", link: "Dex", base: 0, factor: 2},
	{name: "Scramble", link: "Will", base: 50, factor: 5},
	{name: "Sealed Systems", link: "Body", base: 5, factor: 5},
	{name: "Self Manipulation", link: "Dex", base: 75, factor: 10},
	{name: "Sensory Block", link: "Will", base: 30, factor: 7},
	{name: "Shade", link: "Body", base: 5, factor: 4},
	{name: "Shape Change", link: "Will", base: 35, factor: 10},
	{name: "Shouting", link: "Will", base: 10, factor: 3},
	{name: "Shrinking", link: "Str", base: 15, factor: 5},
	{name: "Skin Armor", link: "Body", base: 50, factor: 5},
	{name: "Sleep", link: "Will", base: 10, factor: 4},
	{name: "Snare", link: "Str", base: 20, factor: 3},
	{name: "Solar Sustenance", link: "Body", base: 5, factor: 1},
	{name: "Sonar", link: "Int", base: 10, factor: 2},
	{name: "Sonic Beam", link: "Str", base: 15, factor: 4},
	{name: "Sorcery", link: "Aura", base: 750, factor: 10},
	{name: "Sound Nullify", link: "Aura", base: 5, factor: 6},
	{name: "Speak With Animals", link: "Int", base: 5, factor: 2},
	{name: "Speak With Plants", link: "Int", base: 25, factor: 5},
	{name: "Spirit Travel", link: "Will", base: 10, factor: 4},
	{name: "Spiritual Drain", link: "Aura", base: 15, factor: 8},
	{name: "Split", link: "Dex", base: 50, factor: 10},
	{name: "Stretching", link: "Dex", base: 10, factor: 6},
	{name: "Super Breath", link: "Str", base: 10, factor: 4},
	{name: "Super Hearing", link: "Int", base: 5, factor: 1},
	{name: "Superspeed", link: "Dex", base: 25, factor: 8},
	{name: "Super Ventriloquism", link: "Int", base: 5, factor: 2},
	{name: "Suspension", link: "Will", base: 5, factor: 1},
	{name: "Swimming", link: "Str", base: 5, factor: 2},
	{name: "Systemic Antidote", link: "Body", base: 5, factor: 4},
	{name: "Telekinesis", link: "Will", base: 15, factor: 6},
	{name: "Telepathy", link: "Int", base: 20, factor: 4},
	{name: "Teleportation", link: "Will", base: 50, factor: 4},
	{name: "Telescopic Vision", link: "Int", base: 5, factor: 1},
	{name: "Thermal Vision", link: "Int", base: 5, factor: 1},
	{name: "Time Control", link: "Will", base: 250, factor: 10},
	{name: "Time Stop", link: "Will", base: 25, factor: 8},
	{name: "Time Travel", link: "Will", base: 500, factor: 4},
	{name: "Transform", link: "Will", base: 35, factor: 10},
	{name: "Transmutation", link: "Aura", base: 15, factor: 8},
	{name: "Truesight", link: "Will", base: 5, factor: 3},
	{name: "Two-Dimensional", link: "Dex", base: 75, factor: 6},
	{name: "Ultra Vision", link: "Int", base: 10, factor: 1},
	{name: "Vampirism", link: "Aura", base: 35, factor: 9},
	{name: "Vibe", link: "Str", base: 20, factor: 4},
	{name: "Voodoo", link: "Aura", base: 20, factor: 3},
	{name: "Warp", link: "Will", base: 100, factor: 5},
	{name: "Water Animation", link: "Aura", base: 25, factor: 8},
	{name: "Water Control", link: "Int", base: 35, factor: 8},
	{name: "Water Freedom", link: "Dex", base: 5, factor: 3},
	{name: "Weather Control", link: "Int", base: 15, factor: 8},
	{name: "X-Ray Vision", link: "Int", base: 15, factor: 3}
  ],
  attrs: [
    {name: 'Dex', factor: 7},
    {name: 'Str', factor: 6},
    {name: 'Bod', factor: 6},
    {name: 'Int', factor: 7},
    {name: 'Wil', factor: 6},
    {name: 'Min', factor: 6},
    {name: 'Inf', factor: 7},
    {name: 'Aur', factor: 6},
    {name: 'Spi', factor: 6}
    ],
  skills: [
		{name: "Acrobatics", link: "Dex", base: 15, factor: 7},
		{name: "Animal Handling", link: "Infl", base: 5, factor: 4},
		{name: "Artist", link: "Infl", base: 5, factor: 8},
		{name: "Charisma", link: "Infl", base: 20, factor: 6},
		{name: "Detective", link: "Int", base: 10, factor: 7},
		{name: "Gadgetry", link: "Int", base: 25, factor: 8},
		{name: "Martial Artist", link: "Dex", base: 25, factor: 6},
		{name: "Medicine", link: "Int", base: 5, factor: 6},
		{name: "Military Science", link: "Int", base: 10, factor: 8},
		{name: "Occultist", link: "Infl", base: 20, factor: 9},
		{name: "Scientist", link: "Int", base: 10, factor: 5},
		{name: "Thief", link: "Dex", base: 10, factor: 8},
		{name: "Vehicles", link: "Dex", base: 5, factor: 5},
		{name: "Weaponry", link: "Dex", base: 5, factor: 6}
	]
};

config = [];
params = $.url().param();
if (typeof params.maxattraps == 'undefined') {
	var maxattraps = 9;
} else {
	var maxattraps = parseInt(params.maxattraps);
	if (typeof maxattraps == 'number') {
		maxattraps = maxattraps - 1;
	} else {
		maxattraps = 9;
	}
}
config.push(maxattraps);

if (typeof params.maxpoweraps == 'undefined') {
	var maxpoweraps = 9;
} else {
	var maxpoweraps = parseInt(params.maxpoweraps);
	if (typeof maxpoweraps == 'number') {
		maxpoweraps = maxpoweraps - 1;
	}	else {
		maxpoweraps = 9;
	}
}
config.push(maxpoweraps);

if (typeof params.maxpowers == 'undefined') {
	var maxpowers = 9;
} else {
	var maxpowers = parseInt(params.maxpowers);
	if (typeof maxpowers == 'number') {
		maxpowers = maxpowers - 1;
	} else {
		maxpowers = 9;
	}
}
config.push(maxpowers);

if (typeof params.maxskillaps == 'undefined') {
	var maxskillaps = 9;
} else {
	var maxskillaps = parseInt(params.maxskillaps);
	if (typeof maxskillaps == 'number') {
		maxskillaps = maxskillaps - 1;
	}	else {
		maxskillaps = 9;
	}
}
config.push(maxskillaps);

if (typeof params.maxskills == 'undefined') {
	var maxskills = 4;
} else {
	var maxskills = parseInt(params.maxskills);
	if (typeof maxskills == 'number') {
		maxskills = maxskills - 1;
	} else {
		maxskills = 4;
	}
}
config.push(maxskills);

$(document).ready(function(){
  $('#datafile').html(buildcharacter());
});

function buildcharacter() {
  var totalcost = 0;
  var html = '';

  html += '<h3>Attributes</h3>';

  html += '<table>';

  for (i = 0; i < data.attrs.length; i++) {
    if (i == 0 || i == 3 || i == 6) {
        html += '<tr>';
    }
    attr = data.attrs[i];
    aps = Math.ceil(Math.random() * maxattraps) + 1;
    var attrcost = data.costbyfactor[attr.factor][aps - 1]
    var totalcost = totalcost + attrcost;
    html += '<td>' + attr.name + ': ' + aps + '</td>';
    if (attr == 2 || attr == 5 || attr == 8) {
        html += '</tr>';
    }
  }
  html += '</table>';


  html += '<h3>Powers</h3>';
  html += '<ul>';
  
  var numpowers = Math.ceil(Math.random() * maxpowers) + 1;
  var powerlist = [];
  while (powerlist.length < numpowers) {
    powerroll = Math.ceil(Math.random() * data.powers.length);
    powerlist.push(powerroll);
    powerlist = dedupe(powerlist);
  }

  for (i = 0; i < powerlist.length; i++) {
    var power = jQuery.extend({}, data.powers[powerlist[i] - 1]);
    var aps = Math.ceil(Math.random() * maxpoweraps) + 1;
    var powercost = power.base + data.costbyfactor[power.factor][aps - 1]
    var totalcost = totalcost + powercost;
    html += '<li>' + power.name + ': ' + aps + '</li>';
    // debug cost
    // html += '<li>' + power.name + ': ' + aps + ' (Cost: base ' + power.base + ' + (factor ' + power.factor + ' at ' + aps + ' APs = ' + data.costbyfactor[power.factor][aps - 1] + ') = ' + powercost + ')</li>';
  }

  html += '</ul>';

  html += '<h3>Skills</h3>';
  html += '<ul>';
  
  var numskills = Math.ceil(Math.random() * maxskills) + 1;
  var skilllist = [];
  while (skilllist.length < numskills) {
    skillroll = Math.ceil(Math.random() * data.skills.length);
    skilllist.push(skillroll);
    skilllist = dedupe(skilllist);
  }

  for (i = 0; i < skilllist.length; i++) {
    var skill = jQuery.extend({}, data.skills[skilllist[i] - 1]);
    var aps = Math.ceil(Math.random() * maxskillaps) + 1;
    var skillcost = skill.base + data.costbyfactor[skill.factor][aps - 1]
    var totalcost = totalcost + skillcost;
    html += '<li>' + skill.name + ': ' + aps + '</li>';
    // debug cost
    // html += '<li>' + skill.name + ': ' + aps + ' (Cost: base ' + skill.base + ' + (factor ' + skill.factor + ' at ' + aps + ' APs = ' + data.costbyfactor[skill.factor][aps - 1] + ') = ' + skillcost + ')</li>';
  }

  html += '</ul>';

  html += '<p>Total Cost: ' + totalcost + '</p>';

  return html;
}

function dedupe(a) {
    var u = {};
    var a2 = [];
    for (v in a) {
        if (!u[a[v]] ) {
            u[a[v]] = true;
            a2.push(a[v]);
        }
    };
    return a2;
}


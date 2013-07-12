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
  attrs: [
  {name: 'Dex', type: 'Physical', factor: 7},
  {name: 'Str', type: 'Physical', factor: 6},
  {name: 'Bod', type: 'Physical', factor: 6},
  {name: 'Int', type: 'Mental', factor: 7},
  {name: 'Wil', type: 'Mental', factor: 6},
  {name: 'Min', type: 'Mental', factor: 6},
  {name: 'Inf', type: 'Spiritual', factor: 7},
  {name: 'Aur', type: 'Spiritual', factor: 6},
  {name: 'Spi', type: 'Spiritual', factor: 6}
  ],
};

$.ajax({
	url: "./api/powers/get",
	type: "get",
	success: function(powers){
		data['powers'] = powers
	}
});

$.ajax({
	url: "./api/skills/get",
	type: "get",
	success: function(skills){
		data['skills'] = skills
	}
});

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
  } else {
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
	var totalcost = 0;
	var charsheet = $('#charsheet');

	charsheet.append('<h3>Attributes</h3>');
	table = $('<table id="attrs">');
	charsheet.append(table);

	var myattrs = {};
	for (i = 0; i < data.attrs.length; i++) {
		var attr = data.attrs[i];
		if (i == 0 || i == 3 || i == 6) {
			var row = $('<tr id="' + attr.type + '">');
			table.append(row);
		}
		console.log(row);
		var thisattraps = Math.ceil(Math.random() * maxattraps) + 1;
		var thisattrname = attr.name;
		myattrs[thisattrname] = thisattraps;
		var attrcost = data.costbyfactor[attr.factor][thisattraps - 1]
		var totalcost = totalcost + attrcost;
		row.append('<td>' + attr.name + ': ' + thisattraps + '</td>');
  }

	powersection = $('<div id="powers">');
	charsheet.append(powersection);
	powersection.append('<h3>Powers</h3>');
	powerlist = $('<ul id="powerlist">');
	powersection.append(powerlist);
  
	var numpowers = Math.ceil(Math.random() * maxpowers) + 1;
	var powerrolls = [];
	while (powerrolls.length < numpowers) {
		powerroll = Math.ceil(Math.random() * data.powers.length);
		powerrolls.push(powerroll);
		powerrolls = dedupe(powerrolls);
	}

	for (i = 0; i < powerrolls.length; i++) {
		var power = jQuery.extend({}, data.powers[powerrolls[i] - 1]);
		var islinked = Math.ceil(Math.random() * 10)
		if (islinked == 1) {
			powerlink = power.link
			var aps = myattrs[powerlink];
			power.factor = power.factor - 2;
			if (power.factor < 1) {
				power.factor = 1;
			};
			power.name = power.name + '*';
		} else {
			var aps = Math.ceil(Math.random() * maxpoweraps) + 1;
		};
		var powercost = power.base + data.costbyfactor[power.factor][aps - 1]
		var totalcost = totalcost + powercost;
		powerlist.append('<li>' + power.name + ': ' + aps + '</li>');
		// debug cost
		// powerlist.append('<li>' + power.name + ': ' + aps + ' (Cost: base ' + power.base + ' + (factor ' + power.factor + ' at ' + aps + ' APs = ' + data.costbyfactor[power.factor][aps - 1] + ') = ' + powercost + ')</li>');
	}

	skillsection = $('<div id="skills">');
	charsheet.append(skillsection);
	skillsection.append('<h3>Skills</h3>');
	skillslist = $('<ul id="skillslist">');
	skillsection.append(skillslist);
  
	var numskills = Math.ceil(Math.random() * maxskills) + 1;
	var skillrolls = [];
	while (skillrolls.length < numskills) {
		skillroll = Math.ceil(Math.random() * data.skills.length);
		skillrolls.push(skillroll);
		skillrolls = dedupe(skillrolls);
	}

	for (i = 0; i < skillrolls.length; i++) {
		var skill = jQuery.extend({}, data.skills[skillrolls[i] - 1]);
		var islinked = Math.ceil(Math.random() * 10)
		if (islinked <= 3) {
			skilllink = skill.link
			var aps = myattrs[skilllink];
			skill.factor = skill.factor - 2;
			if (skill.factor < 1) {
				skill.factor = 1;
			};
			skill.name = skill.name + '*';
		} else {
			var aps = Math.ceil(Math.random() * maxskillaps) + 1;
		};
		var skillcost = skill.base + data.costbyfactor[skill.factor][aps - 1]
		var totalcost = totalcost + skillcost;
		skillslist.append('<li>' + skill.name + ': ' + aps + '</li>');
		// debug cost
		// skillslist.append('<li>' + skill.name + ': ' + aps + ' (Cost: base ' + skill.base + ' + (factor ' + skill.factor + ' at ' + aps + ' APs = ' + data.costbyfactor[skill.factor][aps - 1] + ') = ' + skillcost + ')</li>');
	}

	costsection = $('<div id="costs">');
	charsheet.append(costsection);
	costsection.append('<p>Total Cost: ' + totalcost + '</p>');

});

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


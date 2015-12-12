var app = angular.module('DRApp', []).directive('ngdrapp', function() {

	return {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ROUTES CONTROLLER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		controllerAs: 'drapp',
		controller: ['$http', function charsCtrl($http) {
			this.$http = $http;

			var self = this;
			self.chars = [];

			self.dystopia = [];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VIEW ALL STRAINS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			this.getDystopia = function() {
				console.log('getting all strains');

				// ajax get request to /dystopia - from dr_app.js API
				self.$http.get('/dystopia').then(function(response) {
					self.dystopia = response.data;
				});

			};

			self.getDystopia()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VIEW ALL CHARACTERs /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			this.getChars = function() {
				console.log('getting all chars');
				// ajax get request to /chars
				self.$http.get('/chars').then(function(response) {
					self.chars = response.data;
				});

				return self.chars;

			};

			self.getChars()


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHARACTER ROUTES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ADD CHARACTER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			this.addChar = function() {
				self.$http.post('/chars', {name: this.formCharName, strain: this.formCharStrain, backstory: this.formCharBackstory, imgurl: this.formCharimgURL}).then(function success(response) {
					self.chars.push(response.data);
					self.formCharName = '';
					self.formCharimgURL = '';
					self.formCharBackstory = '';

				}, function error() {
					console.log('error');
				});
			}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EDIT CHARACTER //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			this.populateForm = function(char) {
// POPULATE FORM =====================================//
				self.formCharId = char._id;
				self.formCharName = char.name;
				self.formCharStrain = char.strain;
				self.formCharBackstory = char.backstory;
				self.formCharimgURL = char.imgURL;

			};

// THEN SAVE CHARACTER ================================//
			this.editChar = function() {
				var id = this.formCharId;
				self.$http.put('/chars/' + id, {name: this.formCharName, strain: this.formCharStrain, backstory: this.formCharBackstory, imgurl: this.formCharimgURL }).then(function success (response) {
					console.log(response);
					self.getChars();

// EMPTY FORM ========================================//
					self.formCharId = '';
					self.formCharName = '';
					self.formCharBackstory = '';
					self.formCharimgURL = '';
				}, function error() {
					console.log('error');
				});
			}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DELETE CHARACTER ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

			this.deleteChar = function(char) {
				// Now that it's populated
				var id = char._id;
				self.$http.delete('/chars/' + id).then(function success (response) {
					console.log(response);
					self.getChars();
				}, function error() {
					console.log('error');
				});
			}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHARACTER BUILDER LOGIC /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var buildSkillList = []

// choose Strain ====================>
this.addStrain = function(strain){

	var strainName =  strain.name,
			mind = strain.mind,
			health = strain.health,
			infection = strain.infection;

	strain.self_teach.forEach(function(skill){
		buildSkillList.push(skill)
	});

	console.log("addStrain chose: " + strainName);
}

// Choose Profession ====================>
this.addProfession = function(prof){
	var profName = prof.name

	prof.skill_list.forEach(function(skill){
		var profSkill = { name: skill.name, cost: skill.cost}
		buildSkillList.push(profSkill)
	});

	console.log("addProf chose: " + profName);
	console.log("after addProf skill list: ");
	buildSkillList.forEach(function(skill){
		console.log(skill.name);
	});

}

// Final build ====================>
this.buildChar = function(strainName){

console.log("this.buildChar - building a character!");

	var built = {
		name: '',
		strain: strainName,
		mind: '',
		health: '',
		infection: '',
		profession: [],
		skills: [],
		adv: '',
		dis: [],
		imgurl: '',
		backstory: ''
	}
	console.log(built);
}


		}] // close drapp controller

	} // close return object

}) // close ngdrapp directive






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CUSTOM ANGULAR FILTERS //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.filter('unsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});

app.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});

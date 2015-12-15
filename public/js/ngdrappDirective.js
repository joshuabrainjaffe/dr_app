app.directive('ngdrapp', function() {

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
// VIEW DR API /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHARACTER ROUTES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHARACTER BUILDER LOGIC /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

			var buildPoints = 13,
					buildSkillList = [],
					finalSkillList = [],
					addedSkillsList = [],
					mind = 0,
					health = 0,
					infection = 0;

			this.buildPoints = buildPoints
			this.finalSkillList = finalSkillList
			this.addedSkillsList = addedSkillsList

			// choose Strain ====================>
			this.addStrain = function(strain){

				var strainName =  strain.name,
						mind = strain.mind,
						health = strain.health,
						infection = strain.infection;
						adv = strain.adv;
						dis = strain.dis;

				strain.self_teach.forEach(function(skill){
					buildSkillList.push(skill)
				});

				this.strainName = strainName;
				this.mind = mind;
				this.health = health;
				this.infection = infection;
				this.adv = adv;
				this.dis = dis;

				skillCount = 0
				console.log("Final skill list");
				buildSkillList.forEach(function(skill){
					skillCount++
					console.log(skillCount + " " + skill.name);
				})

				console.log("addStrain chose: " + strainName);
			}

			// Choose Profession ====================>

			this.addProfession = function(prof){

				var profName = prof.name;

				this.profName = profName;

				var self = this;

				console.log("addProf chose: " + profName);

				prof.skill_list.forEach(function(skill){
					var profSkill = { name: skill.name, cost: skill.cost}

					buildSkillList.push(profSkill);

				});

				console.log("CHOOSE SKILLS");

				this.$http.get('/dystopia').then(function(dystopia){

					var dystopia = dystopia.data;

					dystopia.open_skills.forEach(function(os){
							buildSkillList.push(os);
					});

					buildSkillList.forEach(function(buildskill){

						dystopia.skills.forEach(function(allskill){

							if( buildskill.name === allskill.name){

								self.finalSkillList.push(
									{ name: buildskill.name,
										cost: buildskill.cost,
										mp: allskill.mp,
										desc: allskill.desc
								 })

							} // if

						}); //dystopia.skills.forEach

					}); //buildSkillList.forEach

					skillCount = 0
					console.log("Final skill list");
					finalSkillList.forEach(function(skill){
						skillCount++
						console.log(skillCount + " " + skill.name);
					})

				}); //.get

			} //addProf


			// Add Skills ========================>

			this.addSkill = function(skill){

				if(buildPoints - skill.cost >= 0){
					buildPoints = buildPoints - skill.cost;
					this.buildPoints = buildPoints
					console.log(buildPoints);

					addedSkillsList.push(skill);
					console.log(addedSkillsList);
				}
				else if(buildPoints - skill.cost <= 0) {
					alert("You do not have enough build left for this skill")
				}

			}

			this.removeSkill = function(skill){

				buildPoints = buildPoints + skill.cost;
				this.buildPoints = buildPoints
				console.log(buildPoints);

				addedSkillsList.pop(skill);
				finalSkillList.push(skill);
				console.log(addedSkillsList);

			}
			// Change stats ========================>

			this.addMind = function(){
				if(this.buildPoints > 0){
					this.mind = this.mind + 1
					this.buildPoints = this.buildPoints -1
					console.log(this.mind);
				}
				else if(this.buildPoints <= 0) {
					alert("You do not have enough build left to add any more mind")
				}
			}

			this.subtractMind = function(){
				this.mind = this.mind - 1
				this.buildPoints = this.buildPoints + 1
				console.log(this.mind);
			}

			this.addHealth = function(){
				if(this.buildPoints > 0){
					this.health = this.health + 1
					this.buildPoints = this.buildPoints -1
					console.log(this.health);
				}
				else if(this.buildPoints <= 0) {
					alert("You do not have enough build left to add any more health")
				}
			}

			this.subtractHealth = function(){
				this.health = this.health - 1
				this.buildPoints = this.buildPoints + 1
				console.log(this.health);
			}

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
// ADD CHARACTER ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			this.addChar = function() {
				self.$http.post('/chars', {
					name: this.formCharName,
					strain: this.strainName,
					mind: this.mind,
					health: this.health,
					infection: this.infection,
					profession: this.profName,
					skills: this.addedSkillsList,
					adv: this.adv,
					dis: this.dis,
					imgurl: this.formCharimgURL,
					backstory: this.formCharBackstory,
				})

// EMPTY FORM ========================================//
				.then(function success(response) {
					self.chars.push(response.data);
					self.formCharName = '';
					self.formCharStrain = '';
					this.mind = 0;
					this.health = 0;
					this.infection = 0;
					this.profName = '';
					this.addedSkillsList = [];
					this.adv = '';
					this.dis = [];
					buildPoints = 13;
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
				self.formCharBackstory = char.backstory;
				self.formCharimgURL = char.imgURL;

			};

// THEN SAVE CHARACTER ================================//
			this.editChar = function() {
				var id = this.formCharId;
				self.$http.put('/chars/' + id, {
					name: this.formCharName,
					strain: this.strainName,
					mind: this.mind,
					health: this.health,
					infection: this.infection,
					profession: this.profName,
					skills: this.addedSkillsList,
					adv: this.adv,
					dis: this.dis,
					imgurl: this.formCharimgURL,
					backstory: this.formCharBackstory,
				}).then(function success (response) {
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

		}] // close drapp controller

	} // close return object

}) // close ngdrapp directive

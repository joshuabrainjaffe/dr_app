module.exports = {
  strains:[
    {
      name: 'Diesel Jock',
      health: 10,
      mind: 10,
      infection: 3,
      img:'/images/strains/dieseljock.png',
      self_teach:[
        {
        name: 'Bolt-Action',
        cost: 3
        },
        {
        name: 'Brawling',
        cost: 3
        },
        {
        name: 'Melee Weapon, Large',
        cost: 3
        },
        {
        name: 'Melee Weapon, Two-Handed',
        cost: 3
        },
        {
        name: 'Throwing',
        cost: 3
        },
        {
        name: 'Throwing, Javelins',
        cost: 3
        }
      ],
      adv:
        {
        name: 'Need of Food',
        desc: "While the Trade Ties skill traditionally only allows Scrap to be traded for Herb, with the circles that Diesel Jocks travel in it is easier to trade Herbs for Scrap. At check in, a Diesel Jock may use the Trade Ties skill (if they have it) to trade Herb to Scrap at the same levels and restrictions as normally can be traded Scrap for Herb. Use of this Skill requires the Diesel Jock to have access to their own crafted land vehicle, or, pay 5 Herbs per Scrap of the same level, the additional difference required to ‘bribe other Diesel Jocks’ to hitch a ride to swap meets."
        },
      dis:[
        {
        name: 'Road Bound',
        desc: "Due to their constantly moving nature, Diesel Jocks have a difficult time investing in locations long enough to generate a profit.  In the instance that a Diesel Jock takes the skill Income, they will receive finances equal to two levels LESS than what they currently have.  (Level 1 produces zero, Level 2 produces zero, Level 3 produces 1, Level 4 produces 3, Level 5 produces 6)"
        },
        {
        name: 'Endless Miles of Road',
        desc: "Diesel Jocks have a unique culture that sets aside many things that you find in ‘civilized communities’.  Due to this lifestyle to the road Diesel Jocks are banned from ever having the professions Farmer, Politician, or Publican."
        }
      ],
      restricted_profs:['Farmer', 'Politician', 'Publican'],
      desc: "The society of the Diesel Jock is one of daredevil speed freaks, ruthless nomads, and itinerant tribal communities who have taken the Rules of the Road as the scriptures for their life.  Focused on survival, family, and remaining on the move, it is not surprising that many Diesel Jock clans have concentrated on supply trading, gun running, mercenary protection rackets, and even highway robbery.  Life within the Diesel Jock community focuses on the creation, care, and preservation of the vehicles and the individual, in that order.<br><br>With life on the road being what it is, Diesel Jock youth are trained in the repair and care of the Rides often before they learn to read or fight.  Children younger than ten know how to bend Scrap and twist metal to replicate simple combustion engine pieces, and by the time a child is knee high to a moped they know how to operate a basic Forge for engine design and drive shaft production.  Once a child is old enough to test for their rites of adulthood, they are brought to their tribe's ancestral Scrap yards. The child will be provided food and drink, but is expected to craft their own tools and forge from the Scraps so that they may build their own Ride.<br><br>Diesel Jocks aren’t as warm and friendly as their Rover cousins. They can be mean, violent, and fiercely insular, but they’re also fanatically loyal and share the ideal of “my word is my bond” with their traveling counterparts. Anyone who crosses a Diesel Jock had better be prepared to deal with the whole clan. However, they can also be incredibly cold and cruel. Every Diesel Jock has a story of leaving behind a beloved clan member who had lost his or her Ride, likely to die alone in the Ruined Earth. It’s not cruel; it’s a sad necessity of life in the clan.<br><br>The vehicle (called a Ride) is the central element of a Diesel Jock’s life. When a young clan member reaches twelve years of age, he or she is presented with a working engine and taken to the “Sacred Scrapyards,” one of a dozen fiercely protected sites in the Southwest that is an endless junkyard of car parts. (The location of these yards is guarded from other scavengers and looters on pain of death.) It is expected that in the yard the child will find a vehicle in which they might install the engine or simply create a new vehicle piecemeal. When the child emerges with the new vehicle, there’s a huge feast and party in the child's honor. The new Ride is christened with a name and the owner presented with gifts of parts and decor from other prominent vehicles in the clan.<br><br>Of course, not all Diesel Jocks can drive. Those who are excused from driving duties include children, the elderly, pregnant women, and those who have been injured in defense of the Clan. These passengers usually ride in a heavily armored van, bus or modified trolleycar. It is considered a great honor to drive the passengers, a task usually reserved for the matriarch or patriarch of a clan. The rite of passage called “Moving to the Back of the Bus” is reserved for the oldest and wisest of the Clan. What few survive to an advanced age are presented with a ceremonial map and a pair of glasses, and guide the clan as a Backseat Driver.",
      req: "Diesel Jocks are often adorned with weapons, armor, and equipment refitted from unfixable components of their rides.  They use broken drive shafts as weapons, sections of stripped metal as armor, and broken motor parts as jewelry.  Diesel Jocks dress in more savage clothing than their civilized Rover cousins, wearing slapped together metal armor and leathers designed to protect and intimidate would be bandits or raiders.  On the road the average Diesel Jock could be visually mistaken for a Raider at a glance. Diesel Jocks adorn themselves with banded line tattoos that cover their hands and forearms.  Each ring represents a full ‘road rally’ completed around the wastelands- a multiple year trip that starts and ends in the same destination.  These road rallies take years to complete.<br<br>Diesel Jocks never bring their vehicles into settlements, instead keeping their rides hidden at least a day’s walk outside of town.",
    },
    {
      name: 'Merican',
      health: 13,
      mind: 10,
      infection: 2,
      img:'/images/strains/merican.png',
      self_teach:[
        {
        name: 'Balance',
        cost: 3
        },
        {
        name: 'Bolt-Action',
        cost: 3
        },
        {
        name: 'Forging The Future',
        cost: 3
        },
        {
        name: 'Patchjob',
        cost: 3
        },
        {
        name: 'Trade Ties',
        cost: 3
        },
        {
        name: 'Melee Weapon, Standard',
        cost: 3
        }
      ],
      adv:
        {
        name: 'Merican Mob',
        desc: "Mericans have a tendency to celebrate in unruly numbers. Mericans gathered in celebration may regain 10 Health Points per half hour of celebration as long as five Mericans are part of the celebration and each has consumed at least one brewed item (requires Brew card)."
        },
      dis:[
        {
        name: 'Social Pariah',
        desc: "Mericans can never tell when they are interrupting or intruding on a private social situation, unless it is specifically pointed out to them. This does not mean they are deliberately rude –though they certainly can be!– just that they have no natural ability to tell when they’re not wanted, at least not until they’re told. Thus even well-intentioned Mericans often find themselves offending others by offering advice when none is desired, approaching people who obviously want to be left alone, or speaking up at a gathering where they’re clearly an outsider."
        },
        {
        name: 'Yeeeee-Haaaaaw!',
        desc: "Lacking subtlety, Mericans can never have the professions of Martial Artist or Spy."
        }
      ],
      restricted_profs:['Martial Artist', 'Spy'],
      desc: "Many things were destroyed when the world broke apart. Society, culture, and education fell to pieces. As a rule, only those who were strong, smart, and lucky were able to adapt and move forward after the fall of society. However, some folks were just too damned stubborn to die.<br><br>When the apocalypse happened, some people were so pigheaded about giving up how their life was that they outright refused. Not willing to give up their homes, their beer, and their sports teams, these people dug in and took the apocalypse on the chin. Stalwart or not, the apocalypse killed the vast majority of these stubborn people; however, some survived by sheer dumb luck and dogged determination.<br><br>Holding on to values handed down by that first determined generation, a pride in a country that doesn’t exist anymore, and buckets of gumption, the Mericans were forged. Not the best educated of people, and without a doubt not the most spiritually minded, this well-meaning Strain nevertheless views itself as the bastion of hope for the future. Shotgun in one hand, a beer in the other, and an eye on the neighbor’s daughter, the Mericans look to redefine their fallen nation.<br><br>While stronger and built tougher than most Strains, the Mericans have an issue in regards to the zombie virus. Many scientists believe that sometime in this Strain's history there was a failed anti-virus called “high fructose corn syrup”. This substance, as well as the many other strange chemicals in a Merican’s body, results in most Mericans succumbing to the virus and joining the undead faster than other Strains. Merican zombies never progress beyond the incubation phase of the infection process, and the widespread Merican culture explains the sheer number of zombies in the shambling horde.<br><br>Mericans come from all over what was considered the pre-Fall American continent. While heartland Mericans lean towards the tradition of cowboy hats and quick guns, it is not uncommon for far south Mericans to be confused with Natural Ones. To the north, Mericans tend to lean more towards hearty jobs like being a lumberjack while on the eastern and western coasts the Merican is often found working hard in foundries and forges.",
      req: "MERICA! Love it or get run down. Merican men and women love blue jeans, cowboy hats, ironic t-shirts (whether or not they get it), tall boots, big belt buckles, and gun belts with lots of firearms. Social animals in every sense of the term, Mericans are never more than a few paces from a bottle or someone attractive to share it with. They have a natural distrust of authority, especially if it isn’t another Merican in charge, and tend to mock anyone in elegant or fancy attire, accusing them of “puttin’ on airs” and such. Well, most fancy attire with the noted exception of hats. All Mericans respect a properly impressive hat, though they will often bother other strains about “getting it right” by adding eagle feathers, playing cards, bullets, written slogans, ironic buttons and other outlandish and showy adornments.<br><br>Mericans collect souvenirs from places they have visited, love to engage in drinking and athletic contests, and seem incapable of realizing when they have gone too far. While mistaking their conversational volume for stupidity is often a fatal error – genuine idiots don’t tend to last long in this ravaged world – it is true that Mericans are loud, always think they have a great idea, and in the end look out for number one.",
    },
    {
      name: 'Red Star',
      health:6,
      mind:6,
      infection:6,
      img:"./images/strains/redstar.png",
      self_teach:[
        {
        name: 'Avoid',
        cost: 3
        },
        {
        name: 'Barricade',
        cost: 3
        },
        {
        name: 'Bomb Awareness',
        cost: 3
        },
        {
        name: 'Brewing',
        cost: 3
        },
        {
        name: 'Fearful Glare',
        cost: 3
        },
        {
        name: 'Frightening Force',
        cost: 3
        },
        {
        name: 'Melee Weapon, Large',
        cost: 3
        }
      ],
      adv:
        {
        name: 'Collective Pride',
        desc: "Members of the Red Star cells are deeply linked to one another, and that loyalty has strength. No effects can ever force a member of the Red Star to attack or betray their fellow Red Star, not even zombification."
        },
      dis:[
        {
        name: 'Reject Free Enterprise',
        desc: "Reds do not believe in capitalist systems and as a result reject the symbols of the capitalist free market. Red Star may not possess nor accept any forms of currency (credits, gems, marks, etc.) nor willingly partake in the capitalist free market."
        },
        {
        name: 'Opiate of the Masses',
        desc: "Reds can never follow any faith or religion, nor can they ever have the following professions: Caravan Driver, Charlatan, Entertainer, Gambler, or Priest. In addition, Red Star may never receive the benefits of faith powered Skills (Call the All Mighty, Faith Healing, Holy Rites, Live Again, Life Giver)."
        }
      ],
      restricted_profs:['Caravan Drive', 'Charlatan', 'Entertainer', 'Gambler', 'Priest'],
      desc: "When order was needed and resources became scarce, those that lived in communities accustomed to limited rations and sharing among smaller groups were already well adapted for survival. The most cut-throat and efficient communities were able to thrive, keeping properties tightly held within the group while those that opened their door to outsiders often fell. Localized communism, and tightly knit communities, exist all across the fallen wastelands.<br><br>Red Star travel in small groups that are tighter than the standard family structure. Every member of a Red Star family structure is not only considered equal, but they are also considered part of a polygamist commune. Children are raised by the cell until the time at which they are considered adults, and are expected to travel from the commune to join or begin another. Sometimes “trades” are made where family members move between cells in order to ensure suitable breeding stock is maintained.<br><br>Those of the Red Star are at heart a martial people, focusing on the pragmatic needs of their cell instead of succumbing to temptation and escapism. They are often considered grim or somber to outsiders, with men and women both displaying an external strength and a demeanor of cold logic. With their eerie harmony, dour attitudes and striking appearance, a cell of Reds always makes an impression wherever they travel.<br><br>Found in the remains of Westernized communes, rural centralized communities, or in the frozen wastelands the Red Star are a culturally varied people. While the Red Star embrace unity, togetherness, and the abandonment of the capitalist system, it is not completely unheard of for Red Star to allow non-Red Star to serve their communes. These non-Red Star, while not completely equal, are considered useful tools and allies in ensuring the growth and strength of the individual cell.",
      req: "Those born of the Red Star are as deadly as the reaping scythe and as hard as the hammer that crosses it. They prefer dark, modest clothes that do not show much skin or accent their figure, almost exclusively in red and black. (Military olive drab sometimes appears when large amounts of black would be impractical, such as hot summer months.) Those of the Red Star tend to speak very directly and expect the same honesty in return, giving them a reputation as a stern, humorless people. In truth, away from the eyes of outsiders they can be as warm and effusive as any other Strain, but only to other Red Star.<br><br>Red Star live in small communes, sharing all property with their cell members and reaching decisions as a group. Individual leaders are chosen only when absolutely necessary, and are expected to step down once the current crisis passes. Red Star do not believe in independent marriage, and instead are considered collectively “wed” to all other eligible members of their cell. This is not a hedonistic arrangement, but simple practicality – Red Star see the jealousy and interpersonal rivalries that accompany exclusive romantic relationships as poisonous to the overall solidarity of the cell. Red Star do not follow these guidelines out of choice, but instead are a requirement of every Red Star.",
    }
  ],
  open_skills:[
    {
    name: 'Avoid',
    cost: 9
    },
    {
    name: 'Barricade',
    cost: 9
    },
    {
    name: 'Bolt Action',
    cost: 9
    },
    {
    name: 'Brawling',
    cost: 9
    },
    {
    name: 'Check Quality',
    cost: 9
    },
    {
    name: 'Check Value',
    cost: 9
    },
    {
    name: 'First Aid',
    cost: 9
    },
    {
    name: 'Force Barricade',
    cost: 9
    },
    {
    name: 'Literacy',
    cost: 6
    },
    {
    name: 'Lore (Various Types)',
    cost: 6
    },
    {
    name: 'Melee Weapon, Small',
    cost: 6
    },
    {
    name: 'Melee Weapon, Standard',
    cost: 6
    },
    {
    name: 'Melee Weapon, Two-Hand',
    cost: 6
    },
    {
    name: 'Parry',
    cost: 6
    },
    {
    name: 'Pistol Whip',
    cost: 9
    },
    {
    name: 'Shield',
    cost: 6
    },
    {
    name: 'Teach',
    cost: 1
    },
    {
    name: 'Throwing',
    cost: 6
    },
    {
    name: 'Throwing, Javelins',
    cost: 6
    },
    {
    name: 'Tie Binds',
    cost: 6
    }
  ],
  professions:[
    {
    name: 'Engineer',
    skill_list:[
      {
      name: 'Barricade',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Check Quality',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Chop',
      cost: 6,
      prereq:[]
      },
      {
      name: 'Florentine',
      cost: 6,
      prereq:[]
      },
      {
      name: 'Force Barricade',
      cost: 3,
      prereq:[]
      },
      {
      name:'Forging the Future',
      cost: 6,
      prereq:[]
      },
      {
      name: 'Income',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Literacy',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Melee Weapon, Small',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Patch Job',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Repair',
      cost: 6,
      prereq:[]
      },
      {
      name: 'SCIENCE!',
      cost: 6,
      prereq:[]
      },
      {
      name: 'Smelt',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Weld',
      cost: 6,
      prereq:[]
      },
    ],
    bio: "Weapons, guns, and armor are all very important, but so are fortifications and safe houses. Engineers specialize in improving the shanties and structures where the world’s populations dwell, making them stronger, more durable and more efficient. In some cases, Engineers can even improve upon their design, adapting them for the specialized purposes in the short term. Be it incorporating inspiring signs of faith into a crumbling church, or double-layering walls to resist the Tank trying to force them down, the Engineer plans to outlast her problems, rather than outmaneuver them.",
    play_if: "You want to play a crafter who reinforces strongholds and builds structures that offer powerful benefits to large groups of people. As an Engineer, you’re usually the first one called to build a barricade, and you’re quite capable with a weapon in each hand, but your real love is building structures that enhance the skills of your fellow survivors for months or years at a time. Of course, such big benefits also carry big costs, so you’ll often need to Chop, Scrounge and buy as much Scrap metal as you can, as well as keep in touch with local Merchants and Scavengers for your more exotic building materials."
    },
    {
    name: 'Scavenger',
    skill_list:[
      {
      name: 'Analyze Creature',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Avoid',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Barricade',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Beg For Life',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Brawling',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Check Quality',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Check Value',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Chop',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Cover of Night',
      cost: 6,
      prereq:[]
      },
      {
      name: 'Escape Bonds',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Feign Death',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Melee Weapon, Two-Hand',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Patch Job',
      cost: 6,
      prereq:['Chop']
      },
      {
      name: 'Scrounge',
      cost: 3,
      prereq:[]
      }
    ],
    bio: "They are the brave new world, the unsung heroes of settlement and caravan alike. They are the future, surviving on the bones of the past. Scrappers, Gatherers, Trash-Pickers. Scavengers eke out their living through an uncanny knack for finding and exploiting the useful pieces of a wasted world. They survive at all costs, and at all costs provide. Without the tireless efforts of the Scavenger, the guns have no ammo, the builders no Scrap, the medics no medicine, and the world no chance.",
    play_if: "You want to be capable of pulling valuable raw materials out of just about any situation. As a Scavenger, you can chop weapons for Scrap and pick up Herbs and metal you scrounge in the wild, so make sure you spend plenty of time out searching for raw materials and always be quick to salvage the weapons of fallen enemies. It’s dangerous to go alone, though, so make sure you bring friends on your scrounging runs, and make note of the spots you make big finds. Most any craftsman has a need for the goods you provide, so introduce yourself around and let them know when you’re selling."
    },
    {
    name: 'Soldier',
    skill_list:[
      {
      name: 'Avoid',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Break Shield',
      cost: 6,
      prereq:[]
      },
      {
      name: 'Charge',
      cost: 6,
      prereq:[]
      },
      {
      name: 'Double Tap',
      cost: 6,
      prereq:[]
      },
      {
      name: 'Florentine',
      cost: 6,
      prereq:[]
      },
      {
      name: 'Force Barricade',
      cost: 6,
      prereq:['Charge']
      },
      {
      name: 'Interfere',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Melee Weapon Expert',
      cost: 6,
      prereq:['Melee Weapon, Standard', 'Melee Weapon, Large']
      },
      {
      name: 'Melee Weapon, Large',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Melee Weapon, Standard',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Nail',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Sever',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Shield',
      cost: 3,
      prereq:[]
      },
      {
      name: 'Throwing, Javelins',
      cost: 3,
      prereq:[]
      }
    ],
    bio: "This is a world where the only means if ensuring your own safety is through military force. Trained in both ranged and close combat and operating with greater coordination and discipline than Thugs, Guards and other amateur warriors, it is on the blood, sweat, and tears of Soldiers that the new world will be built.",
    play_if: "You want to be a well-balanced melee bad-ass, equally at home with two weapons as you are with a weapon and shield. As a Soldier, you are one of the most versatile melee fighters around, with a mix of offensive and defensive skills that you can tailor to suit your fighting preferences or even switch up to meet the needs of the moment. You make a mess of shield walls, you cut down soft targets easily, you can take down fortified doors in a hurry and you can make sure even the toughest zombies don’t get up a second time. In short, Soldier, you are the heart of the line, so stand strong and let your example inspire the wannabe warriors around you."
    }
  ],
  skills:[
    {
    name: 'Analyze Creature',
    mp: '1',
    desc: "This Skill is countered by Disguise. In order to use the Skill, spend 1 Mind Point and say “Analyze Creature – what are you?” The character (whether a NPC or a PC), will then tell you relevant details per Mind Point that you spend. To activate this Skill you must actively role play analyzing a target; this may include measuring the creature’s limbs, roleplaying dissecting the creature, and other actions for a minimum of 30 seconds minute before Skill use. At bare minimum, a player must be within 10 steps of a target, observing the target without using any other Skills or engaging in combat, before using the Analyze Creature Skill. You cannot simply point at a creature located across a field and learn about it. Analyze Creature reveals only creature name, creature type, overall threat level – 1, 2, or 3, with 3 assumed for sentient beings – and any vulnerabilities. In certain plot-specific situations, this Skill may also provide more details; such opportunities will be announced by storytelling staff when available."
    },
    {
    name: 'Avoid',
    mp: '5',
    desc: "This Skill counters Concentrated Fire, Destroy Shield, Destroy Weapon, Disarming Shot, Scatter Shot, Sniped Shot, Knockout, and any other successful, ranged targeted attacks. In order to use this skill, spend 5 Mind Points and clearly say “Avoid!” This skill is ineffective against Area of Effect attacks (such as bombs or “By My Voice” effects), as they do not target the user individually."
    },
    {
    name: 'Balance',
    mp: '1 or 5',
    desc: "This Skill counters Knockdown and Take Down. By spending 5 Mind Points, you can call “Balance” and ignore one use of either Knockdown or Take Down. In addition, in situations such as walking across narrow paths, this Skill allows the user to receive one foot additional width on either side to represent their great sense of balance. Balance costs 1 Mind Point per use, and lasts for 10 paces or 1 minute, whichever comes first."
    },
    {
    name: 'Barricade',
    mp: 'Variable',
    desc: "This Skill is countered by Force Barricade. While anyone can guard a doorway, it’s the truly desperate that will try to block one. It takes a certain degree of thought and effort to be able to barricade a door in a way that makes it defensible as well as extremely difficult to pass through. For every 2 Mind Points and 2 minutes that you spend roleplaying its creation, an in-game Barricade may be created. This Barricade will have a Crafts Level equal to every two points invested in its creation. For example: If you spend 4 minutes and 4 Mind Points, you’ll wind up with a Barricade with a Crafts Level of 2. It’s important to note that a doorway should never actually be obstructed (we’d like to avoid personal injuries, and there are fire safety reasons).  Also note that attacking players should never attempt to kick open or otherwise forcefully attempt entry. Instead, this Skill allows the user to affix a standard size index card to the outside of the door listing the Barricade’s Crafts Level. If players wish to add levels to the Barricade, they must repeat the crafting process to add Crafts Levels. You may attempt to add to a Barricade while it is under attack, though it should be noted it is a lot faster to tear one down than build one up.<br><br>Anyone looking to breach a Barricade must make loud knocking sounds, banging on the door with their weapons a total of 10 times, counting to 3 between each ‘assault.’ Each time this cycle is completed, the Crafts Level of the Barricade is lowered by 1. When the Crafts Level reaches zero, the Barricade is destroyed or “breached.” Once a Barricade has been breached, the doorway is open and cannot have a Barricade built on it for 10 minutes."
    },
    {
    name: 'Beg For Life',
    mp: '1',
    desc: "This Skill counters Killing Blows, but is countered by Refuse. If under the effects of Choking Blow, you cannot use this skill. Sometimes, all you can do is plead. This Skill allows a player to beg for their life and not receive immediate Killing Blows. Each declaration of “Beg For Life” costs 1 Mind Point, and prevents any Killing Blows from being called for either 2 minutes or until the user of Beg For Life takes any action other than groveling for their very existence. Beg For Life is an area effect, and not targeted at a single individual. Beg For Life is different from most other Skills in that it can be used during Bleed Out as well as before Bleed Out."
    },
    {
    name: 'Bolt-Action',
    mp: 'Nil',
    desc: "This Skill allows you to wield a single firearm. Using this Skill costs zero Mind Points; however, it requires a prop firearm to be present in one hand while packets are thrown from the other. Alternately, an approved weapon may fire contact safe toy darts instead of using thrown packets.  As mechanical options change for foam dart toy weapons, the staff of Dystopia Rising needs to adjust what is and is not approved for regular use with a regularity that requires live updates instead of printed changes.  With this in mind, please check the Dystopia Rising LARP network standards for what single action foam dart Physical Representations are approved for play.  All dart guns must be approved on a branch by branch basis, the same as melee weapons, for safety. Players entering game with a firearm may only begin with a total of twenty contact safe toy firearm darts, but no limit to the number of packets that they have. Ammo fired may not be picked up in combat, but may be retrieved when the dust has settled. This represents how more ammo is quickly repacked. As ammo is lost and unable to be recovered, so is a portion of the total ammo a firearms user has available. Standard firearms do a base 3 Damage before improvements.<br><br>All weapon props must be approved before entering game; see the Logistics section for more details. A list of approved toy firearms can be found at the Dystopia Rising website. Some rules of thumb apply: it must be single shot or bolt action (no automatic firing weapons); it must fire soft, toy ammunition that does not require eye protection; and while decorating weapons is encouraged, it should always retain a clearly visible bright orange safety tip."
    },
    {
    name: 'Bomb Awareness',
    mp: '5',
    desc: "This Skill counters Attach (to an extent). In order to use this skill, spend 5 Mind Points and say “Bomb Awareness.” This allows you to take back an action that triggered a trap. This Skill must be used IMMEDIATELY after the action was taken. Bomb Awareness does not grant knowledge of how to disarm the trap, where it is located or even the exact nature of the trap. However, the Skill allows you to have a type of sixth sense that a trap is present, as well as the fact that you should avoid that specific triggering action."
    },
    {
    name: 'Brawling',
    mp: 'Nil',
    desc: "Sometimes you just need to punch something. This Skill allows you to carry two small size melee boffers to represent fists. These boffers must be colored white to differentiate them from regular weapons. Damage is still taken when blocking incoming strikes, as they are part of the body. However, use of two brawling boffers does not require the Florentine skill, and they cannot be disarmed or broken like normal weapons (though the arm can still be Mangled).  Brawling may be used off hand of a melee or bolt action weapon, with a brawling beater being wielded in the off hand.  Effects such as ‘Iron Fists’ require a brawling physical representation to be in a characters hand to benefit from the bonuses of Knucks or brawling Skill augments.  Brawling strikes do a base 1 damage each. Brawling can be augmented with items such as brass knuckles, usually just called “Knucks,” which are represented by certain colored tape.  Unless otherwise stated on the crafting print, Knucks do not block incoming damage.  Only Iron Fists allows an individual to block using their Brawling Skill without taking damage."
    },
    {
    name: 'Break Shield',
    mp: '5',
    desc: "This Skill can be countered by Parry. With a single successful melee attack that strikes a shield, you can declare “Break Shield!” and render a shield useless until it is repaired. This attack costs 5 Mind Points, inflicts zero damage, and must strike the target shield to work."
    },
    {
    name: 'Brewing',
    mp: 'Variable',
    desc: "This Skill allows a character to distill powerful liquids from Herbs that have a variety of unique effects. By spending 2 Mind Points and 20 Minutes at a Still roleplaying brewing, the crafter may take the required Herb cards to Logistics to be traded in for a new Item Card. All brews start at Crafts Level 1 unless otherwise specified and have an expiration of 1 year. Crafting requires 2 hands, and can be interrupted if the crafter leaves the area within 5 feet of the Still, utilizes any combat Skills, or falls into Bleed Out. If the process is interrupted, all Mind Points spent and materials invested are lost. Some abilities or items may reduce the time requirement for Brewing. The minimum time for Brewing, without the assistance of an Able Helper, is 5 minutes.<br><br>All brews, once produced, require an appropriately sized physical representation to be used (as near a volume as possible). Brews can be administered one of four ways. Applied to target, Inhaled by target, Ingested by target, or Injected into target. Applied Brews may only be applied to an appropriate target, such as an item, person, or weapon. Applied brews that require a weapon strike do not affect armored health. Injectable brews may be self-administered during Bleed Out. Injected and ingested brews may not be administered to an unwilling target that is not Bound, Knocked Out, or in Bleed Out. Note that this does not prevent an unaware target from consuming a brew themselves.<br><br>During the process of production a player may only use one item to manipulate crafting times or production results unless the used items specifically state that they stack with other items."
    },
    {
    name: 'Charge',
    mp: '5',
    desc: "This Skill can be countered by Parry if you strike the person from the front. Rushing into battle isn’t always a bad thing. By declaring “Charge!” and expending 5 Mind Points, your first strike against a new target has its damage doubled. Charge may only be used the first time engaging a target in a combat, and requires the user to have both feet firmly planted before striking for this ‘charged’ attack. Charge cannot be combined with Backstab, Murder, or Frightening Force; however it may be combined with other Skills. Do not actually strike a target harder when using the ‘charge’ Skill."
    },
    {
    name: 'Check Quality',
    mp: '1',
    desc: "It can pay to be observant. This Skill allows you to know exactly how much damage a weapon can do inherently, how much damage armor can take, as well as the Crafts Level of an item. Most of the time, this information will be on the Item Card. In order to use this Skill, you need to have line of sight to an object, and roleplay examining the item for at least 1 minute.  Then, spend 1 Mind Point and declare “Check Quality.” By this same token, those that do not use Check Quality have no idea what a weapon can do, or what benefits armor can give. Check Quality may be used at check in to see the current exchange rates for currencies.  While this exchange rate (based on the population of a branch’s town combined with the number of non-combat focused professions at the game) is the actual value of the currencies in play, this does not prevent characters from valuing them at whatever they feel like.  Often time local currencies are worth more where those currencies are used."
    },
    {
    name: 'Check Value',
    mp: '1',
    desc: "When you’re buying something, you probably want to know what it’s worth. In order to use this Skill, spend 1 Mind Point to appraise an item’s true monetary value as listed on the Item Card. This Skill immediately reveals counterfeit items and currency. Certain items without cards, such as precious stones, may still have value, which can be obtained at Logistics. This ability also allows the user to check in at Logistics for the current market prices and exchange rates for major currencies at their local game. Items without a listed value simply fluctuate too much to be accurately appraised."
    },
    {
    name: 'Chop',
    mp: '1',
    desc: "Even broken items can still be used as Scrap. By spending 1 Mind Point you can trade in a broken item for 1 Basic Scrap. This Skill may also be used on fallen NPC weapons or shield (not armor) to produce 1 Basic Scrap. Note that in order to receive the Basic Scrap, you have to actively roleplay taking the weapon and breaking it apart with both hands for 10 seconds. You may not just point at an item and say “Chop” while running past.  If you do not roleplay breaking down an item for Scrap for 10 seconds, you will not be provided the Scrap from the use of Chop, and the Mind Points will be considered expended.  When an NPC falls, their equipment (regardless of quality) will be considered in a broken state.  It is suggested that players Check Quality of the equipment they are about to Chop before they Chop it.  Aside from NPC weapons, you may not Chop items that do not have an Item Card. This skill cannot be used to actively break working items– that is the domain of skills such as Break Weapon and Break Shield. Instead, it represents taking an already broken item and salvaging some usable metal from it."
    },
    {
    name: 'Cover of Night',
    mp: '5',
    desc: "This Skill is countered by Alert. Once the sun has completely set, and once you’re out of bright, artificial light, you may travel in the dark completely unseen with the invisible symbol up. The “invisible symbol” is represented by having your arm up over the lower half of your face (think of holding a cloak in front of your face). By spending 5 Mind Points, no artificial light short of flood lights or interior building lights will cause you to be seen. Walking or running do not break Cover of Night, but speaking, picking up objects, entering lit buildings or areas of bright lights, lowering the invisible symbol or using any other Skills causes Cover of Night to end immediately. Interacting with the environment (opening doors, picking up items, talking, using Skills, etc) ends this Dkill.  This Skill requires unrestricted movement to use, so this Skill may not be used if under the effects of Nail or other effects which hinder movement (Mangled Legs, Binds on legs, etc.)."
    },
    {
    name: 'Double Tap',
    mp: '1',
    desc: "When you’re dealing with the living dead, your enemies don’t always stay down. By expending 1 Mind Point you can announce “Double-Tap!” when declaring a Killing Blow. Double-Tap not only is a successful Killing Blow, but if a creature has an ability or effect that would cause it to get up again after a Killing Blow, that capability is negated (this effect is specifically used on zombified creatures). In the event that the damage called after a Double-Tap is not sufficient to Killing Blow a creature, the cost of Double-Tap is still expended. Please note, do not attempt to Double-Tap every creature you come across- this will be a rather large waste of your precious Mind Points."
    },
    {
    name: 'Escape Bonds',
    mp: '5',
    desc: "This Skill counters Tie Binds. Knowing exactly how to wriggle free from ropes and chains can be useful in a tight spot. This Skill allows you to spend 5 Mind Points to instantly remove restraints that have been placed upon you using the Tie Binds Skill. Items such as handcuffs, which have a Crafts Level to them, are more difficult to escape; each Crafts Level of the binding item increases the Mind Point expenditure by 5 points. The time required remains the same."
    },
    {
    name: 'Fearful Glare',
    mp: '5',
    desc: "This Skill is countered by Refuse. Living in these times causes many people to become mean, but even so, some people are lot scarier than others. You’re one of the worst. With a single look, you can express to an opponent without words what it is that you will do to them if they attack you. By spending 5 Mind Points, calling “FEAR, cannot attack me, 5 minutes!” and glaring at a target while pointing at them, that target becomes frightened of you and unable to initiate attacks against you for 5 minutes. These effects are broken if you attack the target, or if later effects force that target to attack."
    },
    {
    name: 'Feign Death',
    mp: '1',
    desc: "This Skill is countered by Check Status. By spending 1 Mind Point immediately after taking a wound, you may fall to the ground and feign your own death. Self-inflicted wounds do not count for the purposes of activating this Skill, though allies can hurt you to trigger it. This Skill allows you to state that you are dead to anyone who investigates your body without using the Check Status Skill; all non-zombified opponents must stop attacking you and may not declare Killing Blows. (After all, you’re already dead!) Zombies are immune to this skill, as they will continue clawing and biting a target whether or not it is living or dead. You may begin to move or use Skills at any time, but doing so immediately causes your façade to drop."
    },
    {
    name: 'First Aid',
    mp: 'Nil',
    desc: "The First Aid Skill is not used to heal wounds; however, it is capable of keeping critically injured individuals alive by preventing wounds from going from bad to worse. By spending 2 minutes roleplaying stabilizing a target, a person with the First Aid Skill may can halt the fallen player’s Bleed Out death count and/or awaken an unconscious target. This will stabilize a target until another wound is inflicted, at which point the Bleeding Out begins again. This skill does not help a target that has received a Killing Blow. A stabilized person may walk slowly and speak painfully, but take no other actions other than Skills that could be used during Bleed Out. In addition, First Aid does not halt the Bleed Out count during the 2 minutes it takes to stabilize a target. For example, if a person is 4 minutes into their Bleed Out period, they will die before First Aid can be properly administered."
    },
    {
    name: 'Florentine',
    mp: 'Nil',
    desc: "This Skill does not cost anything to use, and allows a user to fight with two melee weapons at once. These weapons must be of Standard size or smaller, and the appropriate melee weapon skills must still be purchased. A single purchase of a melee Skill, when combined with the Florentine skill, allows for usage of a melee weapon of that size in both hands at once. Florentine is not required to wield two pistols or a pistol in one hand and a melee weapon in the other, nor to have a brawler in one hand and a melee weapon in the other.  Once an individual enters melee range, as a safety reminder, ranged firearms must be dropped to your side and packets used.  This makes most practical uses of using bolt action and melee at the same time unlikely to occur. When striking with melee weapons when using the Florentine skill, each blade may strike 3 times before Flurry rules are engaged. With the Florentine Skill it requires a total of 6 strikes (3 with each hand) to require a pause before reengaging. Unless using the Florentine skill to combine the use of two melee weapons (not brawlers), individuals are restricted to 3 strikes before the Flurry rule reset."
    },
    {
    name: 'Force Barricade',
    mp: 'Variable',
    desc: "This Skill counters Barricade. At times, survival involves breaking through defenses that others have put down. An experienced survivalist knows that the most important items are the most heavily defended. For every 1 Mind Point spent, the user may destroy one Crafts Level of a Barricade outright by striking it and declaring “Force Barricade!” Doors without Barricades or enhancements are considered at Crafts Level 1 for breaking."
    },
    {
    name: 'Forging the Future',
    mp: 'Variable',
    desc: "This Skill allows a character to take Scrap and build large projects called Augments, such as building fortifications, work areas, or structural improvements. By spending 10 Mind Points and 1 hour (30 Minutes at a Forge, 30 Minutes at the target structure) roleplaying the fabrication, the crafter may take the required Scrap cards to Logistics to be traded in for a new Item Card. All items start at Crafts Level 1 unless otherwise specified. While roleplaying making the item, you must make a significant amount of noise (there is no 'quiet' crafting!). Crafting requires 2 hands, and can be interrupted if the crafter leaves the area within 5 feet of the Forge or target structure (except for the immediate transit between the two locations), utilizes any combat Skills, or falls into Bleed Out. If the process is interrupted, all Mind Points spent and materials invested are lost. Some abilities or items may reduce the time requirement for Forging the Future. The minimum time for Forging the Future, without the assistance of an Able Helper, is 5 minutes at the forge, 5 minutes at the target structure.<br><br>Augments can be improved via Forging the Future as outlined on the blueprint provided. Basic items or Forging the Future items without improvement instructions cannot have their Crafts Level improved. During the process of production a player may only use one item to manipulate crafting times or production results unless the used items specifically state that they stack with other items."
    },
    {
    name: 'Frightening Force',
    mp: '10',
    desc: "This Skill can be countered by Parry if it’s delivered from the front. This strike is terrifying to all that witness it. By expending 10 Mind Points you may declare 30 damage for a single melee swing. If this first strike is successful, you may immediately turn and look at a second opponent and declare “FEAR, cannot attack me, 5 minutes!” against them. This Fear effect is identical to the Skill Fearful Glare. If the initial swing misses or is negated by defense Skills, the Fear effect does not work either. Frightening Force requires that the striking weapon be standard size or larger– it will not work with Small melee weapons or brawling strikes."
    },
    {
    name: 'Income',
    mp: 'Nil',
    desc: "Money doesn’t grow on trees, but a few extra connections can certainly help. This Skill reflects that a person has a viable job between events; during Check In, they receive a certain amount of local currency as a reflection of their monthly income. This Skill may be purchased multiple times, up to a maximum of five, allowing for cumulative financial growth. For example, Income 1 provides 1 local currency, Income 2 provides 3 local currency, etc. This employment requires in-game roleplay where you advertise what it is that you do. Some acceptable employment examples include: scrounger, bartender, bouncer, guard, store operator, politician, gambler, pit fighter, caravan operator, farmer, fisher, entertainer, medic. (Note: While theoretically possible, openly advertising as an assassin, slaver, thief or other unsavory profession is a good way to meet local law enforcement, and it’s not likely to be for a friendly chat.) To learn this skill, you must either train yourself as a Strain Skill, or receive instruction from someone with equal or greater level of the Income Skill.  <strong>This Skill may only be used by a character at their home game.</strong>"
    },
    {
    name: 'Interfere',
    mp: 'Nil',
    desc: "This Skill allows its user to declare “Interfere!” and immediately take the damage or Skill effect another person would have just taken, provided the user is within arm’s length of the target. Interfere transfers all damage and other negative effects to the person using this Skill. However, once transferred by Interfere no items, Brews, armors, defensive Skills, damage reduction, psionic powers, or other status altering Skills can reduce or prevent damage and effects suffered, even if they normally apply automatically.  To use Interfere, the user of the Skill must be able to take the effects of the effect and damage being called.  As an example, if you want to use Interfere to take the effects of a ‘Break Shield’, then the user of Interfere must have a shield that can be broken.  The same applies for all other forms of interfered skills (must have a working limb to interfere a mangle limb, must have working armor to interfere destroy armor, etc.).  This skill has no Mind Point cost."
    },
    {
    name: 'Literacy',
    mp: 'Nil',
    desc: "Literacy costs no Mind Points to use. This Skill allows its owner the rudimentary yet sadly all too uncommon ability to read and write, as well as perform simple math and written calculations. In addition to those benefits, this Skill is vital in duplication of most basic listed blueprints and documents."
    },
    {
    name: 'Lore (Various Types)',
    mp: 'Nil',
    desc: "Lore is a Skill that shows your character has an understanding of a particular subject. For example, Lore: Grave Mind means that your character understands far more about the Grave Mind than the average character. In order to use this Skill, simply state the particular Lore that your character has (for example: Lore, Grave Mind) during an appropriate situation. In the case of Lore: Grave Mind, this can be examining a new creature that may have been spawned directly from the Grave Mind, or investigating some strange phenomenon occurring with the Grave Mind. That said, this Skill doesn’t mean that your character knows everything about a particular subject. Instead, it shows that your character has a basic understanding of it, and knows enough to be able to research particular topics more extensively. Lore is largely used in conjunction with the Educated Skill in order to find out more about certain topics. Simply stating the Lore without research will only give you the most rudimentary of information. For more information on Lores, take a look at the Lore section of the rulebook."
    },
    {
    name: 'Melee Weapon, Expert',
    mp: '5 Per 2',
    desc: "Simply knowing how to swing a weapon doesn’t mean that you’re an expert. Those with this Skill, though, are another story. A person with Melee Weapon Expert has become so lethal with different forms of melee weaponry that every strike finds its way to more vital portions of the body. With the Skill, you may increase the amount of damage you can declare with a single weapon by 2 for every 5 Mind Points spent, up to an overall maximum of 20 damage. (Melee Weapon Expert can never cause an attack to inflict over 20 damage.) For example, if your weapon normally swings for 5 Damage, you can spend 10 Mind Points and swing for 9 Damage. The duration of this effect is 5 minutes. The user must stand Still for 30 seconds, with a weapon at the ready, before announcing use of this Skill as they prepare themselves with battle focus or meditation.  Melee Weapon expert may only be used on weapons covered under Melee skills (not Brawling) unless equipment states otherwise."
    },
    {
    name: 'Melee Weapon, Large',
    mp: 'Nil',
    desc: "This Skill costs no Mind Points, and allows its owner to wield a melee weapon no smaller than 36 inches in length and no longer than 53 inches in length (see weapon rules). Default large weapons deal 2 damage if wielded in one hand and 3 damage if wielded in two hands. Hand and a half or “bastard” weapons fall in this category."
    },
    {
    name: 'Melee Weapon, Small',
    mp: 'Nil',
    desc: "This Skill costs no Mind Points, and allows its owner to wield a melee weapon no shorter than 12 inches and no longer than 21 inches in length (see weapon rules). Default small weapons deal 2 damage."
    },
    {
    name: 'Melee Weapon, Standard',
    mp: 'Nil',
    desc: "This Skill costs no Mind Points, and allows its owner to wield a melee weapon no smaller than 18 inches in length and no longer than 39 inches in length (see weapon rules). Default standard weapons deal 2 damage."
    },
    {
    name: 'Melee Weapon, Two-Hand',
    mp: 'Nil',
    desc: "This Skill costs no Mind Points, and allows its owner to wield a melee weapon no smaller than 60 inches in length and no longer than 63 inches in length. This weapon is required to be wielded with two hands at all times (see weapon rules). Default two-handed weapons deal 3 damage. If a Disarming Strike or Shot is used on a Melee Two handed weapon, the two handed weapon is not dropped, but instead is disarmed from one of the two hands and un-wieldable for 5 seconds (cannot strike, defend, or use Skills with this weapon). If Disarming Shot is used when a two handed weapon is carried in one hand, the weapon is disarmed."
    },
    {
    name: 'Nail',
    mp: '5',
    desc: "This Skill is countered by Avoid or Bounce. This Skill allows a person to impale a target using a javelin or bow. By spending 5 Mind Points, calling “Nail, stuck in place, 5 minutes!” and landing a successful strike with a thrown javelin or bow, the user renders a target unable to move from that spot for 5 minutes, unless someone else comes over and role-plays removing the stuck weapon for at least a count of 10.  (Targets cannot normally free themselves, though certainly inhumanly strong or physically abnormal NPCs may be able to do so with the Pull Through Skill.) Persons hit with this Skill are required to lift the thrown javelin or arrow packet and place it under their arm to show that they are pinned to the spot. The attack still inflicts its standard damage."
    },
    {
    name: 'Parry',
    mp: '5',
    desc: "This Skill counters all melee and brawling strikes delivered from the front (though if one is delivered from behind, you’re out of luck). This includes Break Armor, Break Weapon, Break Shield, Blinding, Charge, Disarm, Frightening Force, Mangle Limb, Nerve Punch, Sever, Slaughter, Take Down, Wide Strike and any other basic melee strike.  Being able to turn aside a blow is a good way to keep yourself alive. This Skill allows you to expend 5 Mind Points and declare “Parry!” to negate a single melee or brawling strike and its effects, provided that the strike hit the front 180 degrees of the defender. If you’re struck from behind, this Skill cannot be used, even if you knew the attacker was there. In addition, you can only use this Skill if you have a melee weapon or brawlers at the ready, as well as the appropriate Melee Weapon or Brawling Skill to wield it (if that blade is sheathed, then you’re out of luck). Lastly, Parry can never be used against the following skills: Backstab, Choking Blow, or Murder Most Foul."
    },
    {
    name: 'Patch Job',
    mp: '1 or 5',
    desc: "This skill allows a character to quickly repair a Broken, Destroyed, or Melted item without a Workbench. By spending 1 Mind Point and 30 Seconds, the item’s Crafts Level is permanently reduced by 1 and is immediately repaired. The Weapon or Armor repaired in this fashion loses the extra damage or armor points gained from that level of Improvement lost. If the item is Crafts Level 1 and cannot have its Crafts Level further reduced, the costs of this Skill increase to 5 Mind Points. Note that Patch Job does not restore Armor Points lost due to damage, only those lost due to a Break, Destroy, or Melt effect, returning the armor to its previous Armor Points before it was Broken, Destroyed, or Melted. While roleplaying patching the item, you should make use of props such as duct tape, twine, or a glue bottle to fix the target item. Patching an item requires 2 hands, and can be interrupted if the repairer utilizes any combat Skills or falls into Bleed Out. If the process is interrupted, all Mind Points invested are lost."
    },
    {
    name: 'Pistol Whip',
    mp: 'Nil',
    desc: "Guns don’t generally make effective melee weapons; but if you’re backed into a corner and all else fails, desperation can make them into small clubs. With this Skill, you may carry a Small melee weapon to represent your capacity to cudgel enemies with your firearm, though no melee related skills may be used in conjunction with this use of the weapon—save for parry. Certain weapon firearms item card allow for use of additional melee related Skills.  A number of bayonet style weapon Gizmos exist specifically to be used with the Pistol Whip Skill.  Firearms physical representations must be a melee weapons Small weapon able to pass a safety check in order to be used in melee, and thus must be contact safe. At no point may a hard shell metal, wood or plastic Physical Representation be used to strike, no matter how cool it looks."
    },
    {
    name: 'Repair',
    mp: 'Variable',
    desc: "This skill allows a character to repair a Broken, Destroyed, or Melted item, as well as restore lost Armor Points to armor. By spending 1 Mind Point and 10 Minutes per Crafts Level of the target item role playing repairing the item at a Workbench, the repairer may fix the item, making it usable again. Additional Mind Points may be spent to cut down Repair time, at a rate of 1 Mind Point per 10 Minutes reduced to a minimum of 10 Minutes. For example, a Crafts Level 3 item would take 3 Mind Points and 30 Minutes to Repair, or 4 Mind Points and 20 Minutes, or 5 Mind Points and 10 Minutes. Repairing an item requires 2 hands, and can be interrupted if the repairer leaves the area within 5 feet of the workbench, utilizes any combat skills, or falls into Bleed Out. If the process is interrupted, all Mind Points invested are lost."
    },
    {
    name: 'SCIENCE!',
    mp: 'Variable',
    desc: "Some technology that is recovered requires a greater understanding of scientific reasoning to comprehend or operate. These items have information envelopes on them with a difficulty level on the outside. A player with SCIENCE! must spend Mind Points to match the difficultly level of the item in order to figure out how the device operates. Each Mind Point requires 10 minutes of role playing investigating the item, though by spending Mind Points above and beyond the technological difficulty the duration of investigation may be reduced by 5 minutes per Mind Point (to a minimum of 1 minute). While a single individual must spend the initial Mind Points to begin the ‘scientific process,’ a group of individuals with SCIENCE! may role play assisting in order to contribute Mind Points toward reducing the necessary time. Once this time has passed, the lead character using SCIENCE! may open the envelope and read the details of the device. SCIENCE! may also be a required skill to make sense of particularly wonky Blueprints and other strange plot items."
    },
    {
    name: 'Scrounge',
    mp: '1',
    desc: "There isn’t much in the way of mass production anymore, so being able to pick out the useful bits from the rubble helps. A person with this skill has the ability to pick up Scrounge cards from the ground. You don’t have to spend Mind Points to identify these cards, but you do have to spend 1 Mind Point per level of the card when scrounging. These Scrounge cards will be located across the game site, and require you to physically hunt them down and find them in order to collect them. You must spend 2 minutes role playing ‘harvesting’ or ‘gathering’ the scrounge card for each level on the card. Cards cannot be partially collected and if combat or something else interrupts you, then you must leave the card. Once you collect the card, you can turn the scrounge card into Logistics to receive a random scrounged item—usually Scrap or Herb (notated on the card). Note that if you do not have the Scrounge skill, you cannot pick up Scrounge cards from the ground or point out the existence of scrounge cards to other people."
    },
    {
    name: 'Sever',
    mp: '5',
    desc: "This skill can be countered by Parry if it’s delivered to the front. By spending 5 Mind Points and landing a successful melee attack, the user of Sever can declare 15 damage with a single strike. This damage does not stack with any other damage bonuses."
    },
    {
    name: 'Shield',
    mp: 'Nil',
    desc: "This skill costs no Mind Points, and allows the user of this skill to wield a shield. Shields do not prevent damage from firearms, and may not be used as weapons. For example, if someone fires bullets at your shield, you take the damage; the shield does not block it.  Instead, shields can be used to block thrown weapons, bows and melee attacks.  For safety reasons shields may not have a surface area of more than 9 total square feet. Holes and carved out sections will not deduct from the total of 9 square feet of surface area. A shield may not stand more than 4 feet tall, nor wider than 4 feet wide at its widest point.<br><br>Examples: A rectangle shield that is 4 feet tall cannot be more than 2.75 feet wide to remain under the 9 square foot restriction. A shield that is 3 feet tall may be 3 feet wide to remain under the 9 square foot restriction. A “grid” shield that is a series of banded bars with open spaces still may not be more than 3 feet tall if 3 feet wide, as the interior holes do not subtract from the total surface space.<br><br>Items that are not crafted shields may NEVER be used as a shield. Strikes that land on ‘improvised shields’ are considered hits, and usage of improvised items as shields will result in safety violations (IE: Using a briefcase as a shield)."
    },
    {
    name: 'Smelt',
    mp: '1',
    desc: "This skill allows a character to break down Scrap into its component parts and refine metals. By spending 1 Mind Point and 10 Minutes role playing working at a Forge, the smelter may turn in the required materials at Logistics to convert 1 Rare Scrap into 2 Uncommon Scrap, or 1 Uncommon Scrap into 2 Basic Scrap. While role playing smelting, you must make a significant amount of noise (there is no 'quiet' crafting!). Smelting requires 2 hands, and can be interrupted if the smelter leaves the area within 5 feet of the Forge, utilizes any combat skills, or falls into Bleed Out. If the process is interrupted, all Mind Points spent and materials invested are lost. Other Metallurgy Plans may be discovered in game that allow for Named Scrap to be Smelted. Non-standard plans must be present while role playing smelting, and presented to logistics when getting the new item issued."
    },
    {
    name: 'Teach',
    mp: '1',
    desc: "Being able to teach someone can be a valuable tool. This skill costs no Mind Points, and allows you to teach a Skill or Profession that you possess to a single student. This Skill requires 5 minutes of roleplay for every Experience Point the student must spend to gain this Skill or Profession, to a maximum of 30 minutes. You may only teach Skills that a person can purchase from either their Profession List or the Open Skill List; the Skill will be available for the student to use at the next Twelves. A new Profession becomes available at the next event; a student cannot learn any Skills for their new Profession until that time, even if they have sufficient Experience Points to do so. The only exception to these rules is if you have the Bay Walker “Fast Learner” advantage. While this does not allow a Bay Walker to teach a Profession immediately (the pupil still has to wait until the next event for it to become available), it does allow a Bay Walker to make Skills immediately available to a pupil— as long as they spend 1 Mind Point."
    },
    {
    name: 'Throwing',
    mp: 'Nil',
    desc: "This Skill costs no Mind Points to activate, and allows its owner to use throwing weapons under 12 inches in size. These weapons must be designed according to the weapon creation rules, and under no circumstances may other kinds of weapons be thrown. Thrown weapon Item Cards always represent ‘sets of 6’ and must be transferred this way. Standard thrown weapons do 2 point of damage. Improvements to thrown weapons are applied to all six items on each card."
    },
    {
    name: 'Throwing, Javelins',
    mp: 'Nil',
    desc: "This Skill costs no Mind Points to activate, and allows its owner to use throwing javelins between 12 and 50 inches in size. Throwing weapons must be designed according to the weapon creation rules, and under no circumstances may other kinds of weapons be thrown. Standard thrown javelins do 3 points of damage. Javelins must be at least 12 inches in length. Each javelin has its own Item Card."
    },
    {
    name: 'Tie Binds',
    mp: '1',
    desc: "This Skill is countered by Escape Bonds. By spending 1 Mind Point, you can tie a bond on willing, Bleeding Out or unconscious targets. A Tied Bond limits the actions a person can take; bound hands prevent that person from fighting or manipulating objects, while bound feet prevent that person from moving at anything faster than a slow walk. In addition, a person with bound feet can be prevented from moving by anyone not also restrained; this simply requires gently touching the bound target on the shoulder and announcing that you have halted their movement. A section of rope or fabric is used to represent bonds, draped across both wrists of a target or tied around one ankle. (For safety reasons, a player should never be actually tied up or otherwise restrained.) Bonds may be removed by anyone not bound themselves, unless an Item Card is used that locks the binds; removal instructions will be found on the Item Card."
    },
    {
    name: 'Trade Ties',
    mp: 'Nil',
    desc: "This Skill represents access to bartering connections, allowing you to swap certain resources for ones you need more. During Check In, you may trade Scrap and Herb at the following rates:<br><br>2 Scrap ==> 1 Herb of the Same Quality (Basic, Uncommon, Rare)<br><br>3 Basic Scrap <=> 1 Uncommon Scrap<br><br>3 Uncommon Scrap <=> 1 Rare Scrap<br><br>3 Basic Herb <=> 1 Uncommon Herb<br><br>3 Uncommon Herb <=> 1 Rare Herb<br><br>Herb gained through this Skill is considered Wild and has a 3 month expiration. Scrap or Herb traded in this way cannot be exchanged more than once, so you cannot trade 6 Uncommon Scrap for 3 Uncommon Herbs, and immediately trade them again for 1 Rare Herb. You may also find special items available for sale exclusively through Trade Ties. Unique Trade Routes, Caravans, Maps, and other items can sometimes be obtained in game that open up additional trade opportunities through this Skill.  <strong>This Skill may only be used by a character at their home game.</strong>"
    },
    {
    name: 'Weld',
    mp: '5',
    desc: "This Skill allows a character to combine Scrap into more complicated and useful components. By spending 5 Mind Points and 10 Minutes role playing welding materials at a Forge, the welder may turn in the required materials at Logistics to convert 4 Basic Scrap into 1 Uncommon Scrap, or 4 Uncommon Scrap into 1 Rare Scrap. While roleplaying welding, you must make a significant amount of noise (there is no 'quiet' crafting!). Welding requires 2 hands, and can be interrupted if the welder leaves the area within 5 feet of the Forge, utilizes any combat skills, or falls into Bleed Out. If the process is interrupted, all Mind Points spent and materials invested are lost. Many Engineering Plans require Welding, and some special Welding Plans may be discovered in game that allow for other items to be Welded. Non-standard plans must be present while role playing welding, and presented to Logistics when getting the new item issued."
    }
  ]
}

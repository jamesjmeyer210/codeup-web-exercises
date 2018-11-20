(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * COMPLETE:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('\nAdding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log(planets);

    console.log('\nAdding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    console.log(planets);

    console.log('\nRemoving "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log(planets);

    console.log('\nRemoving "Pluto" from the end of the planets array.');
    planets.pop();
    console.log(planets);

    console.log('\nFinding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf("Earth"));

    console.log("\nReversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("\nSorting the planets array.");
    planets.sort();
    console.log(planets);
})();

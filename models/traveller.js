const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((start) => start.startLocation)
};


Traveller.prototype.getJourneyEndLocations = function() {
  return this.journeys.map((end) => end.endLocation)
};

Traveller.prototype.getModesOfTransport = function() {
  return this.journeys.map((x) => x.transport)
};

Traveller.prototype.getJourneysByTransport = function(transport) {
  // const result = this.journeys.filter((journey)=>{
  //   return journey.transport === transport
  // });
  // return result
  // }
  return this.journeys.filter((journey) => journey.transport === transport)
};


Traveller.prototype.getJourneysByMinDistance = function(minDistance) {
  //   const result = this.journeys.filter((journey) =>{
  //     return journey.distance > minDistance;
  //   });
  //   return result
  // };
  return this.journeys.filter((journey) => journey.distance > minDistance)};

  Traveller.prototype.calculateTotalDistanceTravelled = function() {
    //   return this.journeys.reduce((runningTotal, journey) =>{
    //     return runningTotal + journey.distance;
    //   }, 0);
    // };
    return this.journeys.reduce((runningTotal, journey) =>  runningTotal + journey.distance, 0)}

    Traveller.prototype.getUniqueModesOfTransport = function() {
      return this.journeys.onlyUnique((journey) => journey.transport)
    };

    module.exports = Traveller;

class TrafficTower {
    airplanes: Airplane[];

    constructor() {
        this.airplanes = [];
    }

    requestPositions() {
        return this.airplanes.map((airplane: { position: any; }) => {
            return airplane.position;
        });
    }
}

class Airplane {
    position: string;
    trafficTower: TrafficTower;

    constructor(position: string, trafficTower: TrafficTower) {
        this.position = position;
        this.trafficTower = trafficTower;
        this.trafficTower.airplanes.push(this);
    }

    requestPositions() {
        return this.trafficTower.requestPositions();
    }
}


export {
    TrafficTower,
    Airplane
};

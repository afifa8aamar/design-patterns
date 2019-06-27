type TCommand = OnCommand | OffCommand ;
class Cockpit{
    command: TCommand;

    constructor(command : TCommand) {
        this.command = command;
    }

    execute() {
        this.command.execute();
    }
}

class Turbine {
    state: boolean;

    constructor() {
        this.state = false;
    }

    on() {
        this.state = true;
    }

    off() {
        this.state = false;
    }
}

class OnCommand {
    turbine: Turbine;

    constructor(turbine: Turbine) {
        this.turbine = turbine;
    }

    execute() {
        this.turbine.on();
    }
}

class OffCommand {
    turbine: Turbine;

    constructor(turbine: Turbine) {
        this.turbine = turbine;
    }

    execute() {
        this.turbine.off();
    }
}

export {
    Cockpit,
    Turbine,
    OnCommand,
    OffCommand
};

import { ItemList } from "./ItemList";

export class AttendanceItem extends ItemList {
    driver: string;
    vehicle: string;
    client: string;

    constructor(
        driver: string,
        vehicle: string,
        client: string,
        public id: number,
        public name: string,
        public description: string,

    ) {
        super(id, name, description);
        this.driver = driver;
        this.vehicle = vehicle;
        this.client = client;
    }

}
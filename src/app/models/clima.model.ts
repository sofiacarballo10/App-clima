export class Clima{
    name: string;
    weather: object;
    data: number;

    constructor(oName: string, oWeather: object, oData: number,){
        this.name = oName;
        this.weather = oWeather;
        this.data= oData;
    }
}
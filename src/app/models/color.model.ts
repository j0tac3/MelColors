export class Color{
    public number? : string;
    public description_en? : string;
    public description_es? : string;
    public color? : string;
    public level_color? : number;
    public isFavourite? : boolean;
    public itHasColor? : boolean;

    constructor( object : any ){
        this.number = ( object.number ) ? object.number : null;
        this.description_en = ( object.description_en ) ? object.description_en : null;
        this.description_es = ( object.description_es ) ? object.description_es : null;
        this.color = ( object.color ) ? object.color : null;
        this.level_color = ( object.level_color ) ? object.level_color : null;
        this.isFavourite = ( object.isFavourite ) ? object.isFavourite : null;
        this.itHasColor = ( object.itHasColor ) ? object.itHasColor : null;
    }
}
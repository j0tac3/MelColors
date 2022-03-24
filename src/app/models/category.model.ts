export class Category{
    public id? : number;
    public desc? : string;
    public short_desc? : string;

    constructor( object : any ){
        this.id = ( object.marca ) ? object.id : null;
        this.desc = ( object.desc ) ? object.desc : null;
        this.short_desc = ( object.short_desc ) ? object.short_desc : null;
    }
}
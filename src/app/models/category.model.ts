export class Category{
    public id? : number;
    public desc? : string;
    public short_desc? : string;
    public company_id? : string;

    constructor( object : any ){
        this.id = ( object.id ) ? object.id : null;
        this.desc = ( object.desc ) ? object.desc : null;
        this.short_desc = ( object.short_desc ) ? object.short_desc : null;
        this.company_id = ( object.company_id ) ? object.company_id : null;
    }
}
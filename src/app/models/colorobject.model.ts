export class ColorObject{
    public id? : number;
    //public company_id? : number;
    public category_id? : number;
    public category_desc? : number;
    public company? : string;
    public code? : string;
    public desc_en? : string;
    public desc_es? : string;
    public hex_code? : string;

    constructor( object : any ){
        this.id = ( object.id ) ? object.id : null;
        //this.company_id = ( object.company_id ) ? object.company_id : null;
        this.category_id = ( object.category_id ) ? object.category_id : null;
        this.category_desc = ( object.category_desc ) ? object.category_desc : null;
        this.company = ( object.company ) ? object.company : null;
        this.code = ( object.code ) ? object.code : null;
        this.desc_en = ( object.desc_en ) ? object.desc_en : null;
        this.desc_es = ( object.desc_es ) ? object.desc_es : null;
        this.hex_code = ( object.hex_code ) ? object.hex_code : null;
    }
}
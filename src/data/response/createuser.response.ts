export class CreateUserResponse {

    constructor( id: number, status: number, msg: string, extra: string ) {
        this.id = id;
        this.status = status;
        this.msg = msg;
        this.extra = extra;
    }

    id: number;

    status: number;

    msg: string;

    extra: string;

}
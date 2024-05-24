export class RegistroClienteDTO {
    constructor(
    public nombre: string = '',
    public fotoPerfil: string = '',
    public ciudadResidencia: string = '',
    public nickname: string = '',
    public email: string = '',
    public fechaNacimiento:Date= new Date (),
    public password: string = '',
    public confirmarPassword: string = ''
    ) { }
    }

export class RegistroClienteDTO {
    constructor(
    public nombre: string = '',
    public fotoPerfil: string = '',
    public ciudadResidencia: string = '',
    public nickname: string = '',
    public email: string = '',
    public fechaNacimiento:Date,
    public password: string = ''
    ) { }
    }
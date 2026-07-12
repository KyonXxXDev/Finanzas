export type User = {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
};

export type Categoria = {
    id: string;
    name: string;
    type: string;
    color: string;
    icon: string;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
};

export type Cuenta = { 
    id: string;
    usuario_id: string;
    name: string;
    type: string;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
};

export type Movimiento = {
    id: string;
    cuenta_id: string;
    categoria_id: string;
    monto: number;
    descripcion: string;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
};
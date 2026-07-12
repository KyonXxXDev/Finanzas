import { connection } from "../utils/connection-db.js";
import { Repository } from "./repository.js";

export class UserRepository extends Repository {

    static async getAll() {
        const result = await connection.query(
            "SELECT * FROM usuario WHERE is_active = TRUE"
        );

        return result.rows;
    }

    static async create(user: {
        name: string;
        lastname: string;
        email: string;
        password: string;
    }) {

        await connection.query(
            `
            CALL sp_insert_usuario($1,$2,$3,$4)
            `,
            [
                user.name,
                user.lastname,
                user.email,
                user.password
            ]
        );

    }

    static async update(
        id: string,
        user: {
            name?: string;
            lastname?: string;
            email?: string;
            password?: string;
        }
    ) {

        await connection.query(
            `
            CALL sp_update_usuario($1,$2,$3,$4,$5)
            `,
            [
                id,
                user.name ?? null,
                user.lastname ?? null,
                user.email ?? null,
                user.password ?? null
            ]
        );

    }

    static async delete(id: string) {

        await connection.query(
            `
            CALL sp_logic_delete_usuario($1)
            `,
            [id]
        );

    }

}
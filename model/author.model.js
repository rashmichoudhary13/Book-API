import db from '../config/sql.js';

export const getAllAuthor = async() => {
    const [rows] = await db.execute(`SELECT * FROM authors`);
    return rows;
};

export const getAuthor = async(id) => {
    const [rows] = await db.execute(`SELECT * FROM authors WHERE id = ?`,[id]);
    return rows;
};

export const createAuthor = async(data) => {
    const {name, nationality} = data;

    if(!name || !nationality){
        throw new Error("Incomplete Data");
    }

    const normalizedname = name.toLowerCase().replace(/\s+/g,"");

    await db.execute(`INSERT INTO authors (name,name_key,nationality) VALUE (?,?,?)`,[name,normalizedname,nationality]);
    return {message: "Inserted new author successfully"};
};

export const updateDetail = async(id,update) => {
    const {name, nationality} = update;

    if(!name && !nationality){
        throw new Error("Required atleast one field");
    }
    
    const fields = [];
    const values = [];

    if(name){
        const normalizedname = name.toLowerCase().replace(/\s+/g,"");
        fields.push("name = ?", "name_key = ?");
        values.push(name, normalizedname);
    }

    if(nationality){
        fields.push("nationality = ?");
        values.push(nationality);
    }

    const [result] = await db.execute(`UPDATE authors SET ${fields.join(", ")} WHERE id = ?`,[...values,id]);

    if(result.affectedRows === 0){
        throw new Error("No author found");
    }

    return {message: "Update the author successfully."};
}
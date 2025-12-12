
export const ProductFormUI = ({prod, errors, load, onChange, onFileChange, onSubmit}) => {
    return (
        <section>
            <form className="product-form" onSubmit={onSubmit}>
                <h2>Agregar producto.</h2>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="name" value={prod.name} onChange={onChange}/>
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="">Precio:</label>
                    <input type="number" name="price" value={prod.price} onChange={onChange}/>
                    {errors.price && <p className="error">{errors.price}</p>}
                </div>
                <div>
                    <label htmlFor="">Categoria</label>
                    <input type="text" name="category" value={prod.category} onChange={onChange}/>
                    {errors.category && <p className="error">{errors.category}</p>}
                </div>
                <div>
                    <label htmlFor="">Descripcion:</label>
                    <textarea name="description" value={prod.description} onChange={onChange} ></textarea>
                    {errors.description && <p className="error">{errors.description}</p>}
                </div>
                <div>
                    <label>Imagen</label>
                    <input type="file" accept="image/*" onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}/>
                    {errors.file && <p className="error">{errors.file}</p>}
                </div>
                <button className="btn" type="submit" disabled={load}>
                    {load ? "Guardando...":"Guardar"}
                </button>
            </form>
        </section> 
    );
}
# Test angular Ssr.

#### 1. **CRUD**:

-   Implementar las funciones de **creación**, **actualización** y **eliminación** para gestionar una lista de usuarios con un formulario reactivo.
-   Los usuarios deben tener los campos:
    -   **Nombre** (string, requerido, mínimo 3 caracteres)
    -   **Apellido** (string, requerido, mínimo 3 caracteres)
    -   **Email** (string, requerido, formato válido)
    -   **Rol** (string, opcional, con valores como 'Admin', 'User').

----------

#### 2. **Estado Global**:

-   Crea un **store** usando la librería de manejo de estado elegida (NgRx, MiniRx, Akita, etc.).
-   Define las siguientes acciones:
    -   `loadUsers`: Cargar los usuarios iniciales.
    -   `addUser`: Agregar un nuevo usuario.
    -   `updateUser`: Actualizar un usuario existente.
    -   `deleteUser`: Eliminar un usuario.
-   Configura un **reducer** para manejar el estado de los usuarios.
-   Implementa **efectos** para:
    -   Simular llamadas HTTP para las acciones CRUD.
    -   Manejar estados de carga (loading) y errores (error).

----------

#### 3. **Paginación**:

-   Agrega paginación en el listado de usuarios:
    -   Limita el listado a **10 usuarios por página**.
    -   Implementa controles para navegar entre páginas.
    -   Usa un selector para gestionar la lógica de paginación desde el store.
-   Simula los datos desde una API usando **JSON Server** o una fuente en memoria.

----------

#### 4. **Filtros del Listado**:

-   Permite filtrar la lista de usuarios por:
    -   **Rol**: Un dropdown con las opciones disponibles.
    -   **Nombre/Apellido**: Campo de búsqueda que permita filtrar usuarios por nombre o apellido.
-   Usa selectores en el store para aplicar los filtros y mantener la lógica centralizada.

----------

#### A tener en cuenta

-   Implementa un indicador visual (**spinner**) para manejar estados de carga durante:
    -   Llamadas a la API.
    -   Acciones como paginación o filtro.
-   Maneja errores visualizando un mensaje amigable al usuario (por ejemplo, "Hubo un error al cargar los usuarios").
-   La aplicación debe seguir el enfoque **SCAM**:
    - Cada componente debe tener su propio módulo para facilitar su reutilización. Ejemplos:
        -   `usuario-listado`: Listado de usuarios con paginación y filtros.
        -   `usuario-formulario`: Formulario reactivo para agregar y editar usuarios.
        -   `loading`: Indicador de carga reutilizable.
- Se puede usar una libreria UI pero no es obligatorio

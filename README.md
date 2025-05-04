# 📸 Galería de Fotos con Ionic Framework
Este proyecto demuestra cómo implementar una galería de fotos usando Ionic + Angular, basada en el tutorial oficial de Ionic. Se han desarrollado distintas funcionalidades, cada una en una rama distinta para mejor organización y revisión.

---

## 🚀 Descripción del Proyecto

La aplicación permite al usuario:

- Tomar fotos con la cámara del dispositivo.
- Guardarlas localmente.
- Verlas en una cuadrícula.
- Cargar fotos manualmente.
- Tomar fotos con calidad reducida.

---

## 🌿 Estructura del Proyecto

- `main`: Rama base generada por `ionic start`.
- `feature/literal-1-mostrar-nombre`: Muestra el nombre del archivo debajo de cada foto.
- `feature/literal-2-tab3`: Galería trasladada al Tab 3.
- `feature/literal-3-carga-manual`: Botón para cargar las fotos guardadas.
- `feature/literal-4-foto-calidad-50`: Botón adicional que toma fotos con calidad al 50%.

---

## 🧩 Literales Implementados

### ✅ Literal 1: Mostrar las fotos con su nombre de archivo

**Rama:** `feature/literal-1-mostrar-nombre`

- En esta rama se muestra cada foto junto con su `filepath`.
- Se utiliza `<ion-label>{{ photo.filepath }}</ion-label>` justo debajo de cada imagen.

📸 **Captura de ejemplo:**
![image](https://github.com/user-attachments/assets/715dd08e-3488-4d10-a6ef-709da93eba4b)

---

### ✅ Literal 2: Mover galería al Tab 3

**Rama:** `feature/literal-2-tab3`

- La galería se encuentra en el Tab 3.
- Tab 2 queda disponible para funciones complementarias.

📸 **Captura de ejemplo:**
![image](https://github.com/user-attachments/assets/1b578a20-8764-4a9f-ae8a-5e92b696b71c)

---

### ✅ Literal 3: Mostrar fotos solo cuando el usuario lo solicite

**Rama:** `feature/literal-3-carga-manual`

- La función `loadSaved()` no se ejecuta automáticamente.
- Se añade un botón "Cargar fotos" para que el usuario decida cuándo cargarlas.

📸 **Captura de ejemplo:**
![image](https://github.com/user-attachments/assets/a1afd877-c22d-4fe7-bd59-42147ab73542)
![image](https://github.com/user-attachments/assets/6473aa41-7928-4b1d-83c5-efd3249468ba)
![image](https://github.com/user-attachments/assets/20fa2fcd-a559-4e53-85c3-cfaa2a803400)
![image](https://github.com/user-attachments/assets/4ac853e3-15fb-4b95-b29f-ea1f8251db36)
![image](https://github.com/user-attachments/assets/fc208e55-a390-45bf-9fa9-532722035096)
![image](https://github.com/user-attachments/assets/3e4bf94e-a436-43ca-a1e1-5219d6e2cb65)


---

### ✅ Literal 4: Tomar fotos al 50% de calidad

**Rama:** `feature/literal-4-foto-calidad-50`

- Se añadió un nuevo botón con otro ícono (`camera-reverse-outline`).
- Al presionarlo, la cámara toma una foto con calidad reducida (50%).

📸 **Captura de ejemplo:**
![Captura de pantalla 2025-05-04 001153](https://github.com/user-attachments/assets/7cbbd0cc-4117-4141-9285-13d32762536a)


---

## 🛠️ Cómo ejecutar el proyecto

1. Clona el repositorio:
bash
git clone https://github.com/tu-usuario/galeria-fotos-ionic.git
cd galeria-fotos-ionic


2. Cambia a una de las ramas para probar una funcionalidad:
bash
git checkout feature/literal-1-mostrar-nombre

3. Instala las dependencias y ejecuta la app:
bash
npm install
ionic serve

---

## 🔗 Referencias oficiales utilizadas
📘 Your First App (Ionic)
https://ionicframework.com/docs/angular/your-first-app


📷 Taking Photos
https://ionicframework.com/docs/angular/your-first-app/taking-photos


💾 Saving Photos
https://ionicframework.com/docs/angular/your-first-app/saving-photoss


🔁 Loading Photos
https://ionicframework.com/docs/angular/your-first-app/loading-photo


📱 Adding Mobile Support
https://ionicframework.com/docs/angular/your-first-app/adding-mobile


📦 Autor
Desarrollado por Isaac Quinapallo
@isaacquinapallo

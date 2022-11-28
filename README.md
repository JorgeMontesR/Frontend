# Tasky

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/814d48608b544f66b17618e014f99931)](https://www.codacy.com/gh/wjfatuan/tasky-frontend/dashboard?utm_source=github.com&utm_medium=referral&utm_content=wjfatuan/tasky-frontend&utm_campaign=Badge_Grade)

Frontend (aplicación web) del proyecto Tasky del curso de Construcción de software. Esta aplicación está construida con [React](https://reactjs.org/) y [MUI](https://mui.com/core/). Permite la interacción con el API de Tasky ofreciendo distintas funcionalidades.

- [Requisitos](#requisitos)
- [Como contribuir a este proyecto](#como-contribuir-a-este-repositorio)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Compilar y ejecutar la aplicación](#compilar-y-ejecutar-su-aplicación)
- [Verificar la calidad del código](#verificar-la-calidad-del-código)

## Requisitos

Debe tener instaladas las siguientes herramientas:

- [Visual Studio Code](https://code.visualstudio.com/) (u otro editor de su preferencia)
- [NodeJS](https://nodejs.org/en/)


## Como contribuir a este repositorio

Una vez tenga asignada una tarea del proyecto en Trello, puede contribuir a este repositorio siguiendo estos pasos:

1. Cree un [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) de este repositorio en Github, esto dejará una copia en su cuenta de Github.

2. Clone su fork localmente.

   - Vaya a Github y navegue al fork de este repositorio.
   - Copie el link HTTPS a su fork.
   - Abra una terminal.
   - Cambiese al directorio de trabajo donde quiere dejar la copia del repositorio.
   - Escriba `git clone` y pegue la URL copiada anteriormente, por ejemplo:

    ```git
    git clone https://github.com/YOUR-USERNAME/tasky-frontend
    ```

   - Presione enter, esto creara la copia local del repositorio

3. Haga los cambios requeridos en la tarea y subalos usando el ciclo normal de Git (`git add`, `git commit`, y `git push`)

   - En cada commit asegurese de poner un comentario adecuado para el cambio, incluyendo el número de su tarea. Por ejemplo:

    ```git
    git commit -m "Tarea U03: Se modifica la pagina XXXX agregando el campo YYYY"
    ```

   - Revise el ejemplo `Dummy` si tiene dudas sobre como implementar una nueva pantalla. Este proyecto usa la libreria de componentes [MUI](https://mui.com/material-ui/getting-started/overview/), consulte su documentacion para mas informacion sobre como usarlos.

4. Haga una solicitud de cambios (también conocido como Pull Resuqet o PR) al repositorio principal. En este punto los cambios que hizo deben estar funcionando localmente.

   - Vaya a Github y navegue hasta el fork creado anteriormente.
   - Debería ver allí sus cambios.
   - De clic en **Contribuir** y luego en **Abrir solicitud de cambios**.
   - Allí verá las diferencias enre el repositorio destino y sus cambios.
   - Asegurese qde que no haya conflictos, de haber conflictos solucionelos y suba las correcciones.
   - Finalmente de clic en **Crear solicitud de cambios**.

5. Notifique la solicitud de cambios por el chat del grupo y pida que alguién los revise. Recuerde que la revisión hace parte de su calificación, así que ayude a sus compañeros revisando también sus solicitudes de cambios y aprobando cuando este satisfecho con el código.

> **Nota**: Asegurese, antes de iniciar su trabajo, de actualizar su copia local con el repositorio remoto. De esta manera puede evitar posibles conflictos de código con sus compañeros. Recuerde que la comunicación es clave, use el chat del grupo para validar posibles conflictos o cambios en el código. Es posible que alguién haya creado o deba crear clases que usted necesita.

## Estructura del proyecto

La siguiente tabla muestra la estructura de carpetas/paquetes del proyecto. **Asegurese de poner su código en la carpeta correcta**. Si duranta euna revisión de código encuentra que sus compañero cometio un error pongalo como comentario en su revisión de código.

Carpeta      | Descripción
------------ | ------------------------------------------------------
`public`     | Código fuente del contenido estático de la aplicación
`src`        | Código fuente de la aplicación
`src/layout` | Templates o layouts
`src/pages`  | Componentes con las páginas de la aplicación
`src/routes` | Componentes con las rutas disponibles en la aplicación
`src/App.js` | Componente principal de la aplicación

## Compilar y ejecutar su aplicación

Para probar de forma local su aplicación siga los siguientes pasos:

1. Asegurese de que su código no contiene errores.

2. Desde la terminal ejecute el siguiente comando para verificar que las pruebas funcionan:

  ```bash
  npm test
  ```

3. Desde la terminal ejecute el siguiente comando para inciar el servidor de forma local:

  ```bash
  npm start
  ```

4. Se abrirá la apliación en su navegador en la URL <http://localhost:3000>

## Verificar la calidad del código

Puede verificar distintos atributos de calidad del código fuente del proyecto:

- [Airbnb JS Guidelines](https://github.com/airbnb/javascript): Puede verificar el cumplimiento de estos estándares:

  1. Ejecute el siguiente comando para generar el reporte de linter:

    ```bash
    npx eslint
    ```

# Como agregar una página

Recuerde que en React todos los slementos gráficos son componentes, por lo que una nueva página es también un componente.

## 1\. Crear el componente de página

Vaya a la carpeta `src/pages` y cree un nuevo archivo `js` con el nombre de la p[agina que quiere crear. El contenido inicial de este archivo debe ser algo similar al siguiente:

```javascript
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

class MyPage extends React.PureComponent {
  render() {
    return (
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" color="inherit" component="h1">
            Mi página
        </Typography>
      </Box>
    );
  }
}

export default MyPage;
```

## 2\. Agregar su página en la lista de rutas

Vaya a la carpeta `src/routes` y edite el archivo `MainRoutes.js`. Agregue el siguiente elemento al arreglo de rutas `MainRoutes`:

```javascript
{
  path: 'mypage',
  element: <MyPage />,
},
```

Reemplace `mypage` con la ruta con la que esperar acceder su pagina (URL), e importe su componente de pagina al inicio del archivo.

## 3\. Enlace su pagina desde donde lo necesite

Ya puede entrar a la pagina usando la ruta asignada, asi que puede incluir esta ruta como destino de un menu, un link o un boton.

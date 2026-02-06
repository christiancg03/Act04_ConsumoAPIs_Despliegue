¿Dónde está desplegada cada parte? ¿Qué problemas has encontrado
durante el despliegue?

-La aplicación de escritorio ha sido empaquetada mediante Electron, generando un exe para su uso correcto.
-La aplicación web ha sido desplegada en Vercel.
-La api ha sido desplegada en Render, usando la base de datos de MongoDB Atlas.

-Durante el empaquetado en Electron surgieron errores de permisos, se solucionó
ejecutando la terminal con privilegios de administrador.

• Qué diferencias existen entre web y escritorio:
o ¿Qué ventajas tiene el despliegue web frente al de escritorio?

-El despliegue web cuenta con una actualización instantánea cuando se hace
cualquier cambio en el código y una accesibilidad universal, ya que no requiere ningún tipo de instalación.

o ¿Por qué Electron no sustituye a una web?

-Por su gran consumo de recursos, ya que consume más memoria RAM que una pestaña abierta de un navegador
o también el tener que descargar y ejecutar un instalador de unos cuantos MB puede ser
una barrera para el usuario.